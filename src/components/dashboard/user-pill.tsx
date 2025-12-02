const UserPill = () => (
  <div className="mx-4 mt-auto mb-6 flex cursor-pointer items-center gap-3 rounded-sm border border-stone-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-stone-900 text-xs font-semibold text-white dark:bg-stone-200 dark:text-zinc-900">
      AJ
    </div>
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-medium text-stone-900 dark:text-stone-200">
        Alex Johnson
      </p>
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
        <p className="text-xs text-stone-500 dark:text-stone-400">Pro Plan</p>
      </div>
    </div>
  </div>
);

export default UserPill;
