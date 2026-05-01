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
  {
    label: "Fleet & Lift modules — vehicle dispatch + elevator compliance",
    status: "dev",
  },
] as const;

const FIELDDESK_KPI = [
  { value: "8+", label: "Modules Live" },
  { value: "100%", label: "TypeScript" },
  { value: "0", label: "any types" },
] as const;

const TECH_STACK = [
  "Next.js 16",
  "Supabase",
  "TypeScript",
  "Tailwind v4",
  "shadcn/ui",
  "React PDF",
] as const;

type FeatureStatus = "live" | "dev";

function StatusBadge({ status }: { status: FeatureStatus }) {
  if (status === "live") {
    return (
      <span className="ml-auto shrink-0 inline-flex items-center gap-1 text-[0.65rem] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded bg-[rgba(0,200,120,0.1)] text-[#00C878] border border-[rgba(0,200,120,0.2)]">
        Live
      </span>
    );
  }
  return (
    <span className="ml-auto shrink-0 inline-flex items-center gap-1 text-[0.65rem] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded bg-[rgba(255,180,0,0.1)] text-[#FFB400] border border-[rgba(255,180,0,0.2)]">
      In Dev
    </span>
  );
}

export function FieldDeskSection() {
  return (
    <section id="fielddesk" className="bg-[#07080C] px-6 lg:px-8 py-24">
      <div className="max-w-300 mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="font-[Barlow] text-[0.78rem] font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
            Powered By Our Team
          </div>
          <h2 className="font-[Bebas_Neue] text-[clamp(2.4rem,4vw,3.6rem)] leading-none tracking-[0.02em] text-[#F0F4F8] mb-3">
            Technology We Build
          </h2>
          <p className="text-[1rem] text-[#8899AA] max-w-130 mx-auto leading-[1.7]">
            Beyond physical engineering, our team ships world-class software.
            Meet FieldDesk.
          </p>
        </div>

        {/* Main card */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#131923] to-[#0D1117] border border-white/10 rounded-[20px] p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Purple glow */}
          <div
            className="absolute -top-20 -right-20 pointer-events-none"
            style={{
              width: 420,
              height: 420,
              background:
                "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute -bottom-15 -left-15 pointer-events-none"
            style={{
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(0,174,239,0.06) 0%, transparent 65%)",
            }}
          />

          {/* LEFT — copy */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-[Barlow] text-[0.72rem] font-bold tracking-[0.16em] uppercase text-[#A78BFA] border border-[rgba(124,58,237,0.28)] bg-[rgba(124,58,237,0.1)] px-3 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-sm bg-[#A78BFA] inline-block" />
              Our SaaS Product
            </div>

            <h3 className="font-[Bebas_Neue] text-[clamp(2.4rem,3.5vw,3.2rem)] leading-none tracking-[0.02em] text-[#F0F4F8] mb-2">
              <span className="text-[#A78BFA]">Field</span>Desk
            </h3>
            <div className="font-[Barlow] text-[0.82rem] font-bold tracking-[0.08em] uppercase text-[#485566] mb-5">
              Facility & Compliance Management Platform
            </div>

            <p className="text-[0.95rem] text-[#8899AA] leading-[1.72] mb-4">
              A multi-tenant, role-based SaaS built for Nigerian aviation,
              engineering, and real estate companies. FieldDesk unifies
              generator monitoring, fuel ledgers, safety compliance, AC
              diagnostics, and ticketing into a single command center replacing
              spreadsheets and WhatsApp chains with real-time intelligence.
            </p>
            <p className="text-[0.875rem] text-[#485566] leading-[1.72] mb-8">
              Trusted by facilities all over the country. Built on Next.js,
              Supabase, and strict TypeScript with multi-fuel tracking,
              automated PDF reports, QR-based fault reporting, and role-based
              access control.
            </p>

            <Link
              href="https://feild-desk.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-[Barlow] text-[0.9rem] font-bold tracking-wider text-[#A78BFA] border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.1)] px-6 py-3 rounded-lg hover:bg-[rgba(124,58,237,0.22)] hover:border-[rgba(124,58,237,0.55)] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(124,58,237,0.2)] transition-all group"
            >
              Visit FieldDesk
              <svg
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </div>

          {/* RIGHT — visual dashboard preview */}
          <div className="relative z-10 flex flex-col gap-4">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3">
              {FIELDDESK_KPI.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-[#07080C] border border-white/10 rounded-xl p-4 text-center"
                >
                  <span className="block font-[Bebas_Neue] text-[1.8rem] text-[#A78BFA] leading-none">
                    {kpi.value}
                  </span>
                  <div className="text-[0.7rem] text-[#485566] mt-1">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <div className="bg-[#07080C] border border-white/10 rounded-xl p-5">
              <div className="flex flex-col divide-y divide-white/5">
                {FIELDDESK_FEATURES.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shrink-0" />
                    <span className="text-[0.83rem] text-[#8899AA] leading-[1.4] flex-1">
                      {f.label}
                    </span>
                    <StatusBadge status={f.status} />
                  </div>
                ))}
              </div>
            </div>

            {/* Stack chips */}
            <div>
              <div className="font-[Barlow] text-[0.7rem] font-bold tracking-widest uppercase text-[#485566] mb-2">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.7rem] font-semibold tracking-[0.06em] uppercase px-2.5 py-1 border border-white/10 rounded text-[#485566]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
