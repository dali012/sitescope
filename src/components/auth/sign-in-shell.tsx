import { type Route } from 'next';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';

import SignInButtons from './sign-in-buttons';

const SignInShell = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect('/dashboard/overview' as Route);
  }

  return <SignInButtons />;
};

export default SignInShell;
