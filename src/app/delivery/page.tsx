'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function GoldenSpoonDeliveryPage() {
  const menuItems = [
    { name: 'Wagyu Beef Wellington', price: 145, desc: 'A5 Wagyu, truffle duxelles, port wine jus', time: '45 min', category: 'Signature' },
    { name: 'Lobster Thermidor', price: 165, desc: 'Whole Maine lobster, gruyère béchamel, cognac', time: '35 min', category: 'Signature' },
    { name: 'Black Truffle Risotto', price: 95, desc: 'Arborio rice, Périgord truffle, aged Parmesan', time: '30 min', category: 'Vegetarian' },
    { name: 'Crispy Duck Confit', price: 125, desc: 'Heritage duck, cherry gastrique, pommes sarladaises', time: '40 min', category: 'Classic' },
    { name: 'Seared Foie Gras', price: 85, desc: 'Hudson Valley foie gras, brioche, fig compote', time: '20 min', category: 'Starter' },
    { name: 'Soufflé au Chocolat', price: 55, desc: 'Valrhona 70%, vanilla crème anglaise', time: '25 min', category: 'Dessert' },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-sans font-semibold">Delivery Service</span>
          <h1 className="text-4xl font-light mt-3 mb-3">The Golden Spoon. Delivered.</h1>
          <p className="text-gray-400 font-sans text-base max-w-lg mx-auto">Michelin-starred dining, brought to your door in temperature-controlled luxury packaging. Available within 15km of central London.</p>
        </div>

        {/* Delivery Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: '🚗', title: 'Delivery Radius', detail: 'Within 15km · Average 45 min' },
            { icon: '🌡️', title: 'Temperature Controlled', detail: 'Custom thermal packaging preserves every dish at ideal serving temperature' },
            { icon: '💳', title: 'Minimum Order', detail: '£150 · Available Thu–Sun 6PM–10PM' },
          ].map((info, i) => (
            <div key={i} className="bg-[#141414] border border-[#d4af37]/20 rounded-2xl p-6 flex gap-4">
              <span className="text-3xl">{info.icon}</span>
              <div><h3 className="font-sans font-semibold text-[#f5f0e8] mb-1 text-sm">{info.title}</h3><p className="text-gray-400 font-sans text-xs leading-relaxed">{info.detail}</p></div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <h2 className="text-2xl font-light mb-6 text-center">Delivery Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {menuItems.map((item, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex justify-between items-start gap-4 hover:border-[#d4af37]/30 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#d4af37] font-sans font-semibold border border-[#d4af37]/30 px-2 py-0.5 rounded">{item.category}</span>
                  <span className="text-xs text-gray-500 font-sans">⏱ {item.time}</span>
                </div>
                <h3 className="font-semibold text-[#f5f0e8] mb-1">{item.name}</h3>
                <p className="text-gray-400 font-sans text-xs leading-relaxed">{item.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[#d4af37] font-bold font-sans text-lg">£{item.price}</div>
                <button className="mt-2 bg-[#d4af37] text-black text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#b89830] transition-colors font-sans">ADD</button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery CTA */}
        <div className="bg-[#141414] border border-[#d4af37]/30 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-light mb-2">Ready to Order?</h2>
          <p className="text-gray-400 font-sans text-sm mb-6">Call our private dining line or order via WhatsApp for a bespoke delivery experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+442071234567" className="bg-[#d4af37] text-black font-sans font-bold px-8 py-3 rounded-xl hover:bg-[#b89830] transition-colors">📞 +44 207 123 4567</a>
            <a href="#" className="border border-[#d4af37]/50 text-[#d4af37] font-sans font-semibold px-8 py-3 rounded-xl hover:bg-[#d4af37]/10 transition-colors">💬 WhatsApp Order</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
