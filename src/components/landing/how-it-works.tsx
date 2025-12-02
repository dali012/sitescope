const steps = [
  {
    step: 1,
    title: 'Connect Your Stack',
    desc: 'Add your website URLs, API endpoints, or database connection strings.',
  },
  {
    step: 2,
    title: 'Add Context',
    desc: 'Upload docs or point to your repo so AI understands your expected behavior.',
  },
  {
    step: 3,
    title: 'Sleep Soundly',
    desc: 'Get alerted only when it matters, with solutions ready to go.',
  },
];

const HowItWorks = () => {
  return (
    <div className="border-y border-stone-100 bg-stone-50 px-4 py-24 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100">
            From setup to insight in minutes.
          </h2>
        </div>

        <div className="relative space-y-12">
          <div className="absolute top-8 bottom-8 left-8 w-0.5 bg-stone-200 md:left-1/2 md:-ml-px dark:bg-zinc-800"></div>

          {steps.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-center md:justify-between ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row-reverse'}`}
            >
              <div className="hidden flex-1 md:block"></div>
              <div className="absolute left-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-stone-100 bg-white text-xl font-bold text-stone-900 shadow-sm md:left-1/2 md:-ml-8 dark:border-zinc-800 dark:bg-zinc-950 dark:text-stone-100">
                {item.step}
              </div>
              <div
                className={`flex-1 pl-24 md:pl-0 ${i % 2 === 0 ? 'text-left md:pl-16' : 'md:pr-16 md:text-right'}`}
              >
                <h3 className="mb-2 text-xl font-bold text-stone-900 dark:text-stone-100">
                  {item.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
