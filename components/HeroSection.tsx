import Link from "next/link";
import { HeroCards } from "./HeroCards";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-8 overflow-hidden"
    >
      {/* ── Background layers ── */}
      <HeroBackground />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-300 mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-18">
        {/* Left column */}
        <div>
          {/* Tag pill */}
          <div className="inline-flex items-center gap-2 text-[#00AEEF] font-[Barlow] text-xs font-bold tracking-[0.14em] uppercase border border-[rgba(0,174,239,0.28)] bg-[rgba(0,174,239,0.1)] px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
            Multi-Discipline Engineering Since 2017
          </div>

          {/* Headline */}
          <h1 className="font-[Bebas_Neue] text-[clamp(3.4rem,6vw,5.5rem)] leading-[0.96] tracking-[0.02em] text-[#F0F4F8] mb-7">
            Engineering
            <br />
            <span className="text-[#00AEEF]">Excellence</span>.
            <br />
            <span
              style={{
                WebkitTextStroke: "2px #F0F4F8",
                color: "transparent",
              }}
            >
              Delivered
            </span>
            .
          </h1>

          {/* Subtext */}
          <p className="text-[1.05rem] font-light text-[#8899AA] leading-[1.72] max-w-120 mb-10">
            Spot Engineering Services Limited provides reliable, cost-effective
            electrical, mechanical, energy, and telecom engineering solutions
            across Nigeria — built on integrity, precision, and results.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="#contact"
              className="font-[Barlow] text-[0.95rem] font-bold tracking-[0.06em] uppercase text-white px-8 py-3.5 bg-[#00AEEF] rounded-lg hover:bg-[#0088CC] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,174,239,0.28)]"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="font-[Barlow] text-[0.95rem] font-bold tracking-[0.06em] uppercase text-[#F0F4F8] px-8 py-3.5 border border-white/10 rounded-lg hover:border-[rgba(0,174,239,0.28)] hover:bg-[rgba(0,174,239,0.08)] transition-all inline-flex items-center gap-2 group"
            >
              Explore Services
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust signal */}
          <div className="flex items-center gap-3 font-[Barlow] text-xs font-medium tracking-wider text-[#485566]">
            <div className="flex">
              {["EF", "SO", "UB", "15+"].map((label, i) => (
                <div
                  key={label}
                  className="w-7 h-7 rounded-full bg-[#131923] border-2 border-[#07080C] flex items-center justify-center text-[10px] font-bold text-[#8899AA]"
                  style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                >
                  {label}
                </div>
              ))}
            </div>
            Trusted by 15+ organizations across Nigeria
          </div>
        </div>

        {/* Right column — stat cards */}
        <HeroCards />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#07080C]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,174,239,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,174,239,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          left: "-5%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(0,100,180,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Diagonal panel */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 -right-20 bg-[#0D1117] border-l border-white/5"
        style={{
          width: "52%",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
    </>
  );
}
