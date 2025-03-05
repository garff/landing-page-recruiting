'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LoginDialog } from '@/components/LoginDialog/LoginDialog';
import { LanguageDropdown } from '@/components/LanguageDropdown/LanguageDropdown';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="border-b" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and company name */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label=" JobPlatformen Home"
            >
              <Image
                src="/logo.png"
                alt=" JobPlatformen Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">
                Jo<span className="text-primary">b</span>Platformen
              </span>
            </Link>
          </div>

          {/* Navigation items */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <LanguageDropdown />
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              aria-label="Blog"
            >
              {t.navbar.blog || 'Blog'}
            </Link>
            <Link
              href="/business"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              aria-label="For Employers"
            >
              {t.navbar.employers}
            </Link>
            <Link href="/try" className="max-sm:hidden" aria-label="Try Now">
              <Button size="sm" className="text-xs">
                {t.navbar.tryNow}
              </Button>
            </Link>
            <div className="scale-90 sm:scale-100">
              <LoginDialog />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
