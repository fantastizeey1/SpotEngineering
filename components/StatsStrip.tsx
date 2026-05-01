const STATS = [
  { value: "8+", label: "Years of Excellence" },
  { value: "15+", label: "Enterprise Clients" },
  { value: "50+", label: "Projects Delivered" },
  { value: "6", label: "Core Service Lines" },
] as const;

export function StatsStrip() {
  return (
    <div className="bg-[#0D1117] border-t border-b border-white/5 px-6 lg:px-8 py-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.value}
            className={[
              "text-center py-6 px-4 relative",
              i > 0 ? "before:absolute before:left-0 before:top-[20%] before:bottom-[20%] before:w-px before:bg-white/10" : "",
            ].join(" ")}
          >
            <span className="block font-[Bebas_Neue] text-[clamp(2.8rem,4vw,4rem)] text-[#00AEEF] leading-none">
              {stat.value}
            </span>
            <div className="font-[Barlow] text-[0.8rem] font-medium tracking-[0.08em] uppercase text-[#8899AA] mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
