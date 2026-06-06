import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const IntroVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-16 md:py-24 px-6 overflow-hidden flex flex-col items-center border-t border-white/5 relative z-10">
      {/* Dynamic ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/[0.015] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-5xl text-center mb-10 relative z-10">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E1E0CC]/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 inline-block mb-4 select-none animate-pulse">
          Process Video
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal mb-4">
          How we build your <span className="italic text-white/60">growth engine.</span>
        </h2>
        <p className="text-white/70 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Watch our 90-second walkthrough mapping out the landing page conversion leaks and how Grovia builds high-converting systems.
        </p>
      </div>

      <div className="w-full max-w-4xl relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: customEase }}
          className="rounded-[2rem] overflow-hidden aspect-video relative w-full border border-white/10 shadow-2xl bg-[#080808]"
        >
          <video
            ref={videoRef}
            src="/Grovia Intro Video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            onClick={handlePlayPause}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Video Control Bar Overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-fit bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-4 z-20 shadow-xl">
            <button
              onClick={handlePlayPause}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5 cursor-pointer focus:outline-none"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4.5 h-4.5" /> : <Play className="w-4.5 h-4.5 fill-white" />}
            </button>
            <div className="w-px h-4 bg-white/15" />
            <button
              onClick={handleMuteToggle}
              className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5 cursor-pointer flex items-center gap-2 text-xs font-semibold focus:outline-none"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4.5 h-4.5" />
                  <span className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Unmute Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4.5 h-4.5" />
                  <span className="text-white/60 text-[10px] uppercase tracking-wider font-bold">Mute Audio</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
