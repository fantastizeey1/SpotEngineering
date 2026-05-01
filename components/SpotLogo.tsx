export default function SpotLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9.5 h-9.5 bg-slate-100 dark:bg-[#131923] border border-slate-300 dark:border-[rgba(0,174,239,0.28)] rounded-lg flex items-center justify-center overflow-hidden shrink-0">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M16 5H8C6.9 5 6 5.9 6 7C6 8.1 6.9 9 8 9H14C16.2 9 18 10.8 18 13C18 15.2 16.2 17 14 17H6"
            stroke="#00AEEF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
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
