import Link from 'next/link';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-stone-100 bg-white/80 px-8 py-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <Link href="/">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-stone-900 dark:bg-stone-100">
            <div className="h-3 w-3 rounded-[1px] bg-white dark:bg-zinc-900"></div>
          </div>
          SiteScope
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="#features"
          className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
        >
          Docs
        </Link>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
