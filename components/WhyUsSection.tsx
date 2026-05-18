const WHY_FEATURES = [
  {
    id: "integrity",
    title: "Integrity & Transparency",
    description:
      "Guided by a well-defined, transparent policy and ethical guidelines — our operations are built on honesty and accountability at every level.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    id: "competence",
    title: "Technical Competence",
    description:
      "Electrical and mechanical engineers with business administrators and facility technicians — delivering quality that meets and exceeds specification.",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    id: "delivery",
    title: "On-Time Delivery",
    description:
      "With adequate resources and strong organizational structure, we deliver within timelines while maintaining high standards of safety and quality.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
] as const;

const BIG_NUMBERS = [
  { value: "2017", label: "Year Founded" },
  { value: "15+", label: "Clients Served" },
  { value: "6", label: "Service Verticals" },
  { value: "NG", label: "Nationwide Reach" },
] as const;

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="bg-slate-50 dark:bg-[#07080C] px-5 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Side */}
        <div>
          <div className="font-[Barlow] text-xs font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
            Why Choose Spot
          </div>
          <h2 className="font-[Bebas_Neue] text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.05] tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-5">
            Built on Trust.
            <br />
            Proven by Results.
          </h2>
          <p className="text-[0.97rem] text-slate-600 dark:text-[#8899AA] max-w-lg leading-relaxed mb-8">
            We are value-driven problem solvers with strong technical competence
            and years of practical experience — fully invested in your
            facility&apos;s success.
          </p>
          <div className="flex flex-col gap-3 lg:gap-4">
            {WHY_FEATURES.map((f) => (
              <div
                key={f.id}
                className="flex gap-4 p-5 bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-white/5 rounded-2xl hover:border-[#00AEEF]/30 dark:hover:border-[#00AEEF]/30 hover:shadow-md transition-all duration-300 group cursor-default"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-colors duration-300">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <div className="font-[Barlow] text-[1rem] font-bold text-slate-900 dark:text-[#F0F4F8] mb-1">
                    {f.title}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-[#8899AA] leading-relaxed">
                    {f.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5">
          {/* Testimonial */}
          <div className="relative bg-white dark:bg-[#131923] border border-slate-200 dark:border-white/10 shadow-sm rounded-2xl p-7 lg:p-10 overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute -top-4 left-5 font-[Bebas_Neue] text-[7rem] text-[#00AEEF] leading-none opacity-[0.12] pointer-events-none select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="relative z-10 flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#00AEEF"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <blockquote className="relative z-10 text-[0.97rem] lg:text-[1.05rem] italic font-medium text-slate-800 dark:text-[#F0F4F8] leading-relaxed mb-7">
              &ldquo;The company has been engaged by us since January 2019 to
              handle all of our factory mechanical and electrical equipment.
              They&apos;ve provided us with quality services and delivery has
              been top notch at all times.&rdquo;
            </blockquote>
            <div className="relative z-10 flex items-center gap-4 border-t border-slate-100 dark:border-white/10 pt-5">
              <div className="w-11 h-11 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/30 flex items-center justify-center font-[Barlow] font-bold text-[#00AEEF] text-sm flex-shrink-0">
                EO
              </div>
              <div>
                <div className="font-[Barlow] font-bold text-slate-900 dark:text-[#F0F4F8] text-[0.95rem]">
                  Ebiojo Ogbaje
                </div>
                <div className="text-xs text-slate-500 dark:text-[#8899AA] mt-0.5">
                  Admin Manager — Sulaitan Limited
                </div>
              </div>
            </div>
          </div>

          {/* Big numbers grid */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {BIG_NUMBERS.map((item) => (
              <div
                key={item.value}
                className="bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-white/5 shadow-sm rounded-2xl p-5 lg:p-6 text-center"
              >
                <span className="block font-[Bebas_Neue] text-[2.2rem] lg:text-[2.6rem] text-[#00AEEF] leading-none mb-1">
                  {item.value}
                </span>
                <div className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-500 dark:text-[#8899AA]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications / trust strip */}
          <div className="bg-white dark:bg-[#0D1117] border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center flex-shrink-0">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#00AEEF"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="font-[Barlow] text-[0.85rem] font-bold text-slate-900 dark:text-[#F0F4F8]">
                CAC Registered Company
              </div>
              <div className="text-[0.75rem] text-slate-500 dark:text-[#485566] mt-0.5">
                RC 1390963 · Ikeja, Lagos, Nigeria
              </div>
            </div>
            <div className="ml-auto font-[Bebas_Neue] text-[1.1rem] text-[#00AEEF] tracking-wide">
              RC 1390963
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
