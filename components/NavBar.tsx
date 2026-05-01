"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SpotLogo from "./SpotLogo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 dark:bg-[#07080C]/80 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between gap-6">
        <SpotLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[Barlow] text-sm font-semibold tracking-wide text-slate-500 dark:text-[#8899AA] hover:text-slate-900 dark:hover:text-[#F0F4F8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+2348036476553"
            className="font-[Barlow] text-sm font-bold tracking-wide text-slate-600 dark:text-[#8899AA] hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors"
          >
            +234 803 647 6553
          </a>
          <Link
            href="#contact"
            className="font-[Barlow] text-sm font-bold tracking-widest uppercase text-white px-5 py-2.5 bg-[#00AEEF] rounded-lg hover:bg-[#0088CC] transition-all hover:shadow-lg hover:shadow-[#00AEEF]/20 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Premium Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] bg-white/95 dark:bg-[#07080C]/95 backdrop-blur-md transition-all duration-300 flex flex-col px-6 pt-8 pb-12 overflow-y-auto ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[Barlow] text-2xl font-bold text-slate-900 dark:text-[#F0F4F8] hover:text-[#00AEEF] transition-colors border-b border-slate-200 dark:border-white/5 pb-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-4 pt-8">
          <a
            href="tel:+2348036476553"
            className="text-center font-[Barlow] text-lg font-semibold text-slate-600 dark:text-[#8899AA]"
          >
            Call us: +234 803 647 6553
          </a>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full font-[Barlow] text-base font-bold tracking-widest uppercase text-white text-center px-6 py-4 bg-[#00AEEF] rounded-xl active:scale-95 transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
