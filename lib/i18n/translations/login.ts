export type LoginTranslation = {
  login: string;
  loginDescription: string;
  signup: string;
  signupDescription: string;
  email: string;
  password: string;
  fullName: string;
  forgotPassword: string;
  signIn: string;
  signUp: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
};

export const login: {
  da: LoginTranslation;
  en: LoginTranslation;
} = {
  da: {
    login: 'Log ind på din konto',
    loginDescription:
      'Indtast din e-mail og adgangskode for at få adgang til din konto.',
    signup: 'Opret en konto',
    signupDescription: 'Indtast dine oplysninger for at oprette en ny konto.',
    email: 'E-mail',
    password: 'Adgangskode',
    fullName: 'Fulde navn',
    forgotPassword: 'Glemt adgangskode?',
    signIn: 'Log ind',
    signUp: 'Tilmeld dig',
    alreadyHaveAccount: 'Har du allerede en konto?',
    dontHaveAccount: 'Har du ikke en konto?',
  },
  en: {
    login: 'Login to your account',
    loginDescription: 'Enter your email and password to access your account.',
    signup: 'Create an account',
    signupDescription: 'Enter your details to create a new account.',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    forgotPassword: 'Forgot password?',
    signIn: 'Sign in',
    signUp: 'Sign up',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
  },
};
