'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Wine, Sparkles, Award } from 'lucide-react';

interface WineItem {
  id: number;
  name: string;
  vintage: string;
  region: string;
  price: string;
}

export default function WineBarPage() {
  const [wines, setWines] = useState<WineItem[]>([]);

  useEffect(() => {
    fetch('/api/wine')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setWines(data.wines);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2">
          <span className="font-sans text-[#D4AF37] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
            <Wine className="w-4 h-4 text-[#D4AF37]" /> Grand Cru Sommelier Cellar
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Vintage Wine Collection</h1>
          <p className="font-sans text-slate-400 text-sm max-w-xl mx-auto">
            Curated vintage bottles preserved in temperature-controlled subterranean stone vaults.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {wines.map((wine) => (
            <div key={wine.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex justify-between items-start font-serif">
                <div>
                  <span className="text-[#D4AF37] text-xs font-mono font-bold block">{wine.vintage} Vintage</span>
                  <h3 className="text-xl font-bold text-white mt-1">{wine.name}</h3>
                  <p className="font-sans text-slate-400 text-xs mt-1">{wine.region}</p>
                </div>
                <span className="font-sans text-2xl font-bold text-[#D4AF37]">{wine.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
