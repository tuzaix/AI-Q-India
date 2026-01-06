'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';

/**
 * About Us Page Component
 * Provides information about AI-Q India's mission and vision.
 */
export default function AboutPage() {
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
            Empowering India's AI Future
          </motion.h1>
          <p className="text-xl text-gray-400">
            Bridging the gap between traditional skills and the AI-driven economy.
          </p>
        </header>

        {/* Content Sections */}
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 space-y-4"
          >
            <Target className="text-accent w-10 h-10" />
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To provide every professional in India with a clear, data-driven roadmap to navigate the AI revolution successfully.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 space-y-4"
          >
            <Users className="text-primary w-10 h-10" />
            <h3 className="text-xl font-bold">Our Community</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted by 50,000+ professionals across India's leading tech hubs, from Bangalore to Hyderabad.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 space-y-4"
          >
            <Award className="text-secondary w-10 h-10" />
            <h3 className="text-xl font-bold">Our Standard</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developed by AI experts and industry veterans to meet global benchmarks for AI readiness.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <section className="glass-card p-8 space-y-6">
          <h2 className="text-3xl font-bold">Why AI-Q India?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              India is at the forefront of the global digital transformation. As AI continues to reshape industries, the need for a standardized way to measure and improve AI readiness has never been greater.
            </p>
            <p>
              AI-Q India was born out of a desire to empower the Indian workforce. Our assessment doesn't just give you a score; it provides insights into your technical proficiency, adaptability, and ethical understanding of AI.
            </p>
            <p>
              We believe that with the right guidance, the AI era represents the greatest opportunity for professional growth in India's history. Join us in building a future-ready nation.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8 border-t border-white/10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI-Q India. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
