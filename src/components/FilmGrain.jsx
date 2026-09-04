import React from 'react';

export default function FilmGrain({ isEnabled = true }) {
  if (!isEnabled) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-40 bg-grain opacity-40 mix-blend-overlay" 
      aria-hidden="true" 
    />
  );
}
