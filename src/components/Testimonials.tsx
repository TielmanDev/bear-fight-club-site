// src/components/Testimonials.tsx
import { SiteConfig } from '@/lib/types';

interface TestimonialsProps {
  config: SiteConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  // Safe architectural exit: hide if turned off or if there is no data
  if (!config.sections.testimonials || !config.testimonials || config.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <div 
            className="h-1 w-20 mx-auto mt-4 rounded" 
            style={{ backgroundColor: config.primaryColor }}
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative flex flex-col justify-between shadow-sm"
            >
              {/* Giant Decorative Quote Mark */}
              <span 
                className="absolute top-2 left-4 text-6xl font-serif select-none pointer-events-none opacity-10"
                style={{ color: config.primaryColor }}
              >
                &ldquo;
              </span>

              <p className="text-gray-600 italic leading-relaxed relative z-10 mb-6">
                {t.quote}
              </p>

              <div>
                <h4 className="font-bold text-gray-900 text-base">
                  {t.author}
                </h4>
                {t.authorTitle && (
                  <p className="text-xs text-gray-400 mt-0.5 font-medium">
                    {t.authorTitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}