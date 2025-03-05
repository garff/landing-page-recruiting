'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary/5 mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt=" JobPlatformen Logo"
                width={32}
                height={32}
                className="h-7 sm:h-8 w-auto"
              />
              <span className="font-bold text-lg sm:text-xl">
                Jo<span className="text-primary">b</span>Platformen
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              {t.footer.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary text-sm sm:text-base mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3" aria-label="Quick links">
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.forEmployers}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-primary text-sm sm:text-base mb-4">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3" aria-label="Legal information">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.cookiePolicy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link
                  href="/gdpr"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.gdpr}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-xs sm:text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} JobPlatformen.{' '}
            {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
