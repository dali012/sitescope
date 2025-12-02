'use client';

import Image from 'next/image';

import { authClient } from '@/lib/auth-client';

const UserPill = () => {
  const { data: session, isPending, error } = authClient.useSession();

  if (isPending) {
    return (
      <div className="mx-4 mt-auto mb-6 flex items-center gap-3 rounded-sm border border-stone-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="h-8 w-8 animate-pulse rounded-sm bg-stone-300 dark:bg-zinc-700" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-24 animate-pulse rounded bg-stone-300 dark:bg-zinc-700" />
          <div className="h-2 w-16 animate-pulse rounded bg-stone-300 dark:bg-zinc-700" />
        </div>
      </div>
    );
  }

  if (error || !session?.user) {
    return null;
  }

  const name = session.user.name || 'User';
  const initials = name
    .split(' ')
    .map(p => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const avatar = session.user.image;

  return (
    <div className="mx-4 mt-auto mb-6 flex cursor-pointer items-center gap-3 rounded-sm border border-stone-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Avatar or initials */}
      {avatar ? (
        <div className="relative h-8 w-8 overflow-hidden rounded-sm">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-stone-900 text-xs font-semibold text-white dark:bg-stone-200 dark:text-zinc-900">
          {initials}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-stone-900 dark:text-stone-200">
          {name}
        </p>

        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Free Plan
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPill;
