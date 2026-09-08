import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenReel, onCursorEnter, onCursorLeave }) {
  return (
    <section
      id="hero"
      className="relative w-full bg-white text-black select-none font-sans pt-[clamp(95px,12vw,115px)] pb-6 px-[clamp(20px,5vw,32px)] lg:min-h-screen lg:flex lg:flex-col lg:justify-between lg:px-16 lg:pt-28 lg:pb-12 overflow-hidden flex flex-col justify-start lg:justify-between border-b border-black/10"
    >
      {/* 1. MAIN HERO LAYOUT (NATURAL DOCUMENT FLOW ON MOBILE, GRID ON DESKTOP) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center lg:my-auto relative z-10">
        
        {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20">

          {/* Top Tagline / Eyebrow Row */}
          <div className="flex items-start justify-between mb-[clamp(14px,3vw,22px)]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono-spec text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-600 uppercase pt-1"
            >
              IDEAS &nbsp;/&nbsp; STRATEGY &nbsp;/&nbsp; DESIGN
            </motion.div>
          </div>

          {/* Main Headline: "Make Brands Impossible To Ignore." */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
            className="text-[clamp(2.1rem,8.2vw,4.5rem)] lg:text-[clamp(3.2rem,5.5vw,4.5rem)] leading-[1.02] tracking-tight font-medium text-black mb-[clamp(14px,3vw,22px)]"
          >
            {/* Line 1: Make Brands */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: {
                    y: '0%',
                    opacity: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="font-display font-extrabold text-black tracking-tight inline-block"
              >
                Make Brands
              </motion.span>
            </span>

            {/* Line 2: Impossible (Italic Accent with Underline) */}
            <span className="block overflow-hidden py-0.5 relative">
              <motion.span
                variants={{
                  hidden: { y: '100%', opacity: 0, scale: 0.96 },
                  visible: {
                    y: '0%',
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ scale: 1.03, rotate: -1 }}
                onMouseEnter={() => onCursorEnter && onCursorEnter('BOLD')}
                onMouseLeave={() => onCursorLeave && onCursorLeave()}
                className="font-garamond italic font-normal text-black inline-block relative cursor-pointer select-none transition-transform duration-300"
              >
                Impossible
                {/* Animated Hand-drawn Calligraphic SVG Underline */}
                <motion.svg
                  className="absolute -bottom-1.5 left-0 w-full h-[14px] overflow-visible text-black pointer-events-none"
                  viewBox="0 0 240 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.path
                    d="M 3 14 C 45 4, 115 16, 237 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    variants={{
                      hidden: { pathLength: 0, opacity: 0 },
                      visible: {
                        pathLength: 1,
                        opacity: 0.9,
                        transition: {
                          pathLength: { delay: 0.6, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                          opacity: { delay: 0.6, duration: 0.2 },
                        },
                      },
                    }}
                  />
                </motion.svg>
              </motion.span>
            </span>

            {/* Line 3: To Ignore. */}
            <span className="block overflow-hidden py-0.5">
              <motion.span
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: {
                    y: '0%',
                    opacity: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="font-display font-extrabold text-black tracking-tight inline-block"
              >
                To Ignore
                <motion.span
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.7, duration: 0.35, type: 'spring', stiffness: 350 },
                    },
                  }}
                  className="inline-block text-black font-normal ml-0.5"
                >
                  .
                </motion.span>
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheading Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-xs sm:text-base text-zinc-700 max-w-md font-normal leading-relaxed mb-[clamp(20px,4vw,30px)]"
          >
            We fuse bold storytelling with data-backed strategy, turning passive scrollers into loyal customers — across digital and traditional landscapes alike.
          </motion.p>          {/* Action Buttons (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-[clamp(45px,10vw,75px)]"
          >
            {/* Primary Solid Black CTA with Glassmorphism Hover */}
            <a
              href="#contact"
              onMouseEnter={() => onCursorEnter && onCursorEnter('TALK')}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-black text-white hover:bg-black/85 hover:backdrop-blur-md hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02] px-5 sm:px-8 py-3 sm:py-4 rounded-none font-sans text-[11px] sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Outlined Glassmorphism CTA */}
            <a
              href="#works"
              onMouseEnter={() => onCursorEnter && onCursorEnter('WORK')}
              onMouseLeave={() => onCursorLeave && onCursorLeave()}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/40 backdrop-blur-md border border-black/30 hover:bg-white/80 hover:border-black hover:shadow-lg hover:scale-[1.02] text-black px-5 sm:px-8 py-3 sm:py-4 rounded-none font-sans text-[11px] sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 group cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* MOBILE HERO VISUAL (ELEVATED UPWARDS FOR CLEAN RESPONSIVE FIT) */}
          <div className="relative w-full mx-auto max-w-[680px] h-[400px] xs:h-[480px] sm:h-[560px] lg:hidden z-1 overflow-hidden flex items-end justify-center mb-0 -mt-6 sm:-mt-10">
            <div className="relative w-full h-full">
              {/* Main Image */}
              <img
                src="/images/hero_exact.webp"
                alt="KROMA Hero Visual"
                className="w-full h-full object-cover object-[center_12%] filter contrast-105 brightness-100"
              />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: TOP RIGHT VERTICAL EDITORIAL TAGLINE HOOK (DESKTOP) */}
        <div className="lg:col-span-5 hidden lg:flex flex-col justify-between items-end relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] w-full pt-4 lg:pt-0 pointer-events-none">
          
          {/* Top-Right Vertical Editorial Text Hook (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-l border-black/30 pl-3.5 space-y-0.5 font-mono-spec text-[10px] sm:text-xs tracking-[0.2em] text-zinc-700 uppercase leading-tight self-end z-20 pointer-events-auto font-bold"
          >
            <div>CREATIVE</div>
            <div>FOR A</div>
            <div>BRIGHTER</div>
            <div>TOMORROW</div>
          </motion.div>

        </div>

      </div>

      {/* DESKTOP RIGHT SIDE HERO VISUAL */}
      <div className="hidden lg:flex absolute right-0 bottom-0 top-0 w-[55%] h-full z-[1] pointer-events-none overflow-hidden items-center justify-end">
        <div className="relative w-full h-full max-w-[950px]">
          <img
            src="/images/hero_exact.webp"
            alt="KROMA Hero Visual"
            className="w-full h-full object-cover object-right filter contrast-105 brightness-100 opacity-95"
          />
        </div>
      </div>

      {/* HERO FOOTER BAR (FULL-WIDTH SOLID BLACK STRIP) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="-mx-[clamp(20px,5vw,32px)] lg:-mx-16 -mb-6 lg:-mb-12 bg-black text-white py-5 sm:py-6 px-[clamp(20px,5vw,32px)] lg:px-16 border-t border-b border-black relative z-30 -mt-2 sm:-mt-4 lg:mt-auto"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-between gap-4">
          {/* Left Side Tagline / Metrics */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="font-mono-spec text-[10px] sm:text-xs tracking-[0.2em] text-zinc-300 font-bold uppercase">
              PEOPLE &nbsp;/&nbsp; IDEAS &nbsp;/&nbsp; PROGRESS
            </div>
          </div>

          {/* Right Side Dial Widget & Scroll Indicator */}
          <div className="flex items-center space-x-4 sm:space-x-12">
            {/* Circular Dial Widget (Desktop Only) */}
            <div className="hidden lg:flex items-center space-x-2.5 sm:space-x-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center relative bg-white/5">
                <div className="w-4 sm:w-6 h-[1.5px] bg-white/80" />
              </div>
              <div className="font-mono-spec text-[9px] sm:text-[10px] text-zinc-400 space-y-0.5 uppercase tracking-wider font-semibold">
                <div className="text-white text-xs sm:text-sm font-extrabold">01</div>
                <div>STRATEGY</div>
                <div>DESIGN</div>
                <div>DEVELOPMENT</div>
              </div>
            </div>

            {/* Far Right Scroll Down Indicator */}
            <a
              href="#manifesto"
              className="font-mono-spec text-[10px] sm:text-xs tracking-[0.2em] text-zinc-300 hover:text-white font-bold uppercase flex items-center space-x-2 transition-colors cursor-pointer group"
            >
              <span>SCROLL</span>
              <span className="w-5 sm:w-8 h-[1px] bg-zinc-600 group-hover:bg-white transition-colors" />
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-white" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
