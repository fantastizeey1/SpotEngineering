import Link from "next/link";

const FIELDDESK_FEATURES = [
  {
    label: "Generator monitoring, dual-PM scheduling & fuel burn rates",
    status: "live",
  },
  { label: "Multi-fuel CFO ledger (Diesel, PMS, AGO, DPK)", status: "live" },
  {
    label: "Closed-loop issue board with evidence photo uploads",
    status: "live",
  },
  { label: "Smart PDF report engine — exceptions-only output", status: "live" },
  {
    label: "QR-code fault reporting — no login needed for technicians",
    status: "live",
  },
] as const;

export function FieldDeskSection() {
  return (
    <section
      id="fielddesk"
      className="bg-white dark:bg-[#07080C] px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="font-[Barlow] text-xs font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
            Powered By Our Team
          </div>
          <h2 className="font-[Bebas_Neue] text-4xl lg:text-5xl leading-none tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-4">
            Technology We Build
          </h2>
          <p className="text-base text-slate-600 dark:text-[#8899AA] max-w-xl mx-auto leading-relaxed">
            Beyond physical engineering, our team ships world-class software.
            Meet FieldDesk.
          </p>
        </div>

        <div className="relative overflow-hidden bg-slate-50 dark:bg-gradient-to-br dark:from-[#131923] dark:to-[#0D1117] border border-slate-200 dark:border-white/10 rounded-[24px] p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center shadow-lg dark:shadow-none">
          {/* Subtle Glows */}
          <div className="absolute -top-32 -right-32 pointer-events-none w-[500px] h-[500px] bg-[#A78BFA]/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-32 -left-32 pointer-events-none w-[400px] h-[400px] bg-[#00AEEF]/5 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 font-[Barlow] text-xs font-bold tracking-[0.16em] uppercase text-[#A78BFA] border border-[#A78BFA]/30 bg-[#A78BFA]/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
              Our SaaS Product
            </div>

            <h3 className="font-[Bebas_Neue] text-5xl lg:text-6xl leading-none tracking-wide text-slate-900 dark:text-[#F0F4F8] mb-3">
              <span className="text-[#A78BFA]">Field</span>Desk
            </h3>
            <div className="font-[Barlow] text-sm font-bold tracking-[0.08em] uppercase text-slate-500 dark:text-[#8899AA] mb-6">
              Facility & Compliance Management Platform
            </div>

            <p className="text-base text-slate-600 dark:text-[#8899AA] leading-relaxed mb-6">
              A multi-tenant, role-based SaaS built for Nigerian aviation,
              engineering, and real estate companies. FieldDesk unifies
              generator monitoring, fuel ledgers, safety compliance, AC
              diagnostics, and ticketing into a single command center.
            </p>

            <Link
              href="https://fielddesk.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 font-[Barlow] text-[0.95rem] font-bold tracking-wider uppercase text-white bg-[#A78BFA] px-8 py-4 rounded-xl hover:bg-[#8B5CF6] active:scale-95 transition-all shadow-lg shadow-[#A78BFA]/20 group mt-4"
            >
              Visit FieldDesk
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

          <div className="relative z-10 flex flex-col gap-4 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { v: "8+", l: "Modules" },
                { v: "100%", l: "TypeScript" },
                { v: "0", l: "any types" },
              ].map((kpi) => (
                <div
                  key={kpi.l}
                  className="bg-white dark:bg-[#07080C] border border-slate-200 dark:border-white/10 rounded-2xl p-4 lg:p-5 text-center shadow-sm dark:shadow-none"
                >
                  <span className="block font-[Bebas_Neue] text-3xl lg:text-4xl text-[#A78BFA] leading-none mb-1">
                    {kpi.v}
                  </span>
                  <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 dark:text-[#485566]">
                    {kpi.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-[#07080C] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm dark:shadow-none">
              <div className="flex flex-col divide-y divide-slate-100 dark:divide-white/5">
                {FIELDDESK_FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-start sm:items-center gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shrink-0 mt-2 sm:mt-0" />
                    <span className="text-sm text-slate-700 dark:text-[#8899AA] leading-snug flex-1">
                      {f.label}
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
