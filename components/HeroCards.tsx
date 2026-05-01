const HERO_CARDS = [
  {
    id: "power",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#00AEEF" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Generators & Power",
    subtitle: "Active installations",
    badge: { label: "Active", variant: "success" as const },
    stat: "98",
    statLabel: "% Uptime SLA",
    secondary: { label: "Avg. response", value: "4 hrs" },
    fillWidth: "98%",
  },
  {
    id: "telecom",
    icon: (
      <svg width="18" height="18" fill="none" stroke="#00AEEF" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Telecom Infrastructure",
    subtitle: "Network deployments",
    badge: { label: "Live", variant: "warning" as const },
    stat: "50+",
    statLabel: "Projects delivered",
    secondary: { label: "On-time rate", value: "96%" },
    fillWidth: "96%",
  },
] as const;

interface BadgeProps {
  label: string;
  variant: "success" | "warning";
}

function Badge({ label, variant }: BadgeProps) {
  const styles: Record<typeof variant, string> = {
    success:
      "bg-[rgba(0,200,120,0.12)] text-[#00C878] border border-[rgba(0,200,120,0.2)]",
    warning:
      "bg-[rgba(255,180,0,0.10)] text-[#FFB400] border border-[rgba(255,180,0,0.2)]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.06em] uppercase px-2.5 py-1 rounded-[4px] ${styles[variant]}`}
    >
      ● {label}
    </span>
  );
}

export function HeroCards() {
  return (
    <div className="hidden lg:flex flex-col gap-3">
      {HERO_CARDS.map((card) => (
        <div
          key={card.id}
          className="bg-[#131923] border border-white/10 rounded-xl p-5 hover:border-[rgba(0,174,239,0.28)] hover:-translate-y-0.5 transition-all duration-300 group"
        >
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-9 h-9 rounded-lg bg-[rgba(0,174,239,0.1)] border border-[rgba(0,174,239,0.28)] flex items-center justify-center flex-shrink-0">
              {card.icon}
            </div>
            <div className="flex-1">
              <div className="font-[Barlow] text-[0.95rem] font-bold tracking-[-0.01em] text-[#F0F4F8]">
                {card.title}
              </div>
              <div className="text-[0.78rem] text-[#485566]">{card.subtitle}</div>
            </div>
            <Badge label={card.badge.label} variant={card.badge.variant} />
          </div>

          <div className="flex justify-between items-end">
            <div className="flex items-baseline gap-1.5">
              <span className="font-[Bebas_Neue] text-[2.4rem] text-[#F0F4F8] leading-none">
                {card.stat}
              </span>
              <span className="text-[0.78rem] text-[#8899AA]">{card.statLabel}</span>
            </div>
            <div className="text-right">
              <div className="text-[0.72rem] text-[#485566]">{card.secondary.label}</div>
              <div className="font-[Barlow] text-[0.95rem] font-bold text-[#F0F4F8]">
                {card.secondary.value}
              </div>
            </div>
          </div>

          <div className="h-[3px] bg-[#1A2233] rounded-full mt-3.5">
            <div
              className="h-full bg-[#00AEEF] rounded-full"
              style={{ width: card.fillWidth }}
            />
          </div>
        </div>
      ))}

      {/* Company info strip */}
      <div className="bg-[#131923] border border-white/10 rounded-xl px-5 py-3.5 flex items-center gap-5">
        {[
          { label: "RC Registration", value: "RC 1390963", type: "text" },
          { label: "Operating since", value: "2017", type: "accent" },
          { label: "HQ Location", value: "Ikeja, Lagos", type: "text" },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-5 flex-1">
            {i > 0 && <div className="w-px bg-white/10 h-9 flex-shrink-0" />}
            <div>
              <div className="text-[0.72rem] text-[#485566] mb-0.5">{item.label}</div>
              {item.type === "accent" ? (
                <div className="font-[Bebas_Neue] text-[1.5rem] text-[#00AEEF] leading-none">
                  {item.value}
                </div>
              ) : (
                <div className="font-[Barlow] text-[0.85rem] font-bold text-[#F0F4F8]">
                  {item.value}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
