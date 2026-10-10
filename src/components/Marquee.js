"use client";

import { useEffect, useRef } from "react";
import Sparkle from "@/components/Sparkle";

export default function Marquee({ items, kecepatan = 1.5 }) {
  const trek = useRef(null);
  
  // Menggandakan array lebih banyak agar tidak akan pernah ada ruang kosong
  const daftar = [...items, ...items, ...items, ...items, ...items];

  useEffect(() => {
    const el = trek.current;
    if (!el) return;

    let x = 0;
    let rafId;
    
    const jalan = () => {
      // Bergerak konstan ke kiri
      x -= kecepatan;
      
      // Jika sudah melewati setengah lebar total, kembalikan persis ke 0 (Seamless Infinite Loop)
      const separuh = el.scrollWidth / 2;
      if (Math.abs(x) >= separuh) {
        x = 0; 
      }
      
      el.style.transform = `translate3d(${x}px, 0, 0)`;
      rafId = requestAnimationFrame(jalan);
    };
    
    rafId = requestAnimationFrame(jalan);
    return () => cancelAnimationFrame(rafId);
  }, [kecepatan]);

  return (
    <div className="relative flex overflow-hidden w-full bg-surface" aria-hidden="true">
      {/* Efek gradasi pudar di ujung kiri dan kanan */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f7f6f2] to-transparent md:w-40" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f7f6f2] to-transparent md:w-40" />
      
      <div ref={trek} className="flex w-max items-center gap-10 pr-10 will-change-transform">
        {daftar.map((item, i) => (
          <span 
            key={i} 
            className="flex items-center gap-10 whitespace-nowrap font-display text-5xl text-brand-900 md:text-6xl"
          >
            {item}
            <Sparkle className="h-7 w-7 shrink-0 text-aksen" delay={i * 200} />
          </span>
        ))}
      </div>
    </div>
  );
}