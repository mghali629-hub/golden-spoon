'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/Header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#f5f0e8] flex flex-col font-serif">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 font-sans">
        <div className="text-5xl font-light text-[#d4af37] mb-4 font-serif">404</div>
        <h1 className="text-3xl font-light text-white mb-3 font-serif">Culinary Dish Not Found</h1>
        <p className="text-gray-400 text-xs max-w-md mb-8">
          The requested menu course, private room reservation, or wine pairing note could not be retrieved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#d4af37] hover:bg-[#c49f27] text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-colors"
          >
            Return to Restaurant
          </Link>
          <Link
            href="/reservation"
            className="px-6 py-3 bg-[#141414] hover:bg-[#222] text-[#d4af37] font-bold rounded-xl text-xs uppercase tracking-wider border border-[#d4af37]/30 transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
