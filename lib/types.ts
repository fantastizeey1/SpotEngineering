// ── Design Tokens ─────────────────────────────────────────
export const BRAND = {
  accent: "#00AEEF",
  accentDark: "#0088CC",
  accentGlow: "rgba(0, 174, 239, 0.18)",
  accentBorder: "rgba(0, 174, 239, 0.28)",
  bg: "#07080C",
  bg2: "#0D1117",
  bg3: "#131923",
  bg4: "#1A2233",
  text: "#F0F4F8",
  text2: "#8899AA",
  text3: "#485566",
  border: "rgba(255, 255, 255, 0.055)",
  border2: "rgba(255, 255, 255, 0.10)",
} as const;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

// ── Shared Types ───────────────────────────────────────────
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  initials: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
  social: string;
}
