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
import { Mail, ArrowLeft } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call your password reset API
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset the state after the dialog is closed
    setTimeout(() => {
      setIsSubmitted(false);
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
                />
              </div>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                className="w-full sm:w-auto order-2 sm:order-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                {t.login.backToLogin}
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto order-1 sm:order-2"
              >
                {t.login.resetPassword}
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
