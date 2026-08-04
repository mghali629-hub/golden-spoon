'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const desserts = [
  { name: 'Valrhona Dark Chocolate Sphere', price: '£22', desc: 'Hot salted caramel pour, Madagascar vanilla bean gelato, hazelnut praline.' },
  { name: 'Tarte Tatin for Two', price: '£36', desc: 'Caramelized Pink Lady apples, Calvados crème anglaise, puff pastry.' },
  { name: 'British Artisanal Cheese Selection', price: '£28', desc: 'Five seasonal raw milk cheeses, wildflower honeycomb, homemade oat crackers.' },
  { name: 'Soufflé au Grand Marnier', price: '£24', desc: 'Warm orange liqueur soufflé with blood orange sorbet.' },
];

export default function DessertsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            SWEET FINALE
          </span>
          <h1 className="text-4xl font-light font-serif mt-3 mb-2">Desserts & Artisanal Cheeses</h1>
          <p className="text-gray-400 text-xs max-w-md mx-auto">Decadent desserts and artisanal raw milk cheeses paired with vintage Port.</p>
        </div>

        <div className="bg-[#141414] border border-[#d4af37]/20 rounded-3xl p-8 space-y-6">
          {desserts.map((item, i) => (
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
          <Link href="/reservation" className="inline-block bg-[#d4af37] text-black font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#b89830] transition-colors uppercase tracking-wider">
            Reserve Your Dining Table
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
