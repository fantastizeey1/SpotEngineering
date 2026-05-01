export function CTASection() {
  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-[#07080C] px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-white dark:bg-linear-to-br dark:from-[#131923] dark:to-[#0D1117] border border-[#00AEEF]/20 rounded-[24px] p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center overflow-hidden shadow-xl shadow-[#00AEEF]/5 dark:shadow-none">
          <div className="absolute right-[-100px] top-[-100px] pointer-events-none w-[400px] h-[400px] bg-[#00AEEF]/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <h2 className="font-[Bebas_Neue] text-5xl lg:text-6xl leading-[1.1] tracking-[0.02em] text-slate-900 dark:text-[#F0F4F8] mb-4">
              Ready to Elevate Your <br className="hidden sm:block" />
              <span className="text-[#00AEEF]">Engineering</span>?
            </h2>
            <p className="text-base lg:text-lg text-slate-600 dark:text-[#8899AA] max-w-lg leading-relaxed">
              Whether it&apos;s a power installation, mechanical overhaul, or
              telecom deployment — our team is ready to deliver. Let&apos;s
              discuss your project.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-4 w-full lg:w-auto">
            <a
              href="mailto:info.spotengineeringservices@gmail.com"
              className="w-full lg:min-w-[240px] font-[Barlow] text-[0.95rem] font-bold tracking-[0.06em] uppercase text-white px-8 py-4 bg-[#00AEEF] rounded-xl hover:bg-[#0088CC] transition-all active:scale-95 text-center shadow-lg shadow-[#00AEEF]/20"
            >
              Send Us a Message
            </a>
            <a
              href="tel:+2348036476553"
              className="w-full lg:min-w-[240px] font-[Barlow] text-[0.95rem] font-bold tracking-[0.06em] uppercase text-slate-700 dark:text-[#F0F4F8] px-8 py-4 border-2 border-slate-200 dark:border-white/10 rounded-xl hover:border-[#00AEEF]/50 dark:hover:border-[#00AEEF]/50 hover:bg-slate-50 dark:hover:bg-[#1A2233] transition-all active:scale-95 text-center"
            >
              +234 (0) 803 647 6553
            </a>
            <div className="text-xs font-semibold text-slate-500 dark:text-[#485566] text-center mt-2">
              Also available:{" "}
              <a
                href="tel:+2348099666850"
                className="text-[#00AEEF] hover:underline"
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
