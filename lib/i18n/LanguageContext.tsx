'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { translations, Translation } from './translations/translations';

type LanguageContextType = {
  language: string;
  t: Translation;
  setLanguage: (lang: string) => void;
};

const defaultLanguage = 'da';

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  t: translations[defaultLanguage],
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [t, setT] = useState<Translation>(translations[defaultLanguage]);

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, t, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
