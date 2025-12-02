export const BrainItemSkeleton = () => (
  <div className="flex h-56 animate-pulse flex-col rounded-sm border border-stone-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
    <div className="mb-4 flex items-start justify-between">
      <div className="h-10 w-10 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
      <div className="h-6 w-6 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
    </div>
    <div className="mb-2 h-5 w-3/4 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
    <div className="mb-4 h-3 w-1/4 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
    <div className="flex-1 space-y-2">
      <div className="h-3 w-full rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
      <div className="h-3 w-5/6 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
    </div>
    <div className="mt-4 flex gap-2">
      <div className="h-4 w-12 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
      <div className="h-4 w-16 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
    </div>
  </div>
);

export const QueueRowSkeleton = () => (
  <tr className="animate-pulse border-b border-stone-50 dark:border-zinc-800">
    <td className="px-6 py-4">
      <div className="h-4 w-4 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 w-32 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 w-20 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 w-16 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 w-24 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 w-20 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
    <td className="px-6 py-4">
      <div className="ml-auto h-4 w-8 rounded-sm bg-stone-100 dark:bg-zinc-800" />
    </td>
  </tr>
);
