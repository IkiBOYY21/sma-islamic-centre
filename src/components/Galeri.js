"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/Button";

// Galeri geser: bisa diseret dengan mouse, digeser dengan jari, atau pakai tombol.
// Klik foto untuk membuka lightbox (panah kiri/kanan untuk pindah, Esc untuk menutup).
export default function Galeri({ items }) {
  const wadah = useRef(null);
  const drag = useRef({ aktif: false, x: 0, kiri: 0, gerak: 0 });
  const [menyeret, setMenyeret] = useState(false);
  const [buka, setBuka] = useState(null);

  const turun = (e) => {
    if (e.pointerType !== "mouse") return;
    drag.current = { aktif: true, x: e.clientX, kiri: wadah.current.scrollLeft, gerak: 0 };
  };
  const gerak = (e) => {
    const d = drag.current;
    if (!d.aktif) return;
    const dx = e.clientX - d.x;
    d.gerak = Math.max(d.gerak, Math.abs(dx));
    if (d.gerak > 5) setMenyeret(true);
    wadah.current.scrollLeft = d.kiri - dx;
  };
  const naik = () => {
    drag.current.aktif = false;
    setMenyeret(false);
  };
  const klik = (i) => {
    if (drag.current.gerak > 5) return; // itu seretan, bukan klik
    setBuka(i);
  };
  const geser = (arah) => wadah.current.scrollBy({ left: arah * 420, behavior: "smooth" });

  useEffect(() => {
    if (buka === null) return;
    const tombol = (e) => {
      if (e.key === "Escape") setBuka(null);
      if (e.key === "ArrowRight") setBuka((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setBuka((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", tombol);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", tombol);
      document.body.style.overflow = "";
    };
  }, [buka, items.length]);

  return (
    <div>
      <div
        ref={wadah}
        onPointerDown={turun}
        onPointerMove={gerak}
        onPointerUp={naik}
        onPointerLeave={naik}
        data-cursor="Geser"
        className={`flex items-start gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${menyeret ? "" : "snap-x snap-mandatory"}`}
        style={{ paddingInline: "max(1rem, calc((100vw - 72rem) / 2))", scrollPaddingInline: "max(1rem, calc((100vw - 72rem) / 2))" }}
      >
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            onClick={() => klik(i)}
            data-cursor="Lihat"
            className={`group relative block aspect-[4/5] w-[74vw] shrink-0 snap-start overflow-hidden rounded-2xl text-left sm:w-[340px] md:w-[400px] ${i % 2 ? "md:mt-14" : ""}`}
          >
            <img src={it.src} alt={it.ket} loading="lazy" decoding="async" draggable={false} className="h-full w-full select-none object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            <span className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">{String(i + 1).padStart(2, "0")}</span>
            <span className="absolute bottom-5 left-5 right-5 font-display text-3xl leading-tight text-white">{it.ket}</span>
          </button>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-2">
        <p className="text-xs text-gray-500">Seret, geser, atau gunakan tombol panah</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => geser(-1)} aria-label="Sebelumnya" className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white transition-colors hover:bg-brand-900 hover:text-white">
            <ArrowIcon className="h-4 w-4 rotate-180" />
          </button>
          <button type="button" onClick={() => geser(1)} aria-label="Berikutnya" className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white transition-colors hover:bg-brand-900 hover:text-white">
            <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {buka !== null && (
        <div role="dialog" aria-modal="true" aria-label="Galeri foto" className="fixed inset-0 z-[90] flex animate-fade-up flex-col bg-black/92 p-4 md:p-8" onClick={() => setBuka(null)}>
          <div className="flex items-center justify-between text-white">
            <p className="font-display text-3xl">{items[buka].ket}</p>
            <button type="button" onClick={() => setBuka(null)} aria-label="Tutup" className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink">✕</button>
          </div>
          <div className="relative my-4 flex min-h-0 flex-1 items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={items[buka].src} alt={items[buka].ket} className="max-h-full max-w-full rounded-xl object-contain" />
            <button type="button" aria-label="Foto sebelumnya" onClick={() => setBuka((buka - 1 + items.length) % items.length)} className="absolute left-0 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink md:-left-2">
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>
            <button type="button" aria-label="Foto berikutnya" onClick={() => setBuka((buka + 1) % items.length)} className="absolute right-0 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink md:-right-2">
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
          <p className="text-center text-xs text-white/70">{buka + 1} / {items.length}</p>
        </div>
      )}
    </div>
  );
}
