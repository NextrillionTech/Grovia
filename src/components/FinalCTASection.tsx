import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Loader2, Globe, Mail, Check } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const FORM_SUBMIT_URL = import.meta.env.VITE_AUDIT_FORM_URL || '/api/submit-audit';

  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isFocusedUrl, setIsFocusedUrl] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  const customEase = [0.16, 1, 0.3, 1] as const;

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          website: url,
          email: email,
          _subject: `Grovia Labs Audit Request (Bottom CTA): ${url}`
        })
      });
      if (response.ok) {
        setIsSuccess(true);
        setUrl('');
        setEmail('');
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="final-cta" ref={sectionRef} className="bg-black py-28 md:py-40 px-6 relative overflow-hidden flex flex-col items-center border-t border-white/5 w-full">
      {/* Premium ambient glowing backing light behind the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none z-0" />
      
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center">
        
        {/* Large Translucent Glassmorphic Layout Card */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: customEase }}
          className="liquid-glass rounded-[2.5rem] border border-white/10 p-8 sm:p-16 md:p-20 relative overflow-hidden bg-gradient-to-b from-white/[0.02] via-transparent to-transparent shadow-3xl w-full flex flex-col items-center text-center"
        >
          {/* Subtle decoration inside the card */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/[0.015] rounded-full blur-[90px] pointer-events-none" />
          
          {/* Badge */}
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E1E0CC]/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 inline-block mb-6 select-none">
            Get Free Audit
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-white font-serif tracking-tight mb-5 font-normal max-w-2xl leading-tight select-none">
            Ready to build your growth engine?
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mb-12 font-normal">
            No pitch meetings, no pushy sales. We'll send you a detailed teardown highlighting 3 specific conversion wins you can fix this week.
          </p>

          {/* Form Container */}
          <div className="w-full max-w-2xl">
            {isSuccess ? (
              <div className="liquid-glass rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg animate-fade-in">
                <span className="text-emerald-400 font-medium text-sm md:text-base py-2 px-2 flex items-center justify-center gap-2">
                  ✓ Audit requested! We will email you the teardown within 24 hours.
                </span>
              </div>
            ) : isError ? (
              <div className="liquid-glass rounded-2xl py-5 px-6 text-center border border-rose-500/20 shadow-lg animate-fade-in">
                <span className="text-rose-400 font-medium text-sm md:text-base py-2 px-2">
                  ✕ Submission failed. Please try again or email us directly at contact.nextrilliontech@gmail.com
                </span>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row gap-4 p-2 bg-[#0C0C0C]/80 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/5 shadow-2xl w-full">
                
                {/* Inputs area */}
                <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 px-1">
                  
                  {/* Website URL Input */}
                  <div className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-full border transition-all duration-300 ${isFocusedUrl ? 'border-white/20 bg-white/[0.02]' : 'border-transparent bg-transparent'}`}>
                    <Globe className={`w-4 h-4 transition-colors duration-300 ${isFocusedUrl ? 'text-white/70' : 'text-white/30'}`} />
                    <input
                      type="url"
                      required
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onFocus={() => setIsFocusedUrl(true)}
                      onBlur={() => setIsFocusedUrl(false)}
                      disabled={isSubmitting}
                      placeholder={isSubmitting ? "Submitting..." : "Website URL (e.g., brand.com)"}
                      aria-label="Website URL for bottom free audit"
                      className="bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm py-1.5 flex-1 disabled:opacity-50 focus:ring-0 focus:outline-none"
                    />
                  </div>

                  {/* Divider line */}
                  <div className="hidden sm:block w-px h-6 bg-white/10" />

                  {/* Work Email Input */}
                  <div className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-full border transition-all duration-300 ${isFocusedEmail ? 'border-white/20 bg-white/[0.02]' : 'border-transparent bg-transparent'}`}>
                    <Mail className={`w-4 h-4 transition-colors duration-300 ${isFocusedEmail ? 'text-white/70' : 'text-white/30'}`} />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocusedEmail(true)}
                      onBlur={() => setIsFocusedEmail(false)}
                      disabled={isSubmitting}
                      placeholder={isSubmitting ? "Submitting..." : "Work email"}
                      aria-label="Email address for bottom free audit"
                      className="bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm py-1.5 flex-1 disabled:opacity-50 focus:ring-0 focus:outline-none"
                    />
                  </div>

                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black rounded-xl sm:rounded-full px-8 py-3.5 sm:py-3 hover:scale-[1.02] sm:hover:scale-105 active:scale-98 transition-all flex items-center justify-center gap-2 shrink-0 text-sm font-semibold disabled:opacity-75 disabled:hover:scale-100 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get my free audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Credibility Badges Checklist */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 text-white/50 text-xs font-normal select-none">
            <div className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-emerald-400/80" />
              <span>24-Hour Email Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-emerald-400/80" />
              <span>100% Free & Personalized</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4.5 h-4.5 text-emerald-400/80" />
              <span>Zero Sales Pressure</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
