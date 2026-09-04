import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X, Check } from 'lucide-react';

const PROJECTS = [
  {
    id: 'work-01',
    title: "NOIR L'ELIXIR CAMPAIGN",
    client: "MAISON D'ART LUXURY",
    category: 'BRANDING',
    year: '2025',
    image: '/images/work_3.webp',
    excerpt: 'A premium fragrance launch campaign blending mystery, elegance, and timeless storytelling.',
    fullStory: 'We engineered an exclusive narrative launch around the concept of darkness and obsidian light. Combining high-fashion commercial films starring top editorial talent with private press dinners in Paris, NYC, and Tokyo, the campaign generated $14.2M in sales.',
    results: ['$14.2M Revenue Generated', '38 Global Press Coverages', 'Vogue Beauty Award Winner'],
  },
  {
    id: 'work-02',
    title: 'THE MONOLITH SERIES',
    client: 'KINETIC ARCHITECTURE GROUP',
    category: 'PR & MEDIA',
    year: '2025',
    image: '/images/work_2.webp',
    excerpt: 'International press placement for a revolutionary brutalist architecture exhibition.',
    fullStory: 'Kroma Media spearheaded full international media relations, securing front-page placement in Architectural Digest, Wallpaper*, and Bloomberg Pursuits. We generated 400+ editorial features.',
    results: ['Front Page Architectural Digest', '42,000 Private VIP Inquiries', '100% Commission Booked'],
  },
  {
    id: 'work-03',
    title: 'ELEVATE FITNESS PLATFORM',
    client: 'AURA ATHLETICS',
    category: 'DIGITAL',
    year: '2025',
    image: '/images/hero_portrait.webp',
    excerpt: 'A full-scale digital experience designed to empower, engage, and elevate performance.',
    fullStory: 'From custom typography systems to real-time mobile app interaction and digital flagship store design, Kroma crafted an elevated aesthetic narrative.',
    results: ['3.8x E-Commerce Conversion', 'App Store App of the Day', '+480% Time on Site'],
  },
  {
    id: 'work-04',
    title: 'SNEAKZ LAUNCH CAMPAIGN',
    client: 'SNEAKZ FOOTWEAR',
    category: 'ADVERTISING',
    year: '2025',
    image: '/images/work_1.webp',
    excerpt: 'Multi-channel launch campaign designed to create hype, drive engagement, and boost sales.',
    fullStory: 'Built a bespoke digital experience combining real-time 3D web geometry with high-speed performance marketing, setting a benchmark for digital storytelling.',
    results: ['Awwwards Site of the Year', '120M+ Social Views', 'Top 5 Trending Brand'],
  },
  {
    id: 'work-05',
    title: 'SOCIAL RELEVANCE SYSTEM',
    client: 'URBAN THREADS GLOBAL',
    category: 'SOCIAL',
    year: '2025',
    image: '/images/hero_art.webp',
    excerpt: 'Platform-native social strategy and content ecosystem for global streetwear brand.',
    fullStory: 'We deployed platform-native creators and high-velocity short-form content systems that drove organic brand search volume by 320% across key youth demographics.',
    results: ['120M+ Social Views', '+320% Organic Search', 'Top 5 Trending Brand'],
  },
];

const CATEGORIES = [
  { label: 'ALL', id: 'ALL' },
  { label: 'BRANDING', id: 'BRANDING' },
  { label: 'DIGITAL', id: 'DIGITAL' },
  { label: 'SOCIAL', id: 'SOCIAL' },
  { label: 'PR & MEDIA', id: 'PR & MEDIA' },
  { label: 'ADVERTISING', id: 'ADVERTISING' },
];

