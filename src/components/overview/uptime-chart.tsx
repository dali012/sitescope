import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UptimeChart = ({ data }: { data: any[] }) => {
  return (
    <div className="h-80 rounded-sm border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="mb-6 text-sm font-medium text-stone-900 dark:text-stone-200">
        Incident Impact (Last 30d)
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 25, left: 0 }}
        >
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
            cursor={{ fill: '#f5f5f4' }}
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg, #fff)',
              border: '1px solid var(--tooltip-border, #e7e5e4)',
              borderRadius: '2px',
            }}
          />

          <Bar
            dataKey="uptime"
            radius={[2, 2, 0, 0]}
            className="fill-stone-200 hover:fill-stone-900! dark:fill-zinc-700 dark:hover:fill-stone-200!"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UptimeChart;
