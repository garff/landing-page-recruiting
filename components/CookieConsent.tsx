'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function CookieConsent() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setOpen(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed bottom-4 left-4 z-50 w-full max-w-xl bg-white rounded-lg shadow-lg"
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="p-4 sm:p-6">
        <h3
          id="cookie-title"
          className="text-base sm:text-lg font-semibold mb-2"
        >
          {t.cookieConsent.title}
        </h3>
        <p
          id="cookie-description"
          className="text-xs sm:text-sm text-muted-foreground mb-4"
        >
          {t.cookieConsent.description}
        </p>
        <div className="flex justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm"
            onClick={handleReject}
            aria-label={t.cookieConsent.reject}
          >
            {t.cookieConsent.reject}
          </Button>
          <Button
            size="sm"
            className="text-xs sm:text-sm"
            onClick={handleAccept}
            aria-label={t.cookieConsent.accept}
          >
            {t.cookieConsent.accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
