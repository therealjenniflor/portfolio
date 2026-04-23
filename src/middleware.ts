import { NextRequest, NextResponse } from "next/server";

const PROTECTED = "/multi-location-access";
const COOKIE = "ml_unlocked";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith(PROTECTED)) {
    const unlockPath = `${PROTECTED}/unlock`;
    if (pathname === unlockPath) return NextResponse.next();

    const cookie = req.cookies.get(COOKIE);
    if (cookie?.value !== "1") {
      const url = req.nextUrl.clone();
      url.pathname = unlockPath;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/multi-location-access/:path*"],
};
