import { Resend } from 'resend';

import { env } from '@/env/server';

const resend = new Resend(env.RESEND_API_KEY);

export const resendHelper = {
  sendMagicLink: async ({
    email,
    token,
    url,
  }: {
    email: string;
    token: string;
    url: string;
  }) => {
    const magicUrl = `${url}?token=${token}`;

    try {
      await resend.emails.send({
        from: 'Sitescope <no-reply@devlife.engineer>',
        to: email,
        subject: 'Your Magic Login Link',
        html: `
          <p>Hello!</p>
          <p>Click the button below to log in:</p>
          <a 
            href="${magicUrl}" 
            style="display:inline-block;padding:12px 20px;background:#4f46e5;color:white;border-radius:8px;text-decoration:none;">
            Log in
          </a>
          <p>If the button doesn't work, copy and paste this link:</p>
          <p>${magicUrl}</p>
        `,
      });

      return { success: true };
    } catch (error) {
      console.error('Failed to send magic link email:', error);
      return { success: false, error };
    }
  },
};
