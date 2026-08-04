'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function ReservationPage() {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-08-20');
  const [time, setTime] = useState('19:30');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guestName, phone, guests, date, time }),
      });
      const data = await res.json();
      if (data.success) setConfirmed(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Table Reservation</h1>
          <p className="font-sans text-slate-400 text-sm">Formal dining attire required. Booking saved to database.</p>
        </div>

        {!confirmed ? (
          <form onSubmit={handleSubmit} className="font-sans p-8 rounded-3xl bg-slate-900/80 border border-[#D4AF37]/30 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Guest Name</label>
              <input type="text" required value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Mr. Antoine" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Phone Number</label>
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 019-2834" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E67E22] text-black font-bold text-xs uppercase tracking-wider">
              Confirm Reservation via API
            </button>
          </form>
        ) : (
          <div className="font-sans p-8 rounded-3xl bg-slate-900 border border-[#D4AF37] text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
            <h3 className="text-2xl font-bold text-white">Table Reserved</h3>
            <p className="text-slate-300 text-sm">Confirmed for {guestName} on {date} at {time}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
