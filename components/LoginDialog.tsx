'use client';

import { useState } from 'react';
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
import { Lock, Mail, User } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function LoginDialog() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up attempt with:', { name, email, password });
    } else {
      console.log('Login attempt with:', { email, password });
    }
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-xs sm:text-sm sm:size-default" aria-label={t.navbar.login}>
          {t.navbar.login}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle id="dialog-title">{isSignUp ? t.login.signup : t.login.login}</DialogTitle>
          <DialogDescription id="dialog-description">
            {isSignUp ? t.login.signupDescription : t.login.loginDescription}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name">{t.login.fullName}</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="name"
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
          )}
          <div className="space-y-2">
            <Label htmlFor="email">{t.login.email}</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <Input
                id="email"
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
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <Input
                id="password"
                type="password"
                placeholder={t.login.password}
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
                autoComplete={isSignUp ? "new-password" : "current-password"}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            {!isSignUp && (
              <Button type="button" variant="link" className="px-0 text-sm">
                {t.login.forgotPassword}
              </Button>
            )}
            <div className={!isSignUp ? '' : 'ml-auto'}>
              <Button type="submit">{isSignUp ? t.login.signUp : t.login.signIn}</Button>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            {isSignUp ? t.login.alreadyHaveAccount : t.login.dontHaveAccount}{' '}
            <Button type="button" variant="link" className="px-1.5" onClick={toggleForm}>
              {isSignUp ? t.login.signIn : t.login.signUp}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}