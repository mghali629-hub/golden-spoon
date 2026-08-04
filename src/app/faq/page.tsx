'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

const faqs = [
  { q: 'What is the dress code at The Golden Spoon?', a: 'Smart elegant attire is required. We request gentlemen wear tailored jackets; athletic wear, t-shirts, and sneakers are strictly prohibited.' },
  { q: 'How far in advance do reservation slots open?', a: 'Reservations open 60 days in advance on the 1st of each month at 10:00 AM GMT.' },
  { q: 'Can dietary requirements be accommodated?', a: 'Yes, with at least 48 hours notice we can tailor our tasting menus for vegetarian, vegan, gluten-free, and halal requirements.' },
  { q: 'What is your cancellation policy?', a: 'Cancellations made within 48 hours of your reservation will incur a £100 per person cancellation fee.' },
  { q: 'Is valet parking available?', a: 'Complimentary valet parking is available at our Mayfair entrance for all dining guests.' },
];

export default function GoldenSpoonFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-20 flex-1 space-y-10 font-sans">
        <div className="text-center">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold bg-[#d4af37]/10 px-4 py-1.5 rounded-full border border-[#d4af37]/30">
            GUEST INFORMATION
          </span>
          <h1 className="text-4xl font-light font-serif mt-4 mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-xs">Everything you need to know about dress codes, reservations, and dietary accommodation.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-[#f5f0e8] flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-[#d4af37] font-mono text-xl ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-bold text-white text-base">Have Special Requests?</h3>
          <p className="text-gray-400 text-xs">Our maître d' team is at your service.</p>
          <Link href="/contact" className="inline-block text-[#d4af37] font-bold text-xs hover:underline uppercase tracking-wider">
            Contact Dining Room →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
