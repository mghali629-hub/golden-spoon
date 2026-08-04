'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            CULINARY HERITAGE
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">The Golden Spoon Story</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Established in Mayfair in 2018, The Golden Spoon is an international benchmark for French haute cuisine, recipient of ★★ Michelin Stars and 5 AA Rosettes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-sans">
          {[
            { stat: '★★', label: 'Michelin Stars (2025, 2026)' },
            { stat: '5 AA', label: 'Rosettes Awarded' },
            { stat: '4,000+', label: 'Vintage Wine Cellar' },
            { stat: '100%', label: 'Regenerative Farm Sourcing' },
          ].map((s, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-5 text-center">
              <div className="text-3xl font-light text-[#d4af37] font-serif">{s.stat}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {[
            { title: '★★ Michelin Excellence', desc: 'Awarded two Michelin stars for exceptional cooking where every course articulates a unique culinary story.' },
            { title: '100% Regenerative Sourcing', desc: 'Partnering exclusively with organic British heritage farms and day-boat sustainable fisheries.' },
            { title: '4,000 Bottle Wine Vault', desc: 'Curated by Master Sommelier Jean-Luc Moreau, focusing on rare Grand Crus and biodynamic European vintages.' },
          ].map((m, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl p-8 space-y-3">
              <h3 className="text-xl font-light text-[#f5f0e8] font-serif">{m.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-[#d4af37]/30 rounded-3xl p-8 text-center space-y-4 font-sans">
          <h2 className="text-2xl font-light text-[#f5f0e8] font-serif">Reserve Your Tasting Experience</h2>
          <p className="text-gray-400 text-xs max-w-md mx-auto">Experience our 7-course seasonal tasting menu paired with rare vintages.</p>
          <Link href="/reservation" className="inline-block bg-[#d4af37] text-black font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#b89830] transition-colors uppercase tracking-wider">
            Reserve Table Online
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
