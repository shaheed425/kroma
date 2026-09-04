import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Volume2 } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-50 flex items-center space-x-2 text-white/70 hover:text-[#E63946] transition-colors font-mono-spec text-xs uppercase tracking-widest"
          >
            <span>CLOSE SHOWREEL</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              <X size={16} />
            </div>
          </button>

          {/* Video / Reel Container */}
          <div className="relative w-full max-w-6xl aspect-video bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between p-6">
            {/* Background Graphic / Simulated High Fashion Reel */}
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity scale-105 animate-pulse" style={{ backgroundImage: `url('/images/hero_art.png')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>

            {/* Top Reel Header */}
            <div className="relative z-10 flex justify-between items-center font-mono-spec text-xs text-zinc-400">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-[#E63946] animate-ping" />
                <span className="text-white font-bold tracking-widest uppercase">KROMA MEDIA // REEL 2026</span>
              </div>
              <span className="hidden sm:block text-zinc-500 font-mono-spec">4K ULTRA HD • COLOR GRADE VERMILLION</span>
            </div>

            {/* Center Play Graphic */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-4">
              <div className="w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-2xl hover:scale-110 hover:border-[#E63946] transition-all cursor-pointer">
                <Play size={32} className="ml-1 text-[#E63946]" />
              </div>
              <p className="font-syne text-2xl font-bold tracking-tight text-white uppercase text-center">
                WE DON'T JUST MAKE NOISE.<br />
                <span className="font-garamond italic font-normal text-zinc-300">WE BUILD NARRATIVES THAT STICK.</span>
              </p>
            </div>

            {/* Bottom Controls Bar */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 font-mono-spec text-xs text-zinc-400">
              <div className="flex items-center space-x-4">
                <span>00:42 / 02:15</span>
                <div className="w-32 sm:w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#E63946]" />
                </div>
              </div>
              <div className="flex items-center space-x-2 text-zinc-300">
                <Volume2 size={14} className="text-[#E63946]" />
                <span>STEREO AUDIOPHILE SOUND</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
