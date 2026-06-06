import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Globe, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

const Instagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface HeroProps {
  onNavigate?: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const fadeStateRef = useRef<'in' | 'out' | null>(null);

  const startFade = (toOpacity: number, duration: number, onComplete?: () => void) => {
    const video = videoRef.current;
    if (!video) return;

    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }

    const startOpacity = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (toOpacity - startOpacity) * progress;
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(step);
      } else {
        animationFrameIdRef.current = null;
        fadeStateRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const handleCanPlay = () => {
      if (fadeStateRef.current === 'in') return;
      fadeStateRef.current = 'in';
      video.play().catch(() => { });
      startFade(1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && fadeStateRef.current !== 'out') {
        fadeStateRef.current = 'out';
        startFade(0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      fadeStateRef.current = null;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      setTimeout(() => {
        video.currentTime = 0;
        video.play()
          .then(() => {
            fadeStateRef.current = 'in';
            startFade(1, 500);
          })
          .catch(() => { });
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 3) {
      video.play().catch(() => { });
      fadeStateRef.current = 'in';
      startFade(1, 500);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const FORM_SUBMIT_URL = import.meta.env.VITE_AUDIT_FORM_URL || '/api/submit-audit';

  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [modalEmail, setModalEmail] = useState('');
  const [isSubmittingModal, setIsSubmittingModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);

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
          _subject: `Grovia Labs Audit Request: ${url}`
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

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingModal(true);
    setIsErrorModal(false);
    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          website: modalUrl,
          email: modalEmail,
          _subject: `Grovia Labs Audit Request (Modal): ${modalUrl}`
        })
      });
      if (response.ok) {
        setIsSuccessModal(true);
        setModalUrl('');
        setModalEmail('');
        setTimeout(() => {
          setIsSuccessModal(false);
          setIsModalOpen(false);
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setIsErrorModal(true);
      setTimeout(() => setIsErrorModal(false), 5000);
    } finally {
      setIsSubmittingModal(false);
    }
  };

  return (
    <section className="min-h-screen w-full bg-black relative flex flex-col justify-between overflow-hidden">

      {/* Skip to Content Accessibility Link */}
      <a href="#main" className="sr-only focus:not-sr-only absolute top-4 left-4 z-50 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold">
        Skip to content
      </a>

      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
      />

      {/* Dark Ambient Gradient Shield */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black pointer-events-none z-10" />

      {/* Navbar */}
      <header className="relative z-20 w-full px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between !overflow-visible">

          {/* Left Side: Monogram + Wordmark & Links */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="Grovia" className="h-7 w-auto object-contain" />
            </a>

            <nav className="hidden md:flex items-center gap-8 ml-10">
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              <div className="relative group py-2">
                <button className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer focus:outline-none">
                  Solutions
                  <svg className="w-3 h-3 text-white/50 group-hover:text-white transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-1.5 w-48 rounded-xl bg-black/95 backdrop-blur-md border border-white/10 p-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 shadow-2xl flex flex-col gap-0.5">
                  <button
                    onClick={() => onNavigate?.('/saas')}
                    className="text-left text-xs text-white/70 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg transition-colors cursor-pointer bg-transparent border-none w-full"
                  >
                    B2B SaaS
                  </button>
                  <button
                    onClick={() => onNavigate?.('/schools')}
                    className="text-left text-xs text-white/70 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg transition-colors cursor-pointer bg-transparent border-none w-full"
                  >
                    Schools
                  </button>
                  <button
                    onClick={() => onNavigate?.('/coaching')}
                    className="text-left text-xs text-white/70 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg transition-colors cursor-pointer bg-transparent border-none w-full"
                  >
                    Coaching
                  </button>
                </div>
              </div>
              <a href="#why-grovia" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Why Grovia</a>
              <a href="#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</a>
              <a href="#work" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Work</a>
              <a href="#process" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Process</a>
              <a href="#faq" className="text-white/80 hover:text-white text-sm font-medium transition-colors">FAQ</a>
            </nav>
          </div>

          {/* Right Side: CTA Actions */}
          <div className="flex items-center gap-6">
            <a
              href="https://calendar.app.google/Xt6BvaNnmey3nJKV8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 text-sm font-medium transition-colors"
            >
              Book a call
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Get free audit
            </button>
          </div>

        </div>
      </header>

      {/* Hero Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[5%] max-w-5xl mx-auto w-full">

        {/* Animated Heading */}
        <h1 className="sr-only">Strategy that converts.</h1>
        <WordsPullUpMultiStyle
          segments={[
            { text: "Strategy ", className: "text-white font-serif" },
            { text: "that ", className: "text-white font-serif" },
            { text: "converts.", className: "italic font-serif text-white/60" }
          ]}
          containerClassName="text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none font-serif font-normal select-none sm:whitespace-nowrap"
        />

        {/* Subheadline Paragraph */}
        <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
          Agency brains. Freelancer rates. We build websites, lead funnels, and brand systems that turn visitors into customers — without the bloated retainers or junior handoffs.
        </p>

        {/* Website & Email Audit Form */}
        <form onSubmit={handleAuditSubmit} className="max-w-2xl w-full mt-10 px-4 sm:px-0">
          <div className="w-full">
            {isSuccess ? (
              <div className="liquid-glass rounded-full py-4 px-6 text-center border border-white/10 shadow-lg">
                <span className="text-emerald-400 font-medium text-sm md:text-base py-2 px-2 flex-1 text-center animate-fade-in">
                  ✓ Audit requested! We'll email you in 24 hours.
                </span>
              </div>
            ) : isError ? (
              <div className="liquid-glass rounded-full py-4 px-6 text-center border border-rose-500/20 shadow-lg">
                <span className="text-rose-400 font-medium text-sm md:text-base py-2 px-2 flex-1 text-center animate-fade-in">
                  ✕ Error. Please email contact.nextrilliontech@gmail.com directly.
                </span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-[#0F0F0F]/45 backdrop-blur-md rounded-2xl sm:rounded-full border border-white/5 shadow-2xl">
                <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 px-2">
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={isSubmitting}
                    placeholder={isSubmitting ? "Submitting..." : "Website URL (e.g., brand.com)"}
                    aria-label="Website URL for free audit"
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm md:text-base py-3 sm:py-1 px-3 flex-1 disabled:opacity-50 focus:ring-0 focus:outline-none"
                  />
                  <div className="hidden sm:block w-px h-6 bg-white/15" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    placeholder={isSubmitting ? "Submitting..." : "Work email"}
                    aria-label="Email address for free audit"
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 text-sm md:text-base py-3 sm:py-1 px-3 flex-1 disabled:opacity-50 focus:ring-0 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black rounded-xl sm:rounded-full px-6 py-3.5 sm:py-2.5 hover:scale-102 sm:hover:scale-105 active:scale-98 transition-all flex items-center justify-center gap-1.5 shrink-0 text-sm font-semibold disabled:opacity-75 disabled:hover:scale-100 cursor-pointer"
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
              </div>
            )}
          </div>
        </form>

        {/* Subtitle */}
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-lg mt-6 px-4">
          Get a free 15-minute audit. We'll send you 3 specific things you can fix this week to win more leads and customers.
        </p>

      </div>

      {/* Manifesto Button (Secondary CTA - moved above social icons) */}
      <div className="relative z-10 flex justify-center pb-4">
        <a
          href="#how-we-ship"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          See how we work
        </a>
      </div>

      {/* Social Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="https://instagram.com/grovialabs"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/grovialabs"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://grovialabs.in"
          target="_blank"
          rel="noopener noreferrer"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
        >
          <Globe className="w-5 h-5" />
        </a>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass rounded-3xl p-8 max-w-lg w-full relative border border-white/10 bg-[#0A0A0A] shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Info */}
              <div className="text-left mb-6">
                <h3 className="text-white text-2xl font-serif tracking-tight font-normal mb-2">
                  Get your free website audit
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Get a free 15-minute audit. We'll send you 3 specific things you can fix this week to win more leads and customers.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleModalSubmit} className="w-full flex flex-col gap-4">
                {isSuccessModal ? (
                  <div className="liquid-glass rounded-2xl py-6 px-4 text-center border border-white/5">
                    <span className="text-emerald-400 font-medium text-sm animate-fade-in block">
                      ✓ Audit requested!
                    </span>
                    <span className="text-white/60 text-xs mt-1 block">
                      We will email you in 24 hours.
                    </span>
                  </div>
                ) : isErrorModal ? (
                  <div className="liquid-glass rounded-2xl py-6 px-4 text-center border border-rose-500/20">
                    <span className="text-rose-400 font-medium text-sm animate-fade-in block">
                      ✕ Submission error.
                    </span>
                    <span className="text-white/60 text-xs mt-1 block">
                      Please email contact.nextrilliontech@gmail.com directly.
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col gap-3">
                      <div className="liquid-glass rounded-xl px-4 py-3 border border-white/5 flex items-center">
                        <input
                          type="url"
                          required
                          value={modalUrl}
                          onChange={(e) => setModalUrl(e.target.value)}
                          disabled={isSubmittingModal}
                          placeholder={isSubmittingModal ? "Submitting..." : "Website URL (e.g., brand.com)"}
                          aria-label="Website URL for free audit"
                          className="bg-transparent border-none outline-none text-white placeholder:text-white/40 flex-1 text-sm disabled:opacity-50 focus:ring-0 focus:outline-none"
                        />
                      </div>
                      <div className="liquid-glass rounded-xl px-4 py-3 border border-white/5 flex items-center">
                        <input
                          type="email"
                          required
                          value={modalEmail}
                          onChange={(e) => setModalEmail(e.target.value)}
                          disabled={isSubmittingModal}
                          placeholder={isSubmittingModal ? "Submitting..." : "Work email"}
                          aria-label="Email address for free audit"
                          className="bg-transparent border-none outline-none text-white placeholder:text-white/40 flex-1 text-sm disabled:opacity-50 focus:ring-0 focus:outline-none"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmittingModal}
                      className="bg-white text-black rounded-xl py-3.5 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-1.5 text-sm font-semibold disabled:opacity-75 disabled:hover:scale-100 cursor-pointer"
                    >
                      {isSubmittingModal ? (
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
                  </>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
