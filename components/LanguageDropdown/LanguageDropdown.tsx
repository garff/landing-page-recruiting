'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages.find((lang) => lang.code === language) || languages[1]
  );

  useEffect(() => {
    // Update the current language when the context language changes
    const langObj = languages.find((lang) => lang.code === language);
    if (langObj) {
      setCurrentLanguage(langObj);
    }
  }, [language]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setLanguage(language.code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 gap-1 px-2 border rounded-md flex items-center"
          aria-label={`Select language: currently ${currentLanguage.name}`}
        >
          <span className="text-base" aria-hidden="true">
            {currentLanguage.flag}
          </span>
          <ChevronDown
            className="h-4 w-4 text-muted-foreground"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className="flex items-center justify-between"
            aria-label={language.name}
            role="menuitem"
          >
            <span className="flex items-center gap-2">
              <span className="text-base" aria-hidden="true">
                {language.flag}
              </span>
              <span className="text-sm">{language.name}</span>
            </span>
            {currentLanguage.code === language.code && (
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
