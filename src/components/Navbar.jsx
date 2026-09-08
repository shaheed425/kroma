import React, { useState, useEffect, useRef } from 'react';
import { Home, Info, Layers, Sparkles, Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DOCK_NAV_ITEMS = [
  { name: 'HOME', href: '#hero', icon: Home },
  { name: 'ABOUT', href: '#manifesto', icon: Info },
  { name: 'SERVICES', href: '#services', icon: Layers },
  { name: 'WORK', href: '#works', icon: Sparkles },
  { name: 'CONTACT', href: '#contact', icon: Phone },
];

const FULL_INDEX_ITEMS = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#manifesto' },
  { name: 'SERVICES', href: '#services' },
  { name: 'WORK', href: '#works' },
  { name: 'REVIEWS', href: '#testimonials' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onCursorEnter, onCursorLeave }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('HOME');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Auto update active section based on scroll position
      const sections = DOCK_NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(DOCK_NAV_ITEMS[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key & click outside to close floating navigation modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* TOP BRAND HEADER (STAYS AT THE VERY TOP) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/10 text-black py-3 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm text-black border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left: KROMA / MEDIA logo */}
          <a
            href="#hero"
            className="flex flex-col group cursor-pointer shrink-0 select-none"
          >
            <span className="font-syne text-xl md:text-2xl font-extrabold tracking-tighter leading-none uppercase text-black">
              KROMA
            </span>
            <span className="font-mono-spec text-[9px] tracking-[0.25em] text-black font-bold uppercase leading-tight">
              MEDIA
            </span>
          </a>

          {/* Right: Round Circle Menu Icon + MENU Button (Index Trigger) */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation index"
              className="flex items-center space-x-2.5 group cursor-pointer select-none transition-all text-black hover:opacity-90"
            >
              <span className="w-8 h-8 rounded-full border border-black/30 bg-white/50 backdrop-blur-md group-hover:bg-black group-hover:border-black group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm text-black">
                {menuOpen ? <X size={15} /> : <Menu size={15} strokeWidth={2.2} />}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">INDEX</span>
            </button>
          </div>
        </div>
      </header>

      {/* BOTTOM FLOATING IPHONE-STYLE DOCK NAVIGATION BAR (MOBILE/RESPONSIVE ONLY) */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-black/90 backdrop-blur-xl border border-white/20 text-white rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-2xl flex md:hidden items-center justify-center space-x-1.5 sm:space-x-3 font-sans select-none tracking-wider">
        {DOCK_NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.name;
          const IconComp = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.name)}
              className={`flex flex-col items-center justify-center px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 group relative ${
                isActive
                  ? 'bg-zinc-800 text-white font-extrabold shadow-md scale-105 border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <IconComp size={16} className={`mb-0.5 sm:mb-1 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`} />
              <span className="text-[9px] sm:text-[10px] font-mono-spec font-bold uppercase tracking-widest leading-none">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>

      {/* PREMIUM FLOATING NAVIGATION MODAL OVERLAY (INDEX VIEW) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Translucent Light Backdrop Overlay with Subtle Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-md z-50"
            />

            {/* Floating Modal Panel */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[480px] lg:w-[520px] max-w-[540px] h-auto max-h-[calc(100vh-32px)] sm:max-h-[calc(100vh-48px)] bg-white/95 backdrop-blur-xl border border-black/20 shadow-2xl rounded-2xl p-5 sm:p-7 flex flex-col justify-start overflow-y-auto select-none font-sans"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-black/10 pb-4 shrink-0">
                <span className="font-mono-spec text-xs font-bold text-black uppercase tracking-widest">
                  NAVIGATION INDEX
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-sm border border-black/20 bg-white/60 backdrop-blur-md flex items-center justify-center text-black hover:bg-black hover:border-black hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Compact Content-Driven Navigation Links (No Vertical Stretching) */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 mt-4 sm:mt-5 shrink-0">
                {FULL_INDEX_ITEMS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    onClick={() => {
                      setActiveSection(link.name);
                      setMenuOpen(false);
                    }}
                    className="group flex items-center justify-between py-3 sm:py-3.5 border-b border-black/10 transition-all"
                  >
                    <span className="font-display text-xl sm:text-2xl font-black text-black uppercase tracking-tight group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                      {link.name}
                    </span>
                    <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Minimal Editorial Agency Signature Footer */}
              <div className="border-t border-black/10 pt-4 space-y-1.5 font-mono-spec text-[11px] text-zinc-600 uppercase mt-6 sm:mt-8 shrink-0">
                <div className="flex items-center justify-between">
                  <span className="text-black font-bold">KROMA MEDIA AGENCY</span>
                  <span className="text-black font-bold">// 2026</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-normal">
                  STRATEGY · STORYTELLING · CULTURE
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
