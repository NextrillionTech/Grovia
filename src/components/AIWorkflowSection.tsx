import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUp } from './WordsPullUp';

export const AIWorkflowSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="process" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto w-full text-left">
      <div className="relative z-10 w-full">
        
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-white/70 text-sm tracking-widest uppercase mb-4 block font-semibold"
        >
          How we work
        </motion.span>

        {/* Heading */}
        <WordsPullUp
          text="Faster than agencies. Smarter than freelancers."
          className="text-4xl md:text-6xl text-white tracking-tight mb-6 font-normal max-w-3xl text-left flex-wrap"
        />

        {/* Subhead / Content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
          className="text-white/70 text-base md:text-lg max-w-2xl mb-16 leading-relaxed font-normal"
        >
          We use AI to compress timelines, cut costs, and ship work that traditionally takes weeks into days. But every line of code, every word of copy, every design decision is reviewed by a human who thinks like your customer.
        </motion.p>

        {/* Premium Workflow Visual Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
            className="liquid-glass rounded-3xl overflow-hidden group flex flex-col justify-between h-full border border-white/5 shadow-2xl"
          >
            {/* Video Area */}
            <div className="relative aspect-video w-full overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Card Body */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
              <div>
                <h3 className="text-white font-medium text-lg sm:text-xl mb-3 tracking-tight">
                  AI-Augmented Velocity
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  We utilize custom AI pipelines for competitive research, content wireframing, and code scaffolding. This slashes design and development cycles by 80%, shifting projects from conception to launch in days, not months.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: customEase }}
            className="liquid-glass rounded-3xl overflow-hidden group flex flex-col justify-between h-full border border-white/5 shadow-2xl"
          >
            {/* Video Area */}
            <div className="relative aspect-video w-full overflow-hidden">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Card Body */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
              <div>
                <h3 className="text-white font-medium text-lg sm:text-xl mb-3 tracking-tight">
                  Elite Human Quality Gate
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  AI handles the speed; senior humans handle the standard. Every line of React code is audited by a senior developer, every piece of copy is polished by an expert writer, and every funnel step is optimized by a conversion strategist.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
