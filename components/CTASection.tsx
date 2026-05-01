export function CTASection() {
  return (
    <section id="contact" className="bg-[#07080C] px-6 lg:px-8 py-28">
      <div className="max-w-300 mx-auto">
        <div className="relative bg-linear-to-br from-[#131923] to-[#0D1117] border border-[rgba(0,174,239,0.28)] rounded-[20px] p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center overflow-hidden">
          {/* Glow */}
          <div
            className="absolute -right-20 -top-20 pointer-events-none"
            style={{
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <h2 className="font-[Bebas_Neue] text-[clamp(2.2rem,3.5vw,3.2rem)] leading-none tracking-[0.02em] text-[#F0F4F8] mb-4">
              Ready to Elevate Your{" "}
              <span className="text-[#00AEEF]">Engineering</span>?
            </h2>
            <p className="text-[0.97rem] text-[#8899AA] max-w-130 leading-[1.7]">
              Whether it&apos;s a power installation, mechanical overhaul, or
              telecom deployment — our team is ready to deliver. Let&apos;s
              discuss your project.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-3 lg:items-end shrink-0">
            <a
              href="mailto:info.spotengineeringservices@gmail.com"
              className="font-[Barlow] text-[0.9rem] font-bold tracking-[0.06em] uppercase text-white px-8 py-3.5 bg-[#00AEEF] rounded-lg hover:bg-[#0088CC] hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(0,174,239,0.3)] transition-all block text-center"
            >
              Send Us a Message
            </a>
            <a
              href="tel:+2348036476553"
              className="font-[Barlow] text-[0.9rem] font-bold tracking-[0.06em] uppercase text-[#8899AA] px-8 py-3.5 border border-white/10 rounded-lg hover:border-white/20 hover:text-[#F0F4F8] hover:bg-[#1A2233] transition-all block text-center"
            >
              +234 (0) 803 647 6553
            </a>
            <div className="text-[0.75rem] text-[#485566] lg:text-right">
              Also:{" "}
              <a
                href="tel:+2348099666850"
                className="text-[#8899AA] hover:text-[#F0F4F8] transition-colors"
              >
                +234 (0) 809 966 6850
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
