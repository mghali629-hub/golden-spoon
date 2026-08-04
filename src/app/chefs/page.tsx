'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Award, Sparkles, Star } from 'lucide-react';

interface Chef {
  id: number;
  name: string;
  role: string;
  bio: string;
  awards: string;
  photo: string;
}

export default function ChefsDirectoryPage() {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    fetch('/api/chefs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setChefs(data.chefs);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-12">
        <div className="text-center font-sans space-y-2">
          <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest block">Michelin Masters</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">The Culinary Alchemy Team</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Trained in classical Paris and Tokyo ateliers, bringing precision and innovation to every plate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {chefs.map((chef) => (
            <div key={chef.id} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row gap-6 items-center">
              <img src={chef.photo} alt={chef.name} className="w-32 h-32 rounded-2xl object-cover border border-[#D4AF37]/40" />
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold font-mono uppercase inline-block">
                  {chef.awards}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">{chef.name}</h3>
                <span className="text-slate-400 text-xs block font-mono">{chef.role}</span>
                <p className="text-slate-300 text-xs leading-relaxed">{chef.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
