'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Contact Us Page Component
 * Allows users to reach out for support or inquiries.
 */
export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[#050b2c] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Assessment
        </Link>

        {/* Header */}
        <header className="space-y-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-gray-400">
            Have questions? We're here to help you on your AI journey.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 glass-card p-4">
                <Mail className="text-accent w-6 h-6 shrink-0" />
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-gray-400 text-sm">support@aiqindia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 glass-card p-4">
                <MapPin className="text-primary w-6 h-6 shrink-0" />
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p className="text-gray-400 text-sm">Tech Park, Outer Ring Road<br />Bangalore, Karnataka 560103</p>
                </div>
              </div>
              <div className="flex items-start gap-4 glass-card p-4">
                <MessageSquare className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <p className="font-bold">Chat Support</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Send className="text-green-500 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none transition-all resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full btn-primary py-3 flex items-center justify-center gap-2 font-bold"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8 border-t border-white/10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI-Q India. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