export default function WorksSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const scrollContainerRef = useRef(null);
  const modalContentRef = useRef(null);

  // Lock body scroll when full-screen modal is open & focus modal
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (modalContentRef.current) {
          modalContentRef.current.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalProject]);

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="py-14 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#F7F7F5] text-[#111111] border-b border-black/10 relative select-none">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* TOP CAROUSEL ARROW CONTROLS */}
        <div className="flex items-center justify-end border-b border-black/10 pb-3">
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => handleScroll('left')}
              className="w-9 h-9 rounded-none border border-black/20 bg-white hover:bg-[#C1121F] hover:border-[#C1121F] hover:text-white flex items-center justify-center text-zinc-800 transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-9 h-9 rounded-none border border-[#C1121F] bg-[#C1121F] hover:bg-[#9E0E19] text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* MAIN SECTION LAYOUT: COMPACT EDITORIAL LEFT PANEL & RIGHT CAROUSEL + SQUARE FILTERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: EDITORIAL HEADING & DESCRIPTION */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight uppercase leading-tight">
                FEATURED <br />
                CAMPAIGNS<span className="text-[#C1121F]">.</span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-sm">
                Strategic campaigns, digital experiences, and brand stories crafted to move people, build brands, and drive real results.
              </p>
            </div>

            {/* Bottom Link: VIEW ALL PROJECTS */}
            <div className="pt-1">
              <a
                href="#works"
                className="inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-zinc-800 border-b border-black/30 pb-0.5 hover:text-[#C1121F] hover:border-[#C1121F] transition-colors group"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight size={14} className="text-[#C1121F] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: PROPORTIONATE CARDS & COMPACT SQUARE FILTERS ALIGNED BELOW CARDS */}
          <div className="lg:col-span-8 space-y-5 overflow-hidden">
            
            {/* Horizontal Project Card Row */}
            <div
              ref={scrollContainerRef}
              className="flex space-x-4 sm:space-x-5 overflow-x-auto pt-0.5 pb-0.5 no-scrollbar scroll-smooth"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setActiveModalProject(project)}
                    className="shrink-0 w-[240px] sm:w-[260px] lg:w-[275px] cursor-pointer group"
                  >
                    {/* TALL PORTRAIT CARD WITH COMPACT ASPECT RATIO & SQUARE CORNERS */}
                    <div className="relative aspect-[3/4.1] rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-black/15 bg-black">
                      
                      {/* Dominant Visual Background Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover contrast-105 group-hover:scale-108 transition-transform duration-700 ease-out"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-none text-[10px] font-mono-spec font-bold text-white uppercase tracking-wider border border-white/20">
                          {project.category} • <span className="text-[#C1121F]">{project.year}</span>
                        </span>
                      </div>

                      {/* Bottom Title & Square Arrow Overlay Inside Card */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end space-y-2 z-10">
                        <div className="flex items-end justify-between space-x-2">
                          <h3 className="font-display text-base sm:text-lg font-black text-white uppercase tracking-tight leading-snug drop-shadow-md group-hover:text-[#C1121F] transition-colors">
                            {project.title}
                          </h3>

                          {/* Minimal Square Arrow Button */}
                          <div className="w-8 h-8 rounded-none bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-[#C1121F] transition-all duration-300">
                            <ArrowUpRight size={16} />
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Square Horizontal Category Filter Buttons Row Aligned Below Cards */}
            <div className="flex flex-wrap gap-2 pt-1 font-sans text-xs">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`h-9 sm:h-10 px-4 font-bold uppercase tracking-wider rounded-none border transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#C1121F] border-[#C1121F] text-white shadow-sm'
                        : 'bg-white border-black/20 text-zinc-800 hover:border-[#C1121F] hover:text-[#C1121F]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* FULL-SCREEN CASE STUDY MODAL OVERLAY (VERTICALLY SCROLLABLE INSIDE MODAL CONTAINER) */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8"
          >
            <motion.div
              ref={modalContentRef}
              tabIndex={0}
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#F7F7F5] border border-black/20 p-6 sm:p-8 lg:p-10 my-auto text-black space-y-6 sm:space-y-8 shadow-2xl rounded-none focus:outline-none scroll-smooth"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center space-x-2 text-zinc-600 hover:text-[#C1121F] transition-colors font-mono-spec text-xs uppercase cursor-pointer z-10"
              >
                <span>CLOSE CASE STUDY</span>
                <div className="w-8 h-8 rounded-none border border-black/20 bg-white flex items-center justify-center">
                  <X size={16} />
                </div>
              </button>

              {/* Case Header */}
              <div className="space-y-2 pt-2 border-b border-black/10 pb-5">
                <div className="flex items-center space-x-3 font-mono-spec text-xs text-[#C1121F] font-bold">
                  <span>{activeModalProject.category}</span>
                  <span>//</span>
                  <span className="text-zinc-600">{activeModalProject.client}</span>
                  <span>//</span>
                  <span className="text-zinc-500">{activeModalProject.year}</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111111]">
                  {activeModalProject.title}
                </h2>
              </div>

              {/* Modal Visual Banner Image */}
              <div className="aspect-video w-full overflow-hidden border border-black/10 relative bg-zinc-100 rounded-none shadow-sm">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Overview & Excerpt */}
              <div className="space-y-2 border-b border-black/10 pb-5 font-sans">
                <h4 className="text-xs text-[#C1121F] font-mono-spec font-bold uppercase tracking-widest">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-base sm:text-lg text-zinc-900 font-bold leading-relaxed">
                  {activeModalProject.excerpt}
                </p>
              </div>

              {/* Narrative Architecture & Full Strategy Story */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 font-sans">
                <div className="md:col-span-7 space-y-3">
                  <h4 className="text-xs text-[#C1121F] font-mono-spec font-bold uppercase tracking-widest">
                    THE STRATEGY & EXECUTION
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-zinc-800 font-normal leading-relaxed">
                    {activeModalProject.fullStory}
                  </p>
                </div>

                <div className="md:col-span-5 bg-white p-5 sm:p-6 border border-black/10 space-y-3 rounded-none">
                  <h4 className="text-xs text-black font-mono-spec font-bold uppercase tracking-widest">
                    KEY OUTCOMES & METRICS
                  </h4>
                  <div className="space-y-2.5">
                    {activeModalProject.results.map((res, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5 text-xs text-zinc-800 font-semibold">
                        <Check size={14} className="text-[#C1121F] shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Case Study Close Footer Button */}
              <div className="pt-6 border-t border-black/10 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="flex items-center space-x-2 bg-[#C1121F] hover:bg-[#9E0E19] text-white px-6 py-3 rounded-none font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                >
                  <span>CLOSE CASE STUDY</span>
                  <X size={16} />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
