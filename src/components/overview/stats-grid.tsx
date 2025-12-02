import StatCard from './stat-card';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatsGrid = ({ data }: { data: any[] }) => {
  const cards = [
    {
      label: 'Global Uptime',
      value: '99.92%',
      status: 'Healthy',
      trend: '+0.01%',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      label: 'Avg Latency',
      value: `${data[data.length - 1].latency}ms`,
      status: 'Good',
      trend: '-12ms',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      label: 'Active Monitors',
      value: 24,
      status: 'All Running',
      trend: '+2',
      color: 'text-stone-600 dark:text-stone-300',
      bg: 'bg-stone-100 dark:bg-zinc-800',
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((c, i) => (
        <StatCard key={i} {...c} />
      ))}
    </div>
  );
};

export default StatsGrid;
