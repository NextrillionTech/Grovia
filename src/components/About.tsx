import React from 'react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { ScrollRevealText } from './ScrollRevealText';

export const About: React.FC = () => {
  const segments = [
    { text: "I am Shubham Taneja,", className: "font-normal text-[#E1E0CC]" },
    { text: "founder of Grovia.", className: "italic font-serif text-[#E1E0CC]" },
    { text: "I build websites, funnels, and brand systems that grow businesses.", className: "font-normal text-[#E1E0CC]" }
  ];

  const bodyText = "Over the last five years, I have worked with B2B companies, private schools, sports academies, and coaching businesses across India. Together, we have built websites, funnels, and brand systems that have helped them generate leads, win trust, and scale predictably.";

  return (
    <section id="our-story" className="bg-black py-24 px-4 md:px-6 flex justify-center items-center">
      <div className="bg-[#101010] rounded-[2rem] p-8 sm:p-16 md:p-24 max-w-6xl w-full text-center border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Subtle background gradients for premium aesthetic */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Label */}
        <span className="text-primary text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase mb-8 block">
          Digital marketing
        </span>

        {/* Main Heading */}
        <div className="mb-12 sm:mb-20">
          <WordsPullUpMultiStyle
            segments={segments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] tracking-tight"
          />
        </div>

        {/* Scroll Linked Body Paragraph */}
        <div className="max-w-3xl mx-auto border-t border-white/5 pt-12 sm:pt-20">
          <ScrollRevealText
            text={bodyText}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide text-center"
          />
        </div>
      </div>
    </section>
  );
};
