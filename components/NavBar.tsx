"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import SpotLogo from "./SpotLogo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#facilitics", label: "Facilitics" },
  { href: "#contact", label: "Contact" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Track active section for nav highlight
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/85 dark:bg-[#07080C]/90 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        <SpotLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-[Barlow] text-sm font-semibold tracking-wide transition-colors relative ${
                  isActive
                    ? "text-[#00AEEF]"
                    : "text-slate-500 dark:text-[#8899AA] hover:text-slate-900 dark:hover:text-[#F0F4F8]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#00AEEF] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+2348036476553"
            aria-label="Call us"
            className="font-[Barlow] text-sm font-bold tracking-wide text-slate-600 dark:text-[#8899AA] hover:text-[#00AEEF] dark:hover:text-[#00AEEF] transition-colors"
          >
            +234 803 647 6553
          </a>
          <Link
            href="#contact"
            className="font-[Barlow] text-sm font-bold tracking-widest uppercase text-white px-5 py-2.5 bg-[#00AEEF] rounded-lg hover:bg-[#0088CC] transition-all hover:shadow-lg hover:shadow-[#00AEEF]/25 active:scale-95"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] rounded-md"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed inset-0 top-[60px] bg-white/97 dark:bg-[#07080C]/97 backdrop-blur-md transition-all duration-300 flex flex-col px-6 pt-8 pb-12 overflow-y-auto ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        <div className="flex flex-col">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-[Barlow] text-[1.6rem] font-bold text-slate-900 dark:text-[#F0F4F8] hover:text-[#00AEEF] transition-colors border-b border-slate-100 dark:border-white/5 py-5 flex items-center justify-between group"
              style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#00AEEF]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4 pt-10">
          <a
            href="tel:+2348036476553"
            className="text-center font-[Barlow] text-base font-semibold text-slate-600 dark:text-[#8899AA] py-3 border border-slate-200 dark:border-white/10 rounded-xl"
          >
            📞 +234 803 647 6553
          </a>
          <Link
            href="#contact"
            onClick={closeMobile}
            className="w-full font-[Barlow] text-base font-bold tracking-widest uppercase text-white text-center px-6 py-4 bg-[#00AEEF] rounded-xl hover:bg-[#0088CC] active:scale-95 transition-all shadow-lg shadow-[#00AEEF]/20"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
