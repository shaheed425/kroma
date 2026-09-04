import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // 1.6s smooth loading duration
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(100, Math.floor((step / steps) * 100));
      setProgress(current);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-[#F8F8F6] flex flex-col justify-between p-8 md:p-16 text-[#0A0A0B] select-none"
    >
      {/* Top Header */}
      <div className="flex justify-between items-center font-mono-spec text-[11px] text-zinc-500 uppercase tracking-widest">
        <span>KROMA MEDIA GROUP</span>
        <span>ISSUE N° 2026</span>
      </div>

      {/* Center Branding & Progress */}
      <div className="my-auto space-y-6 max-w-3xl">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter text-[#0A0A0B]"
          >
            KROMA<span className="text-[#E63946]">.</span>
          </motion.h1>
        </div>

        <div className="flex items-end justify-between border-b border-black/10 pb-4">
          <p className="font-garamond italic text-xl sm:text-2xl text-zinc-600 font-light">
            Building narratives that stick.
          </p>
          <span className="font-mono-spec text-4xl sm:text-6xl font-light text-[#0A0A0B]">
            {progress < 10 ? `0${progress}` : progress}%
          </span>
        </div>

        {/* Minimalist Progress Line */}
        <div className="w-full h-[1px] bg-black/10 relative overflow-hidden">
          <motion.div
            className="h-full bg-[#E63946]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
      </div>

      {/* Bottom Specs */}
      <div className="flex justify-between items-center font-mono-spec text-[10px] text-zinc-500 uppercase tracking-widest">
        <span>NYC • LON • TYO</span>
        <span>INITIALIZING EXPERIENCE</span>
      </div>
    </motion.div>
  );
}
