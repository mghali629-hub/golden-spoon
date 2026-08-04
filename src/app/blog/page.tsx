'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const posts = [
  { slug: 'art-of-sauce-making-french-tradition', title: 'The Art of the Reduction: 48-Hour Veal Glace', date: 'July 28, 2026', author: 'Chef Armand Laurent', category: 'CULINARY TECHNIQUE', excerpt: 'How roasted marrow bones and 48 hours of gentle simmering create the soul of classic French haute cuisine.' },
  { slug: 'vintage-barolo-pairing-notes', title: 'Cellar Notes: Pairing 1996 Conterno Barolo with Game Loin', date: 'July 10, 2026', author: 'Jean-Luc Moreau (Master Sommelier)', category: 'WINE CELLAR', excerpt: 'Deconstructing tannin structures and tertiary truffle notes alongside roasted Highland venison.' },
];

export default function GoldenSpoonBlogPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-10">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            GASTRONOMY JOURNAL
          </span>
          <h1 className="text-5xl font-light font-serif mt-4 mb-3">Kitchen & Cellar Dispatches</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Insights into classical French techniques, seasonal sourcing, and rare wine pairings.</p>
        </div>

        <div className="space-y-6 font-sans">
          {posts.map((p) => (
            <div key={p.slug} className="bg-[#141414] border border-white/5 rounded-3xl p-8 space-y-3 hover:border-[#d4af37]/40 transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full uppercase">{p.category}</span>
                <span className="text-xs text-gray-500">{p.date} · By {p.author}</span>
              </div>
              <h2 className="text-2xl font-light text-[#f5f0e8] font-serif">{p.title}</h2>
              <p className="text-gray-400 text-xs leading-relaxed">{p.excerpt}</p>
              <div className="pt-2">
                <Link href={`/blog/${p.slug}`} className="inline-block text-[#d4af37] font-bold text-xs hover:underline uppercase tracking-wider">
                  Read Journal Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
