'use client';

import { type Route } from 'next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { LogOut } from 'lucide-react';

import { authClient } from '@/lib/auth-client';

const SignOutButton = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);

    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/sign-in' as Route); // redirect to login page
          },
        },
      });
    } catch (err: unknown) {
      console.error('Sign-out error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleSignOut}
        disabled={loading}
        className={`mx-4 mb-4 flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
          loading
            ? 'cursor-not-allowed text-stone-400 dark:text-stone-600'
            : 'cursor-pointer text-stone-500 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400'
        }`}
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-stone-400 border-t-transparent dark:border-stone-600"></span>
        ) : (
          <LogOut size={18} />
        )}
        Logout
      </button>
    </div>
  );
};

export default SignOutButton;
