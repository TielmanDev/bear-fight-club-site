// src/components/Footer.tsx
"use client"; // ⚠️ CRITICAL: Tells Next.js this component uses interactive client-side clicks

import { SiteConfig } from '@/lib/types';

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col space-y-4">
          <span className="text-xl font-black tracking-tight text-white">
            {config.businessName}
          </span>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            {config.description}
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <button onClick={() => handleScroll('hero')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            </li>
            {config.sections.services && (
              <li>
                <button onClick={() => handleScroll('services')} className="hover:text-white transition-colors cursor-pointer">Services</button>
              </li>
            )}
            {config.sections.about && (
              <li>
                <button onClick={() => handleScroll('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
              </li>
            )}
            {config.sections.team && (
              <li>
                <button onClick={() => handleScroll('team')} className="hover:text-white transition-colors cursor-pointer">Our Team</button>
              </li>
            )}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="space-y-3 text-sm">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Details</h4>
          <p className="flex items-center">
            <span className="font-medium text-white mr-2">Phone:</span> {config.phone}
          </p>
          <p className="flex items-center">
            <span className="font-medium text-white mr-2">Email:</span> {config.email}
          </p>
          <p className="flex items-start">
            <span className="font-medium text-white mr-2 flex-shrink-0">Address:</span> 
            <span>{config.address}</span>
          </p>
          {config.googleMapsUrl && (
            <div className="pt-2">
              <a 
                href={config.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold inline-flex items-center hover:underline"
                style={{ color: config.primaryColor }}
              >
                Directions on Google Maps →
              </a>
            </div>
          )}
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-center text-xs">
        <p>&copy; {currentYear} {config.businessName}. All rights reserved.</p>
        <p className="mt-1 text-gray-600">Built with zero hosting fees via GitHub Pages.</p>
      </div>
    </footer>
  );
}