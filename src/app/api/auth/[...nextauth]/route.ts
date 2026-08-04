import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_gs_chef_001',
      name: 'Chef Armand Laurent',
      email: 'a.laurent@goldenspoon.com',
      role: 'EXECUTIVE_CHEF',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'gs_jwt_michelin_449102',
      user: {
        id: 'usr_gs_guest_102',
        email: body.email || 'guest@goldenspoon.com',
        role: 'VIP_GUEST',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid reservation credentials' }, { status: 400 });
  }
}
