import type { Metadata, Viewport } from "next";
import { DM_Sans, Barlow, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07080C" },
  ],
};

export const metadata: Metadata = {
  title: "Spot Engineering Services Limited — Precision. Power. Progress.",
  description:
    "Multi-discipline engineering firm delivering reliable, cost-effective electrical, mechanical, energy, and telecom solutions across Nigeria since 2017. RC 1390963.",
  keywords: [
    "engineering company Nigeria",
    "electrical engineering Lagos",
    "generator maintenance Nigeria",
    "telecom engineering",
    "FTTH fiber optic Nigeria",
    "mechanical engineering Lagos",
    "Spot Engineering",
    "Ikeja engineering firm",
  ],
  authors: [{ name: "Spot Engineering Services Limited" }],
  robots: "index, follow",
  openGraph: {
    title:
      "Spot Engineering Services Limited — Engineering Excellence. Delivered.",
    description:
      "Reliable, cost-effective electrical, mechanical, energy, and telecom engineering solutions across Nigeria since 2017.",
    type: "website",
    locale: "en_NG",
    siteName: "Spot Engineering Services Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot Engineering Services Limited",
    description:
      "Engineering Excellence. Delivered. · Lagos, Nigeria · Since 2017",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${barlow.variable} ${bebasNeue.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-[#07080C] text-slate-900 dark:text-[#F0F4F8] overflow-x-hidden selection:bg-[#00AEEF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
