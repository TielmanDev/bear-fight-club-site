import { SiteConfig } from './types';

export const siteConfig: SiteConfig & { [key: string]: any } = {
  businessName: "BFC",
  fullName: "Bear Fight Club Academy",
  tagline: "RESPECT ALL FEAR NONE",
  description: "Bear Fight Club Academy in George offers classes in wrestling, jiu-jitsu, boxing & mma for all ages. Kids can compete and earn both provincial and national colours.",
  phone: "+27 66 23 98 145",
  email: "contact@bearfightclub.co.za",
  whatsapp: "https://wa.me/27662398145",
  address: "George, Western Cape, South Africa",
  googleMapsUrl: "https://maps.google.com/?q=George+Western+Cape",

  primaryColor: "#00A3FF", 
  logoUrl: "images/bfc-logo.png",
  heroImage: "images/hero-fighter.png",
  metaDescription: "Bear Fight Club Academy in George offers classes in Wrestling, Jiu-Jitsu, Boxing and MMA.",

  sections: {
    services: true,
    about: true,
    team: true,
    testimonials: false,
  },

  services: [
    { id: "boxing", name: "BOXING", icon: "boxing", description: "Seniors and High School kids boxing classes." },
    { id: "wrestling", name: "WRESTLING", icon: "wrestling", description: "Classes for kids ages 4+ up to Seniors." },
    { id: "bjj", name: "BJJ / JIU-JITSU", icon: "bjj", description: "Technique, grappling and competition preparation." },
    { id: "mma", name: "MMA", icon: "mma", description: "Mixed Martial Arts combining wrestling, striking, and grappling." },
    { id: "conditioning", name: "STRENGTH & CONDITIONING", icon: "strength", description: "Group fitness, personal 1-on-1, and sports conditioning." },
  ],

  about: {
    headline: "OUR APPROACH",
    body: "We believe in building strength, discipline, and respect. Training gear requires no pockets, zips, or buttons. High school and adult fighter classes require proper padded 12oz, 14oz, or 16oz boxing gloves and a mouth guard.",
    values: ["Kids Classes (Ages 4+)", "Group Fitness", "Personal 1 on 1 Training", "Sports Conditioning"],
  },

  team: [
    { 
      id: "john-doe", 
      name: "John Doe", 
      title: "Head MMA & Wrestling Coach", 
      bio: "Leads the senior and high school mixed martial arts fighters. Specializes in wrestling takedowns, striking combinations, and competition training.", 
      image: "images/JohnDoe.png" 
    },
    { 
      id: "jane-doe", 
      name: "Jane Doe", 
      title: "BJJ & Kids Program Lead", 
      bio: "Coordinates the youth grappling academies. Specializes in Brazilian Jiu-Jitsu technique, group fitness, and building character in kids ages 4 and up.", 
      image: "images/JaneDoe.png" 
    }
  ],

  pricing: {
    registration: "R200.00 once off",
    monthly: "R700.00 per month"
  },

  schedule: [
    { title: "Kids age 4 to 7 years", days: "Tuesdays & Thursdays", time: "14h00 - 15h00" },
    { title: "Kids age 8 to 13 years", days: "Tuesdays & Thursdays", time: "15h00 - 17h00" },
    { title: "Senior & High School Kids", days: "Mondays & Wednesdays", time: "17h15 - 19h00" },
    { title: "Senior & High School Kids", days: "Tuesdays & Thursdays", time: "18h15 - 19h30" }
  ],
  
  ctaPrimary: "BOOK A FREE TRIAL",
};