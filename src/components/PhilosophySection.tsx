import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="why-grovia" ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl relative z-10">
        
        {/* Heading */}
        <h2 className="sr-only">Why x Grovia</h2>
        <WordsPullUpMultiStyle
          segments={[
            { text: "Why ", className: "text-white" },
            { text: "x ", className: "italic font-serif text-white/40" },
            { text: "Grovia", className: "text-white" }
          ]}
          containerClassName="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-16 md:mb-24 font-normal"
        />

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Process Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: customEase }}
            className="rounded-3xl overflow-hidden aspect-[4/3] relative w-full border border-white/5 shadow-2xl"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Key Philosophy Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: customEase }}
            className="flex flex-col text-left"
          >
            {/* Block 1 */}
            <div className="flex flex-col items-start">
              <span className="text-white/70 text-xs tracking-widest uppercase mb-4 block font-semibold">
                Agency brains, freelancer rates
              </span>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-normal">
                Most agencies charge ₹2-5 lakhs for a website and disappear after launch. Most freelancers are cheap but lack the strategy, systems, and accountability that turn a website into a growth engine. Grovia is built differently. We bring senior-level strategy, design, and execution without the bloated retainers or junior handoffs you get from traditional agencies.
              </p>
            </div>

            {/* Subtle separator */}
            <div className="w-full h-px bg-white/10 my-8" />

            {/* Block 2 */}
            <div className="flex flex-col items-start">
              <span className="text-white/70 text-xs tracking-widest uppercase mb-4 block font-semibold">
                Built for outcomes, not outputs
              </span>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-normal">
                We don't measure success in deliverables, we measure it in leads generated, customers acquired, and revenue influenced. Every project we take on is tied to a business outcome. If we can't move the needle, we tell you before we start, not after the invoice.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
