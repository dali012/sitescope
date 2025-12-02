'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function LoginPageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 p-4 dark:bg-zinc-950">
      <div className="animate-scale-up w-full max-w-md rounded-sm border border-stone-100 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
        {/* Back to Home */}
        <Skeleton className="mb-8 h-4 w-28" />

        {/* Logo + Title */}
        <div className="mb-8 flex flex-col items-center text-center">
          <Skeleton className="mb-4 h-12 w-12 rounded-sm" />

          <Skeleton className="h-6 w-40" />
          <Skeleton className="mt-2 h-4 w-56" />
        </div>

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

          {/* Sign In Button */}
          <Skeleton className="mt-2 h-11 w-full" />

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <Skeleton className="h-px flex-1" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-px flex-1" />
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-11 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
