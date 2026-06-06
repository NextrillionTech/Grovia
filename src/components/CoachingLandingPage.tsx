import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Loader2, Check, UserCheck, ShieldAlert, Award, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export const CoachingLandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const FORM_SUBMIT_URL = import.meta.env.VITE_AUDIT_FORM_URL || '/api/submit-audit';

  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFocusedUrl, setIsFocusedUrl] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          _subject: `Grovia Labs Audit Request (Coaching Page): ${url}`
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

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="w-full min-h-screen bg-black relative z-10 px-6 py-12 flex flex-col justify-between overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      {/* Header / Nav Back */}
      <header className="max-w-5xl mx-auto w-full relative z-20 mb-12 sm:mb-20">
        <div className="liquid-glass rounded-full px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </button>
          <img src="/logo.png" alt="Grovia" className="h-6 w-auto object-contain" />
        </div>
      </header>

      {/* Hero Content Area */}
      <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center relative z-10 mb-20">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-[10px] font-semibold uppercase tracking-widest text-[#E1E0CC]/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 inline-block mb-6 select-none"
        >
          Funnels for Coaching & Personal Brands
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-tight text-white mb-6 font-normal"
        >
          Funnels designed to pre-qualify <span className="italic text-white/60">high-ticket leads.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
          className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop chasing unqualified, low-budget calls. We build structured personal brand funnels that filter and pre-qualify applicants before they ever book a Google Meet strategy session with you.
        </motion.p>

        {/* Audit Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
          className="w-full max-w-2xl"
        >
          {isSuccess ? (
            <div className="liquid-glass rounded-2xl py-5 px-6 text-center border border-white/10 shadow-lg animate-fade-in">
              <span className="text-emerald-400 font-medium text-sm md:text-base py-2 px-2 flex items-center justify-center gap-2">
                ✓ Funnel Audit requested! We will email you the teardown within 24 hours.
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
              <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 px-1">
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
                    placeholder="Current Funnel URL"
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm py-1.5 flex-1 disabled:opacity-50 focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/10" />
                <div className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-full border transition-all duration-300 ${isFocusedEmail ? 'border-white/20 bg-white/[0.02]' : 'border-transparent bg-transparent'}`}>
                  <UserCheck className={`w-4 h-4 transition-colors duration-300 ${isFocusedEmail ? 'text-white/70' : 'text-white/30'}`} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocusedEmail(true)}
                    onBlur={() => setIsFocusedEmail(false)}
                    disabled={isSubmitting}
                    placeholder="Work Email"
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm py-1.5 flex-1 disabled:opacity-50 focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black rounded-xl sm:rounded-full px-8 py-3.5 sm:py-3 hover:scale-[1.02] sm:hover:scale-105 active:scale-98 transition-all flex items-center justify-center gap-2 shrink-0 text-sm font-semibold disabled:opacity-75 disabled:hover:scale-100 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Get Funnel Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Small checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8 text-white/50 text-xs font-normal select-none"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400/80" />
            <span>Eliminate low-budget tire kickers</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400/80" />
            <span>Structured qualifying intake forms</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400/80" />
            <span>High-speed personal brand layouts</span>
          </div>
        </motion.div>

        {/* Grid Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-20 sm:mt-28">
          <div className="liquid-glass border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center">
            <Award className="w-8 h-8 text-yellow-400/80 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-2">₹12L+</h3>
            <p className="text-xs text-white/60">Qualified sales pipeline generated</p>
          </div>
          <div className="liquid-glass border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center">
            <UserCheck className="w-8 h-8 text-emerald-400/80 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-2">35%</h3>
            <p className="text-xs text-white/60">Increase in lead-to-call quality ratio</p>
          </div>
          <div className="liquid-glass border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center">
            <ShieldAlert className="w-8 h-8 text-blue-400/80 mb-4" />
            <h3 className="text-3xl font-semibold text-white mb-2">Zero</h3>
            <p className="text-xs text-white/60">Time wasted on unqualified leads</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center relative z-20 border-t border-white/5 pt-6 text-white/40 text-xs">
        <p>&copy; {new Date().getFullYear()} Grovia Labs. Engineered for High-Ticket Coaching.</p>
      </footer>
    </div>
  );
};
