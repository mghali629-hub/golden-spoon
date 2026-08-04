'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const mains = [
  { name: 'A5 Miyazaki Wagyu Sirloin', price: '£95', desc: 'Bone marrow reduction, wild chanterelles, smoked potato fondant.' },
  { name: 'Wild Highland Venison Loin', price: '£58', desc: 'Parsnip mousseline, cassis jus, braised red cabbage, juniper crumble.' },
  { name: 'Line-Caught Cornish Sea Bass', price: '£52', desc: 'Saffron velouté, sea vegetables, razor clam ragout.' },
  { name: 'Brittany Salt Marsh Lamb Rack', price: '£64', desc: 'Artichoke barigoule, rosemary smoked jus, caramelized garlic.' },
];

export default function MainsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            TASTING MENU
          </span>
          <h1 className="text-4xl font-light font-serif mt-3 mb-2">Main Courses</h1>
          <p className="text-gray-400 text-xs max-w-md mx-auto">Masterful main courses incorporating Miyazaki Wagyu, Highland game, and Brittany lamb.</p>
        </div>

        <div className="bg-[#141414] border border-[#d4af37]/20 rounded-3xl p-8 space-y-6">
          {mains.map((item, i) => (
            <div key={i} className="flex justify-between items-start border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div>
                <h3 className="text-xl font-light text-[#f5f0e8]">{item.name}</h3>
                <p className="text-gray-400 font-sans text-xs mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[#d4af37] font-sans font-bold text-lg ml-6 shrink-0">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center font-sans pt-4">
          <Link href="/menu/desserts" className="inline-block border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold text-xs px-6 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Explore Desserts & Cheeses →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
