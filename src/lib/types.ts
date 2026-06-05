// src/lib/types.ts

export interface SiteConfig {
  businessName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  googleMapsUrl?: string;

  primaryColor: string;
  secondaryColor?: string;
  heroImage?: string;
  logoUrl?: string;

  metaDescription: string;
  metaKeywords?: string[];

  sections: {
    services: boolean;
    about: boolean;
    team: boolean;
    testimonials: boolean;
  };

  services?: Service[];
  about?: AboutSection;
  team?: TeamMember[];
  testimonials?: Testimonial[];

  ctaPrimary: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface AboutSection {
  headline: string;
  body: string;
  values?: string[];
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  authorTitle?: string;
}