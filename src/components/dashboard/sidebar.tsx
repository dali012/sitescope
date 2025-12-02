'use client';

import { type Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  BookOpen,
  Bot,
  Brain,
  CreditCard,
  LayoutDashboard,
  ListTodo,
  PenTool,
  Settings,
} from 'lucide-react';

import SidebarItem from '../sidebar-item';
import SignOutButton from './sign-out-button';
import UserPill from './user-pill';

const items = [
  { label: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
  { label: 'Queue', href: '/dashboard/queue', icon: ListTodo },
  { label: 'Brain', href: '/dashboard/brain', icon: Brain },
  { label: 'Playground', href: '/dashboard/playground', icon: Bot },
  { label: 'Composer', href: '/dashboard/composer', icon: PenTool },

  { divider: true },

  { label: 'Docs', href: '/dashboard/docs', icon: BookOpen, secondary: true },
  {
    label: 'Billing',
    href: '/dashboard/billing',
    icon: CreditCard,
    secondary: true,
  },
  {
    label: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    secondary: true,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex w-64 shrink-0 flex-col border-r border-stone-200 bg-stone-50 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Logo */}
      <Link href="/dashboard/overview">
        <div className="flex items-center gap-3 p-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-stone-900 dark:bg-stone-100">
            <div className="h-3 w-3 rounded-[1px] bg-white dark:bg-zinc-900"></div>
          </div>
          <span className="text-lg font-bold tracking-tight">SiteScope</span>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex-1 space-y-0.5 overflow-y-auto py-2">
        {items.map((item, i) =>
          item.divider ? (
            <div key={i} className="my-4 px-4">
              <div className="h-px bg-stone-200 dark:bg-zinc-800" />
            </div>
          ) : (
            <SidebarItem
              key={item.href}
              href={item.href as Route}
              icon={item.icon!}
              label={item.label!}
              active={pathname === item.href}
              secondary={item.secondary}
            />
          ),
        )}
      </div>

      {/* User */}
      <UserPill />

      {/* Logout */}
      <SignOutButton />
    </div>
  );
}
