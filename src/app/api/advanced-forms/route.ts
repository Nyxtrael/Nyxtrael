import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    // Very light validation (demo only)
    if (!payload?.name || !payload?.email) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }
    // simulate processing
    return NextResponse.json({ ok: true, id: Math.random().toString(36).slice(2), received: payload });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Invalid JSON' }, { status: 400 });
  }
}
