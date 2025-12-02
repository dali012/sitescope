'use client';

import { useState } from 'react';

import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { signIn } from '@/lib/auth-client';

import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

type Provider = 'google' | 'github';

interface ISignInButtonsProps {
  callbackUrl?: string;
  errorCallbackUrl?: string;
}

const SignInButtons = ({
  callbackUrl = '/dashboard/overview',
  errorCallbackUrl = '/sign-in?error=auth_error',
}: ISignInButtonsProps) => {
  const [loadingProvider, setLoadingProvider] = useState<Provider | null>(null);

  const handleSocialSignIn = async (provider: Provider) => {
    setLoadingProvider(provider);
    try {
      await signIn.social({
        provider,
        callbackURL: callbackUrl,
        errorCallbackURL: errorCallbackUrl,
      });

      toast.loading('Redirecting to provider…', {
        id: 'redirect-auth',
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      setLoadingProvider(null);
      toast.error(
        error?.message || 'Authentication failed. Please try again later.',
      );
    }
  };

  const providers: { id: Provider; label: string; icon: React.ElementType }[] =
    [
      {
        id: 'github',
        label: 'GitHub',
        icon: Icons.github,
      },
      {
        id: 'google',
        label: 'Google',
        icon: Icons.google,
      },
    ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {providers.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant="outline"
          className="gap-2 p-2.5"
          type="button"
          disabled={loadingProvider !== null}
          onClick={() => handleSocialSignIn(id)}
        >
          {loadingProvider === id ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Icon />
          )}
          {label}
        </Button>
      ))}
    </div>
  );
};

export default SignInButtons;
