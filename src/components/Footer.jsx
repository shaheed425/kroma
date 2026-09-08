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
    <footer id="contact" className="py-28 px-6 md:px-12 lg:px-16 bg-white border-t border-black/10 text-black relative">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Expressive Editorial Header */}
        <div className="space-y-4">
          <span className="font-mono-spec text-xs sm:text-sm text-black font-bold tracking-widest uppercase block">
            READY TO STOP BLENDING IN?
          </span>

          <h2 className="font-ivypresto text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] tracking-tighter text-black">
            LET'S TALK<br />
            <span className="font-ivypresto italic font-normal text-zinc-700">START A CONVERSATION</span>
            <span className="text-black">.</span>
          </h2>
        </div>

        {/* Asymmetric Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-black/10">
          {/* Left Column: Direct Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-zinc-50 p-6 sm:p-8 border border-black/15 shadow-sm space-y-6">
            

            {formSubmitted ? (
              <div className="p-8 border border-black bg-black/5 text-center space-y-3">
                <CheckCircle2 size={32} className="text-black mx-auto" />
                <h4 className="font-syne text-2xl font-bold uppercase text-black">BRIEF RECEIVED</h4>
                <p className="font-mono-spec text-xs text-zinc-700">
                  Our strategic partner team will review your brief within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono-spec text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-zinc-700 uppercase tracking-widest font-bold">YOUR NAME / TITLE *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexandra Vance // VP Marketing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-black/20 p-3.5 text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-zinc-700 uppercase tracking-widest font-bold">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="alexandra@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-black/20 p-3.5 text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-zinc-700 uppercase tracking-widest font-bold">PROJECT INVESTMENT BUDGET</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-black/20 p-3.5 text-black focus:outline-none focus:border-black transition-colors"
                  >
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-zinc-700 uppercase tracking-widest font-bold">CAMPAIGN OBJECTIVE *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand challenge, campaign timeline, or repositioning goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-black/20 p-3.5 text-black focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => onCursorEnter({ type: 'cta', text: 'SEND' })}
                  onMouseLeave={onCursorLeave}
                  className="w-full bg-black hover:bg-zinc-800 text-white py-4 font-mono-spec text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
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
              <span className="text-xs text-black font-bold tracking-widest uppercase">
                GLOBAL BUREAUS
              </span>

              {/* Timezone Clocks */}
              <div className="space-y-4 pt-2 border-t border-black/10">
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="text-black font-bold">NEW YORK (HQ)</span>
                  <span className="text-zinc-600 font-semibold">{clocks.nyc} EST</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="text-black font-bold">LONDON BUREAU</span>
                  <span className="text-zinc-600 font-semibold">{clocks.lon} GMT</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-black/5">
                  <span className="text-black font-bold">TOKYO BUREAU</span>
                  <span className="text-zinc-600 font-semibold">{clocks.tyo} JST</span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-4">
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-bold">DIRECT CHANNELS</p>
                <a href="mailto:hello@kromamedia.com" className="text-lg text-black font-bold hover:text-zinc-600 transition-colors block">
                  hello@kromamedia.com
                </a>
                <a href="mailto:press@kromamedia.com" className="text-sm text-zinc-700 hover:text-black transition-colors block">
                  press@kromamedia.com
                </a>
                <p className="text-sm text-zinc-700 font-semibold">+1 (212) 890-4491</p>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6 border-t border-black/10 flex justify-between items-center">
              <span className="text-[11px] text-zinc-500">
                © 2026 KROMA MEDIA GROUP LLC. ALL RIGHTS RESERVED.
              </span>
              <button
                onClick={scrollToTop}
                onMouseEnter={() => onCursorEnter({ type: 'button', text: 'TOP' })}
                onMouseLeave={onCursorLeave}
                className="w-10 h-10 border border-black/20 hover:border-black hover:bg-black hover:text-white text-black flex items-center justify-center transition-all cursor-pointer"
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
