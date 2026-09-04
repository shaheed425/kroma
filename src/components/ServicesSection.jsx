import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft, Cpu, Radio, Award, Compass, Eye, Layers } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: '01',
    shortName: 'BRAND',
    title: 'BRAND STRATEGY & POSITIONING',
    headline: 'Sharpen who you are, who you’re for, and why anyone should care.',
    description: 'We define your core brand identity, establish clear market positioning, and articulate your unique value proposition so your audience knows exactly why you matter.',
    capabilitiesLine: 'BRAND POSITIONING · IDENTITY · BRAND VOICE · MARKET STRATEGY',
    capabilities: [
      'Brand Positioning',
      'Brand Identity',
      'Brand Voice',
      'Market Strategy'
    ],
    image: '/images/hero_portrait.webp',
    tagline: 'Identity & Position Design',
    metric: '+240% Brand Equity',
    icon: Compass
  },
  {
    id: '02',
    shortName: 'DIGITAL',
    title: 'DIGITAL MARKETING',
    headline: 'Social, content, and performance campaigns built to convert, not just impress.',
    description: 'We design high-converting social, content, and performance marketing campaigns that turn passive scrollers into passionate, loyal customers across digital touchpoints.',
    capabilitiesLine: 'SOCIAL STRATEGY · CONTENT MARKETING · PERFORMANCE ADS · CONVERSION',
    capabilities: [
      'Social Strategy',
      'Content Marketing',
      'Performance Ads',
      'Conversion Optimization'
    ],
    image: '/images/work_1.webp',
    tagline: 'High-Conversion Digital Engine',
    metric: '4.8x ROAS Average',
    icon: Cpu
  },
  {
    id: '03',
    shortName: 'PR',
    title: 'PUBLIC RELATIONS',
    headline: 'Media placements, reputation management, and narrative control when it matters most.',
    description: 'We command public narratives, secure high-impact media placements, and protect brand reputation when attention and stakes are highest.',
    capabilitiesLine: 'MEDIA PLACEMENTS · PR STRATEGY · REPUTATION MGMT · NARRATIVE CONTROL',
    capabilities: [
      'Media Placements',
      'PR Strategy',
      'Reputation Management',
      'Narrative Control'
    ],
    image: '/images/work_2.webp',
    tagline: 'Authority & Media Placement',
    metric: '2,400+ Press Features',
    icon: Award
  },
  {
    id: '04',
    shortName: 'ADVERTISING',
    title: 'ADVERTISING & CREATIVE',
    headline: 'Campaigns across digital and traditional channels, engineered to move audiences to action.',
    description: 'High-impact campaigns spanning digital, broadcast, out-of-home, and print channels — engineered with bold creative direction to move audiences to action.',
    capabilitiesLine: 'CAMPAIGN STRATEGY · DIGITAL & TRADITIONAL ADS · MEDIA PLANNING · EXECUTION',
    capabilities: [
      'Campaign Strategy',
      'Digital & Traditional Ads',
      'Media Planning',
      'Creative Execution'
    ],
    image: '/images/work_3.webp',
    tagline: 'Multi-Channel Campaign Architecture',
    metric: '18 Global Creative Awards',
    icon: Eye
  },
  {
    id: '05',
    shortName: 'CONTENT',
    title: 'CONTENT & STORYTELLING',
    headline: 'Copy, video, and visuals that make your brand impossible to scroll past.',
    description: 'Persuasive copywriting, cinematic video production, and visual art direction designed to captivate audiences and hold their focus.',
    capabilitiesLine: 'COPYWRITING · VIDEO PRODUCTION · VISUAL ASSETS · STORYTELLING',
    capabilities: [
      'Copywriting',
      'Video Production',
      'Visual Assets',
      'Brand Storytelling'
    ],
    image: '/images/hero_artwork_bg.webp',
    tagline: 'Visual & Narrative Content Studio',
    metric: '100% Studio Crafted',
    icon: Layers
  },
  {
    id: '06',
    shortName: 'ANALYTICS',
    title: 'DATA & ANALYTICS',
    headline: 'Every strategy backed by numbers, not guesswork — so growth isn’t left to chance.',
    description: 'Rigorous data analytics, conversion tracking, and continuous strategy optimization ensuring every decision is backed by numbers and growth is scalable.',
    capabilitiesLine: 'DATA STRATEGY · PERFORMANCE TRACKING · CONVERSION ANALYTICS · GROWTH OPTIMIZATION',
    capabilities: [
      'Data Strategy',
      'Performance Tracking',
      'Conversion Analytics',
      'Growth Optimization'
    ],
    image: '/images/hero_art.webp',
    tagline: 'Data-Backed Growth Optimization',
    metric: '100% Measurable Impact',
    icon: Radio
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeService = SERVICES_DATA[activeIndex];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectService = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#F7F7F5] text-[#111111] border-b border-black/10 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        
        {/* SECTION INTRO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 gap-4"
        >
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight uppercase leading-tight">
              WE MAKE BRANDS <br className="hidden sm:inline" />
              HARD TO IGNORE<span className="text-[#E51B23]">.</span>
            </h2>
          </div>
          <div className="max-w-md font-sans text-sm text-zinc-600 font-normal leading-relaxed">
            Strategy, creativity, media and performance — connected into a single synchronized growth engine.
          </div>
        </motion.div>

        {/* MAIN THREE-COLUMN CONNECTED ARCHITECTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ========================================================= */}
          {/* AREA 1: LEFT SIDE — DYNAMIC EDITORIAL TEXT AREA (NO BOX)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-0 lg:pr-8 relative min-h-[420px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* Counter */}
                <div className="font-mono-spec text-sm font-bold text-[#E51B23] tracking-widest">
                  {activeService.id} / 06
                </div>

                {/* Title & Headline (Clean Bold Editorial Sans-Serif) */}
                <div className="space-y-3">
                  <h3 className="font-sans text-3xl sm:text-4xl font-black text-[#111111] uppercase tracking-tight leading-none">
                    {activeService.title}
                  </h3>
                  <p className="font-sans text-lg sm:text-xl font-bold text-[#E51B23] leading-snug">
                    {activeService.headline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-base text-zinc-600 leading-relaxed font-normal max-w-md">
                  {activeService.description}
                </p>

                {/* Core Capabilities (Minimal Single Line with Dots) */}
                <div className="pt-5 border-t border-black/10 space-y-2">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                    CORE CAPABILITIES
                  </p>
                  <p className="font-sans text-xs font-bold text-zinc-800 tracking-wider leading-relaxed">
                    {activeService.capabilitiesLine}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-3 text-[#111111] hover:text-[#E51B23] font-sans text-sm font-bold tracking-wider uppercase transition-colors group"
                  >
                    <span>GET STARTED</span>
                    <ArrowRight size={16} className="text-[#E51B23] group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* ========================================================= */}
          {/* AREA 2: CENTER — VERTICAL SERVICE LIST + CONNECTORS        */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 hidden lg:flex flex-col justify-center space-y-3.5 px-2 relative z-20">
            {/* Small Interaction Label Above Service List */}
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 pl-1">
              SELECT A SERVICE
            </p>

            {SERVICES_DATA.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(idx)}
                  className="group flex items-center justify-between w-full text-left py-2 relative transition-all duration-300 cursor-pointer"
                >
                  {/* Service ID & Short Name */}
                  <div className="flex items-center space-x-3">
                    <span
                      className={`font-mono-spec text-xs transition-colors duration-300 ${
                        isActive ? 'text-[#E51B23] font-bold' : 'text-zinc-400 group-hover:text-zinc-700'
                      }`}
                    >
                      {service.id}
                    </span>
                    <span
                      className={`font-sans text-sm uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'text-[#111111] font-black translate-x-1'
                          : 'text-zinc-500 font-semibold group-hover:text-zinc-900'
                      }`}
                    >
                      {service.shortName}
                    </span>
                  </div>

                  {/* Thin Connector Line to Semicircle Track */}
                  <div className="flex items-center space-x-1 pl-2">
                    <span
                      className={`h-[2px] transition-all duration-300 ${
                        isActive
                          ? 'w-10 sm:w-12 bg-[#E51B23]'
                          : 'w-5 sm:w-7 bg-black/15 group-hover:bg-black/30 group-hover:w-9'
                      }`}
                    />
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#E51B23] scale-125 shadow-[0_0_8px_rgba(229,27,35,0.6)]'
                          : 'bg-black/20 group-hover:bg-black/40'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* AREA 3: RIGHT SIDE — CLICK-BASED SEMICIRCULAR CARD SYSTEM */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 relative h-[360px] sm:h-[460px] lg:h-[530px] flex items-center justify-center overflow-hidden lg:overflow-visible px-2 lg:pl-0">
            
            {/* Subtle Light Gray Semicircular Track SVG Line (Facing Left) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 400 530"
              fill="none"
            >
              <path
                d="M 330 35 A 230 230 0 0 0 330 495"
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <path
                d="M 330 135 A 230 230 0 0 0 330 395"
                stroke="rgba(229,27,35,0.2)"
                strokeWidth="2.5"
              />
            </svg>

            {/* Orbiting Visual Campaign Cards Along Semicircular Path */}
            <div className="relative w-full h-full flex items-center justify-center">
              {SERVICES_DATA.map((service, idx) => {
                const isActive = idx === activeIndex;
                
                // Calculate position along left-facing semicircle based on active index offset
                let offset = idx - activeIndex;
                if (offset > 3) offset -= 6;
                if (offset < -3) offset += 6;

                let x, y, scale, opacity;

                if (isMobile) {
                  // Mobile layout: Center active card (offset = 0) at x = 0 with safe margins
                  const radius = 110;
                  const angleStep = 24;
                  const angleDeg = 180 + offset * angleStep;
                  const angleRad = (angleDeg * Math.PI) / 180;

                  x = radius * Math.cos(angleRad) + 110;
                  y = radius * Math.sin(angleRad);

                  scale = isActive ? 1.0 : Math.max(0.75, 0.88 - Math.abs(offset) * 0.08);
                  opacity = isActive ? 1 : Math.max(0.2, 0.55 - Math.abs(offset) * 0.18);
                } else {
                  // Desktop Semicircle Track
                  const radius = 225;
                  const angleStep = 32;
                  const angleDeg = 180 + offset * angleStep;
                  const angleRad = (angleDeg * Math.PI) / 180;

                  x = radius * Math.cos(angleRad) + 155;
                  y = radius * Math.sin(angleRad);

                  scale = isActive ? 1.12 : Math.max(0.76, 0.98 - Math.abs(offset) * 0.08);
                  opacity = isActive ? 1 : Math.max(0.35, 0.88 - Math.abs(offset) * 0.22);
                }

                const zIndex = isActive ? 30 : 20 - Math.abs(offset);
                const IconComp = service.icon;

                return (
                  <motion.div
                    key={service.id}
                    onClick={() => handleSelectService(idx)}
                    animate={{
                      x: x,
                      y: y,
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ zIndex }}
                    className={`absolute cursor-pointer overflow-hidden rounded-md w-[240px] sm:w-[260px] aspect-[4/3] border transform-gpu will-change-transform select-none touch-manipulation transition-shadow duration-300 ${
                      isActive
                        ? 'border-[#E51B23] shadow-[0_20px_40px_rgba(229,27,35,0.3)] ring-1 ring-[#E51B23]'
                        : 'border-black/15 shadow-md hover:border-black/35'
                    }`}
                  >
                    {/* Edge-to-Edge Full Card Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                        isActive ? 'scale-105 contrast-110' : 'grayscale opacity-70 hover:grayscale-0 hover:opacity-95'
                      }`}
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                    {/* Service ID Badge (Top Left) */}
                    <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/20 text-white font-mono-spec text-[10px] font-bold">
                      <IconComp size={11} className="text-[#E51B23]" />
                      <span>{service.id}</span>
                    </div>

                    {/* Card Content Overlay (Bottom) */}
                    <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                      <div className="flex items-center justify-between">
                        <p className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-wide truncate pr-2">
                          {service.title}
                        </p>
                        <ChevronRight
                          size={15}
                          className={`shrink-0 transition-transform duration-300 ${
                            isActive ? 'text-[#E51B23] translate-x-1' : 'text-white/60'
                          }`}
                        />
                      </div>
                      <p className="font-sans text-[10px] text-zinc-300 font-medium truncate">
                        {service.tagline}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* MOBILE RESPONSIVE CONTROLS */}
        <div className="lg:hidden flex items-center justify-between gap-2 pt-2 pb-2">
          <button
            onClick={() => handleSelectService((activeIndex - 1 + 6) % 6)}
            className="p-3 rounded-full bg-white border border-black/15 text-zinc-800 hover:text-[#E51B23] shadow-sm active:scale-95 transition-all shrink-0 touch-manipulation"
            aria-label="Previous Service"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex overflow-x-auto space-x-2 py-1 px-1 no-scrollbar scroll-smooth">
            {SERVICES_DATA.map((service, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(idx)}
                  className={`px-3.5 py-2 rounded-sm font-sans text-xs font-bold uppercase whitespace-nowrap transition-all touch-manipulation ${
                    isActive
                      ? 'bg-[#E51B23] text-white shadow-md scale-105'
                      : 'bg-white border border-black/10 text-zinc-700 hover:bg-black/5'
                  }`}
                >
                  {service.id} {service.shortName}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleSelectService((activeIndex + 1) % 6)}
            className="p-3 rounded-full bg-white border border-black/15 text-zinc-800 hover:text-[#E51B23] shadow-sm active:scale-95 transition-all shrink-0 touch-manipulation"
            aria-label="Next Service"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
