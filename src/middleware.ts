import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set(
    "x-portfolio-locale",
    request.nextUrl.pathname === "/pt-br" ||
      request.nextUrl.pathname.startsWith("/pt-br/")
      ? "pt-br"
      : "en",
  );
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/((?!_next|icon.svg|opengraph-image).*)"] };
