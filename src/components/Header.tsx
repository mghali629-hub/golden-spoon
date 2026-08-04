'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UtensilsCrossed } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'History' },
    { href: '/menu', label: 'Tasting Menu' },
    { href: '/menu/starters', label: 'Starters' },
    { href: '/menu/mains', label: 'Entrees' },
    { href: '/menu/desserts', label: 'Desserts' },
    { href: '/menu/wine-bar', label: 'Wine Cellar' },
    { href: '/reservation', label: 'Reservation' },
    { href: '/chef', label: 'Master Chef' },
    { href: '/chefs', label: 'Culinary Team' },
    { href: '/events', label: 'Private Dining' },
    { href: '/awards', label: 'Michelin Stars' },
    { href: '/gift-vouchers', label: 'Gift Cards' },
    { href: '/delivery', label: 'At Home' },
    { href: '/gallery', label: 'Ambience' },
    { href: '/blog', label: 'Recipes' },
    { href: '/press', label: 'Press' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E67E22] flex items-center justify-center text-black shadow-lg shadow-[#D4AF37]/20">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">Golden Spoon</span>
            <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-sans font-semibold uppercase block -mt-1">Michelin Fine Dining</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-sans font-medium text-slate-300 overflow-x-auto no-scrollbar [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors whitespace-nowrap py-1 ${pathname === link.href ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold' : 'hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/reservation"
          className="font-sans px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E67E22] text-black font-bold text-[11px] uppercase tracking-wider shadow-lg transition-all shrink-0"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20 py-12 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
            <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" /> GOLDEN SPOON
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            3-Star Michelin Honoree. Culinary precision and haute gastronomy since 2008.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Menus</h4>
          <ul className="space-y-2">
            <li><Link href="/menu/starters" className="hover:text-[#D4AF37]">Appetizers & Starters</Link></li>
            <li><Link href="/menu/mains" className="hover:text-[#D4AF37]">Signature Mains</Link></li>
            <li><Link href="/menu/wine-bar" className="hover:text-[#D4AF37]">Sommelier Cellar Selection</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Experience</h4>
          <ul className="space-y-2">
            <li><Link href="/events/private-dining" className="hover:text-[#D4AF37]">Private Dining Rooms</Link></li>
            <li><Link href="/gift-vouchers" className="hover:text-[#D4AF37]">Culinary Gift Vouchers</Link></li>
            <li><Link href="/delivery" className="hover:text-[#D4AF37]">Fine Dining at Home</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-white font-bold mb-3 uppercase text-xs tracking-wider">Reservations Desk</h4>
          <p className="text-slate-400">Formal Attire Required:</p>
          <p className="text-[#D4AF37] font-bold mt-1 text-sm">+1 (800)  Michelin-01</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 text-center text-slate-500 text-[11px]">
        © 2026 Golden Spoon Fine Dining Group. All rights reserved.
      </div>
          <div className="max-w-7xl mx-auto px-4 mt-6 pt-4 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-amber-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
