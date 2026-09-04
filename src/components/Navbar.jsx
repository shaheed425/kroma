import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'HOME', href: '#hero' },
  { name: 'ABOUT', href: '#manifesto' },
  { name: 'SERVICES', href: '#services' },
  { name: 'WORK', href: '#works' },
  { name: 'TESTIMONIALS', href: '#testimonials' },
  { name: 'PRESS', href: '#press' },
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-5 ${
          scrolled
            ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-black/[0.06] text-[#111111] py-3.5'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left: KROMA / MEDIA logo */}
          <a
            href="#hero"
            className="flex flex-col group cursor-pointer shrink-0 select-none"
          >
            <span className={`font-syne text-xl md:text-2xl font-extrabold tracking-tighter leading-none uppercase transition-colors duration-300 ${
              scrolled ? 'text-[#111111]' : 'text-white'
            }`}>
              KROMA
            </span>
            <span className="font-mono-spec text-[9px] tracking-[0.25em] text-[#C1121F] font-bold uppercase leading-tight">
              MEDIA
            </span>
          </a>

          {/* Right: Round Circle Menu Icon + MENU Button */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className={`flex items-center space-x-2.5 group cursor-pointer select-none transition-all hover:opacity-80 ${
                scrolled ? 'text-[#111111]' : 'text-white'
              }`}
            >
              <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors bg-transparent ${
                scrolled ? 'border-black/40 group-hover:border-black' : 'border-white/40 group-hover:border-white'
              }`}>
                {menuOpen ? <X size={15} /> : <Menu size={15} strokeWidth={2.2} />}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* PREMIUM FLOATING NAVIGATION MODAL OVERLAY */}
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

            {/* Floating Modal Panel (24px spacing from edges, subtle shadow & 6px corner radius) */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-4 sm:top-6 right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 w-[calc(100vw-32px)] sm:w-[480px] lg:w-[520px] max-w-[540px] bg-[#F7F7F5] border border-black/20 shadow-2xl rounded-lg p-6 sm:p-8 flex flex-col justify-between overflow-y-auto select-none font-sans"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <span className="font-mono-spec text-xs font-bold text-[#C1121F] uppercase tracking-widest">
                  NAVIGATION INDEX
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-sm border border-black/20 bg-white flex items-center justify-center text-zinc-900 hover:bg-[#C1121F] hover:border-[#C1121F] hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Staggered Navigation Links */}
              <div className="flex flex-col space-y-3.5 my-auto py-5">
                {NAV_LINKS.map((link, idx) => (
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
                    className="group flex items-center justify-between py-2 border-b border-black/10 transition-all"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-black text-[#111111] uppercase tracking-tight group-hover:text-[#C1121F] group-hover:translate-x-1 transition-all duration-300">
                      {link.name}
                    </span>
                    <ArrowUpRight size={20} className="text-zinc-400 group-hover:text-[#C1121F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Minimal Editorial Agency Signature Footer */}
              <div className="border-t border-black/10 pt-4 space-y-2 font-mono-spec text-[11px] text-zinc-500 uppercase">
                <div className="flex items-center justify-between">
                  <span>KROMA MEDIA AGENCY</span>
                  <span className="text-[#C1121F] font-bold">// 2026</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-normal">
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
