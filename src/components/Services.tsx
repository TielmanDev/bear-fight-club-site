/* eslint-disable @next/next/no-img-element */
// src/components/Services.tsx
import { SiteConfig } from '@/lib/types';

function ServiceIcon({ name }: { name: string }) {
  const imgClass = "w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 select-none pointer-events-none";
  
  switch (name) {
    case 'boxing':
      return <img src="/images/Boxing.png" alt="Boxing Icon" className={imgClass} />;
    case 'wrestling':
      return <img src="/images/Wrestling.png" alt="Wrestling Icon" className={imgClass} />;
    case 'bjj':
      return <img src="/images/BJJ.png" alt="BJJ Icon" className={imgClass} />;
    case 'mma':
      return <img src="/images/MMA.png" alt="MMA Icon" className={imgClass} />;
    case 'strength':
      return <img src="/images/Strentg.png" alt="Strength Icon" className={imgClass} />;
    default:
      return <span className="text-gray-500 text-lg">★</span>;
  }
}

export default function Services({ config }: { config: SiteConfig }) {
  if (!config.sections.services || !config.services) return null;

  return (
    <section id="services" className="bg-[#0B0F17] border-b border-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y divide-gray-800/40 md:divide-y-0 md:divide-x divide-gray-800/60">
          {config.services.map((service) => (
            <div 
              key={service.id} 
              className="p-6 flex flex-col items-center text-center group hover:bg-black/20 transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-gray-900/60 border border-gray-800/50 group-hover:border-[#00A3FF]/40 group-hover:bg-blue-500/5 transition-all duration-300">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xs font-black tracking-widest uppercase text-gray-200 group-hover:text-white transition-colors">
                {service.name}
              </h3>
              <p className="mt-2 text-[11px] text-gray-500 leading-relaxed font-medium max-w-[160px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}