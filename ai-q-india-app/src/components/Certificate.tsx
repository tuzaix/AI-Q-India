'use client';

import React from 'react';
import { Archetype } from '@/lib/assessment';
import { ShieldCheck, Award } from 'lucide-react';

interface CertificateProps {
  userName: string;
  result: Archetype;
  date: string;
}

export const Certificate = React.forwardRef<HTMLDivElement, CertificateProps>(({ userName, result, date }, ref) => {
  const [certId, setCertId] = React.useState('');
  const [currentYear, setCurrentYear] = React.useState(2026); // Stable default
  const [displayDate, setDisplayDate] = React.useState('');

  React.useEffect(() => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCertId(`AIQ-${now.getFullYear()}-${Math.random().toString(36).substring(7).toUpperCase()}`);
    
    // If date prop is provided, use it, otherwise format current date
    if (date) {
      setDisplayDate(date);
    } else {
      setDisplayDate(now.toLocaleDateString('en-IN', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }));
    }
  }, [date]);

  if (!certId) return null; // Avoid rendering on server to prevent hydration mismatch

  return (
    <div 
      ref={ref}
      className="w-[800px] h-[600px] p-10 relative overflow-hidden flex flex-col items-center"
      style={{ 
        fontFamily: 'sans-serif',
        backgroundColor: '#050b2c',
        color: '#ffffff',
        border: '12px solid rgba(245, 158, 11, 0.2)'
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div 
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[100px]" 
          style={{ backgroundColor: '#4f46e5' }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px]" 
          style={{ backgroundColor: '#9333ea' }}
        />
      </div>

      {/* Header */}
      <div className="text-center space-y-2 relative z-10 mb-4">
        <div className="flex justify-center gap-4 mb-2">
          <ShieldCheck style={{ color: '#f59e0b' }} size={40} />
          <Award style={{ color: '#f59e0b' }} size={40} />
        </div>
        <h1 className="text-3xl font-black tracking-widest uppercase" style={{ color: '#f59e0b' }}>
          AI-Q India Certified
        </h1>
        <p className="text-sm font-medium" style={{ color: '#9ca3af' }}>
          FUTURE-READY ASSESSMENT {currentYear}
        </p>
      </div>

      {/* Content */}
      <div className="text-center relative z-10 flex-grow flex flex-col justify-center w-full px-12">
        <div className="mb-6">
          <p className="text-lg italic mb-2" style={{ color: '#9ca3af' }}>This is to certify that</p>
          <h2 className="text-4xl font-bold underline underline-offset-4" style={{ color: '#ffffff', textDecorationColor: 'rgba(245, 158, 11, 0.5)' }}>
            {userName || 'Global Professional'}
          </h2>
        </div>

        <div>
          <p className="text-lg mb-2" style={{ color: '#9ca3af' }}>has been recognized as</p>
          <div className="inline-block px-8 py-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <h3 className="text-5xl font-black uppercase tracking-tighter leading-tight" style={{ 
              backgroundImage: 'linear-gradient(to right, #4f46e5, #9333ea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {result.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center relative z-20 mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="flex-1 text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: '#9ca3af' }}>Assessment Date</p>
          <p className="text-base font-bold" style={{ color: '#ffffff' }}>{displayDate}</p>
        </div>
        
        <div className="flex flex-col items-center gap-1 mx-4">
           <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ border: '2px solid rgba(245, 158, 11, 0.3)', backgroundColor: 'rgba(245, 158, 11, 0.05)' }}>
              <span className="font-black text-xs rotate-12" style={{ color: '#f59e0b' }}>SEAL</span>
           </div>
        </div>

        <div className="flex-1 text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: '#9ca3af' }}>Certificate ID</p>
          <p className="font-mono text-sm font-bold" style={{ color: '#f59e0b' }}>{certId}</p>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none" style={{ borderTop: '4px solid rgba(245, 158, 11, 0.3)', borderLeft: '4px solid rgba(245, 158, 11, 0.3)' }} />
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ borderTop: '4px solid rgba(245, 158, 11, 0.3)', borderRight: '4px solid rgba(245, 158, 11, 0.3)' }} />
      <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none" style={{ borderBottom: '4px solid rgba(245, 158, 11, 0.3)', borderLeft: '4px solid rgba(245, 158, 11, 0.3)' }} />
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none" style={{ borderBottom: '4px solid rgba(245, 158, 11, 0.3)', borderRight: '4px solid rgba(245, 158, 11, 0.3)' }} />
    </div>
  );
});

Certificate.displayName = 'Certificate';
