'use client';

import { Zap } from 'lucide-react';

export default function ComposerPage() {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-2xl font-light text-stone-900 dark:text-stone-100">
          Composer
        </h1>
        <p className="mb-8 text-sm text-stone-500 dark:text-stone-400">
          Define monitoring tasks using natural language or code snippets.
        </p>

        <div className="overflow-hidden rounded-sm border border-stone-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-950">
            <span className="text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
              Configuration Editor
            </span>
            <div className="flex gap-2">
              <button className="cursor-pointer text-xs text-stone-500 hover:text-stone-900 dark:hover:text-stone-300">
                Clear
              </button>
            </div>
          </div>
          <textarea
            placeholder={`Describe your monitor, e.g.:\n"Check the homepage every 5 minutes and alert on Slack if latency > 500ms."\n\nOr paste a JSON configuration...`}
            className="h-96 w-full resize-none bg-white p-4 font-mono text-sm text-stone-900 focus:outline-none dark:bg-zinc-900 dark:text-stone-200"
          />
          <div className="flex items-center justify-between border-t border-stone-200 bg-stone-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="text-xs text-stone-400">
              AI-Assisted Configuration
            </div>
            <button className="flex cursor-pointer items-center gap-2 rounded-sm bg-stone-900 px-6 py-2 text-sm font-medium text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white">
              <Zap size={16} /> Create Monitor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
