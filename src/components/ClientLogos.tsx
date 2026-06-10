import React from "react";

export const MKLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="h-7 w-auto" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25h6v10H5zM12 15h8v20h-8zM21 20h6v15h-6z" fill="#10B981" />
      <path d="M40 10v25h6V20l8 10 8-10v15h6V10h-8l-6 8-6-8h-8z" fill="white" />
      <path d="M75 10h6v12l10-12h8l-10 11 11 14h-8l-8-11v11h-6V10z" fill="white" />
    </svg>
    <div className="text-left leading-none">
      <div className="text-[10px] font-bold tracking-wider text-[#10B981]">BUILDERS &</div>
      <div className="text-[9px] font-medium tracking-widest text-white/70">DEVELOPERS</div>
    </div>
  </div>
);

export const CitadelLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="h-8 w-auto text-[#D4AF37]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 25V12l4-4v4h4V8l4 4v-4h4V8l4 4v13H5zm6-6h8v6h-8v-6z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    <div className="text-left leading-none">
      <div className="text-sm font-black tracking-widest text-white">CITADEL</div>
      <div className="text-[8px] tracking-[0.2em] text-[#D4AF37]">DAWN OF LUXURY</div>
    </div>
  </div>
);

export const GconLogo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-[#EAB308] text-black font-black italic px-2.5 py-1 rounded text-lg tracking-tighter">
      G CON
    </div>
  </div>
);

export const KrystalLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="h-8 w-auto text-[#A855F7]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 L35 25 L20 35 L5 25 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M20 5 L20 35 M5 25 L35 25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
    <div className="text-left leading-none">
      <div className="text-xs font-bold tracking-widest text-white">KRYSTAL</div>
      <div className="text-[7px] text-[#A855F7] tracking-wider uppercase">Your Shining Abode</div>
    </div>
  </div>
);

export const InorbitLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="relative h-7 w-7 rounded-full bg-[#2563EB] flex items-center justify-center">
      <div className="absolute h-5 w-5 rounded-full border-2 border-[#EAB308] border-t-transparent animate-spin-slow" />
    </div>
    <div className="text-lg font-black tracking-tight text-white flex items-center">
      In<span className="text-[#2563EB]">orbit</span>
    </div>
  </div>
);

export const FluentgridLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="h-7 w-auto text-[#06B6D4]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 C 20 5, 25 35, 35 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M5 20 C 15 15, 20 35, 30 30" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
    </svg>
    <div className="text-left leading-none">
      <div className="text-xs font-black tracking-tighter text-white">FLUENTGRID</div>
      <div className="text-[7px] text-white/50 tracking-wider">seamless digital transformation</div>
    </div>
  </div>
);

export const MahathiLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="h-8 w-auto text-[#EF4444]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2 L23 15 L36 12 L26 22 L36 32 L23 29 L20 40 L17 29 L4 32 L14 22 L4 12 L17 15 Z" fill="currentColor" />
    </svg>
    <span className="text-sm font-black tracking-widest text-white">MAHATHI</span>
  </div>
);

export const VprLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="h-7 w-auto" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30 C 20 10, 30 10, 40 30" stroke="#F97316" strokeWidth="3" fill="none" />
      <path d="M18 30 C 28 15, 38 15, 48 30" stroke="#0EA5E9" strokeWidth="3" fill="none" />
    </svg>
    <div className="text-left leading-none">
      <div className="text-sm font-black tracking-tight text-white">VPR</div>
      <div className="text-[8px] font-bold text-white/60 uppercase">Builders</div>
    </div>
  </div>
);

export const PanoramaHillsLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative bg-emerald-900/40 border border-emerald-500/30 rounded px-2.5 py-1 flex flex-col items-center">
      <div className="text-[7px] text-[#EAB308] font-bold uppercase tracking-widest">Shriram</div>
      <div className="text-[10px] font-black text-white tracking-wide uppercase">Panorama Hills</div>
      <div className="text-[6px] text-white/80 italic font-light leading-none">Life as it should be</div>
    </div>
  </div>
);

export const clientLogosList = [
  { name: "MK Builders", logo: <MKLogo /> },
  { name: "Citadel", logo: <CitadelLogo /> },
  { name: "GCON", logo: <GconLogo /> },
  { name: "Krystal", logo: <KrystalLogo /> },
  { name: "Inorbit", logo: <InorbitLogo /> },
  { name: "Fluentgrid", logo: <FluentgridLogo /> },
  { name: "Mahathi", logo: <MahathiLogo /> },
  { name: "VPR Builders", logo: <VprLogo /> },
  { name: "Panorama Hills", logo: <PanoramaHillsLogo /> }
];
