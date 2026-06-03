import React from 'react';

export const Navbar: React.FC = () => {
  const navItems = ["Our story", "Services", "Process", "Works", "Contact"];

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-2.5 md:px-10 border-x border-b border-white/10 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl backdrop-blur-md">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide transition-colors duration-300"
            style={{
              color: 'rgba(225, 224, 204, 0.8)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#E1E0CC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)';
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};
