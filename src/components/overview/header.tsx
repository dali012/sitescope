const OverviewHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-light text-stone-900 dark:text-stone-100">
        Overview
      </h1>

      <div className="flex items-center gap-2 text-sm text-stone-400">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
        Live Updates
      </div>
    </div>
  );
};

export default OverviewHeader;
