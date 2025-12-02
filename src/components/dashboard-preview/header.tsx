import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1.5">
        <div className="h-6 w-32 rounded-md bg-stone-200 dark:bg-zinc-800"></div>
        <div className="h-3 w-48 rounded-md bg-stone-100 dark:bg-zinc-800"></div>
      </div>
      <div className="flex gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <Bell size={14} className="text-stone-400" />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white shadow-md dark:bg-stone-200 dark:text-zinc-900">
          AJ
        </div>
      </div>
    </div>
  );
};

export default Header;
