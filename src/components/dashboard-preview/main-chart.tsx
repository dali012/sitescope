import { Activity } from 'lucide-react';

import { MainAreaChart } from '@/components/charts/main-area-chart';

const MainChart = () => {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-stone-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="z-10 mb-8 flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-100 bg-stone-50 dark:border-zinc-700 dark:bg-zinc-800">
            <Activity size={16} className="text-stone-400" />
          </div>
          <div>
            <div className="mb-1 h-4 w-24 rounded-sm bg-stone-200 dark:bg-zinc-700"></div>
            <div className="h-3 w-16 rounded-sm bg-stone-100 dark:bg-zinc-800"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-20 rounded-md border border-stone-100 bg-stone-50 dark:border-zinc-700 dark:bg-zinc-800"></div>
        </div>
      </div>

      <div className="relative h-full w-full flex-1">
        <MainAreaChart />
      </div>
    </div>
  );
};

export default MainChart;
