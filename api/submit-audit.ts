import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { website, email } = req.body;

  if (!website || !email) {
    return res.status(400).json({ error: 'Missing website or email' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FORMSPREE_URL = process.env.FORMSPREE_URL;
  const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'contact.nextrilliontech@gmail.com';

  console.log(`Received audit request for URL: ${website}, Email: ${email}`);

  let emailSent = false;
  let forwardedToFormspree = false;

  // 1. If Resend is configured, send welcome and notification emails
  if (RESEND_API_KEY) {
    try {
      // Use Resend's default onboarding domain unless a custom domain is verified
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

      // Send welcome email to lead
      const welcomeRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: `Grovia Labs <${fromEmail}>`,
          to: email,
          subject: 'Your Grovia website audit is requested (24-hour delivery)',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111; line-height: 1.6;">
              <h2 style="font-weight: normal; font-size: 20px; color: #000; margin-bottom: 20px;">Your website audit is requested</h2>
              
              <p>Hi there,</p>
              
              <p>Thanks for requesting a free landing page audit/teardown for your website: <strong>${website}</strong>.</p>
              
              <p>My name is Shubham Taneja, founder of Grovia Labs. I'm already diving into your site to analyze its load times (LCP), copywriting structure, and conversion mechanics.</p>
              
              <h3 style="font-weight: normal; font-size: 16px; color: #000; margin-top: 25px; margin-bottom: 10px;">What to expect next:</h3>
              <ul style="padding-left: 20px; margin-bottom: 25px;">
                <li>I will personally analyze your website and prepare a detailed, written 3-point teardown report.</li>
                <li>You will receive a Notion-shareable link directly in your inbox within 24 hours.</li>
                <li>There are no pushy sales pitches or follow-up calls required—just 3 concrete wins you can implement immediately to increase conversions.</li>
              </ul>
              
              <p>In the meantime, feel free to check out some of our recent client success stories and see how we help B2B startups, schools, and coaching brands scale their conversion systems:</p>
              <p><a href="https://grovia-studio.vercel.app/#work" style="color: #000; font-weight: bold; text-decoration: underline;">View Selected Work Case Studies</a></p>
              
              <p>If you have any questions or want to share specific conversion challenges you are facing, just reply directly to this email.</p>
              
              <br />
              <p style="margin-top: 30px; border-t: 1px solid #eee; padding-top: 20px; font-size: 13px; color: #666;">
                Best,<br />
                <strong>Shubham Taneja</strong><br />
                Founder, Grovia Labs<br />
                <a href="mailto:${NOTIFICATION_EMAIL}" style="color: #666;">${NOTIFICATION_EMAIL}</a>
              </p>
            </div>
          `
        })
      });

      if (!welcomeRes.ok) {
        const errText = await welcomeRes.text();
        console.error('Failed to send welcome email via Resend:', errText);
      } else {
        console.log('Welcome email successfully sent to lead.');
      }

      // Send notification email to Shubham
      const notifyRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: `Grovia Labs Alerts <${fromEmail}>`,
          to: NOTIFICATION_EMAIL,
          subject: `🚨 New Audit Request: ${website}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111; line-height: 1.6;">
              <h2 style="color: #d32f2f; font-size: 20px; margin-bottom: 20px;">New Website Audit Requested</h2>
              <p><strong>Website URL:</strong> <a href="${website}" target="_blank">${website}</a></p>
              <p><strong>Lead Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p>Please deliver the teardown report within 24 hours.</p>
            </div>
          `
        })
      });

      if (!notifyRes.ok) {
        const errText = await notifyRes.text();
        console.error('Failed to send notification email via Resend:', errText);
      } else {
        console.log('Notification email successfully sent to admin.');
        emailSent = true;
      }
    } catch (e) {
      console.error('Error executing Resend email logic:', e);
    }
  }

  // 2. If Resend is NOT configured, or fails, fallback to Formspree if configured
  if (!emailSent && FORMSPREE_URL) {
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          website,
          email,
          _subject: `Grovia Labs Audit Request: ${website}`
        })
      });

      if (response.ok) {
        console.log('Submission successfully forwarded to Formspree.');
        forwardedToFormspree = true;
      } else {
        console.error('Formspree forwarding failed with status:', response.status);
      }
    } catch (e) {
      console.error('Error forwarding to Formspree:', e);
    }
  }

  // 3. Return response to frontend
  if (emailSent || forwardedToFormspree) {
    return res.status(200).json({ success: true, message: 'Audit request successfully captured' });
  } else {
    // If no real endpoint processed it (e.g. local dev without keys), return a mock success response so local development form flow doesn't fail.
    return res.status(200).json({
      success: true,
      message: 'Captured (development mock mode). Configure RESEND_API_KEY or FORMSPREE_URL env variables to wire live emails.',
      devMode: true
    });
  }
}
