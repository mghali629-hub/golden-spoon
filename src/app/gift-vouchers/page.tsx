'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CheckCircle2 } from 'lucide-react';

export default function GiftVouchersPage() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('250');
  const [issued, setIssued] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIssued(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-serif flex flex-col justify-between">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="text-center font-sans">
          <h1 className="font-serif text-4xl font-bold text-white mb-2">Culinary Gift Cards</h1>
          <p className="text-slate-400 text-sm">Gift a 3-star Michelin tasting menu experience.</p>
        </div>

        {!issued ? (
          <form onSubmit={handleSubmit} className="font-sans p-8 rounded-3xl bg-slate-900 border border-[#D4AF37]/30 space-y-4">
            <div>
              <label className="text-xs text-slate-400 block mb-1">Recipient Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="friend@luxury.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="text-xs text-slate-400 block mb-1">Voucher Amount ($USD)</label>
              <select value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white">
                <option value="250">$250 Gift Voucher</option>
                <option value="500">$500 Tasting Menu Voucher</option>
                <option value="1000">$1,000 Chef's Table Voucher</option>
              </select>
            </div>
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E67E22] text-black font-bold text-xs uppercase tracking-wider">
              Issue Digital Gift Voucher
            </button>
          </form>
        ) : (
          <div className="font-sans p-8 rounded-3xl bg-slate-900 border border-[#D4AF37] text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-white">Voucher Issued</h3>
            <p className="text-slate-300 text-sm">Sent ${amount} voucher code to {email}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
