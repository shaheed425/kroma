import React from 'react';

const PRESS_QUOTES = [
  {
    publication: 'VOGUE BUSINESS',
    quote: 'KROMA MEDIA is redefining how luxury brands talk to modern culture.',
    date: 'OCTOBER 2025',
  },
  {
    publication: 'BUSINESS OF FASHION',
    quote: 'They don’t just make campaigns; they launch category-defining cultural movements.',
    date: 'DECEMBER 2025',
  },
  {
    publication: 'FAST COMPANY',
    quote: 'The agency of choice for brands refusing the sea of corporate sameness.',
    date: 'FEBRUARY 2026',
  },
  {
    publication: 'BLOOMBERG PURSUITS',
    quote: 'Where high-art creative vision meets ruthless data performance.',
    date: 'MAY 2026',
  },
];

const CLIENT_LOGOS = [
  'MAISON D’ART',
  'AURA COUTURE PARIS',
  'KINETIC ARCHITECTURE',
  'VERMILLION STUDIOS',
  'OBSIDIAN LUXURY',
  'MONOLITH LABS',
  'NORDIC FORM',
  'APEX CAPITAL',
];

export default function PressSection({ onCursorEnter, onCursorLeave }) {
  return (
    <section className="py-24 bg-white text-[#0A0A0B] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6">
          <div>
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0B] tracking-tight uppercase">
              WHAT THE PRESS SAYS<span className="text-[#E51B23]">.</span>
            </h2>
          </div>
        </div>

        {/* 2x2 Grid of Press Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRESS_QUOTES.map((press, idx) => (
            <div
              key={idx}
              className="p-8 border border-black/10 bg-zinc-50 hover:border-[#E63946] hover:bg-white shadow-sm transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between font-mono-spec text-xs">
                <span className="text-[#E63946] font-bold tracking-widest uppercase">
                  {press.publication}
                </span>
                <span className="text-zinc-500 font-medium">{press.date}</span>
              </div>
              <p className="font-garamond italic text-2xl text-zinc-800 group-hover:text-black transition-colors">
                "{press.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Client Logo Marquee */}
      <div className="mt-20 border-t border-b border-black/10 py-6 bg-[#F8F8F6]">
        <div className="animate-marquee font-syne text-2xl font-bold tracking-widest text-zinc-500 uppercase space-x-12 select-none">
          {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, idx) => (
            <span key={idx} className="hover:text-black transition-colors inline-flex items-center space-x-6">
              <span>{logo}</span>
              <span className="text-[#E63946]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
