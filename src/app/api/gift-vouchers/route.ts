import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, recipientEmail } = body;
    const code = 'GS-GIFT-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const voucher = await prisma.giftVoucher.create({
      data: { code, amount: Number(amount), recipientEmail },
    });
    return NextResponse.json({ success: true, voucher });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
