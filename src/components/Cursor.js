"use client";

import { useEffect, useRef, useState } from "react";

// Lingkaran yang mengikuti kursor. Membesar di atas tautan dan bisa menampilkan label
// lewat atribut data-cursor="Teks". Hanya aktif di perangkat dengan mouse.
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [label, setLabel] = useState("");
  const [besar, setBesar] = useState(false);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0, ty = 0, rx = 0, ry = 0, raf = 0;
    const gerak = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      setTampil(true);
      if (dot.current) dot.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };
    const masuk = (e) => {
      const el = e.target.closest?.("[data-cursor], a, button, input, [role=tab]");
      if (!el) {
        setLabel("");
        setBesar(false);
        return;
      }
      setLabel(el.closest("[data-cursor]")?.getAttribute("data-cursor") || "");
      setBesar(true);
    };
    const keluar = () => setTampil(false);
    const tick = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", gerak);
    window.addEventListener("pointerover", masuk);
    document.documentElement.addEventListener("mouseleave", keluar);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", gerak);
      window.removeEventListener("pointerover", masuk);
      document.documentElement.removeEventListener("mouseleave", keluar);
      cancelAnimationFrame(raf);
    };
  }, []);

  const bentuk = label
    ? "h-24 w-24 bg-white text-xs font-semibold text-ink"
    : besar
    ? "h-14 w-14 bg-white"
    : "h-9 w-9 border border-white";

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden transition-opacity duration-300 [@media(pointer:fine)]:block ${tampil ? "opacity-100" : "opacity-0"} ${label ? "" : "mix-blend-difference"}`}
      >
        <div className={`absolute left-0 top-0 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition-all duration-300 ${bentuk}`}>
          {label}
        </div>
      </div>
      <div
        ref={dot}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden [@media(pointer:fine)]:block ${tampil && !label ? "opacity-100" : "opacity-0"}`}
      >
        <div className="-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference" />
      </div>
    </>
  );
}
