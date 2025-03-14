'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getBaseResetURL } from '@/lib/baseUrls';

export default function ResetPasswordPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetToken = searchParams.get('token');
  const userEmail = searchParams.get('email');

  const [isValidToken, setIsValidToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!resetToken) {
      router.push('/');
      return;
    }

    // Validate token with API
    const validateToken = async () => {
      try {
        const response = await fetch(getBaseResetURL('validate-reset-token'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ resetToken, userEmail }),
        });

        if (response.ok) {
          setIsValidToken(true);
        } else {
          router.push('/');
        }
      } catch (error) {
        router.push('/');
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, [resetToken, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError(t.resetPassword.passwordsMustMatch);
      return;
    }

    try {
      const response = await fetch(getBaseResetURL('reset-password'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken, userEmail, newPassword }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const data = await response.json();
        setError(data.message || t.resetPassword.genericError);
      }
    } catch (error) {
      setError(t.resetPassword.genericError);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">{t.resetPassword.validating}</p>
      </div>
    );
  }

  if (!isValidToken) {
    return null; // Router will handle redirect
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{t.resetPassword.title}</h1>
          <p className="text-muted-foreground mt-2">
            {t.resetPassword.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">{t.resetPassword.newPassword}</Label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="password"
                type="password"
                placeholder={t.resetPassword.newPassword}
                className="pl-10"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                aria-required="true"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">
              {t.resetPassword.confirmPassword}
            </Label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="confirmPassword"
                type="password"
                placeholder={t.resetPassword.confirmPassword}
                className="pl-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                aria-required="true"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive text-center" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full">
            {t.resetPassword.submit}
          </Button>
        </form>
      </div>
    </div>
  );
}
