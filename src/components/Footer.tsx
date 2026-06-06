import React from 'react';
import { ArrowUp, Mail, MapPin, Calendar, Phone } from 'lucide-react';

const Instagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-white/40"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-white/40"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#101010] border-t border-white/5 py-16 px-6 relative overflow-hidden text-left">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start mb-16">
          
          {/* Left Column: Brand & Slogans */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="Grovia Labs" className="h-9 w-auto object-contain" />
            </div>
            
            <div className="flex flex-col gap-1.5 mt-2">
              <p className="text-[#E1E0CC]/80 text-sm font-medium tracking-wide">
                Agency brains. Freelancer rates.
              </p>
              <p className="text-white/70 text-xs sm:text-sm tracking-wide">
                Powered by AI. Designed for humans.
              </p>
            </div>
            
            <span className="text-xs text-white/30 mt-6 block">
              &copy; 2025 Grovia Labs. All rights reserved.
            </span>
          </div>

          {/* Middle Column: Solutions Directory */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start gap-5">
            <h4 className="text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-white/70 font-normal">
              <li>
                <button
                  onClick={() => onNavigate?.('/saas')}
                  className="hover:text-white transition-colors duration-300 text-left cursor-pointer bg-transparent border-none p-0 outline-none text-white/70"
                >
                  B2B SaaS Landing Pages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('/schools')}
                  className="hover:text-white transition-colors duration-300 text-left cursor-pointer bg-transparent border-none p-0 outline-none text-white/70"
                >
                  School Admissions Funnels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('/coaching')}
                  className="hover:text-white transition-colors duration-300 text-left cursor-pointer bg-transparent border-none p-0 outline-none text-white/70"
                >
                  Coaching & Personal Brands
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Connect Contacts */}
          <div className="col-span-1 md:col-span-3 flex flex-col items-start gap-5">
            <h4 className="text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-white/70 font-normal">
              <a href="mailto:contact.nextrilliontech@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-white/40" />
                <span>contact.nextrilliontech@gmail.com</span>
              </a>
              <a href="tel:+917676346880" className="flex items-center gap-2.5 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-white/40" />
                <span>+91 76763 46880</span>
              </a>
              <a href="https://linkedin.com/in/shubhamtanejaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors duration-300">
                <Linkedin className="w-4 h-4 text-white/40" />
                <span>linkedin.com/in/shubhamtanejaa</span>
              </a>
              <a href="https://instagram.com/grovialabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors duration-300">
                <Instagram className="w-4 h-4 text-white/40" />
                <span>@grovialabs</span>
              </a>
              <a
                href="https://calendar.app.google/Xt6BvaNnmey3nJKV8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors duration-300"
              >
                <Calendar className="w-4 h-4 text-white/40" />
                <span>Book a call</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 shrink-0" />
                <span>815, Sector9A, Gurugram, Haryana, 122001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/60 font-normal">
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex items-center gap-6">
            <span>Made in India 🇮🇳</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-white transition-colors duration-300 group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                <ArrowUp className="w-3.5 h-3.5 text-white/60" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
