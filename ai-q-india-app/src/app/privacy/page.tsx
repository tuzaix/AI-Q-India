'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

/**
 * Privacy Policy Page Component
 * Standard privacy policy content for AI-Q India.
 */
export default function PrivacyPage() {
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
            Privacy Policy
          </motion.h1>
          <p className="text-xl text-gray-400">
            Your trust is our priority. Learn how we handle your data.
          </p>
        </header>

        {/* Policy Content */}
        <div className="glass-card p-8 space-y-8 text-gray-300">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <ShieldCheck className="text-accent" />
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p>
              AI-Q India ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our assessment platform.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Eye className="text-primary" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name (used for generating your certificate).</li>
              <li>Your assessment responses (used to calculate your score).</li>
              <li>Usage data and technical information via Google Analytics (to improve our service).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Lock className="text-secondary" />
              <h2 className="text-2xl font-bold">How We Use Your Data</h2>
            </div>
            <p>
              Your data is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Generating and personalizing your AI-Q certificate.</li>
              <li>Providing you with personalized career insights.</li>
              <li>Aggregating anonymized data for industry benchmarking.</li>
              <li>Improving the performance and user experience of our platform.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <FileText className="text-accent" />
              <h2 className="text-2xl font-bold">Data Security</h2>
            </div>
            <p>
              We implement industry-standard security measures to protect your information. Your assessment data is processed securely, and we do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl font-bold text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <span className="text-accent">support@aiqindia.com</span>.
            </p>
            <p className="text-sm text-gray-500 italic">
              Last Updated: January 6, 2026
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8 border-t border-white/10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AI-Q India. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
