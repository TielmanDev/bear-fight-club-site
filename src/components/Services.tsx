// src/components/Services.tsx
import { SiteConfig } from '@/lib/types';

interface ServicesProps {
  config: SiteConfig;
}

// Inline SVG helper mapping to key names to keep the template zero-dependency
function ServiceIcon({ name, color }: { name: string; color: string }) {
  const baseClasses = "w-8 h-8";
  
  switch (name) {
    case 'ti-zap': // Boxing / High Intensity
      return (
        <svg className={baseClasses} style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'ti-sword': // MMA / Combat
      return (
        <svg className={baseClasses} style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'ti-shield': // Jiu-Jitsu / Grappling / Defense
      return (
        <svg className={baseClasses} style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    default: // Universal Gear/Service Fallback
      return (
        <svg className={baseClasses} style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}

export default function Services({ config }: ServicesProps) {
  // Safe architectural exits: hide component if toggled off or if data is empty
  if (!config.sections.services || !config.services || config.services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Services
          </h2>
          <div 
            className="h-1 w-20 mx-auto mt-4 rounded" 
            style={{ backgroundColor: config.primaryColor }}
          />
          <p className="mt-4 text-lg text-gray-500">
            Explore what we offer at {config.businessName}. Tailored solutions designed to meet your specific needs.
          </p>
        </div>

        {/* Dynamic Service Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group transform hover:-translate-y-1"
            >
              {/* Dynamic Icon Container */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-opacity-10 transition-colors"
                style={{ backgroundColor: `${config.primaryColor}15` }} // Hex transparency code
              >
                <ServiceIcon name={service.icon} color={config.primaryColor} />
              </div>

              {/* Service Details */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {service.name}
              </h3>
              
              <p className="mt-3 text-gray-500 leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}