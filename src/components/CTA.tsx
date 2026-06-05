// src/components/CTA.tsx
import { SiteConfig } from '@/lib/types';

interface CTAProps {
  config: SiteConfig;
}

export default function CTA({ config }: CTAProps) {
  return (
    <section 
      className="py-16 sm:py-24 text-white text-center relative overflow-hidden"
      style={{ backgroundColor: config.primaryColor }}
    >
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Ready to Get Started with {config.businessName}?
        </h2>
        
        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          {config.tagline}. Reach out today to lock in your booking or ask any questions.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={`mailto:${config.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-gray-900 bg-white shadow-lg hover:bg-gray-50 transition-all transform active:scale-95"
          >
            {config.ctaPrimary}
          </a>
          
          {config.phone && (
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-xl text-white bg-transparent hover:bg-white/10 transition-all"
            >
              Call Us: {config.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}