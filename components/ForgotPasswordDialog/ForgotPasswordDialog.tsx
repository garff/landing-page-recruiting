'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowLeft, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type ForgotPasswordDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBack: () => void;
};

export function ForgotPasswordDialog({
  open,
  onOpenChange,
  onBack,
}: ForgotPasswordDialogProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getPasswordResetURL = (endpoint: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_RESET_URL;
    return `${baseUrl}/${endpoint}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(getPasswordResetURL('forgot-password'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Password reset request failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset the state after the dialog is closed
    setTimeout(() => {
      setIsSubmitted(false);
      setIsLoading(false);
      setEmail('');
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.login.forgotPasswordTitle}</DialogTitle>
          <DialogDescription>
            {isSubmitted
              ? t.login.forgotPasswordSuccess
              : t.login.forgotPasswordDescription}
          </DialogDescription>
        </DialogHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.login.email}</Label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  id="email"
                  type="email"
                  placeholder={t.login.email}
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  disabled={isLoading}
                />
              </div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="w-full sm:w-auto order-2 sm:order-1"
                disabled={isLoading}
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                {t.login.backToLogin}
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto order-1 sm:order-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2
                      className="mr-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    {t.login.loading || 'Loading...'}
                  </>
                ) : (
                  t.login.resetPassword
                )}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button onClick={onBack} className="w-full">
              {t.login.backToLogin}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
