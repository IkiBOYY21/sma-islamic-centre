"use client";

import { useRef } from "react";

// Kartu miring 3D mengikuti kursor, dengan kilau cahaya.
export default function Tilt({ children, className = "", maks = 8 }) {
  const ref = useRef(null);

  const gerak = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${((0.5 - y) * maks).toFixed(2)}deg) rotateY(${((x - 0.5) * maks).toFixed(2)}deg) scale3d(1.02,1.02,1.02)`;
    el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--ga", "1");
  };
  const keluar = () => {
    ref.current.style.transform = "";
    ref.current.style.setProperty("--ga", "0");
  };

  return (
    <div
      ref={ref}
      onPointerMove={gerak}
      onPointerLeave={keluar}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--ga, 0)",
          background: "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,.3), transparent 55%)",
        }}
      />
    </div>
  );
}
