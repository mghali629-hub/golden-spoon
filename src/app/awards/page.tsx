'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function GoldenSpoonAwardsPage() {
  const awards = [
    { year: '2025', title: '★★ Two Michelin Stars', org: 'MICHELIN Guide Great Britain & Ireland', desc: '"An exceptional kitchen where every dish articulates a unique culinary voice — precise, poetic, and deeply personal."', icon: '⭐' },
    { year: '2025', title: '5 AA Rosettes', org: 'AA Restaurant Guide UK', desc: 'The highest AA accolade — awarded to only 7 restaurants in the United Kingdom. Recognised for extraordinary cooking at the very highest international level.', icon: '🌹' },
    { year: '2026', title: 'Best Restaurant of the Year', org: 'Condé Nast Traveller UK', desc: '"The single most exhilarating dining experience we have encountered in Britain this decade."', icon: '🏆' },
    { year: '2025', title: '19/20 — Outstanding', org: 'Gault & Millau France & UK', desc: '"Chef Armand\'s mastery is without equal in the British fine dining landscape. Every plate is a revelation."', icon: '🎖️' },
    { year: '2024', title: 'Sustainable Restaurant Award', org: 'Sustainable Restaurant Association', desc: 'Recognised for outstanding commitment to sustainability: zero-waste kitchen, 100% British sourcing, and regenerative supplier partnerships.', icon: '🌿' },
    { year: '2024', title: 'No. 3 — World\'s 50 Best', org: 'The World\'s 50 Best Restaurants', desc: 'The highest UK ranking in the list\'s history — placing The Golden Spoon firmly among the greatest restaurants on earth.', icon: '🌍' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-sans font-semibold">Accolades & Recognition</span>
          <h1 className="text-4xl font-light mt-3 mb-3">Awards & Distinctions</h1>
          <p className="text-gray-400 font-sans text-base max-w-xl mx-auto">The world's most prestigious culinary institutions have recognised The Golden Spoon's pursuit of perfection.</p>
        </div>

        {/* Award Strip */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            { label: '★★ Michelin', color: 'text-red-400', bg: 'border-red-800/30 bg-red-900/10' },
            { label: '5 AA Rosettes', color: 'text-yellow-400', bg: 'border-yellow-800/30 bg-yellow-900/10' },
            { label: '#3 World\'s 50 Best', color: 'text-[#d4af37]', bg: 'border-[#d4af37]/30 bg-[#d4af37]/5' },
            { label: '19/20 Gault & Millau', color: 'text-blue-400', bg: 'border-blue-800/30 bg-blue-900/10' },
          ].map((a, i) => (
            <div key={i} className={`border ${a.bg} rounded-xl px-6 py-3`}>
              <span className={`font-bold font-sans text-sm ${a.color}`}>{a.label}</span>
            </div>
          ))}
        </div>

        {/* Awards Timeline */}
        <div className="space-y-5">
          {awards.map((award, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-7 flex gap-5 items-start hover:border-[#d4af37]/20 transition-colors">
              <div className="text-4xl shrink-0">{award.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-[#f5f0e8]">{award.title}</h3>
                  <span className="text-xs text-[#d4af37] font-sans font-bold border border-[#d4af37]/30 px-2 py-0.5 rounded">{award.year}</span>
                </div>
                <p className="text-[#d4af37] font-sans text-xs font-semibold mb-2">{award.org}</p>
                <p className="text-gray-400 font-sans text-sm leading-relaxed italic">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
