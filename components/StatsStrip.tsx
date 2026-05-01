const STATS = [
  { value: "8+", label: "Years of Excellence" },
  { value: "15+", label: "Enterprise Clients" },
  { value: "50+", label: "Projects Delivered" },
  { value: "6", label: "Core Service Lines" },
] as const;

export function StatsStrip() {
  return (
    <div className="bg-white dark:bg-[#0D1117] border-y border-slate-200 dark:border-white/5 px-6 lg:px-8 py-10 lg:py-12 relative z-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-x-0 md:divide-x divide-slate-200 dark:divide-white/10">
        {STATS.map((stat) => (
          <div
            key={stat.value}
            className="text-center px-4 flex flex-col items-center justify-center"
          >
            <span className="block font-[Bebas_Neue] text-4xl lg:text-5xl text-[#00AEEF] leading-none mb-2">
              {stat.value}
            </span>
            <div className="font-[Barlow] text-xs lg:text-sm font-bold tracking-[0.08em] uppercase text-slate-500 dark:text-[#8899AA]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
