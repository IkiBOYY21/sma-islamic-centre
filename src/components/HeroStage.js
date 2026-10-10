"use client";

import { useRef } from "react";

// Pembungkus hero: menyimpan posisi kursor (--mx, --my) agar tiap lapisan bergeser berbeda.
export default function HeroStage({ children, className = "" }) {
  const ref = useRef(null);

  const gerak = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    ref.current.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const keluar = () => {
    ref.current.style.setProperty("--mx", "0");
    ref.current.style.setProperty("--my", "0");
  };

  return (
    <div ref={ref} onPointerMove={gerak} onPointerLeave={keluar} className={className}>
      {children}
    </div>
  );
}
