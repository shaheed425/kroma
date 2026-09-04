import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: '01',
    title: 'HERO & MANIFESTO',
    href: '#hero',
    subtitle: 'NARRATIVE ENGINEERING',
    image: '/images/hero_art.png',
  },
  {
    id: '02',
    title: 'THE STRATEGY',
    href: '#manifesto',
    subtitle: 'STANDING OUT IS A STRATEGY',
    image: '/images/work_2.png',
  },
  {
    id: '03',
    title: 'SERVICES INDEX',
    href: '#services',
    subtitle: 'PR, BRANDING, ADVERTISING & DATA',
    image: '/images/work_1.png',
  },
  {
    id: '04',
    title: 'SELECTED WORKS',
    href: '#works',
    subtitle: 'CASE STUDIES & CAMPAIGNS',
    image: '/images/work_3.png',
  },
  {
    id: '05',
    title: 'NOISE VS NARRATIVE',
    href: '#strategy',
    subtitle: 'OUR PROVEN FRAMEWORK',
    image: '/images/hero_art.png',
  },
  {
    id: '06',
    title: 'PRESS & CONTACT',
    href: '#contact',
    subtitle: 'START A CONVERSATION',
    image: '/images/work_1.png',
  },
];

export default function NavigationDrawer({ isOpen, onClose, onCursorEnter, onCursorLeave }) {
  const [activeImage, setActiveImage] = useState('/images/hero_art.png');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#F8F8F6]/98 text-[#0A0A0B] backdrop-blur-xl flex flex-col justify-between overflow-y-auto px-6 md:px-16 py-10"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between border-b border-black/10 pb-6">
            <div className="flex items-center space-x-4">
              <span className="font-syne text-2xl font-bold tracking-tighter uppercase">
                KROMA<span className="text-[#E63946]">.</span>
              </span>
              <span className="font-mono-spec text-xs tracking-widest text-zinc-500 uppercase hidden sm:inline-block">
                // ISSUE N° 2026 EDITORIAL INDEX
              </span>
            </div>
            <button
              onClick={onClose}
              onMouseEnter={() => onCursorEnter({ type: 'button', text: 'CLOSE' })}
              onMouseLeave={onCursorLeave}
              className="flex items-center space-x-2 text-xs font-mono-spec tracking-widest uppercase hover:text-[#E63946] transition-colors group"
            >
              <span>CLOSE</span>
              <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-[#E63946] group-hover:bg-[#E63946] group-hover:text-white transition-all">
                <X size={14} />
              </div>
            </button>
          </div>

          {/* Menu Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-12">
            {/* Left Column: Interactive Menu List */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => {
                    setActiveImage(item.image);
                    onCursorEnter({ type: 'link', text: 'GO' });
                  }}
                  onMouseLeave={onCursorLeave}
                  className="group flex items-baseline justify-between border-b border-black/5 pb-4 transition-all"
                >
                  <div className="flex items-baseline space-x-6">
                    <span className="font-mono-spec text-xs text-[#E63946] group-hover:translate-x-1 transition-transform">
                      {item.id}
                    </span>
                    <span className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black/80 group-hover:text-black group-hover:translate-x-3 transition-all duration-300">
                      {item.title}
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-2 text-right">
                    <span className="font-mono-spec text-[10px] tracking-widest text-zinc-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.subtitle}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-zinc-400 group-hover:text-[#E63946] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Right Column: Visual Editorial Preview */}
            <div className="lg:col-span-5 hidden lg:flex flex-col justify-center relative">
              <div className="w-full aspect-[4/5] overflow-hidden border border-black/10 relative shadow-2xl bg-white p-2">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt="Navigation preview"
                  initial={{ opacity: 0.4, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <p className="font-mono-spec text-[10px] text-[#E63946] tracking-widest uppercase">
                      VISUAL DISPATCH
                    </p>
                    <p className="font-garamond italic text-lg text-zinc-200">
                      "Narratives built to outlast trends."
                    </p>
                  </div>
                  <span className="font-mono-spec text-xs text-zinc-400">
                    KROMA // 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-black/10 font-mono-spec text-xs text-zinc-600">
            <div>
              <p className="text-black font-bold tracking-wider mb-1 uppercase">LOCATIONS</p>
              <p>NYC • 40.7128° N, 74.0060° W</p>
              <p>LON • 51.5074° N, 0.1278° W</p>
              <p>TYO • 35.6762° N, 139.6503° E</p>
            </div>
            <div>
              <p className="text-black font-bold tracking-wider mb-1 uppercase">DIRECT ENQUIRIES</p>
              <a href="mailto:hello@kromamedia.com" className="hover:text-[#E63946] transition-colors block">
                hello@kromamedia.com
              </a>
              <p>+1 (212) 890-4491</p>
            </div>
            <div className="flex md:justify-end items-center space-x-6">
              <a href="#instagram" className="hover:text-[#E63946] transition-colors flex items-center space-x-1 font-bold text-black">
                <span>INSTAGRAM</span>
                <ArrowUpRight size={12} />
              </a>
              <a href="#linkedin" className="hover:text-[#E63946] transition-colors flex items-center space-x-1 font-bold text-black">
                <span>LINKEDIN</span>
                <ArrowUpRight size={12} />
              </a>
              <a href="#twitter" className="hover:text-[#E63946] transition-colors flex items-center space-x-1 font-bold text-black">
                <span>TWITTER / X</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
