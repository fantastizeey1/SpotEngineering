"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 15, suffix: "+", label: "Enterprise Clients" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "", label: "Core Service Lines" },
] as const;

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1400;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <div className="bg-white dark:bg-[#0D1117] border-y border-slate-200 dark:border-white/5 px-5 sm:px-6 lg:px-8 py-10 lg:py-12 relative z-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="text-center px-4 flex flex-col items-center justify-center"
          >
            <span className="block font-[Bebas_Neue] text-4xl lg:text-5xl text-[#00AEEF] leading-none mb-2">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
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
