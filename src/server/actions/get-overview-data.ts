'use server';

export async function getOverviewData() {
  try {
    // In a real application, you would fetch real data here.
    // For now, we'll simulate a database call and return the structure expected by the charts.
    // We can expand this to query LatencyLog and UptimeLog tables.

    // Example query (commented out until data is populated):
    /*
    const logs = await prisma.latencyLog.findMany({
      take: 7,
      orderBy: { timestamp: 'desc' },
      include: { monitor: true },
    });
    */

    // Returning mock data for now, but from the server
    return [
      { name: '00:00', latency: 45, uptime: 100 },
      { name: '04:00', latency: 42, uptime: 100 },
      { name: '08:00', latency: 55, uptime: 98 },
      { name: '12:00', latency: 48, uptime: 100 },
      { name: '16:00', latency: 40, uptime: 100 },
      { name: '20:00', latency: 38, uptime: 100 },
      { name: 'Now', latency: 42, uptime: 100 },
    ];
  } catch (error) {
    console.error('Failed to fetch overview data:', error);
    throw new Error('Failed to fetch overview data');
  }
}
