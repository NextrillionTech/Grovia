import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, index, totalChars, progress }) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  let charCounter = 0;

  // Split words and pre-calculate global indices
  const wordsWithCharIndices = words.map((word) => {
    const chars = word.split("").map((char) => {
      const globalIndex = charCounter++;
      return { char, globalIndex };
    });
    const spaceIndex = charCounter++;
    return { chars, spaceIndex };
  });
  
  const totalChars = charCounter;

  return (
    <p ref={containerRef} className={`inline flex-wrap leading-relaxed ${className}`}>
      {wordsWithCharIndices.map((wordObj, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {wordObj.chars.map((charObj) => (
            <AnimatedLetter
              key={charObj.globalIndex}
              char={charObj.char}
              index={charObj.globalIndex}
              totalChars={totalChars}
              progress={scrollYProgress}
            />
          ))}
          {wordIdx < wordsWithCharIndices.length - 1 && (
            <AnimatedLetter
              key={wordObj.spaceIndex}
              char=" "
              index={wordObj.spaceIndex}
              totalChars={totalChars}
              progress={scrollYProgress}
            />
          )}
        </span>
      ))}
    </p>
  );
};
