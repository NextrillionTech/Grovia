import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Cpu, Target } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

export const WhyGroviaSection: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: customEase
      }
    }
  };
  const cardsData = [
    {
      Icon: Sparkles,
      title: "Agency strategy, freelancer rates",
      body: "We cut out the account executives, fancy offices, and administrative overhead of traditional agencies. You pay directly for senior strategic brains and clean engineering—at fractional rates that actually make sense."
    },
    {
      Icon: Cpu,
      title: "AI-accelerated, human-validated",
      body: "We run custom AI-assisted workflows to compress research, boilerplate code, and layout design timelines by 80%. Then, our senior designers, engineers, and copywriters audit every single line to ensure it is bespoke, high-quality, and ready to scale."
    },
    {
      Icon: Target,
      title: "Built for revenue, not vanity metrics",
      body: "We measure success by pipeline generated, conversions achieved, and revenue influenced—not by deliverable quantity or meaningless slide-decks. If a campaign or feature doesn't directly grow your business, we iterate it or cut it."
    }
  ];  return (
    <section ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto w-full">
      <div className="relative z-10 w-full">
        {/* Header Container */}
        <div className="text-left mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-white/70 text-sm tracking-widest uppercase mb-4 block font-semibold"
          >
            Why Grovia
          </motion.span>
          <WordsPullUp
            text="Three reasons Indian businesses pick Grovia over the other options."
            className="text-4xl md:text-6xl text-white tracking-tight leading-tight font-normal max-w-3xl text-left flex-wrap"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full"
        >
          {cardsData.map((card, idx) => {
            const Icon = card.Icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="liquid-glass rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col items-start text-left hover:bg-white/[0.02] transition-colors duration-300 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 shrink-0">
                  <Icon className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
