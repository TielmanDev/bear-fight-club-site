// src/components/Navigation.tsx
"use client";

import { useState } from 'react';
import { SiteConfig } from '@/lib/types';

export default function Navigation({ config }: { config: SiteConfig }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0B0F17]/90 backdrop-blur-md border-b border-gray-800/60 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Brand Graphic Asset Integration */}
          <div className="flex-shrink-0 flex items-center">
            <div 
              className="flex items-center space-x-3 cursor-pointer select-none"
              onClick={() => handleScroll('hero')}
            >
              {config.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={config.logoUrl} 
                  alt={`${config.fullName} Logo`} 
                  className="h-10 w-auto object-contain select-none pointer-events-none"
                  onError={(e) => {
                    // Hidden if asset completely missing, falling back automatically to clean typography
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              
              <span className="text-2xl font-black tracking-wider text-white uppercase font-sans">
                {config.businessName}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleScroll('about')} 
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => handleScroll('services')} 
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Classes
            </button>
            <button 
              onClick={() => handleScroll('schedule')} 
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Schedule
            </button>
            <button 
              onClick={() => handleScroll('team')} 
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Instructors
            </button>
            <button 
              onClick={() => handleScroll('schedule')} 
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <a 
              href={`mailto:${config.email}`} 
              style={{ backgroundColor: config.primaryColor }} 
              className="px-6 py-2.5 text-sm font-black rounded-md text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition-all text-center"
            >
              CONTACT
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}