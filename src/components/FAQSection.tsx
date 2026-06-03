import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={onClick}
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between text-left focus:outline-none group py-2"
      >
        <span className="text-white text-base sm:text-lg font-medium tracking-tight group-hover:text-[#E1E0CC]/80 transition-colors">
          {question}
        </span>
        <div className="text-white shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-4 h-4 text-white/40" />
          ) : (
            <Plus className="w-4 h-4 text-white/40" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed pt-2 pb-4 pr-6 font-normal">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const customEase = [0.16, 1, 0.3, 1] as const;

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with B2B companies, private schools, sports academies, coaching businesses, and personal brands across India. If you sell a service or expertise and need more leads, customers, or brand trust — we're a fit."
    },
    {
      question: "How much does a website cost?",
      answer: "Our websites start at ₹15,000 for a 5-page starter site and go up to ₹50,000 for custom-designed, conversion-optimized builds with SEO and lead capture. Retainers for ongoing brand, content, and growth work start at ₹20,000 per month."
    },
    {
      question: "How long does a project take?",
      answer: "Most website and funnel projects ship in 2-3 weeks. Brand identity work takes 3-4 weeks. Ad campaigns can launch in 5-7 days. We move fast because we use AI to compress research, content, and design timelines."
    },
    {
      question: "Do you only work with Indian clients?",
      answer: "Yes, we focus exclusively on the Indian market. We understand Indian buyers, pricing psychology, regional nuances, and what makes a business look trustworthy to an Indian audience. If you're targeting Indian customers, we're the right fit."
    },
    {
      question: "What makes Grovia different from other agencies?",
      answer: "Three things: (1) Agency-level strategy at freelancer rates — no bloated retainers or junior handoffs. (2) We use AI to move 5x faster without cutting corners — every output is human-reviewed. (3) We measure success in leads and revenue, not deliverables. If we can't move the needle, we'll tell you before we start."
    },
    {
      question: "Can I see examples of your work?",
      answer: "Yes. You can explore our featured work section directly above to see some of our recent client projects and success metrics. If you would like custom case studies related to your specific B2B niche or industry, feel free to reach out to us at contact.nextrilliontech@gmail.com."
    }
  ];

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden w-full flex flex-col items-center">
      <div className="w-full max-w-4xl text-left relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: customEase }}
            className="text-white/40 text-sm tracking-widest uppercase mb-4 block font-semibold"
          >
            FAQ
          </motion.span>
          <h2 className="text-3xl md:text-5xl text-white tracking-tight font-normal flex-wrap">
            <WordsPullUp
              text="Frequently asked questions."
            />
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: customEase }}
          className="flex flex-col border-t border-white/10"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};
