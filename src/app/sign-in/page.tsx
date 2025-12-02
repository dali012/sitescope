import Link from 'next/link';
import { Suspense } from 'react';

import { ArrowRight } from 'lucide-react';

import SignInShell from '@/components/auth/sign-in-shell';
import SignUpForm from '@/components/auth/sing-up-form';
import { Skeleton } from '@/components/ui/skeleton';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4 dark:bg-zinc-950">
      <div className="animate-scale-up w-full max-w-md rounded-sm border border-stone-100 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        <Link
          href="/"
          className="mb-8 flex w-fit items-center gap-2 text-sm text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-300"
        >
          <ArrowRight className="rotate-180" size={14} />
          <p>Back to Home</p>
        </Link>

        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>

        <Suspense fallback={<LoginFormSkeleton />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-stone-900 dark:bg-stone-100">
        <div className="h-4 w-4 rounded-[1px] bg-white dark:bg-zinc-900"></div>
      </div>
      <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
        Welcome back
      </h2>
      <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
        Enter your credentials to access your dashboard.
      </p>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="space-y-4">
      <SignUpForm />

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-stone-100 dark:bg-zinc-800"></div>
        <span className="text-xs font-medium text-stone-400">
          OR CONTINUE WITH
        </span>
        <div className="h-px flex-1 bg-stone-100 dark:bg-zinc-800"></div>
      </div>

      <SignInShell />
    </div>
  );
}

function HeaderSkeleton() {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <Skeleton className="mb-4 h-12 w-12 rounded-sm" />
      <Skeleton className="h-6 w-40" />
      <Skeleton className="mt-2 h-4 w-56" />
    </div>
  );
}

function LoginFormSkeleton() {
  return (
    <div className="space-y-4">
      {/* Email */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>

      <Skeleton className="mt-2 h-11 w-full" />

      <div className="my-6 flex items-center gap-4">
        <Skeleton className="h-px flex-1" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-px flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-11 w-full" />
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  );
}
