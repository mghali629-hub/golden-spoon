'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function ChefPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="h-[500px] bg-cover bg-center rounded-3xl border border-[#d4af37]/30 shadow-2xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80')" }} />
          <div className="space-y-5 font-sans">
            <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30">
              EXECUTIVE CHEF & CULINARY DIRECTOR
            </span>
            <h1 className="text-4xl font-light font-serif text-[#f5f0e8]">Chef Armand Laurent</h1>
            <p className="text-gray-400 text-xs leading-relaxed">
              Trained under legendary 3-star Michelin masters in Paris and Lyon, Chef Armand brings 22 years of culinary innovation to The Golden Spoon. His philosophy harmonizes classical French precision with seasonal British terroir.
            </p>
            <div className="pt-2 text-xs text-[#d4af37] space-y-2 border-t border-white/10 pt-4">
              <div className="font-bold text-white uppercase tracking-wider">Michelin Accolades & Awards:</div>
              <div>★★ Two Michelin Stars (2025, 2026 Consecutive Years)</div>
              <div>🌹 5 AA Rosettes Winner for Gastronomic Distinction</div>
              <div>🏆 Chef of the Year — Condé Nast Traveller International</div>
            </div>
            <div className="pt-4 flex gap-4">
              <Link href="/chefs" className="inline-block bg-[#d4af37] text-black font-sans font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#b89830] transition-colors uppercase tracking-wider">
                Meet Kitchen Brigade
              </Link>
              <Link href="/reservation" className="inline-block border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-sans font-bold text-xs px-6 py-3 rounded-xl transition-colors uppercase tracking-wider">
                Reserve Tasting Menu
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
