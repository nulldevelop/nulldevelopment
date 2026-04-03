import { type NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
	const sessionCookie =
		request.cookies.get('better-auth.session_token') ??
		request.cookies.get('__Secure-better-auth.session_token')

	if (!sessionCookie?.value && request.nextUrl.pathname.startsWith('/dashboard')) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*'],
}
