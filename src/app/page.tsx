// src/app/page.tsx
import { siteConfig } from '@/lib/config';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased selection:bg-blue-500 selection:text-white">
      <Navigation config={siteConfig} />
      <Hero config={siteConfig} />
      <Services config={siteConfig} />
      <About config={siteConfig} />
      <Team config={siteConfig} />
      <Testimonials config={siteConfig} />
      <ContactForm config={siteConfig} />
      <CTA config={siteConfig} />
      <Footer config={siteConfig} />
    </main>
  );
}