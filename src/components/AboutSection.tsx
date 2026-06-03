import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="about" ref={ref} className="bg-black pt-32 md:pt-44 pb-16 md:pb-24 px-6 overflow-hidden relative flex flex-col items-center text-center border-b border-white/5">
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: customEase }}
          className="text-white/70 text-sm tracking-widest uppercase mb-6 block font-semibold"
        >
          About Grovia
        </motion.span>

        {/* Heading */}
        <h2 className="sr-only">Pioneering the digital for growth that compounds.</h2>
        <WordsPullUpMultiStyle
          segments={[
            { text: "Pioneering ", className: "italic font-serif text-white/60" },
            { text: "the ", className: "italic font-serif text-white/60" },
            { text: "digital ", className: "italic font-serif text-white/60" },
            { text: "for ", className: "text-white" },
            { text: "growth ", className: "italic font-serif text-white/60" },
            { text: "that ", className: "italic font-serif text-white/60" },
            { text: "compounds.", className: "italic font-serif text-white/60" }
          ]}
          containerClassName="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-normal max-w-4xl mx-auto select-none"
        />

        {/* Founder Story Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: customEase }}
          className="max-w-3xl mx-auto mt-16 border-t border-white/10 pt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl text-[#E1E0CC]/90 font-serif leading-relaxed mb-6 font-normal">
            I am <span className="text-white font-semibold">Shubham Taneja</span>, founder of Grovia. I build websites, funnels, and brand systems that grow businesses.
          </h3>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Over the last four years, I have worked with B2B companies, private schools, sports academies, and coaching businesses across India. Together, we have built websites, funnels, and brand systems that have helped them generate leads, win trust, and scale predictably.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
