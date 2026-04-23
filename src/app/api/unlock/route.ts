import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (password === process.env.MULTI_LOCATION_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("ml_unlocked", "1", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return res;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
