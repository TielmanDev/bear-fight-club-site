// src/components/Hero.tsx
"use client"; // ⚠️ CRITICAL: Marks this component as interactive for Next.js

import { SiteConfig } from '@/lib/types';

export default function Hero({ config }: { config: SiteConfig }) {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-[#07090E] text-white overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-gray-900">
      {/* Dynamic Background Light Trails & Neon Radial Glows */}
      <div className="absolute top-[40%] left-[-10%] w-[450px] h-[450px] bg-[#00A3FF]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] opacity-30 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left Column: Massive Stacked Typography Layout */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase select-none">
            <span className="block bg-gradient-to-b from-[#00A3FF] to-[#0066CC] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,163,255,0.3)]">
              BEAR
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 font-extrabold mt-1">
              FIGHT
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 font-extrabold mt-1">
              CLUB
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-black mt-6 tracking-[0.2em] text-gray-100 uppercase font-sans">
            {config.tagline}
          </p>
          
          <p className="mt-3 text-xs font-bold tracking-widest text-gray-400 uppercase border-l-2 border-[#00A3FF] pl-3">
            UNLEASH YOUR STRENGTH. DOMINATE THE CANVAS.
          </p>

          <p className="mt-6 text-sm text-gray-400 max-w-md leading-relaxed font-medium">
            {config.description}
          </p>
          
          {/* Action Row buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => handleScroll('schedule')}
              className="px-6 py-3.5 bg-[#00A3FF] text-xs font-black tracking-widest text-white rounded-md shadow-lg shadow-blue-500/20 hover:bg-[#008ce0] transition-all uppercase cursor-pointer"
            >
              VIEW CLASS SCHEDULE
            </button>
            <a 
              href={config.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-gray-700 bg-black/40 text-xs font-black tracking-widest text-white rounded-md hover:bg-white/5 transition-all uppercase text-center"
            >
              BOOK A FREE TRIAL
            </a>
          </div>
        </div>

        {/* Right Column: Fighter Image Canvas with fading gradient mask */}
        <div className="mt-12 lg:mt-0 lg:col-span-6 relative flex items-center justify-end">
          <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={config.heroImage} 
              alt="Fighter asset" 
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if(e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.classList.remove('hidden');
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-transparent to-transparent opacity-90 lg:opacity-100" />
            
            {/* Fallback frame layer if image path breaks or hasn't loaded */}
            <div className="absolute inset-0 hidden flex-col items-center justify-center border border-dashed border-gray-800 bg-gray-900/40 rounded-xl">
              <span className="text-4xl mb-2">🥊</span>
              <p className="text-xs text-gray-500 font-mono">Place 'hero-fighter.png' inside /public/images/</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}