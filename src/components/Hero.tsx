// src/components/Hero.tsx
import { SiteConfig } from '@/lib/types';

interface HeroProps {
  config: SiteConfig;
}

export default function Hero({ config }: HeroProps) {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8 px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-32">
        
        {/* Left Column: Text & CTA */}
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block">{config.businessName}</span>
            <span 
              className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold"
              style={{ color: config.primaryColor }}
            >
              {config.tagline}
            </span>
          </h1>
          
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
            {config.description}
          </p>

          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <a
                href={`mailto:${config.email}`}
                style={{ backgroundColor: config.primaryColor }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white shadow-md hover:opacity-90 transition-all transform active:scale-95 text-center"
              >
                {config.ctaPrimary}
              </a>
              
              {config.whatsapp && (
                <a
                  href={config.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-base font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all text-center"
                >
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Hero Image / Shape Visual */}
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex items-center justify-center">
          <div className="relative mx-auto w-full rounded-2xl shadow-lg lg:max-w-md overflow-hidden bg-gray-100 aspect-video lg:aspect-square flex items-center justify-center border border-gray-200">
            {/* If a hero image exists, we'll display a styled placeholder fallback block for now */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-gray-50 to-gray-100">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Image Placeholder</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">Replaced by client assets inside `/public/images/` folder</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}