export function CTASection() {
  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-[#07080C] px-5 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#131923] dark:to-[#0D1117] border border-[#00AEEF]/20 rounded-[24px] p-7 sm:p-10 lg:p-16 overflow-hidden shadow-xl shadow-[#00AEEF]/5 dark:shadow-none">
          {/* Decorative glow */}
          <div className="absolute right-[-80px] top-[-80px] pointer-events-none w-[350px] h-[350px] bg-[#00AEEF]/10 blur-[80px] rounded-full" />
          <div className="absolute left-[-60px] bottom-[-60px] pointer-events-none w-[250px] h-[250px] bg-[#00AEEF]/5 blur-[60px] rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center">
            {/* Text */}
            <div className="flex-1">
              <div className="font-[Barlow] text-xs font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-4">
                Let&apos;s Work Together
              </div>
              <h2 className="font-[Bebas_Neue] text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.0] tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-4">
                Ready to Elevate Your{" "}
                <span className="text-[#00AEEF]">Engineering</span>?
              </h2>
              <p className="text-[0.97rem] lg:text-[1.05rem] text-slate-600 dark:text-[#8899AA] max-w-lg leading-relaxed">
                Whether it&apos;s a power installation, mechanical overhaul, or
                telecom deployment our team is ready to deliver. Let&apos;s
                discuss your project.
              </p>

              {/* Quick trust signals */}
              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  "Free initial consultation",
                  "Response within 24 hrs",
                  "Licensed & insured",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-1.5 text-[0.8rem] text-slate-600 dark:text-[#8899AA]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00AEEF"
                      strokeWidth="2.5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[260px] flex-shrink-0">
              <a
                href="mailto:info@spotengineering.com.ng"
                className="w-full font-[Barlow] text-[0.9rem] font-bold tracking-[0.08em] uppercase text-white px-8 py-4 bg-[#00AEEF] rounded-xl hover:bg-[#0088CC] transition-all active:scale-95 text-center shadow-lg shadow-[#00AEEF]/25 hover:shadow-xl hover:shadow-[#00AEEF]/30 hover:-translate-y-0.5"
              >
                Send Us a Message
              </a>
              <a
                href="tel:+2348036476553"
                className="w-full font-[Barlow] text-[0.9rem] font-bold tracking-[0.08em] uppercase text-slate-700 dark:text-[#F0F4F8] px-8 py-4 border-2 border-slate-200 dark:border-white/10 rounded-xl hover:border-[#00AEEF]/50 dark:hover:border-[#00AEEF]/50 hover:bg-slate-50 dark:hover:bg-[#1A2233] transition-all active:scale-95 text-center"
              >
                +234 (0) 803 647 6553
              </a>
              <div className="text-xs font-semibold text-slate-500 dark:text-[#485566] text-center">
                Also available:{" "}
                <a
                  href="tel:+2348099666850"
                  className="text-[#00AEEF] hover:underline"
                >
                  +234 (0) 809 966 6850
                </a>
              </div>

              {/* Email chip */}
              <a
                href="mailto:info@spotengineering.com.ng"
                className="flex items-center justify-center gap-2 text-[0.78rem] text-slate-500 dark:text-[#485566] hover:text-[#00AEEF] transition-colors mt-1"
              >
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@spotengineering.com.ng
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
