// src/components/ContactForm.tsx
"use client";

import { useState } from 'react';
import { SiteConfig } from '@/lib/types';

interface ContactFormProps {
  config: SiteConfig;
}

export default function ContactForm({ config }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build the mailto parameters cleanly using form states
    const subject = encodeURIComponent(`Website Inquiry: ${config.businessName}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );
    
    // Redirect to trigger the user's default email app
    window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact Us
          </h2>
          <div 
            className="h-1 w-20 mx-auto mt-4 rounded" 
            style={{ backgroundColor: config.primaryColor }}
          />
          <p className="mt-4 text-base text-gray-500">
            Have a question or want to book a service? Drop us a message below.
          </p>
        </div>

        {/* Contact Form Element */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 shadow-inner focus:border-gray-400 focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 shadow-inner focus:border-gray-400 focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 shadow-inner focus:border-gray-400 focus:outline-none transition-colors resize-none"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <div>
            <button
              type="submit"
              style={{ backgroundColor: config.primaryColor }}
              className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-xl text-white shadow-md hover:opacity-90 transition-all transform active:scale-95 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}