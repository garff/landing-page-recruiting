import { NavbarTranslation, navbar } from './navbar';
import { FooterTranslation, footer } from './footer';
import { HomeTranslation, home } from './home';
import { BusinessTranslation, business } from './business';
import { TryNowTranslation, tryNow } from './tryNow';
import { BlogTranslation, blog } from './blog';
import { CookieConsentTranslation, cookieConsent } from './cookieConsent';
import { LoginTranslation, login } from './login';
import { resetPassword, ResetPasswordTranslation } from './resetPassword';

export type Translation = {
  language: string;
  navbar: NavbarTranslation;
  footer: FooterTranslation;
  home: HomeTranslation;
  business: BusinessTranslation;
  tryNow: TryNowTranslation;
  blog: BlogTranslation;
  cookieConsent: CookieConsentTranslation;
  login: LoginTranslation;
  resetPassword: ResetPasswordTranslation;
};

export const translations: Record<string, Translation> = {
  en: {
    language: 'en',
    navbar: navbar['en'],
    footer: footer['en'],
    home: home['en'],
    business: business['en'],
    tryNow: tryNow['en'],
    blog: blog['en'],
    cookieConsent: cookieConsent['en'],
    login: login['en'],
    resetPassword: resetPassword['en'],
  },
  da: {
    language: 'da',
    navbar: navbar['da'],
    footer: footer['da'],
    home: home['da'],
    business: business['da'],
    tryNow: tryNow['da'],
    blog: blog['da'],
    cookieConsent: cookieConsent['da'],
    login: login['da'],
    resetPassword: resetPassword['da'],
  },
};
