import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show the welcome bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const phoneNumber = "917676346880";
    const text = encodeURIComponent("Hi Grovia Labs! I visited your website and would like to learn more about your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none select-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl p-4 max-w-[280px] border border-white/10 bg-[#0C0C0C]/90 shadow-2xl relative text-left pointer-events-auto cursor-pointer"
            onClick={handleClick}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="pr-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E1E0CC]/80 mb-1.5 block">
                Grovia Labs Support
              </span>
              <p className="text-white text-xs leading-relaxed font-normal">
                Hi there! 👋 Let's build your growth engine. Let's chat on WhatsApp!
              </p>
            </div>
            {/* Small speech bubble arrow at bottom right */}
            <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-[#0C0C0C] border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) */}
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto relative cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        {/* Active pulse dot (Online indicator) */}
        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-black z-10 flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        </div>

        {/* WhatsApp Icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>
    </div>
  );
};
