import { Sparkline } from '../charts/sparkline';

interface StatsCardProps {
  label: string;
  val: string;
  color: string;
  bg: string;
  data: { value: number }[];
  chartColor: string;
}

const StatsCard = ({
  label,
  val,
  color,
  bg,
  data,
  chartColor,
}: StatsCardProps) => {
  return (
    <div className="group/card relative flex h-32 flex-col justify-between overflow-hidden rounded-xl border border-stone-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="z-10 flex items-center justify-between">
        <div className="text-xs font-medium tracking-wider text-stone-500 uppercase dark:text-stone-400">
          {label}
        </div>
        <div className={`h-2 w-2 rounded-full ${bg} animate-pulse`}></div>
      </div>
      <div className={`z-10 text-3xl font-light tracking-tight ${color}`}>
        {val}
      </div>
      {/* Sparkline simulation */}
      <div className="absolute right-0 bottom-0 left-0 h-16 w-full opacity-20 transition-opacity group-hover/card:opacity-30">
        <Sparkline data={data} color={chartColor} />
      </div>
    </div>
  );
};

export default StatsCard;
