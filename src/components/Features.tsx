import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section id="services" className="min-h-screen bg-black py-24 relative overflow-hidden flex flex-col justify-center items-center w-full">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      {/* Header Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-16 flex flex-col items-center text-center gap-2.5 z-10">
        <WordsPullUpMultiStyle
          segments={[{ text: "Digital systems for visionary businesses.", className: "text-[#E1E0CC]" }]}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
        />
        <WordsPullUpMultiStyle
          segments={[{ text: "Built for growth. Designed to convert.", className: "text-gray-500" }]}
          containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
        />
      </div>

      {/* Staggered Card Grid */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 h-auto lg:h-[480px] w-full max-w-7xl mx-auto px-4 md:px-6 z-10"
      >
        
        {/* Card 1 - Video Card */}
        <motion.div
          variants={cardVariants}
          className="relative h-[320px] md:h-full rounded-2xl border border-white/5 overflow-hidden group shadow-xl"
        >
          {/* Background Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-10" />
          
          {/* Card Text Content */}
          <div className="absolute bottom-6 left-6 z-20">
            <p className="font-semibold text-lg sm:text-xl tracking-wide" style={{ color: '#E1E0CC' }}>
              Your growth engine.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Conversion Architecture */}
        <motion.div
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between h-[380px] md:h-full group shadow-xl hover:border-white/10 transition-colors duration-300"
        >
          <div>
            {/* Top Icon */}
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
              alt="Conversion Architecture Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-contain mb-6 border border-white/10"
            />
            {/* Title with number */}
            <h3 className="text-base sm:text-lg font-medium mb-5 text-[#E1E0CC]">
              <span className="text-gray-500 mr-2 text-sm">01</span> Conversion Architecture.
            </h3>
            {/* Checklist */}
            <ul className="flex flex-col gap-2.5">
              {[
                "Custom-designed, conversion-focused websites",
                "Mobile-first, fast-loading builds",
                "SEO-optimized from day one",
                "Clear CTAs and lead capture built in"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Learn More Link */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-medium text-primary/80 hover:text-primary transition-colors duration-300 w-fit group/link mt-6"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Card 3 - Lead-Gen Systems */}
        <motion.div
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between h-[380px] md:h-full group shadow-xl hover:border-white/10 transition-colors duration-300"
        >
          <div>
            {/* Top Icon */}
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
              alt="Lead-Gen Systems Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-contain mb-6 border border-white/10"
            />
            {/* Title with number */}
            <h3 className="text-base sm:text-lg font-medium mb-5 text-[#E1E0CC]">
              <span className="text-gray-500 mr-2 text-sm">02</span> Lead-Gen Systems.
            </h3>
            {/* Checklist */}
            <ul className="flex flex-col gap-2.5">
              {[
                "High-converting landing pages",
                "Email sequences that nurture leads",
                "Analytics and A/B testing built in"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Learn More Link */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-medium text-primary/80 hover:text-primary transition-colors duration-300 w-fit group/link mt-6"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Card 4 - Brand Systems */}
        <motion.div
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl p-6 sm:p-8 border border-white/5 flex flex-col justify-between h-[380px] md:h-full group shadow-xl hover:border-white/10 transition-colors duration-300"
        >
          <div>
            {/* Top Icon */}
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
              alt="Brand Systems Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded object-contain mb-6 border border-white/10"
            />
            {/* Title with number */}
            <h3 className="text-base sm:text-lg font-medium mb-5 text-[#E1E0CC]">
              <span className="text-gray-500 mr-2 text-sm">03</span> Brand Systems.
            </h3>
            {/* Checklist */}
            <ul className="flex flex-col gap-2.5">
              {[
                "Logo and visual identity design",
                "Brand guidelines and templates",
                "Consistent messaging across channels"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Learn More Link */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-medium text-primary/80 hover:text-primary transition-colors duration-300 w-fit group/link mt-6"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
