export type FooterTranslation = {
  mission: string;
  quickLinks: string;
  aboutUs: string;
  forEmployers: string;
  contact: string;
  legal: string;
  privacyPolicy: string;
  cookiePolicy: string;
  termsOfService: string;
  gdpr: string;
  allRightsReserved: string;
};

export const footer: {
  da: FooterTranslation;
  en: FooterTranslation;
} = {
  da: {
    mission:
      "Forbinder talent med muligheder gennem AI-drevet jobmatchning. Opret CV'er og ansøgninger, der bliver bemærket, og lad arbejdsgivere komme til dig.",
    quickLinks: 'Hurtige links',
    aboutUs: 'Om os',
    forEmployers: 'For arbejdsgivere',
    contact: 'Kontakt',
    legal: 'Juridisk',
    privacyPolicy: 'Privatlivspolitik',
    cookiePolicy: 'Cookie-politik',
    termsOfService: 'Servicevilkår',
    gdpr: 'GDPR',
    allRightsReserved: 'Alle rettigheder forbeholdes.',
  },
  en: {
    mission:
      'Connecting talent with opportunity through AI-powered job matching. Create resumes and applications that get noticed and let employers come to you.',
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    forEmployers: 'For Employers',
    contact: 'Contact',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    termsOfService: 'Terms of Service',
    gdpr: 'GDPR',
    allRightsReserved: 'All rights reserved.',
  },
};
