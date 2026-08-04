'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const rooms = [
  { name: 'The Sovereign Room', capacity: 'Up to 14 Guests', desc: 'Custom mahogany table, private sommelier station, and dedicated butler service for high-level dinners.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { name: 'The Cellar Vault', capacity: 'Up to 24 Guests', desc: 'Dine surrounded by 4,000 vintage wines in our historic subterranean vaulted cellar with customized tasting menus.', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80' },
];

export default function PrivateDiningPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            BESPOKE OCCASIONS
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Private Dining Rooms</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">Intimate spaces crafted for exclusive corporate dinners, wedding receptions, and milestone celebrations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((r, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden hover:border-[#d4af37]/40 transition-colors font-sans">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${r.image}')` }} />
              <div className="p-6 space-y-3">
                <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase block">{r.capacity}</span>
                <h3 className="text-2xl font-light text-[#f5f0e8] font-serif">{r.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
                <div className="pt-2">
                  <Link href="/reservation" className="block text-center w-full bg-[#d4af37] text-black font-bold text-xs py-3 rounded-xl hover:bg-[#b89830] transition-colors uppercase tracking-wider">
                    Enquire Availability
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
