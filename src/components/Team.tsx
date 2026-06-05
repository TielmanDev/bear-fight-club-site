// src/components/Team.tsx
import { SiteConfig } from '@/lib/types';

interface TeamProps {
  config: SiteConfig;
}

export default function Team({ config }: TeamProps) {
  // Safe architectural exit: hide if toggled off or empty
  if (!config.sections.team || !config.team || config.team.length === 0) {
    return null;
  }

  return (
    <section id="team" className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Meet Our Team
          </h2>
          <div 
            className="h-1 w-20 mx-auto mt-4 rounded" 
            style={{ backgroundColor: config.primaryColor }}
          />
          <p className="mt-4 text-lg text-gray-500">
            The dedicated professionals behind {config.businessName} committed to helping you succeed.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
          {config.team.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Profile Image / Avatar Placeholder */}
              <div className="relative w-32 h-32 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center overflow-hidden mb-6 shadow-inner">
                <svg className="w-16 h-16 text-gray-300 mt-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>

              {/* Member Details */}
              <h3 className="text-xl font-bold text-gray-900">
                {member.name}
              </h3>
              
              <p 
                className="text-sm font-semibold mt-1 uppercase tracking-wider"
                style={{ color: config.primaryColor }}
              >
                {member.title}
              </p>

              {member.bio && (
                <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}