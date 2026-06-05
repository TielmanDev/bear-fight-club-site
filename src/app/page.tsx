// src/app/page.tsx
import { siteConfig } from '@/lib/config';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased selection:bg-blue-500 selection:text-white">
      {/* Navigation block */}
      <Navigation config={siteConfig} />
      
      {/* Hero presentation layout */}
      <Hero config={siteConfig} />

      {/* Dynamic Services feature display */}
      <Services config={siteConfig} />

      {/* Narrative corporate profile block */}
      <About config={siteConfig} />

      {/* Operational corporate/coaching staff array mapping */}
      <Team config={siteConfig} />

      {/* Standardized backend-less contact input form */}
      <ContactForm config={siteConfig} />

      {/* Final transactional action accelerator button panel */}
      <CTA config={siteConfig} />

      {/* Corporate directory indexing and footprint validation data layout */}
      <Footer config={siteConfig} />
    </main>
  );
}