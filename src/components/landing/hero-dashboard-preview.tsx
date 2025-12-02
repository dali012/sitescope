import Header from '@/components/dashboard-preview/header';
import MainChart from '@/components/dashboard-preview/main-chart';
import Sidebar from '@/components/dashboard-preview/sidebar';
import StatsCard from '@/components/dashboard-preview/stats-card';

const HeroDashboardPreview = () => {
  return (
    <div className="group relative mx-auto max-w-6xl transform overflow-hidden rounded-xl border border-stone-200 bg-white shadow-2xl transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-zinc-800 dark:bg-zinc-900">
      {/* Browser Bar */}
      <div className="flex h-10 items-center gap-2 border-b border-stone-100 bg-stone-50 px-4 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
          <div className="h-3 w-3 rounded-full bg-amber-400/80"></div>
          <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
        </div>
        <div className="ml-4 flex h-6 max-w-lg flex-1 items-center rounded-md border border-stone-200 bg-white px-3 font-mono text-[10px] font-medium text-stone-400 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          sitescope.io/dashboard
        </div>
      </div>

      <div className="flex h-[600px] bg-stone-50 dark:bg-zinc-950">
        <Sidebar />

        {/* Main Content */}
        <div className="relative flex flex-1 flex-col gap-6 overflow-hidden p-6">
          <Header />

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: 'Uptime',
                val: '99.99%',
                color: 'text-emerald-600 dark:text-emerald-400',
                bg: 'bg-emerald-500',
                data: [
                  { value: 40 },
                  { value: 30 },
                  { value: 45 },
                  { value: 80 },
                  { value: 55 },
                  { value: 65 },
                  { value: 50 },
                ],
                chartColor: '#10b981',
              },
              {
                label: 'Latency',
                val: '42ms',
                color: 'text-indigo-600 dark:text-indigo-400',
                bg: 'bg-indigo-500',
                data: [
                  { value: 30 },
                  { value: 45 },
                  { value: 35 },
                  { value: 60 },
                  { value: 40 },
                  { value: 55 },
                  { value: 45 },
                ],
                chartColor: '#6366f1',
              },
              {
                label: 'Errors',
                val: '0.01%',
                color: 'text-rose-600 dark:text-rose-400',
                bg: 'bg-rose-500',
                data: [
                  { value: 10 },
                  { value: 15 },
                  { value: 12 },
                  { value: 20 },
                  { value: 15 },
                  { value: 10 },
                  { value: 5 },
                ],
                chartColor: '#f43f5e',
              },
            ].map((stat, i) => (
              <StatsCard key={i} {...stat} />
            ))}
          </div>

          <MainChart />
        </div>
      </div>
    </div>
  );
};

export default HeroDashboardPreview;
