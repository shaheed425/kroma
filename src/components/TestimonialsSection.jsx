import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

// Desktop static positions framing the central content from the left and right sides (100% clean headline space)
const PORTRAIT_POSITIONS = [
  // Left side cluster
  { id: 0, className: 'top-[4%] left-[2%] w-22 sm:w-26 lg:w-28 h-28 sm:h-34 lg:h-36 -rotate-2' },
  { id: 1, className: 'top-[26%] left-[10%] w-20 sm:w-24 lg:w-26 h-26 sm:h-32 lg:h-34 rotate-1' },
  { id: 2, className: 'top-[50%] left-[2%] w-22 sm:w-26 lg:w-28 h-28 sm:h-34 lg:h-36 rotate-2' },
  { id: 3, className: 'top-[72%] left-[9%] w-20 sm:w-24 lg:w-26 h-26 sm:h-32 lg:h-34 -rotate-1' },
  
  // Right side cluster
  { id: 4, className: 'top-[4%] right-[2%] w-22 sm:w-26 lg:w-28 h-28 sm:h-34 lg:h-36 rotate-1' },
  { id: 5, className: 'top-[26%] right-[10%] w-20 sm:w-24 lg:w-26 h-26 sm:h-32 lg:h-34 -rotate-2' },
  { id: 6, className: 'top-[50%] right-[2%] w-22 sm:w-26 lg:w-28 h-28 sm:h-34 lg:h-36 -rotate-1' },
  { id: 7, className: 'top-[72%] right-[9%] w-20 sm:w-24 lg:w-26 h-26 sm:h-32 lg:h-34 rotate-2' },
];

export default function TestimonialsSection({ onOpenTestimonialsPage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5.5s unless hovered or manually clicked
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  const handleSelectClient = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 bg-black text-white border-b border-white/10 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Vertical Guide Lines Background Pattern */}
      <div className="absolute inset-0 max-w-7xl mx-auto grid grid-cols-6 sm:grid-cols-12 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-white/[0.05] h-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 min-h-[560px] lg:min-h-[620px] flex flex-col justify-between">
        
        {/* DESKTOP STATIC EDITORIAL PORTRAIT WALL (Framing central text from left and right sides) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
          {PORTRAIT_POSITIONS.map((pos) => {
            const item = TESTIMONIALS[pos.id];
            if (!item) return null;
            const isSelected = activeIndex === pos.id;

            return (
              <div
                key={item.id}
                className={`absolute ${pos.className} pointer-events-auto`}
              >
                <button
                  onClick={() => handleSelectClient(pos.id)}
                  className={`w-full h-full rounded-xl overflow-hidden border transition-all duration-500 shadow-sm cursor-pointer group relative ${
                    isSelected
                      ? 'border-2 border-[#B91C1C] ring-4 ring-[#B91C1C]/25 shadow-xl scale-110 opacity-100 z-30'
                      : 'border-white/15 bg-zinc-900 opacity-65 hover:opacity-100 grayscale-[25%] hover:grayscale-0 hover:scale-105 z-10'
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Red Indicator Dot on Active Portrait */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#B91C1C] shadow-sm animate-pulse" />
                  )}
                  {/* Hover Name Badge */}
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 bg-black/80 backdrop-blur-md text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity text-center truncate">
                    {item.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* CENTRAL EDITORIAL CONTENT AREA */}
        <div className="max-w-2xl mx-auto text-center space-y-8 pt-4 sm:pt-6 z-30">
          
          {/* Eyebrow & Main Editorial Headline */}
          <div className="space-y-3">
            <span className="font-mono-spec text-xs font-bold uppercase tracking-widest text-[#B91C1C] flex items-center justify-center space-x-2">
              <span className="w-2 h-2 rounded-none bg-[#B91C1C]" />
              <span>TESTIMONIALS</span>
            </span>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              TRUSTED BY LEADERS
            </h2>

            <p className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-zinc-300 tracking-tight uppercase leading-snug">
              FROM BRANDS THAT REFUSE TO BLEND IN<span className="text-[#B91C1C]">.</span>
            </p>

            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-md mx-auto pt-0.5">
              Real partnerships. Real results. See why ambitious brands choose Kroma.
            </p>
          </div>

          {/* DYNAMIC ACTIVE TESTIMONIAL DISPLAY */}
          <div className="min-h-[160px] flex flex-col items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 max-w-xl mx-auto"
              >
                {/* Active Testimonial Quote */}
                <blockquote className="font-sans text-base sm:text-lg lg:text-xl font-bold text-white leading-relaxed tracking-tight">
                  “ {activeTestimonial.quote} ”
                </blockquote>

                {/* Active Client Metadata */}
                <div className="space-y-1 font-sans">
                  <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wider">
                    — <span className="text-[#B91C1C]">{activeTestimonial.name}</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold">
                    {activeTestimonial.role} // <span className="text-white font-bold">{activeTestimonial.company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE & TABLET PORTRAIT SELECTOR ROW */}
          <div className="flex lg:hidden items-center justify-center flex-wrap gap-2 pt-2 z-30">
            {TESTIMONIALS.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectClient(idx)}
                  className={`w-10 h-13 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#B91C1C] scale-110 opacity-100 shadow-md ring-2 ring-[#B91C1C]/30'
                      : 'border-white/15 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>

          {/* RECTANGULAR READ SUCCESS STORIES CTA BUTTON */}
          <div className="pt-3 flex justify-center z-30">
            <button
              onClick={onOpenTestimonialsPage}
              className="flex items-center space-x-2.5 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-7 py-3.5 rounded-md font-sans text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
            >
              <span>READ SUCCESS STORIES</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
