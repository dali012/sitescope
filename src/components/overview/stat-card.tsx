import { Card } from '@/components/ui/card';

interface IStatCardProps {
  label: string;
  value: string | number;
  status: string;
  trend: string;
  color: string;
  bg: string;
}

const StatCard = ({
  bg,
  color,
  label,
  trend,
  value,
  status,
}: IStatCardProps) => {
  return (
    <Card className="flex flex-col gap-2 rounded-sm p-6 transition-shadow hover:shadow-md">
      <span className="text-sm text-stone-500 dark:text-stone-400">
        {label}
      </span>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-light text-stone-900 dark:text-stone-100">
          {value}
        </span>
        <span
          className={`rounded-sm px-1.5 py-0.5 text-xs font-medium ${bg} ${color}`}
        >
          {trend}
        </span>
      </div>

      <span className="mt-2 text-xs text-stone-400">{status}</span>
    </Card>
  );
};

export default StatCard;
