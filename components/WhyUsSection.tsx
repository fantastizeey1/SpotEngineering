const WHY_FEATURES = [
  {
    id: "integrity",
    title: "Integrity & Transparency",
    description:
      "Guided by a well-defined, transparent policy and ethical guidelines — our operations are built on honesty and accountability at every level.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "competence",
    title: "Technical Competence",
    description:
      "Electrical and mechanical engineers with business administrators and facility technicians — delivering quality that meets and exceeds specification.",
    icon: (
      <svg
        width="20"
        height="20"
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
    id: "delivery",
    title: "On-Time Delivery",
    description:
      "With adequate resources and strong organizational structure, we deliver within timelines while maintaining high standards of safety and quality.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="#00AEEF"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
] as const;

const BIG_NUMBERS = [
  { value: "2017", label: "Year Founded" },
  { value: "15+", label: "Clients Served" },
  { value: "6", label: "Service Verticals" },
  { value: "NG", label: "Nationwide Reach" },
] as const;

function WhyFeatureCard({
  feature,
}: {
  feature: (typeof WHY_FEATURES)[number];
}) {
  return (
    <div className="flex gap-4 p-6 bg-[#0D1117] border border-white/5 rounded-xl hover:border-[rgba(0,174,239,0.28)] hover:bg-[#131923] transition-all duration-300 group">
      <div className="shrink-0 w-11 h-11 rounded-lg bg-[rgba(0,174,239,0.1)] border border-[rgba(0,174,239,0.28)] flex items-center justify-center group-hover:bg-[rgba(0,174,239,0.18)] transition-colors">
        {feature.icon}
      </div>
      <div>
        <div className="font-[Barlow] text-[0.97rem] font-bold text-[#F0F4F8] mb-1.5">
          {feature.title}
        </div>
        <div className="text-[0.85rem] text-[#8899AA] leading-[1.6]">
          {feature.description}
        </div>
      </div>
    </div>
  );
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-[#07080C] px-6 lg:px-8 py-24">
      <div className="max-w-300 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <div className="font-[Barlow] text-[0.78rem] font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
            Why Choose Spot
          </div>
          <h2 className="font-[Bebas_Neue] text-[clamp(2.4rem,4vw,3.6rem)] leading-none tracking-[0.02em] text-[#F0F4F8] mb-4">
            Built on Trust.
            <br />
            Proven by Results.
          </h2>
          <p className="text-[1rem] text-[#8899AA] max-w-120 leading-[1.7] mb-10">
            We are value-driven problem solvers with strong technical competence
            and years of practical experience — fully invested in your
            facility&apos;s success.
          </p>
          <div className="flex flex-col gap-4">
            {WHY_FEATURES.map((f) => (
              <WhyFeatureCard key={f.id} feature={f} />
            ))}
          </div>
        </div>

        {/* Right — testimonials + big numbers */}
        <div className="flex flex-col gap-4">
          {/* Primary testimonial — Sulaitan */}
          <div className="relative bg-[#131923] border border-white/10 rounded-xl p-8">
            <div
              className="absolute top-[-1.4rem] left-7 font-[Bebas_Neue] text-[5.5rem] text-[#00AEEF] leading-none opacity-40 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="text-[0.97rem] italic text-[#F0F4F8] leading-[1.76] mb-5">
              The company has been engaged by us since January 2019 to handle
              all of our factory mechanical and electrical equipment.
              They&apos;ve provided us with quality services and delivery has
              been top notch at all times. We highly recommend them for business
              relationships.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[rgba(0,174,239,0.1)] border-2 border-[rgba(0,174,239,0.28)] flex items-center justify-center font-[Barlow] font-bold text-[0.9rem] text-[#00AEEF]">
                EO
              </div>
              <div>
                <div className="font-[Barlow] font-bold text-[0.9rem] text-[#F0F4F8]">
                  Ebiojo Ogbaje
                </div>
                <div className="text-[0.78rem] text-[#8899AA]">
                  Admin Manager — Sulaitan Limited, Abuja
                </div>
              </div>
            </div>
          </div>

          {/* Secondary testimonial — Meronix */}
          <div className="bg-[#0D1117] border border-white/5 rounded-xl p-6">
            <blockquote className="text-[0.88rem] italic text-[#8899AA] leading-[1.7] mb-4">
              Spot Engineering has consistently demonstrated a high level of
              integrity, conducting its operations with honesty, transparency,
              and strong ethical standards — with remarkable competence in the
              execution of engineering projects.
            </blockquote>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1A2233] border border-white/10 flex items-center justify-center font-[Barlow] font-bold text-[0.78rem] text-[#8899AA]">
                FO
              </div>
              <div>
                <div className="font-[Barlow] font-bold text-[0.85rem] text-[#F0F4F8]">
                  Frank M. Ojo
                </div>
                <div className="text-[0.73rem] text-[#485566]">
                  Technical Lead — Meronix Consulting Ltd, Abuja
                </div>
              </div>
            </div>
          </div>

          {/* Big numbers grid */}
          <div className="grid grid-cols-2 gap-3">
            {BIG_NUMBERS.map((item) => (
              <div
                key={item.value}
                className="bg-[#0D1117] border border-white/5 rounded-xl p-5 text-center"
              >
                <span className="block font-[Bebas_Neue] text-[2.8rem] text-[#00AEEF] leading-none">
                  {item.value}
                </span>
                <div className="text-[0.78rem] text-[#8899AA] mt-1.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
