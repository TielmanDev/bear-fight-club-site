// src/components/Navigation.tsx
"use client";

import { useState } from 'react';
import { SiteConfig } from '@/lib/types';

interface NavigationProps {
  config: SiteConfig;
}

export default function Navigation({ config }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll helper for single-page application jumping
  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo / Business Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-black tracking-tight text-gray-900 cursor-pointer" onClick={() => handleScroll('hero')}>
              {config.businessName}
            </span>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-8">
            {config.sections.services && (
              <button onClick={() => handleScroll('services')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </button>
            )}
            {config.sections.about && (
              <button onClick={() => handleScroll('about')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                About
              </button>
            )}
            {config.sections.team && (
              <button onClick={() => handleScroll('team')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Our Team
              </button>
            )}
            {config.sections.testimonials && (
              <button onClick={() => handleScroll('testimonials')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </button>
            )}
            
            {/* Dynamic CTA Button */}
            <a
              href={`mailto:${config.email}`}
              style={{ backgroundColor: config.primaryColor }}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white shadow-sm hover:opacity-90 transition-all transform active:scale-95"
            >
              {config.ctaPrimary}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          {config.sections.services && (
            <button onClick={() => handleScroll('services')} className="block w-full text-left py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Services
            </button>
          )}
          {config.sections.about && (
            <button onClick={() => handleScroll('about')} className="block w-full text-left py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              About
            </button>
          )}
          {config.sections.team && (
            <button onClick={() => handleScroll('team')} className="block w-full text-left py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Our Team
            </button>
          )}
          {config.sections.testimonials && (
            <button onClick={() => handleScroll('testimonials')} className="block w-full text-left py-2 text-base font-medium text-gray-600 hover:text-gray-900">
              Testimonials
            </button>
          )}
          <div className="pt-2">
            <a
              href={`mailto:${config.email}`}
              style={{ backgroundColor: config.primaryColor }}
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-bold rounded-lg text-white shadow-sm"
            >
              {config.ctaPrimary}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}