'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-8 font-sans">
        <div>
          <Link href="/blog" className="text-xs text-[#d4af37] font-bold hover:underline mb-4 block">← Back to Kitchen & Cellar Dispatches</Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full uppercase border border-[#d4af37]/30">CULINARY TECHNIQUE</span>
            <span className="text-xs text-gray-500">5 Min Read · Executive Chef Note</span>
          </div>
          <h1 className="text-4xl font-light text-[#f5f0e8] font-serif mt-3 mb-2 leading-snug">The Art of the Reduction: 48-Hour Veal Glace</h1>
          <p className="text-gray-400 text-sm">Published: July 28, 2026 · By Chef Armand Laurent · Executive Chef & Culinary Director</p>
        </div>

        <div className="bg-[#141414] border border-white/5 rounded-3xl p-8 space-y-6 text-gray-300 text-sm leading-relaxed">
          <p>
            A truly great sauce is the absolute soul of classical French haute cuisine. At The Golden Spoon, our signature veal glace begins with 12kg of roasted marrow bones, heirloom mirepoix, and 48 hours of patient simmering before being reduced by 90% into a mirror-shine obsidian glaze.
          </p>
          <h2 className="text-xl font-bold text-white font-serif">The Technique Behind the Glace</h2>
          <p>
            The process begins with oven-roasting the bones to 200°C until deeply caramelised, creating the Maillard reaction compounds that give the final glace its characteristic depth. The stock is then filtered through a fine-mesh chinois before the long, patient reduction begins.
          </p>
          <p>
            Patience is everything. A rushed reduction will taste bitter. Ours cooks at 85°C — below a rolling boil — to extract the maximum collagen without scorching the natural sugars.
          </p>
          <div className="bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl p-5 text-xs text-[#d4af37] space-y-2">
            <strong className="block font-bold text-white">🍷 Master Sommelier Pairing Note — Jean-Luc Moreau:</strong>
            <p>Dishes featuring this glace pair magnificently with a 2015 Château Margaux Premier Grand Cru Classé or a 2009 Barolo Bricco Boschis from Cavallotto, where the tertiary truffle and dried rose petal notes harmonise with the bone marrow richness.</p>
          </div>
          <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
            <span className="text-gray-500">Technique: Classical French Glace de Viande Reduction</span>
            <Link href="/reservation" className="text-[#d4af37] font-bold hover:underline">Reserve Tasting Menu Table →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
