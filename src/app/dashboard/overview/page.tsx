'use client';

import OverviewHeader from '@/components/overview/header';
import LatencyChart from '@/components/overview/latency-chart';
import StatsGrid from '@/components/overview/stats-grid';
import UptimeChart from '@/components/overview/uptime-chart';

export default function OverviewPage() {
  const overviewData = [
    { name: '00:00', latency: 45, uptime: 100 },
    { name: '04:00', latency: 42, uptime: 100 },
    { name: '08:00', latency: 55, uptime: 98 },
    { name: '12:00', latency: 48, uptime: 100 },
    { name: '16:00', latency: 40, uptime: 100 },
    { name: '20:00', latency: 38, uptime: 100 },
    { name: 'Now', latency: 42, uptime: 100 },
  ];

  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade space-y-6 p-4 md:p-8">
        <OverviewHeader />

        <StatsGrid data={overviewData} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LatencyChart data={overviewData} />
          <UptimeChart data={overviewData} />
        </div>
      </div>
    </div>
  );
}
