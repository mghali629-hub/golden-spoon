import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://goldenspoon.restaurant'),
  title: {
    default: 'The Golden Spoon | ★★ Michelin Fine Dining & Wine Cellar',
    template: '%s | The Golden Spoon',
  },
  description: 'Two Michelin-starred restaurant led by Executive Chef Armand Laurent. Featuring 48-hour French veal reductions, A5 Miyazaki Wagyu, and a 4,000-label wine cellar.',
  keywords: ['Fine Dining', 'Michelin Star Restaurant', 'Haute Cuisine', 'Wine Cellar', 'Chef Tasting Menu', 'Private Dining'],
  openGraph: {
    title: 'The Golden Spoon | ★★ Michelin Fine Dining',
    description: 'An exceptional gastronomic experience crafted with classical French technique and contemporary artistry.',
    url: 'https://goldenspoon.restaurant',
    siteName: 'The Golden Spoon Haute Cuisine',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Golden Spoon Fine Dining',
    description: '★★ Michelin Star gastronomy and 4,000-label private cellar.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0c0c0c] text-[#f5f0e8] antialiased selection:bg-[#d4af37] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
