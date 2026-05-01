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
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "border-b border-white/5",
        scrolled
          ? "bg-[#07080C]/96 backdrop-blur-xl"
          : "bg-[#07080C]/82 backdrop-blur-lg",
      ].join(" ")}
    >
      <div className="max-w-300 mx-auto px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Logo */}
        <SpotLogo />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[Barlow] text-sm font-medium tracking-wide text-[#8899AA] hover:text-[#F0F4F8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+2348036476553"
            className="font-[Barlow] text-sm font-semibold tracking-wide text-[#8899AA] px-4 py-2 border border-white/10 rounded-lg hover:text-[#F0F4F8] hover:bg-[#131923] transition-all"
          >
            +234 803 647 6553
          </a>
          <Link
            href="#contact"
            className="font-[Barlow] text-sm font-bold tracking-widest uppercase text-white px-5 py-2.5 bg-[#00AEEF] rounded-lg hover:bg-[#0088CC] transition-all hover:-translate-y-px"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.25"
        >
          <span
            className={`block w-5 h-0.5 bg-[#8899AA] transition-all ${mobileOpen ? "rotate-45 translate-y-1.75" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#8899AA] transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#8899AA] transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.75" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1117] border-t border-white/5 px-6 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[Barlow] text-base font-semibold text-[#8899AA] hover:text-[#F0F4F8] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="font-[Barlow] text-sm font-bold tracking-widest uppercase text-white text-center px-5 py-3 bg-[#00AEEF] rounded-lg hover:bg-[#0088CC] transition-all mt-2"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
