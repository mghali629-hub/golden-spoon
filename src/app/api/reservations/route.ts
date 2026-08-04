import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { guestName, phone, guests, date, time } = body;

    const res = await prisma.reservation.create({
      data: {
        guestName,
        phone,
        guests: Number(guests) || 2,
        date,
        time,
      },
    });

    return NextResponse.json({ success: true, reservation: res });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
