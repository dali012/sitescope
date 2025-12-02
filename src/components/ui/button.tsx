import * as React from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary:
        'bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white',
      secondary:
        'bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-zinc-800 dark:text-stone-100 dark:hover:bg-zinc-700',
      outline:
        'border border-stone-200 bg-transparent hover:bg-stone-50 dark:border-zinc-800 dark:text-stone-300 dark:hover:bg-zinc-800',
      ghost:
        'bg-transparent hover:bg-stone-100 dark:hover:bg-zinc-800 text-stone-600 dark:text-stone-400',
      danger:
        'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10 p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center rounded-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
