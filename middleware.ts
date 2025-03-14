import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  const requestHeaders = new Headers(request.headers);

  if (request.nextUrl.pathname.startsWith('/try')) {
    if (!token) {
      const url = new URL('/', request.url);
      url.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);

      return NextResponse.next();
    } catch (error) {
      const url = new URL('/', request.url);
      url.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/try/:path*'],
};
