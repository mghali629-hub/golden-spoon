'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const galleryPhotos = [
  { title: 'The Main Dining Room at Night', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', desc: 'Custom velvet banquettes and crystal chandeliers in Mayfair.' },
  { title: 'Pan-Seared Scallops with Oscietra Caviar', src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', desc: 'Maine scallops in cauliflower purée and brown butter.' },
  { title: 'Chef Armand Preparing Black Truffle Glace', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80', desc: 'Plating the 48-hour veal glace at the pass.' },
  { title: 'The Subterranean Wine Vault', src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', desc: 'Housing 4,000 vintage European bottles.' },
  { title: 'Valrhona Dark Chocolate Sphere', src: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&q=80', desc: 'Served with hot salted caramel pour.' },
  { title: 'Sovereign Room Private Table', src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80', desc: 'Seating up to 14 guests with dedicated sommelier.' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center font-sans">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            VISUAL GASTRONOMY
          </span>
          <h1 className="text-5xl font-light mt-4 mb-3 font-serif">Restaurant Photo Gallery</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">A visual showcase of our dining room, dishes, kitchen brigade, and wine cellar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {galleryPhotos.map((p, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#d4af37]/40 transition-colors">
              <div className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${p.src}')` }} />
              <div className="p-5 space-y-1">
                <h3 className="font-serif font-light text-[#f5f0e8] text-base">{p.title}</h3>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center font-sans pt-4">
          <Link href="/reservation" className="inline-block bg-[#d4af37] text-black font-bold text-xs px-8 py-3 rounded-xl hover:bg-[#b89830] transition-colors uppercase tracking-wider">
            Reserve Dining Table Online
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
