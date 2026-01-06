'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Trophy, ChevronRight, Download, AlertCircle } from 'lucide-react';
import { QUESTIONS, calculateResult, Archetype, getAssessmentQuestions, Question } from '@/lib/assessment';
import RadarChart from '@/components/RadarChart';
import { Certificate } from '@/components/Certificate';
import html2canvas from 'html2canvas';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026); // Use a stable default
  const [formattedDate, setFormattedDate] = useState('');
  
  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
    setFormattedDate(new Date().toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }));
  }, []);

  const [step, setStep] = useState<'landing' | 'quiz' | 'analyzing' | 'result'>('landing');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ tech: 0, adapt: 0, ethics: 0 });
  const [result, setResult] = useState<Archetype | null>(null);
  const [userName, setUserName] = useState('');
  const [showNameError, setShowNameError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const startQuiz = () => {
    if (!userName.trim()) {
      setShowNameError(true);
      return;
    }
    // Randomly pick 4 from each category (Total 12 questions)
    const selected = getAssessmentQuestions(4);
    setActiveQuestions(selected);
    setStep('quiz');
  };

  const handleAnswer = (tech: number, adapt: number, ethics: number = 0) => {
    const newScores = {
      tech: scores.tech + tech,
      adapt: scores.adapt + adapt,
      ethics: scores.ethics + ethics
    };
    setScores(newScores);

    if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('analyzing');
      // Simulate analysis wait for "Magic Wait" effect
      setTimeout(() => {
        const finalResult = calculateResult(
          newScores.tech, 
          newScores.adapt, 
          newScores.ethics,
          activeQuestions.length
        );
        setResult(finalResult);
        setStep('result');
      }, 3000);
    }
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current || isDownloading) return;
    
    try {
      setIsDownloading(true);
      // Give the browser a moment to ensure the certificate is rendered
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#050b2c',
        useCORS: true,
        logging: false,
        allowTaint: true,
        ignoreElements: (element) => {
          // Ignore the RadarChart in the certificate because SVG gradients/filters 
          // often trigger these color issues in html2canvas
          return element.tagName.toLowerCase() === 'svg' && element.closest('[data-certificate-container]') !== null;
        },
        onclone: (clonedDoc) => {
          // Ensure the cloned element is visible for html2canvas
          const el = clonedDoc.querySelector('[data-certificate-container]');
          if (el) {
            (el as HTMLElement).style.position = 'relative';
            (el as HTMLElement).style.left = '0';
            (el as HTMLElement).style.top = '0';
            (el as HTMLElement).style.visibility = 'visible';
            (el as HTMLElement).style.display = 'block';
            (el as HTMLElement).style.zIndex = '9999';
          }

          // CRITICAL: Strip any oklab/lab/oklch colors that crash html2canvas
          // We also remove CSS variables that might contain these functions
          const allElements = clonedDoc.getElementsByTagName('*');
          for (let i = 0; i < allElements.length; i++) {
            const element = allElements[i] as HTMLElement;
            
            // 1. Remove style attribute if it contains 'lab(' or 'oklch('
            const styleAttr = element.getAttribute('style');
            if (styleAttr && (styleAttr.includes('lab(') || styleAttr.includes('oklch(') || styleAttr.includes('oklab('))) {
              element.setAttribute('style', styleAttr.replace(/color:[^;]+lab\([^)]+\);?/g, 'color:white;')
                                                   .replace(/background(-color)?:[^;]+lab\([^)]+\);?/g, 'background-color:transparent;')
                                                   .replace(/border(-color)?:[^;]+lab\([^)]+\);?/g, 'border-color:gray;'));
            }

            // 2. Check computed styles
            try {
              const style = window.getComputedStyle(element);
              ['color', 'backgroundColor', 'borderColor', 'fill', 'stroke', 'stopColor'].forEach(prop => {
                const val = (style as any)[prop];
                if (val && (val.includes('lab(') || val.includes('oklch(') || val.includes('oklab('))) {
                  element.style.setProperty(prop, 'inherit', 'important');
                }
              });
            } catch (e) {
              // Ignore errors for elements that don't support getComputedStyle
            }
          }

          // 3. Special handling for the root and body in the clone
          clonedDoc.documentElement.style.setProperty('--tw-ring-color', 'transparent', 'important');
          clonedDoc.documentElement.style.setProperty('--tw-shadow-color', 'transparent', 'important');
          clonedDoc.body.style.background = '#050b2c';
        }
      });
      
      const link = document.createElement('a');
      link.download = `AI-Q-Certificate-${userName.replace(/\s+/g, '-') || 'Professional'}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Certificate generation failed:', error);
      alert('Failed to generate certificate. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const shareOnWhatsApp = () => {
    const text = `I just got certified as a "${result?.title}" on AI-Q India! Check your AI readiness here: ${window.location.origin}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const text = `I'm thrilled to share that I've been certified as a "${result?.title}" by AI-Q India. My AI-Q score shows high proficiency in ${result?.dimensionScores?.[0]?.label} and ${result?.dimensionScores?.[4]?.label}. #AIQIndia #FutureOfWork #CareerReadiness`;
    const url = window.location.origin;
    window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(text + '\n\n' + url)}`, '_blank');
  };

  const resetQuiz = () => {
    setStep('landing');
    setCurrentQuestion(0);
    setScores({ tech: 0, adapt: 0, ethics: 0 });
    setResult(null);
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#050b2c]" />; // Empty shell for SSR
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl w-full text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold border border-accent/30"
              >
                {currentYear} CAREER READINESS
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Will AI Replace You in <span className="text-gradient">{currentYear}?</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                Check your AI-Q Score now. Join 50,000+ professionals from <span className="text-white font-semibold">Infosys, TCS, and Wipro</span>.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto w-full px-4">
              <div className="w-full md:flex-1 space-y-2">
                <input
                  type="text"
                  placeholder="Enter Your Name (Required)"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    if (showNameError && e.target.value.trim()) setShowNameError(false);
                  }}
                  className={`w-full p-4 rounded-xl bg-white/5 border transition-all text-center md:text-left ${
                    showNameError ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/10 focus:border-accent/50'
                  } focus:outline-none`}
                />
              </div>
              <button 
                onClick={startQuiz}
                className="btn-primary text-xl flex items-center gap-2 group w-full md:w-auto justify-center"
              >
                Start Assessment
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
              {[
                { icon: Zap, label: "3 Min Test", desc: "Fast & Precise" },
                { icon: ShieldCheck, label: "Official Report", desc: "LinkedIn Ready" },
                { icon: Trophy, label: "Salary Insights", desc: "Market Benchmarks" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 text-left space-y-2">
                  <item.icon className="text-accent w-8 h-8" />
                  <h3 className="font-bold text-lg">{item.label}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'quiz' && activeQuestions.length > 0 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="max-w-2xl w-full glass-card p-8 space-y-8"
          >
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400 font-medium">
                <span>Question {currentQuestion + 1} of {activeQuestions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / activeQuestions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / activeQuestions.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold">{activeQuestions[currentQuestion].text}</h2>

            <div className="grid gap-4">
              {activeQuestions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option.techScore, option.adaptScore, option.ethicsScore)}
                  className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all flex justify-between items-center group"
                >
                  <span>{option.text}</span>
                  <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'analyzing' && (
          <motion.div
            key="analyzing"
            className="text-center space-y-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-4 border-secondary border-b-transparent rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="text-accent w-8 h-8 animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold animate-pulse">Analyzing your AI-Q...</h2>
              <div className="text-gray-400 space-y-1">
                <p className="text-sm">Comparing with Bangalore Tech Hub data...</p>
                <p className="text-sm">Benchmarking against Global AI Standards...</p>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Personality Card */}
              <div className="glass-card p-8 border-accent/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-accent text-black text-xs font-bold px-2 py-1 rounded rotate-12 group-hover:rotate-0 transition-transform">
                    CERTIFIED
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-accent font-bold tracking-widest text-sm uppercase">Your AI Archetype</p>
                    <h2 className="text-4xl font-extrabold">{result.title}</h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {result.description}
                  </p>

                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Salary Potential</span>
                      <span className="text-green-400 font-bold">+30% Above Average</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Regional Rank</span>
                      <span className="text-white font-medium">Top 5% in Bangalore</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Radar Chart Section */}
              <div className="glass-card p-8 flex flex-col items-center justify-center space-y-6">
                <h3 className="text-xl font-bold">AI Competency Matrix</h3>
                {result.dimensionScores && (
                  <RadarChart scores={result.dimensionScores} />
                )}
                <div className="text-center text-sm text-gray-400">
                  You excel in <span className="text-primary font-bold">{result.dimensionScores?.[0]?.label || 'Strategy'}</span> and <span className="text-secondary font-bold">{result.dimensionScores?.[4]?.label || 'Adaptability'}</span>.
                </div>
              </div>
            </div>

            {/* Actions & Sharing */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Claim Your Digital Badge</h3>
                <p className="text-gray-400 text-lg">Share your results with your network and challenge your colleagues to see who's truly ready for the AI revolution.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={shareOnWhatsApp}
                    className="bg-[#25D366] text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:brightness-110 transition-all text-sm"
                  >
                    WhatsApp
                    <span className="text-[10px] opacity-80">Challenge Friends</span>
                  </button>
                  <button 
                    onClick={shareOnLinkedIn}
                    className="bg-[#0077B5] text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 hover:brightness-110 transition-all text-sm"
                  >
                    LinkedIn
                    <span className="text-[10px] opacity-80">Add to Profile</span>
                  </button>
                </div>
                <button 
                  onClick={downloadCertificate}
                  disabled={isDownloading}
                  className={`w-full bg-accent text-black p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Download className={isDownloading ? 'animate-bounce' : ''} size={20} />
                  {isDownloading ? 'Generating Certificate...' : 'Download Official Certificate'}
                </button>
                <button 
                  onClick={resetQuiz}
                  className="w-full border border-white/20 p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                >
                  Retake Assessment
                </button>
              </div>
            </div>

            {/* 
            <div className="p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl border border-white/10 text-center">
              <p className="text-lg">
                <strong>Exclusive Offer for {result.title}s:</strong> Get your detailed 15-page AI Career Roadmap for just <span className="text-accent font-bold">₹99</span>.
              </p>
              <button 
                onClick={() => window.open('https://buy.stripe.com/test_placeholder', '_blank')}
                className="mt-4 btn-primary"
              >
                Download My Roadmap
              </button>
            </div>
            */}

            {/* Hidden Certificate for Generation */}
            {result && (
              <div 
                className="fixed left-[-9999px] top-[-9999px]"
                data-certificate-container
              >
                <Certificate 
                  ref={certificateRef}
                  userName={userName}
                  result={result}
                  date={formattedDate}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Links */}
      {step === 'landing' && (
        <footer className="mt-16 py-8 border-t border-white/10 w-full max-w-4xl flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-500">
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <p className="w-full text-center mt-4 opacity-50">&copy; {currentYear} AI-Q India. All rights reserved.</p>
        </footer>
      )}

      {/* Custom Error Modal */}
      <AnimatePresence>
        {showNameError && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNameError(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm glass-card p-8 text-center space-y-6 border-red-500/30"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="text-red-500 w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Name Required</h3>
                <p className="text-gray-400">
                  Please enter your name to personalize your AI-Q certificate and assessment results.
                </p>
              </div>
              <button
                onClick={() => setShowNameError(false)}
                className="w-full btn-primary py-3"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
