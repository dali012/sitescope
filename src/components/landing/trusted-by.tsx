const TrustedBy = () => {
  return (
    <div className="border-y border-stone-100 bg-stone-50/50 py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-8 text-center text-xs font-bold tracking-widest text-stone-400 uppercase">
          Trusted by modern engineering teams
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
          {[1, 2, 3, 4, 5].map(i => (
            <div
              key={i}
              className="animate-pulse-slow h-8 w-32 rounded-md bg-stone-300 dark:bg-zinc-700"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
