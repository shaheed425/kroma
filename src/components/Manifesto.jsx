import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Flame, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto({ onCursorEnter, onCursorLeave }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0.3, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="relative py-28 px-6 md:px-12 lg:px-16 bg-white text-[#0A0A0B] border-t border-b border-black/10 overflow-hidden"
    >
      {/* Editorial Watermark background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-syne text-[18vw] font-black text-black/[0.03] select-none pointer-events-none uppercase tracking-tighter">
        MANIFESTO
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">


        {/* Scroll-Linked Kinetic Quote Highlight */}
        <div ref={textRef} className="py-8">
          <div className="font-garamond italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0A0A0B] leading-[1.05] tracking-tight">
            "Standing out isn't a lucky accident<span className="text-[#E63946] not-italic">.</span>{' '}
            <span className="font-syne not-italic font-extrabold uppercase text-[#0A0A0B]">
              It's a strategy.
            </span>"
          </div>
        </div>

        {/* Magazine Editorial Asymmetric 3-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          {/* Col 1: Editorial Essay */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono-spec text-xs text-[#E63946] font-bold tracking-widest uppercase">
              ABOUT KROMA MEDIA
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#0A0A0B] tracking-tight uppercase">
              We don’t just make noise — we build narratives that stick.
            </h3>
            <p className="font-garamond text-xl text-zinc-800 font-light leading-relaxed">
              Kroma Media is a full-service marketing, PR, and advertising agency for brands that refuse to blend in. We fuse bold storytelling with data-backed strategy, turning passive scrollers into loyal customers — across digital and traditional landscapes alike.
            </p>
            <p className="font-garamond text-xl text-zinc-800 font-light leading-relaxed">
              Every brand has a story. Most tell it quietly. We help you own it — loudly, consistently, and profitably.
            </p>
          </div>

          {/* Col 2: High Fashion Photography Feature */}
          <div className="lg:col-span-3 border border-black/10 bg-[#F8F8F6] p-2 relative group overflow-hidden shadow-lg">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src="/images/work_2.webp"
                alt="KROMA Brutalist Monolith Campaign"
                className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="p-3 font-mono-spec text-[11px] text-zinc-700">
              <p className="text-black font-bold uppercase">BRAND NARRATIVE AGENCY</p>
              <p className="text-zinc-500 text-[10px]">KROMA MEDIA // 2026</p>
            </div>
          </div>

          {/* Col 3: Why Kroma Breakdown */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6 border-l border-black/10 pl-6">
            <div className="space-y-1 pb-2">
              <span className="font-mono-spec text-xs text-[#E63946] font-bold tracking-widest uppercase">
                WHY KROMA
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-[#E63946] bg-black/5">
                  <Target size={14} />
                </div>
                <span className="font-mono-spec text-xs font-bold text-black tracking-wider uppercase">01 / BOLD STORYTELLING</span>
              </div>
              <p className="font-mono-spec text-xs text-zinc-600 leading-normal">
                Every brand has a story. Most tell it quietly. We help you own it loudly.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-[#E63946] bg-black/5">
                  <Flame size={14} />
                </div>
                <span className="font-mono-spec text-xs font-bold text-black tracking-wider uppercase">02 / DATA-BACKED STRATEGY</span>
              </div>
              <p className="font-mono-spec text-xs text-zinc-600 leading-normal">
                Every strategy backed by numbers, not guesswork — so growth isn’t left to chance.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-[#E63946] bg-black/5">
                  <Zap size={14} />
                </div>
                <span className="font-mono-spec text-xs font-bold text-black tracking-wider uppercase">03 / PROFITABLE SCALE</span>
              </div>
              <p className="font-mono-spec text-xs text-zinc-600 leading-normal">
                Turning passive scrollers into loyal customers across digital and traditional landscapes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
