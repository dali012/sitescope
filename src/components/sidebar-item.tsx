import { type Route } from 'next';
import Link from 'next/link';

import { type LucideIcon } from 'lucide-react';

interface ISidebarItem {
  icon: LucideIcon;
  label: string;
  active: boolean;
  href: string;
  secondary?: boolean;
}

const SidebarItem = ({
  icon: Icon,
  label,
  active,
  href,
  secondary = false,
}: ISidebarItem) => (
  <Link
    href={href as Route}
    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
      active
        ? 'border-l-2 border-stone-600 bg-stone-200/50 font-medium text-stone-900 dark:border-stone-400 dark:bg-zinc-800 dark:text-stone-100'
        : 'border-l-2 border-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-zinc-900 dark:hover:text-stone-100'
    } ${secondary ? 'mt-1' : ''} `}
  >
    <Icon
      size={18}
      strokeWidth={2}
      className={
        active
          ? 'text-stone-900 dark:text-stone-100'
          : 'text-stone-400 dark:text-stone-500'
      }
    />
    {label}
  </Link>
);

export default SidebarItem;
