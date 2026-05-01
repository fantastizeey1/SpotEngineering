import Link from "next/link";
import { HeroCards } from "./HeroCards";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-8 overflow-hidden bg-slate-50 dark:bg-[#07080C]"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-32 pb-16 lg:py-32">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 text-[#00AEEF] font-[Barlow] text-xs font-bold tracking-[0.14em] uppercase border border-[#00AEEF]/20 bg-[#00AEEF]/10 px-4 py-1.5 rounded-full mb-6 lg:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            Multi-Discipline Engineering
          </div>

          {/* FIX: clamp limits and break-words prevent mobile overflow */}
          <h1 className="font-[Bebas_Neue] text-[clamp(3.5rem,10vw,6rem)] leading-[0.9] tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-6 break-words w-full">
            Engineering
            <br />
            <span className="text-[#00AEEF]">Excellence</span>.
            <br />
            <span className="text-slate-900 dark:text-transparent dark:[-webkit-text-stroke:2px_#F0F4F8]">
              Delivered
            </span>
            .
          </h1>

          <p className="text-base lg:text-[1.05rem] font-medium text-slate-600 dark:text-[#8899AA] leading-relaxed max-w-lg mb-10">
            Spot Engineering Services Limited provides reliable, cost-effective
            electrical, mechanical, energy, and telecom engineering solutions
            across Nigeria — built on integrity, precision, and results.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-4 mb-10">
            <Link
              href="#contact"
              className="font-[Barlow] text-[0.95rem] font-bold text-center tracking-[0.06em] uppercase text-white px-8 py-4 bg-[#00AEEF] rounded-xl hover:bg-[#0088CC] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00AEEF]/30 active:scale-95"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="font-[Barlow] text-[0.95rem] justify-center font-bold tracking-[0.06em] uppercase text-slate-800 dark:text-[#F0F4F8] px-8 py-4 border border-slate-300 dark:border-white/10 rounded-xl hover:border-[#00AEEF]/50 hover:bg-[#00AEEF]/5 transition-all inline-flex items-center gap-2 group active:scale-95"
            >
              Explore Services
              <svg
                width="16"
                height="16"
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

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 font-[Barlow] text-xs font-semibold tracking-wider text-slate-500 dark:text-[#485566]">
            <div className="flex shrink-0">
              {["EF", "SO", "UB", "15+"].map((label, i) => (
                <div
                  key={label}
                  className="w-8 h-8 rounded-full bg-white dark:bg-[#131923] border-2 border-slate-50 dark:border-[#07080C] flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-[#8899AA] shadow-sm"
                  style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                >
                  {label}
                </div>
              ))}
            </div>
            Trusted by 15+ organizations across Nigeria
          </div>
        </div>

        <HeroCards />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      <div
        className="hidden lg:block absolute top-0 bottom-0 -right-20 bg-white dark:bg-[#0D1117] border-l border-slate-200 dark:border-white/5 -z-10"
        style={{
          width: "52%",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
    </>
  );
}
