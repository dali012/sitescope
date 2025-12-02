import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { magicLink } from 'better-auth/plugins';

import { env } from '@/env/server';

import prisma from './prisma';
import { resendHelper } from './resend';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  cookies: {
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async data => {
        const res = await resendHelper.sendMagicLink(data);
        if (!res.success) {
          throw new Error('Failed to send magic link');
        }
      },
    }),
    nextCookies(),
  ],
});
