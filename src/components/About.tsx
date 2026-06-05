// src/components/About.tsx
import { SiteConfig } from '@/lib/types';

interface AboutProps {
  config: SiteConfig;
}

export default function About({ config }: AboutProps) {
  // Safe exit: hide if the section is toggled off or missing content
  if (!config.sections.about || !config.about) {
    return null;
  }

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content & Values List */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {config.about.headline}
              </h2>
              <div 
                className="h-1 w-20 mt-4 rounded mb-8" 
                style={{ backgroundColor: config.primaryColor }}
              />
              <p className="text-lg text-gray-500 leading-relaxed whitespace-pre-line">
                {config.about.body}
              </p>

              {/* Dynamic Core Values Blocks */}
              {config.about.values && config.about.values.length > 0 && (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {config.about.values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      {/* Checkmark Icon colored by primaryColor */}
                      <div className="flex-shrink-0 mt-1">
                        <svg 
                          className="h-6 w-6" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          style={{ color: config.primaryColor }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-semibold text-gray-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Layout Element */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-video lg:aspect-square rounded-2xl bg-gray-50 border border-gray-100 shadow-inner flex flex-col items-center justify-center p-8 text-center group">
              
              {/* Outer decorative border using client hex brand color */}
              <div 
                className="absolute inset-4 rounded-xl border-2 border-dashed opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ borderColor: config.primaryColor }}
              />

              <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Story Visual Asset</p>
              <p className="text-[11px] text-gray-400 mt-1 max-w-xs px-4">
                Can be updated to a facility or team photo using `config.about.image`
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}