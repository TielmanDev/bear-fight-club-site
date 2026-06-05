// src/components/Team.tsx
"use client"; // ⚠️ CRITICAL: Adds interactivity clearance for the onError image handler

import { SiteConfig } from '@/lib/types';

export default function Team({ config }: { config: SiteConfig }) {
  if (!config.sections.team || !config.team || config.team.length === 0) {
    return null;
  }

  return (
    <section id="team" className="py-24 bg-[#07090E] text-white border-t border-b border-gray-900/80 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17] via-transparent to-[#07090E] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-widest uppercase">TRAINERS</h2>
          <div className="h-0.5 w-12 bg-[#00A3FF] mx-auto mt-3" />
          <p className="mt-4 text-xs font-bold tracking-widest uppercase text-gray-500">
            Expert coaching to help you dominate the canvas
          </p>
        </div>

        {/* Instructors Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {config.team.map((member: any) => (
            <div 
              key={member.id} 
              className="bg-[#11141B]/40 rounded-2xl border border-gray-800/60 p-6 flex flex-col items-center text-center group hover:border-gray-700 transition-all duration-300"
            >
              {/* Profile Image Frame with fade mask support */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-[#0E121A] rounded-xl overflow-hidden border border-gray-800/40 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Gradient bottom fog to blend arms-crossed cutouts nicely */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E121A] via-transparent to-transparent opacity-80" />
                
                {/* Missing Image Placeholder */}
                <div className="absolute inset-0 hidden flex flex-col items-center justify-center p-4">
                  <span className="text-3xl">🥋</span>
                  <p className="text-[10px] text-gray-500 font-mono mt-2">Place asset inside public folder matching path</p>
                </div>
              </div>

              {/* Instructor Information details */}
              <h3 className="text-xl font-black tracking-wide text-white uppercase">
                {member.name}
              </h3>
              
              <p className="text-xs font-black tracking-widest uppercase mt-1 text-[#00A3FF]">
                {member.title}
              </p>
              
              <p className="mt-3 text-xs text-gray-400 font-medium leading-relaxed max-w-xs">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}