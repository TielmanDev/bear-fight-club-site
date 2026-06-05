// src/lib/config.ts
import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  businessName: "Bear Fight Club",
  tagline: "Respect all, fear none",
  description: "Wrestling, jiu-jitsu, boxing & MMA classes for all ages in George.",
  phone: "+27 66 23 98 145",
  email: "contact@bearfightclub.co.za",
  whatsapp: "https://wa.me/27662398145",
  address: "19b Commercial Close, George East, 6539",
  googleMapsUrl: "https://maps.google.com/?q=19b+Commercial+Close+George+East",

  primaryColor: "#0080FF",
  heroImage: "/images/hero-placeholder.png",

  metaDescription: "Wrestling, jiu-jitsu, boxing & MMA classes for kids and adults in George, Western Cape.",

  sections: {
    services: true,
    about: true,
    team: true,
    testimonials: false,
  },

  services: [
    {
      id: "boxing",
      name: "Boxing",
      icon: "ti-zap",
      description: "High-intensity boxing training for all levels.",
    },
    {
      id: "mma",
      name: "MMA",
      icon: "ti-sword",
      description: "Mixed martial arts combining wrestling, striking, and grappling.",
    },
    {
      id: "jiu-jitsu",
      name: "Jiu-Jitsu",
      icon: "ti-shield",
      description: "Brazilian jiu-jitsu technique and competition preparation.",
    },
  ],

  about: {
    headline: "Our Approach",
    body: "We believe in building strength, discipline, and respect. Our coaches have years of experience...",
    values: ["Expert coaching", "Safe environment", "Community focus"],
  },

  team: [
    {
      id: "coach-1",
      name: "Coach Sarah",
      title: "Head Coach",
      bio: "10+ years boxing experience",
      image: "/images/team-1-placeholder.png",
    },
  ],

  testimonials: [],

  ctaPrimary: "Book a Free Trial",
};