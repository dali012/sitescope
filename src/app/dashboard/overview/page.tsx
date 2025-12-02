'use client';

import { useEffect, useState } from 'react';

import OverviewHeader from '@/components/overview/header';
import LatencyChart from '@/components/overview/latency-chart';
import StatsGrid from '@/components/overview/stats-grid';
import UptimeChart from '@/components/overview/uptime-chart';
import { getOverviewData } from '@/server/actions/get-overview-data';

export default function OverviewPage() {
  const [overviewData, setOverviewData] = useState<
    { name: string; latency: number; uptime: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getOverviewData();
        setOverviewData(data);
      } catch (error) {
        console.error('Failed to fetch overview data', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-b-2"></div>
      </div>
    );
  }

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
