import Image from "next/image";

export default function SpotLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9.5 h-9.5 bg-slate-100 dark:bg-[#131923] flex items-center justify-center overflow-hidden shrink-0">
        <Image src="logo.svg" width={30} height={30} alt="Spot Logo" />
      </div>
      <div className="font-[Barlow] font-bold text-[0.92rem] leading-[1.2] tracking-[-0.01em] text-slate-900 dark:text-[#F0F4F8]">
        Spot Engineering
        <span className="block text-slate-500 dark:text-[#8899AA] font-normal text-[0.75rem] tracking-[0.04em] mt-px">
          Services Limited
        </span>
      </div>
    </div>
  );
}
