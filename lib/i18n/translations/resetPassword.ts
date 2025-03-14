export type ResetPasswordTranslation = {
  title: string;
  description: string;
  newPassword: string;
  confirmPassword: string;
  submit: string;
  validating: string;
  passwordsMustMatch: string;
  genericError: string;
};

export const resetPassword: {
  da: ResetPasswordTranslation;
  en: ResetPasswordTranslation;
} = {
  da: {
    title: 'Nulstil Dit Kodeord',
    description:
      'Indtast venligst et nyt kodeord til din konto. Kodeordet skal være mindst 8 tegn langt og indeholde et tal og et specialtegn.',
    newPassword: 'Nyt Kodeord',
    confirmPassword: 'Bekræft Kodeord',
    submit: 'Nulstil Kodeord',
    validating: 'Verificerer din anmodning...',
    passwordsMustMatch: 'Kodeordene matcher ikke. Prøv venligst igen.',
    genericError:
      'Der opstod en fejl. Prøv igen eller kontakt support, hvis problemet fortsætter.',
  },
  en: {
    title: 'Reset Your Password',
    description:
      'Please enter a new password for your account. Password must be at least 8 characters long and include a number and special character.',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    submit: 'Reset Password',
    validating: 'Verifying your request...',
    passwordsMustMatch: "Passwords don't match. Please try again.",
    genericError:
      'An error occurred. Please try again or contact support if the problem persists.',
  },
};
