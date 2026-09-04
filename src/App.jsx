import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import FilmGrain from './components/FilmGrain';
import Navbar from './components/Navbar';
import ShowreelModal from './components/ShowreelModal';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import ServicesSection from './components/ServicesSection';
import WorksSection from './components/WorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import TestimonialsPage from './components/TestimonialsPage';
import Footer from './components/Footer';

export default function App() {
  const [cursorState, setCursorState] = useState({ type: '', text: '' });
  const [isReelOpen, setIsReelOpen] = useState(false);
  const [isTestimonialsPageOpen, setIsTestimonialsPageOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);

  // Sync hash routing for /testimonials page
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#testimonials-archive') {
        setIsTestimonialsPageOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    if (isTestimonialsPageOpen) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [isTestimonialsPageOpen]);

  // Web Audio Synthesized Subtle Ambient Drone
  const toggleAudio = () => {
    if (!isAudioPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(108, ctx.currentTime);

        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        setIsAudioPlaying(true);
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
      setIsAudioPlaying(false);
    }
  };

  const handleCursorEnter = (state) => {
    if (typeof state === 'string') {
      setCursorState({ type: '', text: state });
    } else {
      setCursorState(state);
    }
  };

  const handleCursorLeave = () => setCursorState({ type: '', text: '' });

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#C1121F] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Precision Custom Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Subtle Analog Film Grain Overlay */}
      <FilmGrain />

      {/* Top Editorial Navbar */}
      <Navbar
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Editorial Showreel Video Modal */}
      <ShowreelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />

      {/* Dedicated Full-Screen Testimonials Page Modal */}
      <AnimatePresence>
        {isTestimonialsPageOpen && (
          <TestimonialsPage
            key="testimonials-page"
            onClose={() => setIsTestimonialsPageOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Homepage Experience Flow */}
      <main className="opacity-100">
        <Hero
          onOpenReel={() => setIsReelOpen(true)}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        <Manifesto
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        <ServicesSection
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        <WorksSection
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        <TestimonialsSection
          onOpenTestimonialsPage={() => setIsTestimonialsPageOpen(true)}
        />
      </main>

      {/* Editorial Contact Footer */}
      <Footer
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />
    </div>
  );
}
