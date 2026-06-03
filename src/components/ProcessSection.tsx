import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUp } from './WordsPullUp';

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: customEase
      }
    }
  };

  const stepsData = [
    {
      num: "01",
      title: "Free audit",
      body: "You share your website or funnel. We send a detailed teardown highlighting 3 quick wins. No pitch, no commitment."
    },
    {
      num: "02",
      title: "Strategy call",
      body: "30-min Zoom to align on goals, audience, budget, and timeline. You walk away with a clear scope, even if you don't hire us."
    },
    {
      num: "03",
      title: "Build & launch",
      body: "We design, write, and build in 2-3 weeks. You get daily updates, one round of revisions, and a launch checklist."
    },
    {
      num: "04",
      title: "Grow & iterate",
      body: "Optional monthly retainer for content, ads, and optimization. We report on leads, conversions, and revenue — not vanity metrics."
    }
  ];

  return (
    <section id="how-we-ship" ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto w-full text-left">
      <div className="relative z-10 w-full">
        {/* Header Container */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-white/70 text-sm tracking-widest uppercase mb-4 block font-semibold"
          >
            How we ship
          </motion.span>
          <WordsPullUp
            text="From first call to live in 2-3 weeks."
            className="text-4xl md:text-6xl text-white tracking-tight leading-tight font-normal max-w-3xl text-left flex-wrap"
          />
        </div>

        {/* Steps Horizontal Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full"
        >
          {stepsData.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="flex flex-col items-start border-l border-white/10 pl-6 md:pl-0 md:border-l-0 md:border-t md:pt-8"
            >
              {/* Step Number */}
              <span className="text-white/20 text-5xl sm:text-6xl font-light mb-4 block select-none">
                {step.num}
              </span>
              {/* Step Title */}
              <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-2">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
