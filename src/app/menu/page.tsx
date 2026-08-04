'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setMenu(data.menu);
      });
  }, []);

  const filtered = menu.filter((i) => selectedCategory === 'All' || i.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center space-y-2">
          <span className="font-sans text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Haute Cuisine</span>
          <h1 className="text-4xl font-bold text-white">Summer Tasting Menu</h1>
        </div>

        <div className="font-sans flex justify-center gap-3 bg-slate-900/60 p-2 rounded-2xl border border-slate-800">
          {['All', 'Starters', 'Main Courses'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${selectedCategory === cat ? 'bg-[#D4AF37] text-black' : 'text-slate-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 flex gap-6 items-center">
              <img src={item.image} alt={item.name} className="w-28 h-28 rounded-2xl object-cover" />
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="font-sans font-extrabold text-[#D4AF37] text-lg">{item.price}</span>
                </div>
                <p className="font-sans text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
