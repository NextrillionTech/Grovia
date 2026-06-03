import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  delay: string;
}

export const Starfield: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() > 0.8 ? 2.5 : 1.5,
      opacity: Math.random() * 0.4 + 0.35, // Clear but subtle opacity (35% to 75%)
      delay: `${Math.random() * 5}s`
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[40] select-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        >
          <div
            className="w-full h-full rounded-full bg-white animate-pulse"
            style={{
              animationDuration: '4s',
              animationDelay: star.delay
            }}
          />
        </div>
      ))}
    </div>
  );
};
