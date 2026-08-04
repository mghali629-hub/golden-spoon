'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function GoldenSpoonPressPage() {
  const mentions = [
    { outlet: 'The Financial Times', headline: 'The Golden Spoon Redefines London Fine Dining Landscape', date: 'March 2026', type: 'Review', rating: '5 Stars', logo: 'FT' },
    { outlet: 'Michelin Guide UK', headline: 'Two Stars Awarded — An exceptional kitchen where every dish tells a story', date: 'November 2025', type: 'Award', rating: '2 Stars', logo: 'M' },
    { outlet: 'Condé Nast Traveller', headline: 'Best Restaurant of the Year 2025 — A Transcendent Experience', date: 'December 2025', type: 'Feature', rating: '5 Stars', logo: 'CNT' },
    { outlet: 'The Guardian', headline: 'Chef Armand mastery of French techniques with British terroir is extraordinary', date: 'January 2026', type: 'Review', rating: '5 Stars', logo: 'GU' },
    { outlet: 'Tatler Magazine', headline: 'Voted #3 in UK Most Exclusive Dining Experiences 2026', date: 'February 2026', type: 'Ranking', rating: '4 Stars', logo: 'T' },
    { outlet: 'Gault & Millau', headline: '19/20 — The single most refined tasting menu we have encountered in London', date: 'October 2025', type: 'Review', rating: '19/20', logo: 'GM' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-sans font-semibold">As Seen In</span>
          <h1 className="text-4xl font-light mt-3 mb-3">Press & Recognition</h1>
          <p className="text-gray-400 font-sans text-base max-w-xl mx-auto">The world most respected culinary voices on The Golden Spoon experience.</p>
        </div>

        {/* Awards Strip */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            { award: 'Michelin 2025 (2 Stars)', color: 'text-red-400' },
            { award: '3 AA Rosettes', color: 'text-yellow-400' },
            { award: '19/20 Gault & Millau', color: 'text-[#d4af37]' },
            { award: 'OAD Top 50 UK', color: 'text-blue-400' }
          ].map((a, i) => (
            <div key={i} className="bg-[#141414] border border-[#d4af37]/20 rounded-xl px-6 py-3 text-center">
              <div className={`font-bold font-sans ${a.color}`}>{a.award}</div>
            </div>
          ))}
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {mentions.map((m, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="w-10 h-10 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl flex items-center justify-center text-[#d4af37] font-bold text-xs font-sans shrink-0">{m.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-sans font-bold text-sm text-[#f5f0e8]">{m.outlet}</span>
                    <span className="text-xs text-gray-500 font-sans bg-gray-800/50 px-2 py-0.5 rounded">{m.type}</span>
                  </div>
                  <div className="text-xs text-gray-500 font-sans">{m.date}</div>
                </div>
                <div className="text-[#d4af37] text-xs font-sans font-bold">{m.rating}</div>
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed">{m.headline}</p>
            </div>
          ))}
        </div>

        {/* Press Kit */}
        <div className="bg-[#141414] border border-[#d4af37]/30 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-light mb-2">Press Enquiries</h2>
          <p className="text-gray-400 font-sans text-sm mb-6">For interviews, photography permissions, and press kit requests, contact our Communications Director.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:press@thegoldenspoon.co.uk" className="bg-[#d4af37] text-black font-sans font-bold px-8 py-3 rounded-xl hover:bg-[#b89830] transition-colors">press@thegoldenspoon.co.uk</a>
            <a href="#" className="border border-[#d4af37]/50 text-[#d4af37] font-sans font-semibold px-8 py-3 rounded-xl hover:bg-[#d4af37]/10 transition-colors">Download Press Kit</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
