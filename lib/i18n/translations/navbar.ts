export type NavbarTranslation = {
  login: string;
  tryNow: string;
  employers: string;
  blog: string;
};

export const navbar: {
  da: NavbarTranslation;
  en: NavbarTranslation;
} = {
  da: {
    login: 'Log ind',
    tryNow: 'Prøv nu',
    employers: 'For Arbejdsgivere',
    blog: 'Blog',
  },
  en: {
    login: 'Log in',
    tryNow: 'Try now',
    employers: 'For Employers',
    blog: 'Blog',
  },
};
