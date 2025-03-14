'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Turnstile } from '../Turnstile/Turnstile';
import { TurnstileVerifyResponse } from '../types';
import {
  Lock,
  Mail,
  User,
  AlertCircle,
  KeyRound,
  CheckCircle,
  Check,
  X,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ForgotPasswordDialog } from '@/components/ForgotPasswordDialog/ForgotPasswordDialog';
import { getBaseAuthURL } from '@/lib/baseUrls';

const LoginDialog = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileStatus, setTurnstileStatus] = useState<
    'success' | 'error' | 'expired' | 'required'
  >('required');
  const [registrationStep, setRegistrationStep] = useState<
    'form' | 'verification' | 'complete'
  >('form');
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    hasNumber: false,
    hasSpecial: false,
    hasUppercase: false,
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const validatePassword = (password: string) => {
    const validations = {
      length: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasUppercase: /[A-Z]/.test(password),
    };

    setPasswordStrength(validations);

    return Object.values(validations).every(Boolean);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const isFormValid = () => {
    if (isSignUp) {
      return validatePassword(password);
    }
    return true;
  };

  const renderPasswordStrengthIndicator = () => (
    <div className="mt-2 space-y-1 text-sm">
      <p className="font-medium text-muted-foreground mb-1">
        Password must contain:
      </p>
      <ul className="space-y-1">
        <li className="flex items-center gap-2">
          {passwordStrength.length ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <X size={16} className="text-red-500" />
          )}
          <span
            className={
              passwordStrength.length
                ? 'text-green-700'
                : 'text-muted-foreground'
            }
          >
            At least 8 characters
          </span>
        </li>
        <li className="flex items-center gap-2">
          {passwordStrength.hasUppercase ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <X size={16} className="text-red-500" />
          )}
          <span
            className={
              passwordStrength.hasUppercase
                ? 'text-green-700'
                : 'text-muted-foreground'
            }
          >
            At least one uppercase letter
          </span>
        </li>
        <li className="flex items-center gap-2">
          {passwordStrength.hasNumber ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <X size={16} className="text-red-500" />
          )}
          <span
            className={
              passwordStrength.hasNumber
                ? 'text-green-700'
                : 'text-muted-foreground'
            }
          >
            At least one number
          </span>
        </li>
        <li className="flex items-center gap-2">
          {passwordStrength.hasSpecial ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <X size={16} className="text-red-500" />
          )}
          <span
            className={
              passwordStrength.hasSpecial
                ? 'text-green-700'
                : 'text-muted-foreground'
            }
          >
            At least one special character
          </span>
        </li>
      </ul>
    </div>
  );

  const verifyTurnstileToken = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SITEVERIFY_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data: TurnstileVerifyResponse = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error verifying turnstile token:', error);
      return false;
    }
  };

  const handleLoginSubmit = async () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch(getBaseAuthURL('login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Authentication failed');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegistrationSubmit = async () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const password = formData.get('password');
    const name = formData.get('name');

    try {
      const response = await fetch(getBaseAuthURL('register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      if (response.ok) {
        setRegistrationStep('verification');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmailCode = async () => {
    try {
      const response = await fetch(getBaseAuthURL('verify-email'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          verificationCode: verificationCode,
          email: email,
        }),
      });

      if (response.ok) {
        setRegistrationStep('complete');
        // Auto-redirect after a delay
        setTimeout(() => router.push('/'), 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Verification failed');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    if (turnstileStatus !== 'success' || !turnstileToken) {
      setError('Please verify you are not a robot');
      setIsLoading(false);
      return;
    }

    // Check password validation for signup
    if (isSignUp && !isFormValid()) {
      setError('Please meet all password requirements');
      setIsLoading(false);
      return;
    }

    if (isSignUp) {
      await handleRegistrationSubmit();
    } else {
      await handleLoginSubmit();
    }
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!verificationCode || verificationCode.length < 4) {
      setError('Please enter a valid verification code');
      setIsLoading(false);
      return;
    }

    await verifyEmailCode();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setName('');
    setTurnstileStatus('required');
    setTurnstileToken(null);
    setRegistrationStep('form');
    setVerificationCode('');
    setPasswordStrength({
      length: false,
      hasNumber: false,
      hasSpecial: false,
      hasUppercase: false,
    });
    setShowForgotPassword(false);
  };

  const resendVerificationCode = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(getBaseAuthURL('resend-verification'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setError('Verification code resent. Please check your email.');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to resend verification code');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderRegistrationForm = () => (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 pt-4">
      <div className="space-y-2">
        <Label htmlFor="name">{t.login.fullName}</Label>
        <div className="relative">
          <User
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.login.fullName}
            className="pl-10"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t.login.email}</Label>
        <div className="relative">
          <Mail
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.login.email}
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">{t.login.password}</Label>
        <div className="relative">
          <Lock
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder={t.login.password}
            className="pl-10"
            value={password}
            onChange={handlePasswordChange}
            required
            aria-required="true"
            autoComplete="new-password"
            minLength={8}
          />
        </div>
        {renderPasswordStrengthIndicator()}
      </div>

      <div className="mt-4">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          retry="auto"
          refreshExpired="auto"
          sandbox={process.env.NODE_ENV === 'development'}
          onError={() => {
            setTurnstileStatus('error');
            setTurnstileToken(null);
            setError('Security check failed. Please try again.');
          }}
          onExpire={() => {
            setTurnstileStatus('expired');
            setTurnstileToken(null);
            setError('Security check expired. Please verify again.');
          }}
          onLoad={() => {
            setTurnstileStatus('required');
            setError(null);
          }}
          onVerify={async (token) => {
            setTurnstileToken(token);
            const isVerified = await verifyTurnstileToken(token);

            if (!isVerified) {
              setTurnstileStatus('error');
              setError('Security check failed. Please try again.');
              return;
            }

            setTurnstileStatus('success');
            setError(null);
          }}
        />
      </div>

      {error && (
        <div
          className="flex items-center gap-2 text-red-500 text-sm"
          aria-live="polite"
        >
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="flex justify-end items-center">
        <Button
          type="submit"
          disabled={isLoading || turnstileStatus !== 'success'}
        >
          {isLoading ? 'Processing...' : t.login.signUp}
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        {t.login.alreadyHaveAccount}{' '}
        <Button
          type="button"
          variant="link"
          className="px-1.5"
          onClick={toggleForm}
          disabled={isLoading}
        >
          {t.login.signIn}
        </Button>
      </div>
    </form>
  );

  const renderLoginForm = () => (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 pt-4">
      <div className="space-y-2">
        <Label htmlFor="email">{t.login.email}</Label>
        <div className="relative">
          <Mail
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.login.email}
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">{t.login.password}</Label>
        <div className="relative">
          <Lock
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder={t.login.password}
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            autoComplete="current-password"
          />
        </div>
      </div>

      <div className="mt-4">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          retry="auto"
          refreshExpired="auto"
          sandbox={process.env.NODE_ENV === 'development'}
          onError={() => {
            setTurnstileStatus('error');
            setTurnstileToken(null);
            setError('Security check failed. Please try again.');
          }}
          onExpire={() => {
            setTurnstileStatus('expired');
            setTurnstileToken(null);
            setError('Security check expired. Please verify again.');
          }}
          onLoad={() => {
            setTurnstileStatus('required');
            setError(null);
          }}
          onVerify={async (token) => {
            setTurnstileToken(token);
            const isVerified = await verifyTurnstileToken(token);

            if (!isVerified) {
              setTurnstileStatus('error');
              setError('Security check failed. Please try again.');
              return;
            }

            setTurnstileStatus('success');
            setError(null);
          }}
        />
      </div>

      {error && (
        <div
          className="flex items-center gap-2 text-red-500 text-sm"
          aria-live="polite"
        >
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Button
          type="button"
          variant="link"
          className="px-0 text-sm"
          onClick={() => setShowForgotPassword(true)}
        >
          {t.login.forgotPassword}
        </Button>
        <Button
          type="submit"
          disabled={isLoading || turnstileStatus !== 'success'}
        >
          {isLoading ? 'Processing...' : t.login.signIn}
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        {t.login.dontHaveAccount}{' '}
        <Button
          type="button"
          variant="link"
          className="px-1.5"
          onClick={toggleForm}
          disabled={isLoading}
        >
          {t.login.signUp}
        </Button>
      </div>
    </form>
  );

  const renderVerificationForm = () => (
    <form onSubmit={handleVerificationSubmit} className="space-y-6 pt-4">
      <div className="text-center mb-6">
        <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
        <h3 className="text-lg font-medium">Verify your email</h3>
        <p className="text-sm text-muted-foreground mt-1">
          We've sent a verification code to <strong>{email}</strong>
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="verification-code">Verification Code</Label>
        <div className="relative">
          <KeyRound
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="verification-code"
            type="text"
            placeholder="Enter verification code"
            className="pl-10 text-center tracking-widest text-lg"
            value={verificationCode}
            onChange={(e) =>
              setVerificationCode(e.target.value.replace(/[^0-9]/g, ''))
            }
            required
            aria-required="true"
            maxLength={6}
          />
        </div>
      </div>

      {error && (
        <div
          className="flex items-center gap-2 text-red-500 text-sm"
          aria-live="polite"
        >
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Button
          type="button"
          variant="outline"
          onClick={resendVerificationCode}
          disabled={isLoading}
        >
          Resend Code
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Verifying...' : 'Verify Email'}
        </Button>
      </div>
    </form>
  );

  const renderRegistrationComplete = () => (
    <div className="text-center py-8">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
      <h3 className="text-xl font-medium mb-2">Registration Complete!</h3>
      <p className="text-muted-foreground mb-6">
        Your account has been created successfully.
      </p>
      <p className="text-sm text-muted-foreground">
        You will be redirected to the homepage...
      </p>
    </div>
  );

  const renderFormContent = () => {
    if (isSignUp) {
      if (registrationStep === 'form') {
        return renderRegistrationForm();
      } else if (registrationStep === 'verification') {
        return renderVerificationForm();
      } else {
        return renderRegistrationComplete();
      }
    } else {
      return renderLoginForm();
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm sm:size-default"
            aria-label={t.navbar.login}
          >
            {t.navbar.login}
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px]"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogHeader>
            <DialogTitle id="dialog-title">
              {isSignUp
                ? registrationStep === 'form'
                  ? t.login.signup
                  : registrationStep === 'verification'
                    ? 'Email Verification'
                    : 'Welcome!'
                : t.login.login}
            </DialogTitle>
            <DialogDescription id="dialog-description">
              {isSignUp
                ? registrationStep === 'form'
                  ? t.login.signupDescription
                  : registrationStep === 'verification'
                    ? 'Please enter the verification code sent to your email'
                    : 'Your account is ready to use'
                : t.login.loginDescription}
            </DialogDescription>
          </DialogHeader>
          {renderFormContent()}
        </DialogContent>
      </Dialog>

      <ForgotPasswordDialog
        open={showForgotPassword}
        onOpenChange={setShowForgotPassword}
        onBack={() => setShowForgotPassword(false)}
      />
    </>
  );
};

export default LoginDialog;
