import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let items = await prisma.menuItem.findMany();
    if (items.length === 0) {
      const initialMenu = [
        {
          name: 'Pan-Seared Hokkaido Scallops',
          category: 'Starters',
          price: '$38',
          description: 'Wild Hokkaido sea scallops, cauliflower silk puree, Oscietra caviar.',
          image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop',
        },
        {
          name: 'Dry-Aged Prime Ribeye 16oz',
          category: 'Main Courses',
          price: '$98',
          description: '45-day dry-aged USDA Prime Ribeye, smoked bone marrow butter.',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
        },
      ];
      await prisma.menuItem.createMany({ data: initialMenu });
      items = await prisma.menuItem.findMany();
    }
    return NextResponse.json({ success: true, menu: items });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
