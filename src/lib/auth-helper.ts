import { Route } from 'next';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from './auth';

/**
 * Attempt to get session from Better-Auth.
 * If no session, optionally redirect (in pages) or throw error (in API).
 */
export async function requireSession(options: { redirectTo: string }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    if (options.redirectTo) {
      redirect(options.redirectTo as Route);
    }
    throw new Error('Unauthenticated');
  }

  return session;
}
