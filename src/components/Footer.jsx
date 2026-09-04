import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Footer({ onCursorEnter, onCursorLeave }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', budget: '$50k - $100k', message: '' });

  const [clocks, setClocks] = useState({
    nyc: '00:00',
    lon: '00:00',
    tyo: '00:00',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setClocks({
        nyc: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
        lon: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        tyo: now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-28 px-6 md:px-12 lg:px-16 bg-[#0A0A0B] border-t border-black/10 text-white relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Giant Expressive Header */}
        <div className="space-y-4">
          <span className="font-mono-spec text-xs sm:text-sm text-[#E63946] font-bold tracking-widest uppercase block">
            READY TO STOP BLENDING IN?
          </span>

          <h2 className="font-syne text-5xl sm:text-7xl lg:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter">
            LET'S TALK<br />
            <span className="font-garamond italic font-light text-zinc-300">START A CONVERSATION</span>
            <span className="text-[#E63946] font-sans">.</span>
          </h2>
        </div>

        {/* Asymmetric Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-white/10">
          {/* Left Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 border border-white/15 shadow-2xl space-y-6">
            

            {formSubmitted ? (
              <div className="p-8 border border-[#E63946] bg-[#E63946]/10 text-center space-y-3">
                <CheckCircle2 size={32} className="text-[#E63946] mx-auto" />
                <h4 className="font-syne text-2xl font-bold uppercase">BRIEF RECEIVED</h4>
                <p className="font-mono-spec text-xs text-zinc-300">
                  Our strategic partner team will review your brief within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono-spec text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-zinc-400 uppercase tracking-widest">YOUR NAME / TITLE *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexandra Vance // VP Marketing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 p-3.5 text-white focus:outline-none focus:border-[#E63946] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-zinc-400 uppercase tracking-widest">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="alexandra@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/15 p-3.5 text-white focus:outline-none focus:border-[#E63946] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-zinc-400 uppercase tracking-widest">PROJECT INVESTMENT BUDGET</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 p-3.5 text-white focus:outline-none focus:border-[#E63946] transition-colors"
                  >
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-zinc-400 uppercase tracking-widest">CAMPAIGN OBJECTIVE *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand challenge, campaign timeline, or repositioning goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/15 p-3.5 text-white focus:outline-none focus:border-[#E63946] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => onCursorEnter({ type: 'cta', text: 'SEND' })}
                  onMouseLeave={onCursorLeave}
                  className="w-full bg-[#E63946] hover:bg-white hover:text-black text-white py-4 font-mono-spec text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>SUBMIT PROJECT INQUIRY</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Agency Coordinates & Clocks */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between font-mono-spec">
            <div className="space-y-6">
              <span className="text-xs text-[#E63946] font-bold tracking-widest uppercase">
                GLOBAL BUREAUS
              </span>

              {/* Timezone Clocks */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-white font-bold">NEW YORK (HQ)</span>
                  <span className="text-zinc-400">{clocks.nyc} EST</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-white font-bold">LONDON BUREAU</span>
                  <span className="text-zinc-400">{clocks.lon} GMT</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-white font-bold">TOKYO BUREAU</span>
                  <span className="text-zinc-400">{clocks.tyo} JST</span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-4">
                <p className="text-xs text-zinc-500 uppercase tracking-widest">DIRECT CHANNELS</p>
                <a href="mailto:hello@kromamedia.com" className="text-lg text-white hover:text-[#E63946] transition-colors block">
                  hello@kromamedia.com
                </a>
                <a href="mailto:press@kromamedia.com" className="text-sm text-zinc-400 hover:text-[#E63946] transition-colors block">
                  press@kromamedia.com
                </a>
                <p className="text-sm text-zinc-400">+1 (212) 890-4491</p>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[11px] text-zinc-500">
                © 2026 KROMA MEDIA GROUP LLC. ALL RIGHTS RESERVED.
              </span>
              <button
                onClick={scrollToTop}
                onMouseEnter={() => onCursorEnter({ type: 'button', text: 'TOP' })}
                onMouseLeave={onCursorLeave}
                className="w-10 h-10 border border-white/20 hover:border-[#E63946] hover:bg-[#E63946] text-white flex items-center justify-center transition-all"
                title="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
