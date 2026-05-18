import Link from "next/link";
import { HeroCards } from "./HeroCards";

const MOBILE_STATS = [
  { value: "8+", label: "Years" },
  { value: "15+", label: "Clients" },
  { value: "50+", label: "Projects" },
  { value: "98%", label: "Uptime SLA" },
] as const;

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center px-5 sm:px-6 lg:px-8 overflow-hidden bg-slate-50 dark:bg-[#07080C]"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:py-32">
        {/* Left content */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 text-[#00AEEF] font-[Barlow] text-xs font-bold tracking-[0.14em] uppercase border border-[#00AEEF]/20 bg-[#00AEEF]/10 px-4 py-1.5 rounded-full mb-5 lg:mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            Multi-Discipline Engineering · Nigeria
          </div>

          <h1 className="font-[Bebas_Neue] text-[clamp(3.2rem,9vw,5.8rem)] leading-[0.92] tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-5 w-full">
            Engineering
            <br />
            <span className="text-[#00AEEF]">Excellence</span>.
            <br />
            <span className="text-slate-900 dark:text-transparent dark:[-webkit-text-stroke:2px_#F0F4F8]">
              Delivered
            </span>
            .
          </h1>

          <p className="text-[0.97rem] lg:text-[1.05rem] font-medium text-slate-600 dark:text-[#8899AA] leading-relaxed max-w-lg mb-8 lg:mb-10">
            Spot Engineering Services Limited provides reliable, cost-effective
            electrical, mechanical, energy, and telecom engineering solutions
            across Nigeria — built on integrity, precision, and results.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 mb-8 lg:mb-10">
            <Link
              href="#contact"
              className="font-[Barlow] text-[0.9rem] font-bold text-center tracking-[0.08em] uppercase text-white px-7 py-3.5 bg-[#00AEEF] rounded-xl hover:bg-[#0088CC] transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#00AEEF]/30 active:scale-95"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="font-[Barlow] text-[0.9rem] justify-center font-bold tracking-[0.08em] uppercase text-slate-800 dark:text-[#F0F4F8] px-7 py-3.5 border border-slate-300 dark:border-white/10 rounded-xl hover:border-[#00AEEF]/50 hover:bg-[#00AEEF]/5 transition-all inline-flex items-center gap-2 group active:scale-95"
            >
              Explore Services
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust badge */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 font-[Barlow] text-xs font-semibold tracking-wider text-slate-500 dark:text-[#485566]">
            <div className="flex shrink-0">
              {["EF", "SO", "UB", "LF", "15+"].map((label, i) => (
                <div
                  key={label}
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#131923] border-2 border-slate-50 dark:border-[#07080C] flex items-center justify-center text-[9px] font-bold text-slate-700 dark:text-[#8899AA] shadow-sm"
                  style={{ marginLeft: i === 0 ? 0 : "-8px", zIndex: 5 - i }}
                >
                  {label}
                </div>
              ))}
            </div>
            Trusted by 15+ organizations across Nigeria
          </div>

          {/* Mobile-only stat pills — visible on small screens only */}
          <div className="lg:hidden grid grid-cols-4 gap-2 w-full mt-8 pt-8 border-t border-slate-200 dark:border-white/5">
            {MOBILE_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-[Bebas_Neue] text-[1.6rem] text-[#00AEEF] leading-none">
                  {s.value}
                </div>
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 dark:text-[#485566] mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cards — desktop only */}
        <HeroCards />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-5 h-8 border-2 border-slate-400 dark:border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 dark:bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Diagonal panel — desktop */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 -right-20 bg-white dark:bg-[#0D1117] border-l border-slate-200 dark:border-white/5 -z-10"
        style={{
          width: "52%",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      {/* Glow accent */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-[#00AEEF]/5 dark:bg-[#00AEEF]/8 blur-[120px] rounded-full pointer-events-none" />
    </>
  );
}
