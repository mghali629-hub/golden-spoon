'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default function GoldenSpoonEventsPage() {
  const [events, setEvents] = useState<EventItem[]>([
    { id: 1, title: 'Black Truffle & Barolo Gala Evening', date: 'October 14, 2026', description: 'Exclusive 7-course dinner featuring fresh Alba white truffles paired with rare vintages from Gaja and Conterno.' },
    { id: 2, title: 'Champagne Salon & Caviar Masterclass', date: 'November 02, 2026', description: 'Guided tasting of Salon Le Mesnil Champagnes paired with Imperial Oscietra and Beluga caviar.' },
  ]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setEvents(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] font-serif flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1">
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest text-[#d4af37] uppercase font-sans font-semibold">Special Occasions</span>
          <h1 className="text-4xl font-light mt-3 mb-3">Private Dining & Events</h1>
          <p className="text-gray-400 font-sans text-base max-w-xl mx-auto">Host extraordinary celebrations, corporate galas, and bespoke culinary gatherings in our private dining rooms.</p>
        </div>

        <div className="space-y-6 mb-14">
          {events.map((e) => (
            <div key={e.id} className="bg-[#141414] border border-[#d4af37]/20 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <span className="text-xs font-sans text-[#d4af37] font-bold tracking-widest uppercase">📅 {e.date}</span>
                <h3 className="text-2xl font-light text-[#f5f0e8]">{e.title}</h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-2xl">{e.description}</p>
              </div>
              <Link href="/reservation" className="bg-[#d4af37] text-black font-sans font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#b89830] transition-colors shrink-0">
                RESERVE TICKETS
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
