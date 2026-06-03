import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';

interface Project {
  title: string;
  tag: string;
  domain: string;
  description: string;
  metric: string;
  metricLabel: string;
  imageSrc: string;
  quote: string;
  author: string;
}

export const PortfolioSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "FinFlow CRM: 4.2x Demo Growth",
      tag: "SaaS & Funnels",
      domain: "finflowcrm.com",
      description: "Designed a high-performance landing page and optimized demo funnel with integrated automated calendar schedules to remove friction.",
      metric: "+42%",
      metricLabel: "increase in demo bookings",
      imageSrc: "/projects/finflow_saas_mockup.png",
      quote: "Grovia delivered a landing page that converts traffic like crazy. Working directly with their team saved us weeks of back-and-forth.",
      author: "Amit K., Growth Lead"
    },
    {
      title: "Oakridge Prep: Admissions Pipeline",
      tag: "Education & Branding",
      domain: "oakridgeprep.edu.in",
      description: "Built a premium digital admissions portal and brand identity package capturing regional intent for a top-tier preparatory academy.",
      metric: "180+",
      metricLabel: "new inquiries in 30 days",
      imageSrc: "/projects/oakridge_prep_mockup.png",
      quote: "Our digital admissions grew significantly this term. The premium branding they created completely repositioned us.",
      author: "Suresh M., Director"
    },
    {
      title: "Apex Performance: Retainer Funnel",
      tag: "Coaching & Sales Systems",
      domain: "apexperformance.co",
      description: "Implemented a custom VSL (Video Sales Letter) page and multi-channel marketing system designed to qualify and warm up high-ticket clients.",
      metric: "₹12L+",
      metricLabel: "qualified sales pipeline",
      imageSrc: "/projects/apex_coaching_mockup.png",
      quote: "The automated VSL lead capture system has changed our business. We went from manual follow-ups to bookings on autopilot.",
      author: "Vikram R., Founder"
    }
  ];

  return (
    <section id="work" ref={sectionRef} className="bg-black py-28 md:py-40 px-6 overflow-hidden flex flex-col items-center relative border-t border-white/5">
      {/* Ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-left">
          <WordsPullUp
            text="Selected Work"
            className="text-4xl md:text-6xl font-serif font-normal text-white tracking-tight"
          />
          <p className="text-white/70 text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
            Case studies of websites, lead funnels, and marketing systems built for business outcomes. No fluff, just measurable results.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/5 hover:border-white/10 transition-colors duration-500"
            >
              {/* Simulated Browser Frame Mockup */}
              <div className="relative overflow-hidden w-full aspect-video bg-[#0D0D0D] flex flex-col shrink-0">
                {/* Browser top-bar */}
                <div className="bg-[#121212] px-4 py-2.5 flex items-center gap-1.5 border-b border-white/5 shrink-0 select-none">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="w-2 h-2 rounded-full bg-[#27C93F] opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-1 text-center text-[10px] text-white/30 font-medium font-mono truncate px-4">
                    {project.domain}
                  </div>
                  <div className="w-4" /> {/* spacer to balance */}
                </div>

                {/* Mockup image */}
                <div className="flex-1 overflow-hidden relative">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle glass overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-5 text-left">
                <div className="flex flex-col gap-3">
                  {/* Tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E1E0CC]/80 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {project.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg text-white font-serif tracking-tight leading-snug group-hover:text-[#E1E0CC] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Client Quote Testimonial */}
                  <div className="border-l-2 border-[#E1E0CC]/20 pl-3.5 py-0.5 my-1">
                    <p className="text-white/60 italic text-xs leading-normal font-normal">
                      "{project.quote}"
                    </p>
                    <span className="text-[10px] text-white/40 block mt-1 font-medium tracking-wide">
                      — {project.author}
                    </span>
                  </div>
                </div>

                {/* Outcome Metric Container */}
                <div className="border-t border-white/5 pt-4 flex items-center gap-3 shrink-0">
                  <div className="text-xl font-semibold tracking-tight text-emerald-400 font-mono">
                    {project.metric}
                  </div>
                  <div className="text-[10px] text-white/50 leading-snug uppercase tracking-wider font-medium">
                    {project.metricLabel}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
