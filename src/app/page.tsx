'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';
import { Award, Sparkles, Utensils, Wine, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export default function GoldenSpoonHomePage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [guestName, setGuestName] = useState('');
  const [date, setDate] = useState('2026-09-20');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState(2);
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setMenu(data.menu);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleReservation = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guestName, phone: '+1 555 0192', guests, date, time }),
      });
      const data = await res.json();
      if (data.success) setReserved(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-slate-100 font-serif selection:bg-[#D4AF37] selection:text-black flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-20">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1800&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#D4AF37]/40 text-[#D4AF37] font-sans text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4 text-[#D4AF37]" /> 3 Michelin Stars — World’s 50 Best Restaurants
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold uppercase text-white tracking-tight leading-none">
              Golden Spoon <span className="text-[#D4AF37] block mt-2">Gastronomy</span>
            </h1>
            <p className="font-sans text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Miyazaki Wagyu tartare, Antarctic glacier toothfish, and Grand Cru Bordeaux wine cellar pairings.
            </p>

            <div className="pt-6 font-sans flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#reserve"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition-all text-center"
              >
                Reserve Tasting Table
              </a>
              <Link
                href="/menu"
                className="px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all text-center"
              >
                Inspect Tasting Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Tasting Menu Showcase */}
        <section className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2 font-sans">
            <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest block">Culinary Highlights</span>
            <h2 className="font-serif text-4xl font-bold text-white">Summer Signature Dishes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            {menu.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-4 flex flex-col justify-between">
                <div>
                  <img src={item.image} alt={item.name} className="h-52 w-full object-cover rounded-2xl mb-4" />
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block font-bold mb-1">{item.category}</span>
                  <h3 className="font-serif text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center font-mono">
                  <span className="text-[#D4AF37] font-bold text-lg">{item.price}</span>
                  <Link href="/reservation" className="px-4 py-2 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase">
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reservation Form */}
        <section id="reserve" className="max-w-3xl mx-auto px-4 font-sans">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-[#D4AF37]/30 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <span className="text-xs text-[#D4AF37] font-mono font-bold uppercase tracking-widest block">Private Dining Desk</span>
              <h2 className="font-serif text-3xl font-bold text-white">Table Reservation System</h2>
            </div>

            {!reserved ? (
              <form onSubmit={handleReservation} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Guest Full Name</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Lord Vance"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Time</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Party Size</label>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8520] text-black font-bold text-xs uppercase tracking-widest"
                >
                  Save Table Reservation in Database
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950 border border-[#D4AF37] text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-white">Table Confirmed</h3>
                <p className="text-slate-300 text-xs">Thank you, {guestName}. Reservation saved for {date} at {time}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
