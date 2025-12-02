const Sidebar = () => {
  return (
    <div className="hidden w-64 shrink-0 flex-col gap-6 bg-stone-900 p-4 md:flex">
      <div className="flex items-center gap-2 px-2 font-bold tracking-tight text-white/90">
        <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
          <div className="h-3 w-3 rounded-[1px] bg-stone-900"></div>
        </div>
        SiteScope
      </div>
      <div className="space-y-1">
        {[
          { active: true, width: 'w-24' },
          { active: false, width: 'w-20' },
          { active: false, width: 'w-28' },
          { active: false, width: 'w-16' },
          { active: false, width: 'w-24' },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex h-9 w-full items-center gap-3 rounded-md px-3 transition-colors ${item.active ? 'bg-white/10 text-white' : 'text-stone-500'}`}
          >
            <div
              className={`h-4 w-4 rounded-sm ${item.active ? 'bg-white' : 'bg-stone-700'}`}
            ></div>
            <div
              className={`h-2 rounded-full ${item.active ? 'bg-white' : 'bg-stone-700'} ${item.width}`}
            ></div>
          </div>
        ))}
      </div>

      <div className="relative mt-auto overflow-hidden rounded-lg border border-white/5 bg-stone-800/50 p-3">
        <div className="relative z-10 flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-linear-to-tr from-indigo-500 to-purple-500 shadow-lg"></div>
          <div className="space-y-1.5">
            <div className="h-2 w-20 rounded-full bg-white/40"></div>
            <div className="h-2 w-12 rounded-full bg-white/20"></div>
          </div>
        </div>
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-indigo-500/20 blur-xl"></div>
      </div>
    </div>
  );
};

export default Sidebar;
