const CLIENTS = [
  "Efugo Farms",
  "Staren Oil",
  "Efugo Extractive",
  "Unity Bank",
  "Living Faith Church",
  "MMA2 Airport",
  "Globeleq",
  "ContourGlobal Nigeria",
  "Sulaitan Limited",
  "Bodyplant Nature Resource",
  "Bonitas Food",
  "Bim-bo Engineering",
] as const;

export function ClientsSection() {
  return (
    <section id="clients" className="bg-[#0D1117] px-6 lg:px-8 py-24">
      <div className="max-w-300 mx-auto text-center">
        <div className="font-[Barlow] text-[0.78rem] font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
          Trusted Partners
        </div>
        <h2 className="font-[Bebas_Neue] text-[clamp(2.4rem,4vw,3.6rem)] leading-none tracking-[0.02em] text-[#F0F4F8] mb-4">
          Organizations That Rely on Us
        </h2>
        <p className="text-[1rem] text-[#8899AA] max-w-140 mx-auto leading-[1.7] mb-12">
          From airports and banks to energy firms and agribusiness — our clients
          span every critical sector of the Nigerian economy.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="inline-flex items-center gap-2 border border-white/10 rounded-lg px-4 py-2.5 bg-[#131923] hover:border-[rgba(0,174,239,0.28)] hover:bg-[rgba(0,174,239,0.08)] transition-all duration-200 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="font-[Barlow] text-[0.82rem] font-semibold tracking-[0.04em] text-[#8899AA] group-hover:text-[#F0F4F8] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
