"use client";

import { useRef } from "react";

// Elemen "tertarik" ke arah kursor saat didekati.
export default function Magnetic({ children, kuat = 0.35, className = "" }) {
  const ref = useRef(null);

  const gerak = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate3d(${dx * kuat}px, ${dy * kuat}px, 0)`;
  };
  const keluar = () => {
    ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={gerak}
      onPointerLeave={keluar}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
