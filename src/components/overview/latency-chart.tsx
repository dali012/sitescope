import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LatencyChart = ({ data }: { data: any[] }) => {
  return (
    <div className="h-80 rounded-sm border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-6 text-sm font-medium text-stone-900 dark:text-stone-200">
        Response Time History (ms)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
        >
          <defs>
            <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--chart-primary)"
                stopOpacity={0.1}
              />
              <stop
                offset="95%"
                stopColor="var(--chart-primary)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            stroke="#a8a29e"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#a8a29e"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg, #fff)',
              border: '1px solid var(--tooltip-border, #e7e5e4)',
              borderRadius: '2px',
            }}
          />

          <Area
            type="monotone"
            dataKey="latency"
            stroke="var(--chart-primary)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorLatency)"
            className="stroke-stone-900 dark:fill-stone-400/20 dark:stroke-stone-400"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LatencyChart;
