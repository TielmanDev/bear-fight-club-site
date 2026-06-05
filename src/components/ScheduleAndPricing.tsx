// src/components/ScheduleAndPricing.tsx
export default function ScheduleAndPricing({ config }: { config: any }) {
  return (
    <section id="schedule" className="py-20 bg-[#07090E] text-white border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Schedule Grid Table display */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-black tracking-wider uppercase mb-2">Class Schedule</h2>
          <div className="h-0.5 w-12 bg-[#00A3FF] mb-6" />
          
          <div className="space-y-3">
            {config.schedule.map((item: any, idx: number) => (
              <div key={idx} className="bg-[#11141B] rounded-xl p-5 border border-gray-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-gray-700 transition-colors">
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{item.days}</p>
                </div>
                <div className="text-xs font-mono font-bold bg-[#00A3FF]/10 text-[#00A3FF] px-3 py-1.5 rounded border border-[#00A3FF]/20 self-start sm:self-auto">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Data layout block */}
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-black tracking-wider uppercase mb-2">Academy Fees</h2>
          <div className="h-0.5 w-12 bg-[#00A3FF] mb-6" />
          
          <div className="bg-gradient-to-b from-[#11141B] to-[#0A0D14] rounded-2xl p-8 border-2 border-gray-800 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00A3FF]/5 blur-2xl rounded-full" />
            
            <div className="text-center pb-6 border-b border-gray-800">
              <span className="text-xs font-black tracking-widest text-[#00A3FF] uppercase">Monthly Membership</span>
              <div className="text-5xl font-black tracking-tight mt-2 text-white">R700<span className="text-sm font-medium text-gray-500">/pm</span></div>
            </div>

            <div className="py-6 space-y-4 border-b border-gray-800 text-xs font-semibold text-gray-300">
              <div className="flex justify-between"><span>Registration Fee</span><span className="text-white font-bold">{config.pricing.registration}</span></div>
              <div className="flex justify-between"><span>Access Level</span><span className="text-white font-bold">All Age-Appropriate Classes</span></div>
              <div className="flex justify-between"><span>Location Focus</span><span className="text-white font-bold">George Academy Floor</span></div>
            </div>

            <div className="pt-6">
              <a 
                href={config.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3.5 bg-[#00A3FF] text-xs font-black tracking-widest text-white rounded-lg shadow-md hover:bg-[#008ce0] transition-all uppercase text-center cursor-pointer"
              >
                Sign Up via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}