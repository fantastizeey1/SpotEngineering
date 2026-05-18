import { ServiceItem } from "@/lib/types";

const SERVICES: ServiceItem[] = [
  {
    id: "electrical",
    number: "01",
    title: "Electrical & Energy Engineering",
    description:
      "Full-spectrum electrical services for residential and commercial buildings — from lighting installations to solar-hybrid systems and fire alarm integration.",
    tags: ["Power", "Solar", "Fire Alarm", "UPS"],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "generators",
    number: "02",
    title: "Generators & Transformers",
    description:
      "Procurement, installation, configuration, and ongoing technical maintenance of generating plants and transformer systems for industrial-grade reliability.",
    tags: ["Generators", "Transformers", "Maintenance"],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    id: "mechanical",
    number: "03",
    title: "Mechanical Engineering & Metal Works",
    description:
      "HVAC, pumps, hydraulics, boilers, water treatment — plus bespoke metal fabrication, welding, and architectural metalwork for industrial facilities.",
    tags: ["HVAC", "Fabrication", "Hydraulics"],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a10 10 0 0 1 10 10H12V2z" />
        <path d="M12 12L2 12a10 10 0 0 0 10 10V12z" />
      </svg>
    ),
  },
  {
    id: "telecom",
    number: "04",
    title: "Telecom & Network Integration",
    description:
      "End-to-end telecom engineering — network planning, equipment commissioning, RF optimization, drive tests, and field management for operators of all sizes.",
    tags: ["RF Planning", "Base Stations", "Drive Test"],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "project",
    number: "05",
    title: "Project Management",
    description:
      "Capital planning, deliverables implementation, comprehensive site supervision, inspection, and commissioning — from site survey to full integration.",
    tags: ["Supervision", "Planning", "Commissioning"],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    id: "consultancy",
    number: "06",
    title: "Engineering Consultancy",
    description:
      "Strategic positioning, opportunity identification, and milestone guidance for telecom and IT operators navigating complex market and technology landscapes.",
    tags: ["Strategy", "Analysis", "Telecom"],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    id: "ftth",
    number: "07",
    title: "Fiber to the Home (FTTH) Solutions",
    description:
      "High-speed, stable, and uninterrupted fiber optic connectivity delivered directly to residential and commercial premises — from indoor/outdoor cable installation to last-mile deployment.",
    tags: [
      "Fiber Optic",
      "Splicing",
      "Network Design",
      "Fiber Testing",
      "Last-Mile",
      "Maintenance",
    ],
    icon: (
      <svg
        width="22"
        height="22"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="group relative bg-[#0D1117] p-6 lg:p-8 transition-all duration-300 hover:bg-[#131923] overflow-hidden">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-[#00AEEF] transition-colors duration-300" />

      {/* Number */}
      <div className="font-[Bebas_Neue] text-[2.5rem] lg:text-[3rem] leading-none text-white/10 group-hover:text-[rgba(0,174,239,0.18)] transition-colors duration-300 mb-4">
        {service.number}
      </div>

      {/* Icon */}
      <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-lg bg-[rgba(0,174,239,0.1)] border border-[rgba(0,174,239,0.28)] flex items-center justify-center mb-4 group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] transition-all duration-300">
        <span className="group-hover:[&_svg]:stroke-white transition-all">
          {service.icon}
        </span>
      </div>

      {/* Text */}
      <h3 className="font-[Barlow] text-[1rem] lg:text-[1.05rem] font-bold tracking-[-0.01em] text-[#F0F4F8] mb-2.5">
        {service.title}
      </h3>
      <p className="text-[0.85rem] text-[#8899AA] leading-[1.65]">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.68rem] font-semibold tracking-[0.06em] uppercase px-2 py-1 border border-white/10 rounded-sm text-[#485566] group-hover:border-[rgba(0,174,239,0.28)] group-hover:text-[#8899AA] transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function FTTHCard({ service }: { service: ServiceItem }) {
  return (
    <article className="group relative col-span-full bg-gradient-to-r from-[#131923] to-[#0D1117] p-6 lg:p-8 transition-all duration-300 hover:from-[#1A2233] hover:to-[#131923] overflow-hidden border-t border-[rgba(0,174,239,0.18)]">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00AEEF]" />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
        {/* Number + icon */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="font-[Bebas_Neue] text-[2.5rem] lg:text-[3rem] leading-none text-[rgba(0,174,239,0.18)]">
            {service.number}
          </div>
          <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-lg bg-[rgba(0,174,239,0.1)] border border-[rgba(0,174,239,0.28)] flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] transition-all duration-300">
            {service.icon}
          </div>
        </div>

        {/* Text block */}
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 text-[#00AEEF] font-[Barlow] text-[0.68rem] font-bold tracking-[0.14em] uppercase border border-[rgba(0,174,239,0.28)] bg-[rgba(0,174,239,0.1)] px-3 py-1 rounded-full mb-2">
            <span className="w-1 h-1 rounded-full bg-[#00AEEF] inline-block animate-pulse" />
            New Service
          </div>
          <h3 className="font-[Barlow] text-[1.05rem] lg:text-[1.15rem] font-bold tracking-[-0.01em] text-[#F0F4F8] mb-2">
            {service.title}
          </h3>
          <p className="text-[0.85rem] text-[#8899AA] leading-[1.65] max-w-2xl">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.68rem] font-semibold tracking-[0.06em] uppercase px-2 py-1 border border-[rgba(0,174,239,0.28)] rounded-sm text-[#8899AA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stat pills */}
        <div className="flex gap-3 shrink-0">
          <div className="bg-[#0D1117] border border-white/10 rounded-xl px-4 lg:px-5 py-4 text-center min-w-[88px]">
            <div className="font-[Bebas_Neue] text-[1.6rem] lg:text-[1.8rem] text-[#00AEEF] leading-none">
              1 Gbps
            </div>
            <div className="text-[0.65rem] text-[#8899AA] mt-1">Max Speed</div>
          </div>
          <div className="bg-[#0D1117] border border-white/10 rounded-xl px-4 lg:px-5 py-4 text-center min-w-[88px]">
            <div className="font-[Bebas_Neue] text-[1.6rem] lg:text-[1.8rem] text-[#00C878] leading-none">
              99.9%
            </div>
            <div className="text-[0.65rem] text-[#8899AA] mt-1">Uptime</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const mainServices = SERVICES.filter((s) => s.id !== "ftth");
  const ftthService = SERVICES.find((s) => s.id === "ftth")!;

  return (
    <section
      id="services"
      className="bg-[#0D1117] px-5 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-12 lg:mb-16">
          <div>
            <div className="font-[Barlow] text-[0.75rem] font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
              What We Do
            </div>
            <h2 className="font-[Bebas_Neue] text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-[0.02em] text-[#F0F4F8]">
              Our Service Lines
            </h2>
          </div>
          <p className="text-[0.97rem] text-[#8899AA] max-w-[420px] leading-[1.7] md:text-right">
            From power systems to telecom infrastructure — we deliver end-to-end
            engineering solutions that keep Nigeria moving.
          </p>
        </div>

        {/* Grid — uses border + 1px gap trick for clean dividers */}
        <div className="rounded-xl overflow-hidden border border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-x-0 md:divide-x-0 [&>*]:border-b [&>*]:border-r [&>*]:border-white/5">
          {mainServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          <FTTHCard service={ftthService} />
        </div>
      </div>
    </section>
  );
}
