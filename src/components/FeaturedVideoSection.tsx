import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FeaturedVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: customEase }}
          className="rounded-3xl overflow-hidden aspect-video relative w-full border border-white/5 shadow-2xl"
        >
          {/* Showcase Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0" />

          {/* Bottom Overlay Content */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            
            {/* Left: Approach Card */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full text-left">
              <span className="text-white/70 text-[10px] sm:text-xs tracking-widest uppercase mb-3 block font-semibold">
                Our Approach
              </span>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                We don't sell websites, funnels, or branding in isolation. We build digital systems engineered to turn attention into trust, and trust into revenue. Every pixel, every page, every campaign is designed around one outcome: measurable growth for your business.
              </p>
            </div>

            {/* Right: CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors w-fit md:mb-2 text-center"
            >
              Book a free audit
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
