import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from './i18n/settings';
import { NEXT_LOCALE } from './commons/storageKeys';

acceptLanguage.languages(languages);

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};

const cookieName = NEXT_LOCALE;

export async function middleware(req: NextRequest) {
	const { pathname, searchParams } = req.nextUrl;
	const requestHeaders = new Headers(req.headers);
	requestHeaders.set('x-next-pathname', req.nextUrl.pathname);

	let lng;
	let pathLocale = getPathLocale(pathname);
	let search = searchParams.get('s');
	let type = searchParams.get('type');

	if (pathLocale) lng = pathLocale;
	if (!lng && req.cookies.has(cookieName)) lng = req.cookies.get(cookieName)?.value;
	if (!lng) lng = fallbackLng;
	req.cookies.set(cookieName, lng);

	if (
		pathname.replace('/', '') == '' ||
		pathname.replace('/', '') == 'trang-chu' ||
		pathname.replace('/', '') == pathLocale
	) {
		return NextResponse.rewrite(new URL(`/${lng}`, req.url));
	}

	if (!pathLocale) {
		if (type && type == 'list') {
			console.log(
				'object :>> ',
				reFormatPath(`/${lng}/list/${pathname}/${search ? '?s=' + search : ''}`)
			);
			return NextResponse.rewrite(
				new URL(reFormatPath(`/${lng}/list/${pathname}/${search ? '?s=' + search : ''}`), req.url)
			);
		}
		return NextResponse.rewrite(
			new URL(reFormatPath(`/${lng}${pathname}${search ? '?s=' + search : ''}`), req.url)
		);
	}

	return NextResponse.next();
}

/**
 * Xóa // thành /
 */
const reFormatPath = (path: string) => {
	return path.replaceAll('//', '/');
};

/**
 * Có chứa locale trong router không
 */
const getPathLocale = (path: string) => {
	let rgxLocale: RegExp = /^\/(?:(vi|en)\/?)?/g;
	return path.match(rgxLocale)?.[0].replaceAll('/', '');
};
