import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenReel, onCursorEnter, onCursorLeave }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-screen w-full pt-20 sm:pt-24 pb-14 sm:pb-16 lg:pb-2 px-4 sm:px-12 lg:px-16 flex flex-col justify-between overflow-hidden bg-[#F3EFEA] text-[#111111] select-none"
    >
      {/* 1. SUNLIGHT LEAF SHADOW OVERLAY */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-35 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(0,0,0,0.18) 0%, transparent 45%), radial-gradient(circle at 85% 65%, rgba(0,0,0,0.12) 0%, transparent 40%), linear-gradient(135deg, rgba(0,0,0,0.06) 0%, transparent 60%)`,
          filter: 'blur(20px)'
        }}
      />

      {/* 2. OVERSIZED WATERMARK TEXT (BEHIND ARTWORK) - ELEVATED IN WHITE SPACE ON MOBILE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-8 sm:bottom-6 lg:-bottom-4 left-0 right-0 w-full z-[1] pointer-events-none select-none overflow-hidden px-4 sm:px-8 text-center"
      >
        <h2 className="font-syne text-[clamp(2.4rem,7.8vw,6.8rem)] font-extrabold uppercase tracking-[0.14em] leading-none text-[#E2D8C8] whitespace-nowrap inline-block subpixel-antialiased">
          KROMA
        </h2>
      </motion.div>

      {/* 3. MAIN HERO GRID (LEFT TEXT + RIGHT GRAPHIC COLLAGE) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto relative z-10 pt-2 pb-4">
        
        {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAs */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-6 z-20">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-playfair text-[clamp(2.1rem,8vw,5.2rem)] font-medium text-[#111111] leading-[1.04] tracking-tight"
          >
            Make Brands <br />
            <span className="italic text-[#C82323] font-normal">Impossible</span> <br />
            To Ignore<span className="text-[#C82323] font-normal">.</span>
          </motion.h1>

          {/* Subheading Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-sans text-xs sm:text-base text-[#555555] max-w-md leading-relaxed font-normal"
          >
            We fuse bold storytelling with data-backed strategy, turning passive scrollers into loyal customers — across digital and traditional landscapes alike.
          </motion.p>

          {/* Two Distinct Sharp Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
          >
            {/* Primary Solid Red CTA */}
            <a
              href="#contact"
              onMouseEnter={() => onCursorEnter && onCursorEnter('TALK')}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#C82323] hover:bg-[#A61C1C] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-none font-sans text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group z-20 relative"
            >
              <span>LET'S TALK</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Outlined Red CTA - SOLID BACKGROUND SO WATERMARK DOES NOT BLEED THROUGH */}
            <a
              href="#works"
              onMouseEnter={() => onCursorEnter && onCursorEnter('WORK')}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-[#F3EFEA] hover:bg-[#C82323] text-[#C82323] hover:text-white border border-[#C82323]/60 hover:border-[#C82323] px-4 sm:px-6 py-2.5 sm:py-3 rounded-none font-sans text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group z-20 relative"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: LAYERED EDITORIAL GRAPHIC COLLAGE (MATCHING USER REFERENCE IMAGE EXACTLY ON MOBILE & DESKTOP) */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end relative min-h-[360px] sm:min-h-[480px] lg:min-h-[520px] w-full pt-2 lg:pt-0 overflow-visible">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[520px] h-[360px] sm:h-[480px] lg:h-[510px] flex items-center justify-center mx-auto lg:mr-0"
          >
            {/* 1. Background Off-White Panel */}
            <div className="absolute right-[0px] sm:right-[25px] top-[0px] w-[180px] sm:w-[240px] h-[250px] sm:h-[340px] bg-[#EAE4DA] z-[1] pointer-events-none shadow-sm" />

            {/* 2. Deep Terracotta Red Vertical Block */}
            <div className="absolute right-[60px] sm:right-[110px] top-[10px] sm:top-[15px] w-[90px] sm:w-[125px] h-[320px] sm:h-[440px] bg-[#A2291B] z-[2] pointer-events-none shadow-md" />

            {/* 3. Top-Right Staircase Card */}
            <div className="absolute right-[0px] sm:right-[25px] top-[15px] sm:top-[25px] w-[140px] sm:w-[185px] h-[140px] sm:h-[185px] z-[3] shadow-lg overflow-hidden border border-black/10">
              <img
                src="/images/hero_staircase.png"
                alt="Architectural Staircase"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>

            {/* 4. Circular Spinning Text Badge */}
            <div className="absolute right-[-10px] sm:right-[-5px] top-[-8px] sm:top-[10px] z-[6] w-18 h-18 sm:w-28 sm:h-28 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_24s_linear_infinite]">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="font-mono-spec text-[8px] font-bold fill-[#C82323] tracking-[0.12em] uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    • BOLD STORYTELLING • NARRATIVES THAT STICK !
                  </textPath>
                </text>
              </svg>
            </div>

            {/* 5. Middle Composite Split Card (Brand Strategy 01 + Interior Chair) */}
            <div className="absolute right-[0px] sm:right-[15px] top-[170px] sm:top-[235px] w-[220px] sm:w-[285px] h-[115px] sm:h-[155px] z-[4] shadow-xl flex overflow-hidden border border-black/10">
              {/* Left Dark Box */}
              <div className="w-[45%] bg-[#151515] text-white p-2.5 sm:p-4 flex flex-col justify-between select-none">
                <div className="font-sans text-[9px] sm:text-xs font-bold tracking-wider uppercase leading-tight">
                  BRAND <br /> STRATEGY
                </div>
                <div className="font-mono-spec text-xs sm:text-lg font-bold text-[#C82323]">
                  01
                </div>
              </div>
              {/* Right Photo Box */}
              <div className="w-[55%] relative overflow-hidden bg-zinc-900">
                <img
                  src="/images/hero_chair.png"
                  alt="Minimalist Interior"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
              </div>
            </div>

            {/* 6. Bottom Right DIGITAL GROWTH Badge with Sparkline */}
            <div className="absolute right-[10px] sm:right-[25px] bottom-[12px] sm:bottom-[30px] z-[5] flex items-center space-x-1 font-sans text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-[#111111]">
              <span>DIGITAL GROWTH</span>
              <svg className="w-3.5 h-2.5 sm:w-5 sm:h-3.5 text-[#C82323]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 13 L8 7 L13 11 L22 2" />
                <path d="M16 2 H22 V8" />
              </svg>
            </div>

            {/* 7. FOREGROUND CUTOUT PORTRAIT OF MAN - ANCHORED TO FAR LEFT MATCHING REFERENCE IMAGE 2 EXACTLY */}
            <div className="absolute left-[-40px] xs:left-[-30px] sm:left-auto sm:right-[170px] lg:right-[190px] bottom-0 w-[230px] sm:w-[360px] lg:w-[400px] z-[10] pointer-events-none select-none">
              <img
                src="/images/hero_man_transparent_left.png"
                alt="Kroma Media Hero Visual"
                className="w-full h-auto object-contain object-bottom filter contrast-105"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                }}
              />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
