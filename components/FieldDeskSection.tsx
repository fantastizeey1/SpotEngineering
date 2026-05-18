import Link from "next/link";

const FACILITICS_FEATURES = [
  {
    label: "Dynamic Custom Asset System with live Schema Builder",
    status: "live",
  },
  {
    label: "Enterprise Fleet Management & transactionally safe lifecycles",
    status: "live",
  },
  {
    label: "Multi-fuel CFO ledger (Diesel, PMS, AGO, DPK)",
    status: "live",
  },
  {
    label: "Closed-loop issue board with real-time commenting & evidence",
    status: "live",
  },
  {
    label: "Smart PDF report engine — exceptions-only output",
    status: "live",
  },
  {
    label: "QR-code fault reporting — no login needed for technicians",
    status: "live",
  },
] as const;

export function FaciliticsSection() {
  return (
    <section
      id="facilitics"
      className="bg-white dark:bg-[#07080C] px-5 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <div className="font-[Barlow] text-xs font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
            Powered By Our Team
          </div>
          <h2 className="font-[Bebas_Neue] text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-4">
            Technology We Build
          </h2>
          <p className="text-[0.97rem] text-slate-600 dark:text-[#8899AA] max-w-xl mx-auto leading-relaxed">
            Beyond physical engineering, our team ships world-class software.
            Meet Facilitics.
          </p>
        </div>

        <div className="relative overflow-hidden bg-slate-50 dark:bg-gradient-to-br dark:from-[#131923] dark:to-[#0D1117] border border-slate-200 dark:border-white/10 rounded-[24px] p-7 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center shadow-lg dark:shadow-none">
          {/* Glows */}
          <div className="absolute -top-32 -right-32 pointer-events-none w-[500px] h-[500px] bg-[#A78BFA]/8 blur-[100px] rounded-full" />
          <div className="absolute -bottom-32 -left-32 pointer-events-none w-[400px] h-[400px] bg-[#00AEEF]/5 blur-[100px] rounded-full" />

          {/* Left: Product info */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 font-[Barlow] text-xs font-bold tracking-[0.16em] uppercase text-[#A78BFA] border border-[#A78BFA]/30 bg-[#A78BFA]/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse" />
              Our SaaS Product
            </div>

            <h3 className="font-[Bebas_Neue] text-[3.2rem] lg:text-[3.8rem] leading-none tracking-wide text-slate-900 dark:text-[#F0F4F8] mb-2">
              <span className="text-[#A78BFA]">Facili</span>tics
            </h3>
            <div className="font-[Barlow] text-xs font-bold tracking-[0.1em] uppercase text-slate-500 dark:text-[#8899AA] mb-5">
              Facility & Compliance Management Platform
            </div>

            <p className="text-[0.95rem] text-slate-600 dark:text-[#8899AA] leading-relaxed mb-7">
              A multi-tenant, role-based SaaS built for Nigerian aviation,
              engineering, and real estate companies. Facilitics unifies custom
              asset tracking, fleet automation, fuel ledgers, safety compliance,
              and ticketing into a single command center.
            </p>

            {/* KPI chips */}
            <div className="grid grid-cols-3 gap-2 mb-7">
              {[
                { v: "8+", l: "Modules" },
                { v: "100%", l: "TypeScript" },
                { v: "0", l: "any types" },
              ].map((kpi) => (
                <div
                  key={kpi.l}
                  className="bg-white dark:bg-[#07080C] border border-slate-200 dark:border-white/10 rounded-xl p-3 text-center"
                >
                  <span className="block font-[Bebas_Neue] text-[1.6rem] lg:text-[2rem] text-[#A78BFA] leading-none mb-0.5">
                    {kpi.v}
                  </span>
                  <div className="text-[0.6rem] font-bold uppercase tracking-wider text-slate-500 dark:text-[#485566]">
                    {kpi.l}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="https://facilitics.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 font-[Barlow] text-[0.9rem] font-bold tracking-wider uppercase text-white bg-[#A78BFA] px-7 py-3.5 rounded-xl hover:bg-[#8B5CF6] active:scale-95 transition-all shadow-lg shadow-[#A78BFA]/20 group"
            >
              Visit Facilitics
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

          {/* Right: Feature list */}
          <div className="relative z-10">
            <div className="bg-white dark:bg-[#07080C] border border-slate-200 dark:border-white/10 rounded-2xl p-5 lg:p-6 shadow-sm dark:shadow-none">
              <div className="font-[Barlow] text-[0.7rem] font-bold tracking-[0.12em] uppercase text-slate-400 dark:text-[#485566] mb-4">
                Platform Features
              </div>
              <div className="flex flex-col divide-y divide-slate-100 dark:divide-white/5">
                {FACILITICS_FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
                    </div>
                    <span className="text-[0.85rem] text-slate-700 dark:text-[#8899AA] leading-snug flex-1">
                      {f.label}
                    </span>
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#00C878] bg-[#00C878]/10 border border-[#00C878]/20 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
