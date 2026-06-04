# Grovia Labs — Marketing Plan Research Record

**Date:** 2026-06-04
**Author:** Fractional CMO

## Company snapshot
- **One-sentence description:** Grovia Labs is a conversion-focused landing page agency and fractional marketing team building custom websites, funnels, and brand systems for B2B startups, schools, and coaching brands in India.
- **Stage:** Bootstrapped / Pre-seed (early-stage agency).
- **Product status:** GA (fully live landing page taking audit submissions and booking call inquiries).

## ICP
- **Primary ICP:** Founders, business owners, and marketing directors at Indian B2B startups, private schools, sports academies, coaching centers, and personal brands (especially in Bangalore, Gurugram, and Delhi-NCR).
- **Stated vs. actual problem:**
  - *Stated:* "We need a faster website or more leads/traffic."
  - *Actual:* They need a high-converting digital system that turns expensive ad traffic or organic attention into high-intent scheduled calls, sales, or admissions, without the bloated retainer overhead and junior staffing of traditional B2B marketing agencies.
- **Demographics / firmographics:** Small-to-medium businesses in India with ₹15K–₹50K web design budgets and ₹20K+/mo growth marketing retainer capacities.

## Funnel state today
- **Current numbers:** Early organic traffic. Traffic is captured via two primary routes:
  1. The free audit/teardown request form (URLs and emails sent directly to backend handlers).
  2. Direct scheduling calls via Google Calendar link in the header, footer, and services overlays.
- **Funnel shape:** Mid-to-bottom-funnel optimization is strong. The site converts high-intent visitors well, but top-of-funnel traffic is the primary bottleneck.
- **Biggest leak:** Lack of scaled top-of-funnel traffic. The site requires more consistent visitor flow from high-intent B2B and local search queries.

## Funding
- **Total raised:** Bootstrapped.
- **Current round status:** None. Self-sustained from service cash flow.
- **Runway:** Infinite (low-overhead agency model).

## Team
- **Founder:** Shubham Taneja (owns full product strategy, client engineering, visual design, and copywriting).
- **Headcount/Gaps:** Solo operator utilizing senior contract designers, copywriters, and developers to scale delivery as client retainers expand.
- **Owner Shape:** π-shaped (Deep in client-side engineering, B2B product marketing, and conversion optimization).

## Current marketing budget
- **$/mo total:** ~₹5,000/mo (low-overhead software licenses and hosting).
- **Breakdown:** 100% organic channels, zero active paid ad spend.
- **Tier mapping:** Bootstrapped / Pre-seed ($0–$100/mo).
- **Blended CAC:** Very low, primarily founder time.

## Channels currently active
- **Acquisition (TOFU):** Organic search, founder-led social (LinkedIn, Twitter/X), local B2B word-of-mouth.
- **Activation (MOFU):** High-speed interactive Vite landing page, services detailed expanders, 24-hour email delivery of personalized audits.
- **Retention (BOFU):** Direct follow-ups via email, client reporting, structured onboarding.
- **Referral:** Direct client referrals.
- **Revenue:** One-time project fees (₹15,000–₹50,000), monthly retainer services (₹20,000/mo+).

## Already done (acknowledge in plan)
- Built a premium glassmorphic landing page with smooth Framer Motion animations.
- Cropped and integrated high-quality custom transparent wordmark branding.
- Setup a fully asynchronous Formspree/Web3Forms backend handler for free audit requests.
- Integrated a direct Google Calendar scheduler (`https://calendar.app.google/Xt6BvaNnmey3nJKV8`) to bypass booking friction.
- Setup LocalBusiness and FAQ structured data schema in `index.html`.

## In-flight and stuck
- **SEO foundation:** Robots.txt and sitemap.xml generated and linked, but search engines need to index the new pages.
- **Traffic generation:** Social channels are active but lack structured weekly content calendar templates.

## Strategic posture
- **Founder's top priority:** Secure 3–5 recurring retainer clients (₹20,000/mo+) for landing page optimization and growth marketing.
- **Founder's top de-prioritization:** Spent paid advertising tests before establishing a predictable organic or warm outbound lead pipeline.
- **Constraints:** Solo-founder execution limits time. Operations must leverage AI workflows and clear templates to automate boilerplate work.

## Current-state rubric scores
*Scored from materials and landing page architecture.*

| # | Section | Score | Note |
|---|---|---|---|
| 1 | Positioning | 4 | "Agency brains, freelancer rates" is highly compelling and clear. |
| 2 | Customer research | 2 | Good intuition; lacks formal recorded interview transcripts. |
| 3 | Homepage | 4 | High-speed, high-converting, mobile-friendly, beautiful. |
| 4 | Sales / product pages | 2 | No individual pages; services are kept in modal overlays. |
| 5 | Conversion pages | 3 | Audit requests are fully integrated, but lack search-optimized landing pages. |
| 6 | Competitor comparison | 0 | No competitor VS content. |
| 7 | Resources / content | 1 | No active blog or B2B marketing guides. |
| 8 | Onboarding | 3 | Teardown request forms are simple and lead to 24-hour delivery. |
| 9 | Email lifecycle | 2 | Manual teardowns sent by email; no automated nurture sequences. |
| 10 | Sales material | 3 | Case studies show outcomes, but lack standard PDF pitch slides. |
| 11 | Messaging | 4 | Highly professional, direct, and outcome-oriented. |
| 12 | Pricing | 3 | Packages are transparent in FAQs, but retainers could be expanded. |
| 13 | CRO | 2 | Layout has strong micro-interactions, but no active A/B tests. |
| 14 | GTM launches | 2 | Soft local deployment. |
| 15 | Ads (paid) | 0 | N/A — Stage-appropriate zero ad spend. |
| 16 | SEO | 2 | Good schema markup; domain is new and lacks backlinks/domain rating. |
| 17 | Internationalization | 2 | Focus is on India start-ups/coaches, though English is global-ready. |

**Total Score: 39 / 85 (45.8%)**

**Shape Interpretation:**
Grovia possesses strong strategic foundations in positioning, homepage conversion design, and messaging. However, its distribution mechanics (SEO, resources, competitor comparisons) and downstream lead nurture systems (email lifecycles, automated outreach) are the primary areas holding back scale. The plan will heavily prioritize **Acquisition (SEO pillars + outbound)** and **Activation/Revenue (retainer packages + case studies)**.

## Materials read
- `src/components/AboutSection.tsx` (reviewed founder story)
- `src/components/Hero.tsx` (reviewed navbar and audit forms)
- `marketing_audit_report.md` (read previous audit results, target B2B keywords, and code fixes)
