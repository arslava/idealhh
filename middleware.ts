import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale =
    pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" :
    pathname === "/es" || pathname.startsWith("/es/") ? "es" :
    pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" :
    pathname === "/zh-hant" || pathname.startsWith("/zh-hant/") ? "zh-Hant" :
    "en";

  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Skip static assets and API routes — only page requests need the locale header.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
