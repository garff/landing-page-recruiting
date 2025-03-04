export type CookieConsentTranslation = {
  title: string;
  description: string;
  accept: string;
  reject: string;
};

export const cookieConsent: {
  da: CookieConsentTranslation;
  en: CookieConsentTranslation;
} = {
  da: {
    title: 'Cookie-indstillinger',
    description:
      "Denne hjemmeside gemmer cookies på din computer. Ved at fortsætte med at browse eller ved at klikke på 'Accepter' accepterer du lagring af cookies på din enhed for at forbedre din webstedsoplevelse og til analytiske formål.",
    accept: 'Accepter',
    reject: 'Afvis',
  },
  en: {
    title: 'Cookie Settings',
    description:
      "This website stores cookies on your computer. By continuing to browse or by clicking 'Accept', you agree to the storing of cookies on your device to enhance your site experience and for analytical purposes.",
    accept: 'Accept',
    reject: 'Reject',
  },
};
