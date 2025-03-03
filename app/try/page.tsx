'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TryNowPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <p className="text-base sm:text-xl text-muted-foreground" aria-live="polite">
        {t.tryNow.workInProgress}
      </p>
    </div>
  );
}