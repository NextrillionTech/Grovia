import React from 'react';
import { motion } from 'framer-motion';

// Standard Brand Logo components rendered in monochrome white
const ChatGPTLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5-1.2-2.5-3.1-2.5-5.2 0-3.9 3.1-7 7-7 2.1 0 4 1 5.2 2.5m.3 1.2c1.5 1.2 2.5 3.1 2.5 5.2 0 3.9-3.1 7-7 7-2.1 0-4-1-5.2-2.5" />
    <path d="M8.5 14.5c-.8-.6-1.3-1.6-1.3-2.7 0-2 1.6-3.6 3.6-3.6 1.1 0 2 .5 2.7 1.3m.2.6c.8.6 1.3 1.6 1.3 2.7 0 2-1.6 3.6-3.6 3.6-1.1 0-2-.5-2.7-1.3" />
  </svg>
);

const ClaudeLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5a3.5 3.5 0 0 1 3.5 3.5c0 1.93-1.57 3.5-3.5 3.5S8.5 7.93 8.5 6a3.5 3.5 0 0 1 3.5-3.5zm-5 6.5A3.5 3.5 0 0 1 10.5 12c0 1.93-1.57 3.5-3.5 3.5S3.5 13.93 3.5 12A3.5 3.5 0 0 1 7 9zm10 0a3.5 3.5 0 0 1 3.5 3.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5zm-5 6.5a3.5 3.5 0 0 1 3.5 3.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5z" />
  </svg>
);

const FigmaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 2h4v8H8a4 4 0 1 1 0-8zm0 8h4v8H8a4 4 0 1 1 0-8zm4-8h4a4 4 0 1 1-4 4V2zm0 8h4a4 4 0 1 1-4 4v-4zm0 8a4 4 0 1 1-4 4v-4h4z"/>
  </svg>
);

const NotionLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm2.5 3c-.28 0-.5.22-.5.5v12.3c0 .35.24.6.6.6H7.8l6.8-9.4v8.5h-1.2c-.3 0-.5.2-.5.5s.2.5.5.5h2.5c.3 0 .5-.2.5-.5V5.6c0-.36-.24-.6-.6-.6h-1.2l-6.8 9.4V6h1.2c.3 0 .5-.2.5-.5S10.5 5 10.2 5H6.5z"/>
  </svg>
);

const ZapierLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const MakeLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const WebflowLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.9 3.5a.6.6 0 0 0-.6-.5H18c-.2 0-.4.1-.5.3l-2.4 5.3-2.4-5.3a.6.6 0 0 0-.5-.3H8.9c-.2 0-.4.1-.5.3L5.6 9.3l-2-4.5c0-.2-.2-.3-.4-.3H1a.5.5 0 0 0-.5.6l3.7 8.3c.1.2.3.3.5.3h3.2c.2 0 .4-.1.5-.3l2.8-6.1 2.8 6.1c.1.2.3.3.5.3h3.2c.2 0 .4-.1.5-.3l3.7-8.3zm-5.4 7.6c.1.2.3.3.5.3h2.6c.3 0 .5-.2.5-.5V8.3c0-.3-.2-.5-.5-.5h-2.6c-.2 0-.4.1-.5.3l-.9 2h.9zm-7.6 0c.1.2.3.3.5.3h2.6c.3 0 .5-.2.5-.5V8.3c0-.3-.2-.5-.5-.5H9.4c-.2 0-.4.1-.5.3l-.9 2h.9z" />
  </svg>
);

const HubSpotLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.5 10.5a2.5 2.5 0 1 0-3.96-2.04L10.87 11.2a4 4 0 0 0-4.37-.7L5.3 9.3a2.5 2.5 0 1 0-1.42.58l1.2 1.2a4 4 0 0 0 .7 4.37l-2.73 2.73a2.5 2.5 0 1 0 1.42 1.42l2.73-2.73a4 4 0 0 0 5.07-.63l3.96 2.04a2.5 2.5 0 1 0 1.42-1.42l-3.96-2.04a4 4 0 0 0 .7-4.37l4.73-2.73a2.5 2.5 0 0 0 2.08-.15zM4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm16 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-12 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
);

const GoogleLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.24 10.285V14.4h6.887c-.648 2.418-2.519 4.12-5.136 4.12A5.67 5.67 0 0 1 8.24 12.8a5.67 5.67 0 0 1 5.751-5.72 5.6 5.6 0 0 1 4.025 1.673l3.056-3.056A9.972 9.972 0 0 0 13.991 3c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.38 0 9.878-4.223 9.878-10 0-.66-.08-1.285-.24-1.715H12.24z"/>
  </svg>
);

const MetaLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.224 8.794c-1.393 0-2.612.793-3.224 1.968-.612-1.175-1.831-1.968-3.224-1.968-2.667 0-4.776 2.505-4.776 5.206 0 2.7 2.109 5.206 4.776 5.206 1.393 0 2.612-.793 3.224-1.968.612 1.175 1.831 1.968 3.224 1.968 2.667 0 4.776-2.505 4.776-5.206 0-2.7-2.109-5.206-4.776-5.206zm-7.224 8.412c-1.745 0-3.08-1.583-3.08-3.206s1.335-3.206 3.08-3.206c1.745 0 3.08 1.583 3.08 3.206s-1.335 3.206-3.08 3.206zm7.224 0c-1.745 0-3.08-1.583-3.08-3.206s1.335-3.206 3.08-3.206c1.745 0 3.08 1.583 3.08 3.206s-1.335 3.206-3.08 3.206z"/>
  </svg>
);

const TOOL_LOGOS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "ChatGPT": ChatGPTLogo,
  "Claude": ClaudeLogo,
  "Figma": FigmaLogo,
  "Notion AI": NotionLogo,
  "Zapier": ZapierLogo,
  "Make": MakeLogo,
  "Webflow": WebflowLogo,
  "HubSpot": HubSpotLogo,
  "Google Ads": GoogleLogo,
  "Meta Ads": MetaLogo
};

export const ToolsScrollSection: React.FC = () => {
  const row1Tools = [
    "ChatGPT", "Claude", "Perplexity", "Notion AI", "Jasper",
    "Copy.ai", "Midjourney", "Runway", "ElevenLabs", "Descript"
  ];

  const row2Tools = [
    "Meta Ads", "Google Ads", "LinkedIn Ads", "HubSpot",
    "Mailchimp", "ConvertKit", "Zapier", "Make", "n8n", "Webflow",
    "Framer", "Figma", "Canva", "Semrush", "Ahrefs", "Google Analytics", "Hotjar"
  ];

  // Duplicate lists to ensure seamless looping scroll
  const row1List = [...row1Tools, ...row1Tools, ...row1Tools];
  const row2List = [...row2Tools, ...row2Tools, ...row2Tools];

  const renderToolIcon = (tool: string) => {
    const BrandIconComponent = TOOL_LOGOS[tool];
    if (BrandIconComponent) {
      return (
        <BrandIconComponent className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300 shrink-0" />
      );
    }
    // Fallback circular initial
    const fallbackText = tool === "ChatGPT" ? "AI" : tool.charAt(0);
    return (
      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors duration-300 text-[10px] font-bold shrink-0 border border-white/5 select-none font-mono">
        {fallbackText}
      </div>
    );
  };

  return (
    <section className="bg-black py-20 md:py-28 px-6 overflow-hidden relative w-full flex flex-col items-center">
      {/* Background Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none z-0" />

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl text-white text-center mb-16 relative z-10 font-normal tracking-tight">
        The AI stack behind every Grovia project.
      </h2>

      {/* Edge Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scrolling Rows Container */}
      <div className="flex flex-col gap-6 w-full relative z-10">
        
        {/* Row 1 - AI & Content (scrolls left) */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear'
            }}
            className="flex gap-4 flex-nowrap will-change-transform"
          >
            {row1List.map((tool, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-full px-6 py-3.5 flex items-center gap-3.5 flex-shrink-0 group hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 cursor-default"
              >
                {renderToolIcon(tool)}
                <span className="text-white/70 group-hover:text-white text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300">
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Marketing & Ads (scrolls right) */}
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ['-33.33%', '0%'] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: 'linear'
            }}
            className="flex gap-4 flex-nowrap will-change-transform"
          >
            {row2List.map((tool, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-full px-6 py-3.5 flex items-center gap-3.5 flex-shrink-0 group hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 cursor-default"
              >
                {renderToolIcon(tool)}
                <span className="text-white/70 group-hover:text-white text-sm font-medium tracking-wide whitespace-nowrap transition-colors duration-300">
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
