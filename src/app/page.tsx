// src/app/page.tsx
import { siteConfig } from '@/lib/config';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ScheduleAndPricing from '@/components/ScheduleAndPricing';
import Team from '@/components/Team'; // ⚠️ RENDER MOUNT DIRECTIVE
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090E] text-white antialiased selection:bg-[#00A3FF] selection:text-white">
      <Navigation config={siteConfig} />
      <Hero config={siteConfig} />
      <Services config={siteConfig} />
      <ScheduleAndPricing config={siteConfig} />
      <Team config={siteConfig} /> {/* ⚠️ POSITIONED SEAMLESSLY BELOW TIMETABLES */}
      <About config={siteConfig} />
      <ContactForm config={siteConfig} />
      <Footer config={siteConfig} />
    </main>
  );
}