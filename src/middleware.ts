import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|de|en|es|fr|zh)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
