// src/components/About.tsx
import { SiteConfig } from '@/lib/types';

export default function About({ config }: { config: SiteConfig }) {
  if (!config.sections.about || !config.about) return null;

  return (
    <section id="about" className="py-20 bg-[#0B0F17] text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-black tracking-widest uppercase">{config.about.headline}</h2>
        <div className="h-1 w-16 mx-auto mt-3 rounded" style={{ backgroundColor: config.primaryColor }} />
        <p className="mt-8 text-gray-400 text-base leading-relaxed max-w-3xl mx-auto whitespace-pre-line">{config.about.body}</p>
        
        {config.about.values && (
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {config.about.values.map((v, i) => (
              <div key={i} className="flex items-center space-x-2 bg-[#0E1321] px-5 py-3 rounded-lg border border-gray-800">
                <span style={{ color: config.primaryColor }} className="font-bold">✓</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">{v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}