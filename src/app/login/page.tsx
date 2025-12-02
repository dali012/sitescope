import Link from 'next/link';

import { ArrowRight, Github, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="name@company.com" />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400"
            >
              Password
            </label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button className="mt-2 w-full py-3">Sign In</Button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-stone-100 dark:bg-zinc-800"></div>
            <span className="text-xs font-medium text-stone-400">
              OR CONTINUE WITH
            </span>
            <div className="h-px flex-1 bg-stone-100 dark:bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="gap-2 p-2.5">
              <Github size={16} /> GitHub
            </Button>
            <Button variant="outline" className="gap-2 p-2.5">
              <Mail size={16} /> Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
