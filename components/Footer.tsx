import Link from "next/link";
import SpotLogo from "./SpotLogo";

const FOOTER_SERVICES = [
  "Electrical & Energy",
  "Generators & Transformers",
  "Mechanical Engineering",
  "Telecom & Network",
  "Project Management",
  "Consultancy",
];

const FOOTER_COMPANY = ["About Us", "Why Choose Us", "Our Clients", "Contact"];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/spotengineering",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/spotengineering",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter/X",
    href: "https://twitter.com/spotengineering",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-white/5 px-6 lg:px-8 pt-16 pb-8">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5 mb-8">
          {/* Brand column */}
          <div>
            <SpotLogo />
            <p className="text-[0.875rem] text-[#8899AA] leading-[1.7] mt-4 mb-6 max-w-67.5">
              A multi-discipline engineering firm committed to delivering
              reliable, cost-effective solutions across electrical, mechanical,
              energy, and telecom sectors in Nigeria.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8.5 h-8.5 rounded-lg border border-white/10 flex items-center justify-center text-[#8899AA] hover:border-[rgba(0,174,239,0.28)] hover:text-[#00AEEF] hover:bg-[rgba(0,174,239,0.08)] transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-[Barlow] text-[0.8rem] font-bold tracking-widest uppercase text-[#F0F4F8] mb-5">
              Services
            </div>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-[0.86rem] text-[#8899AA] hover:text-[#00AEEF] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-[Barlow] text-[0.8rem] font-bold tracking-widest uppercase text-[#F0F4F8] mb-5">
              Company
            </div>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_COMPANY.map((c) => (
                <li key={c}>
                  <Link
                    href={`#${c.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[0.86rem] text-[#8899AA] hover:text-[#00AEEF] transition-colors"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-[Barlow] text-[0.8rem] font-bold tracking-widest uppercase text-[#F0F4F8] mb-5">
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2.5 text-[0.85rem] text-[#8899AA] leading-normal">
                <svg
                  className="shrink-0 mt-0.5 text-[#00AEEF]"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                8, Adeojo Street, Wemabod Estate, Ikeja, Lagos
              </div>
              <div className="flex gap-2.5 text-[0.85rem] text-[#8899AA] leading-normal">
                <svg
                  className="shrink-0 mt-0.5 text-[#00AEEF]"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.9 16.9z" />
                </svg>
                <span>
                  +234 (0) 803 647 6553
                  <br />
                  +234 (0) 809 966 6850
                  <br />
                  +234 (0) 703 485 7727
                  <br />
                  +234 (0) 806 077 3172
                </span>
              </div>
              <div className="flex gap-2.5 text-[0.85rem] text-slate-600 dark:text-[#8899AA] leading-normal w-full min-w-0">
                <svg
                  className="shrink-0 mt-0.5 text-[#00AEEF]"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>

                <span className="break-all w-full">
                  info@spotengineering.com.ng
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[0.8rem] text-[#485566]">
          <div className="flex items-center gap-2 font-[Barlow] font-semibold">
            © 2025 Spot Engineering Services Limited
            <span className="px-1.5 py-0.5 border border-white/10 rounded text-[0.72rem] text-[#485566]">
              RC 1390963
            </span>
          </div>
          <div>All rights reserved. Ikeja, Lagos, Nigeria.</div>
        </div>
      </div>
    </footer>
  );
}
