"use client";

import { useEffect, useRef } from "react";

// Membungkus elemen agar muncul saat di-scroll.
// Tanpa JavaScript, elemen tetap terlihat (tidak ada konten yang hilang).
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    // Yang sudah terlihat (atau sudah terlewati) dibiarkan apa adanya
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add("pra");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("pra");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
