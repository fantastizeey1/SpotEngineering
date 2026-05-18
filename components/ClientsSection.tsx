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

// Group clients by sector for better organisation
const SECTORS = [
  { label: "Energy & Oil", ids: [0, 1, 2, 6, 7] },
  { label: "Finance & Services", ids: [3, 8] },
  { label: "Agriculture & Food", ids: [0, 9, 10] },
  { label: "Infrastructure", ids: [4, 5, 11] },
];

export function ClientsSection() {
  return (
    <section
      id="clients"
      className="bg-[#0D1117] px-5 sm:px-6 lg:px-8 py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="font-[Barlow] text-[0.75rem] font-bold tracking-[0.16em] uppercase text-[#00AEEF] mb-3">
          Trusted Partners
        </div>
        <h2 className="font-[Bebas_Neue] text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-[0.02em] text-[#F0F4F8] mb-4">
          Organizations That Rely on Us
        </h2>
        <p className="text-[0.97rem] text-[#8899AA] max-w-[560px] mx-auto leading-[1.7] mb-12">
          From airports and banks to energy firms and agribusiness — our clients
          span every critical sector of the Nigerian economy.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="inline-flex items-center gap-2 border border-white/10 rounded-lg px-3.5 py-2.5 bg-[#131923] hover:border-[rgba(0,174,239,0.3)] hover:bg-[rgba(0,174,239,0.07)] transition-all duration-200 group cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              <span className="font-[Barlow] text-[0.8rem] font-semibold tracking-[0.03em] text-[#8899AA] group-hover:text-[#F0F4F8] transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-14 pt-10 border-t border-white/5 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "15+", label: "Active clients" },
            { value: "2019", label: "Oldest engagement" },
            { value: "100%", label: "Retention rate" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-[Bebas_Neue] text-[1.8rem] text-[#00AEEF] leading-none mb-1">
                {item.value}
              </div>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[#485566]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
