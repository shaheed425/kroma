import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonialsData';

export default function TestimonialsPage({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#F7F7F5] text-[#111111] overflow-y-auto min-h-screen select-none font-sans"
    >
      {/* TOP DEDICATED PAGE NAVIGATION BAR */}
      <div className="sticky top-0 z-40 bg-[#F7F7F5]/90 backdrop-blur-md border-b border-black/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="font-syne text-xl font-extrabold uppercase text-[#111111]">
              KROMA
            </span>
            <span className="font-mono-spec text-xs font-bold text-[#B91C1C] uppercase tracking-widest">
              // CLIENT STORIES
            </span>
          </div>

          {/* Clean Rectangular Back Button */}
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-4 py-2 rounded-md border border-black/20 bg-white hover:bg-[#B91C1C] hover:border-[#B91C1C] hover:text-white text-zinc-900 font-sans text-xs font-bold uppercase transition-all shadow-sm cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME</span>
          </button>
        </div>
      </div>

      {/* DEDICATED PAGE HEADER */}
      <div className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-12">
        
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono-spec text-xs text-[#B91C1C] font-bold tracking-widest uppercase flex items-center space-x-2">
            <span className="w-2 h-2 rounded-none bg-[#B91C1C]" />
            <span>CLIENT STORIES ARCHIVE</span>
          </span>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#111111] uppercase tracking-tight leading-none">
            TRUSTED BY <br />
            LEADERS<span className="text-[#B91C1C]">.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl">
            A collection of experiences, partnerships, and measurable outcomes from the brands and visionaries we've partnered with.
          </p>
        </div>

        {/* EDITORIAL MASONRY GRID OF TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-black/15 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group border-t-4 border-t-[#B91C1C]"
            >
              <div className="space-y-4">
                {/* Category Badge & Industry Tag */}
                <div className="flex items-center justify-between text-[11px] font-mono-spec font-bold uppercase tracking-wider text-zinc-500 border-b border-black/10 pb-3">
                  <span className="text-[#B91C1C] bg-[#B91C1C]/10 px-2.5 py-1 rounded-sm">
                    {item.category}
                  </span>
                  <span>{item.industry}</span>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-sm sm:text-base text-zinc-800 leading-relaxed font-medium pt-1">
                  “{item.quote}”
                </p>
              </div>

              {/* Client Info & Avatar Footer */}
              <div className="flex items-center space-x-4 pt-4 border-t border-black/10">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-black/15 shrink-0 bg-zinc-100">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm font-black text-[#111111] uppercase tracking-wider">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs text-zinc-600 font-semibold">
                    <span className="text-[#B91C1C]">{item.role}</span>
                  </p>
                  <p className="font-mono-spec text-[10px] text-zinc-500 uppercase">
                    {item.company}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BOTTOM BACK CTA BAR */}
        <div className="pt-12 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-sans text-xs text-zinc-600">
            SHOWCASING 6 VERIFIED AGENCY PARTNERSHIPS
          </div>
          <button
            onClick={onClose}
            className="flex items-center space-x-2 bg-[#B91C1C] hover:bg-[#991B1B] text-white px-7 py-3.5 rounded-md font-sans text-xs font-bold uppercase tracking-wide transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>RETURN TO HOMEPAGE</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
