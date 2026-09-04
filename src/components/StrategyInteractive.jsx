import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle, XCircle } from 'lucide-react';

export default function StrategyInteractive({ onCursorEnter, onCursorLeave }) {
  const [sliderValue, setSliderValue] = useState(75);

  return (
    <section id="strategy" className="py-28 px-6 md:px-12 lg:px-16 bg-[#F8F8F6] text-[#0A0A0B] border-b border-black/10 editorial-grid">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 space-y-4 md:space-y-0">
          <div>
            <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0B] tracking-tight uppercase">
              NOISE VS NARRATIVE<span className="text-[#E51B23]">.</span>
            </h2>
          </div>
          <div className="max-w-md font-mono-spec text-xs text-zinc-600">
            Slide to see how shifting from generic marketing noise to strategic narrative engineering multiplies brand value.
          </div>
        </div>

        {/* Interactive Slider Controller */}
        <div className="bg-white border border-black/15 p-8 md:p-12 space-y-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono-spec text-xs">
            <div className="flex items-center space-x-3 text-zinc-500 font-bold">
              <Volume2 size={16} />
              <span className="uppercase tracking-widest">GENERIC MARKETING NOISE</span>
            </div>

            {/* Range Slider */}
            <div className="w-full md:w-1/2 flex items-center space-x-4">
              <span className="text-zinc-500 font-bold">0%</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#E63946]"
              />
              <span className="text-[#E63946] font-bold">100%</span>
            </div>

            <div className="flex items-center space-x-3 text-[#E63946] font-bold">
              <Sparkles size={16} />
              <span className="uppercase tracking-widest">KROMA NARRATIVE ENGINE</span>
            </div>
          </div>

          {/* Interactive Dynamic Results Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Left: Traditional Approach */}
            <div className={`p-6 border transition-all ${sliderValue < 50 ? 'border-red-400 bg-red-50' : 'border-black/10 bg-zinc-50'}`}>
              <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-4">
                <span className="font-mono-spec text-xs text-zinc-700 font-bold uppercase">
                  TRADITIONAL AGENCY APPROACH
                </span>
                <XCircle size={18} className="text-red-500" />
              </div>
              <ul className="space-y-4 font-mono-spec text-xs text-zinc-600">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Generic templates & 3-column card layouts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Shouting features without emotional resonance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>High customer acquisition cost (CAC) spikes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Low audience retention & brand dilution</span>
                </li>
              </ul>
            </div>

            {/* Right: KROMA Narrative Approach */}
            <div className={`p-6 border transition-all ${sliderValue >= 50 ? 'border-[#E63946] bg-[#E63946]/5 shadow-xl' : 'border-black/10 bg-zinc-50'}`}>
              <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-4">
                <span className="font-mono-spec text-xs text-black font-bold uppercase">
                  KROMA NARRATIVE ARCHITECTURE
                </span>
                <CheckCircle size={18} className="text-[#E63946]" />
              </div>
              <ul className="space-y-4 font-mono-spec text-xs text-zinc-800">
                <li className="flex items-start space-x-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span className="font-bold text-black">Distinct category design & bespoke editorial visuals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>Vogue & Bloomberg level PR authority</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>Predictable 4.8x Return on Ad Spend (ROAS)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>98.4% campaign client retention rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
