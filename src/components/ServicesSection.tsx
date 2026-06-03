import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Clock, Check } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface Card {
  videoSrc: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string[];
  platforms: string[];
  timeline: string;
}

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const customEase = [0.16, 1, 0.3, 1] as const;

  const cards: Card[] = [
    {
      videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
      tag: "Web & Funnels",
      title: "High-converting landing pages & websites",
      description: "Custom-designed, fast-loading, and mobile-first landing pages engineered for conversion. As a conversion-focused landing page design agency in India, we build custom sales funnels that turn searchers into buyers. From ₹15,000 per project (includes copy, strategy, and SEO optimization).",
      deliverables: [
        "High-converting custom UX/UI layout",
        "Landing page copy aligned with B2B/consumer psychology",
        "Next.js / Vite build (fully responsive, accessible)",
        "Core Web Vitals audit & LCP optimization (LCP < 1.2s)",
        "On-page SEO setup (metadata, semantic structures)"
      ],
      platforms: ["Figma", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
      timeline: "7 - 14 Days"
    },
    {
      videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
      tag: "Brand & Growth",
      title: "Brand identity systems & content",
      description: "Logo design, modern typography, comprehensive visual identity systems, and high-quality organic content structures. We build consistent brand guidelines that make your startup look premium and command market trust. Strategy-led branding packages start at ₹20,000 per month.",
      deliverables: [
        "Vector logo files & guidelines (monograms, lockups)",
        "Modern color typography and palette styling system",
        "Social media kit (templates, post grids, organic layouts)",
        "Brand assets for print & digital pitch decks",
        "Customer avatar and messaging guidelines"
      ],
      platforms: ["Figma", "Adobe Illustrator", "Canva", "Notion AI"],
      timeline: "14 - 21 Days"
    },
    {
      videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
      tag: "Ads & Automation",
      title: "Fractional marketing & ad systems",
      description: "Your on-demand growth squad. We manage Google, Meta, and LinkedIn ads end-to-end, coupled with automated lead-nurturing workflows (Zapier, Make, n8n) to capture and warm up prospects. Embed a fractional marketing team to scale your pipeline. Retainers start at ₹25,000 per month.",
      deliverables: [
        "End-to-end Google Ads & Meta Ads campaign set up",
        "Dynamic workflow triggers (Zapier, Make, n8n)",
        "High-quality ad creatives and copywriting",
        "CRM lead-routing & instant Slack/Email alerts",
        "Custom interactive reporting dashboard (Looker Studio)"
      ],
      platforms: ["Meta Ads Manager", "Google Ads", "Zapier", "Make", "HubSpot"],
      timeline: "30-Day Set-up & Ongoing"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden flex flex-col items-center relative">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none z-0" />

      <div className="w-full max-w-6xl relative z-10">

        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: customEase }}
          className="flex justify-between items-end w-full mb-12"
        >
          <WordsPullUp
            text="What we build"
            className="text-3xl md:text-5xl text-white tracking-tight font-normal flex-wrap"
          />
          <span className="text-white/70 text-sm tracking-wider uppercase hidden sm:block mb-1 font-semibold">
            Our services
          </span>
        </motion.div>

        {/* Three-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {cards.map((card, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: customEase }}
                onClick={() => setSelectedCard(idx)}
                className="liquid-glass rounded-3xl overflow-hidden group flex flex-col justify-between h-full border border-white/5 shadow-2xl cursor-pointer hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
              >
                {/* Video Area */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <video
                    src={card.videoSrc}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Card top/bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
                  <div>
                    {/* Tag Row */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="uppercase tracking-widest text-white/70 text-xs font-semibold">
                        {card.tag}
                      </span>
                      <div className="liquid-glass rounded-full p-2 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-medium">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Expander Overlay */}
      <AnimatePresence>
        {selectedCard !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: customEase }}
              className="liquid-glass rounded-3xl p-6 md:p-8 max-w-2xl w-full relative border border-white/10 bg-[#0A0A0A] shadow-2xl z-10 flex flex-col text-left max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Tag & Title */}
              <div className="mb-6 pr-8">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E1E0CC]/80 bg-white/5 px-3 py-1 rounded-full border border-white/5 inline-block mb-3">
                  {cards[selectedCard].tag}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-serif tracking-tight leading-snug">
                  {cards[selectedCard].title}
                </h3>
              </div>

              {/* Details grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Deliverables */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-white font-medium text-sm border-b border-white/10 pb-2">
                    Key Deliverables
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {cards[selectedCard].deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-white/70">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Platforms & Timelines */}
                <div className="flex flex-col gap-6">
                  {/* Timeline */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-white font-medium text-sm border-b border-white/10 pb-2">
                      Typical Timeline
                    </h4>
                    <div className="flex items-center gap-2.5 text-white/70 mt-1">
                      <Clock className="w-4.5 h-4.5 text-white/40" />
                      <span className="text-sm font-semibold tracking-wide">
                        {cards[selectedCard].timeline}
                      </span>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-white font-medium text-sm border-b border-white/10 pb-2">
                      Tools & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {cards[selectedCard].platforms.map((platform, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 text-white/70 text-xs px-2.5 py-1 rounded-md border border-white/5"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA button */}
              <div className="border-t border-white/5 pt-6 flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="px-5 py-2.5 rounded-full text-white/60 hover:text-white text-sm font-medium transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedCard(null)}
                  className="bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:scale-[1.02] active:scale-98 transition-all flex items-center gap-1.5"
                >
                  <span>Request a project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
