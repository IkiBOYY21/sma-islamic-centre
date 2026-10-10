"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import BeritaCard from "@/components/BeritaCard";
import Tilt from "@/components/Tilt";
import { ArrowIcon } from "@/components/Button";
import { formatTanggal } from "@/data/berita";

// Daftar berita interaktif: filter kategori, pencarian, dan dua tampilan (kartu / daftar).
// Di tampilan daftar, gambar berita mengikuti kursor saat judulnya di-hover.
export default function BeritaExplorer({ data }) {
  const kategori = ["Semua", ...new Set(data.map((d) => d.kategori))];
  const [pilih, setPilih] = useState("Semua");
  const [q, setQ] = useState("");
  const [tampilan, setTampilan] = useState("kartu");
  const [hover, setHover] = useState(null);
  const pratinjau = useRef(null);

  const hasil = useMemo(() => {
    const kata = q.trim().toLowerCase();
    return data.filter(
      (d) =>
        (pilih === "Semua" || d.kategori === pilih) &&
        (!kata || `${d.judul} ${d.ringkasan}`.toLowerCase().includes(kata))
    );
  }, [data, pilih, q]);

  useEffect(() => {
    if (tampilan !== "daftar") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    const gerak = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      if (pratinjau.current) pratinjau.current.style.transform = `translate3d(${x + 36}px, ${y - 140}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", gerak);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", gerak);
      cancelAnimationFrame(raf);
    };
  }, [tampilan]);

  return (
    <div className="mx-auto max-w-6xl px-3 pb-4 sm:px-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori">
          {kategori.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === pilih}
              onClick={() => setPilih(k)}
              className={`rounded-md border px-4 py-2 text-xs transition-all duration-300 ${
                k === pilih ? "border-aksen bg-aksen text-white shadow-md shadow-aksen/30" : "border-black/10 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-aksen hover:text-aksen"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <label className="relative">
            <span className="sr-only">Cari berita</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari berita..."
              className="w-44 rounded-full border border-black/10 bg-white px-4 py-2 text-sm outline-none transition-all focus:w-60 focus:border-aksen"
            />
          </label>
          <div className="flex rounded-full border border-black/10 bg-white p-1 text-xs font-semibold">
            {["kartu", "daftar"].map((t) => (
              <button key={t} type="button" onClick={() => setTampilan(t)} aria-pressed={tampilan === t} className={`rounded-full px-4 py-1.5 capitalize transition-colors ${tampilan === t ? "bg-brand-900 text-white" : "text-gray-500"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500" aria-live="polite">Menampilkan {hasil.length} dari {data.length} berita</p>

      {hasil.length === 0 && (
        <p className="mt-8 rounded-3xl border border-dashed border-black/20 p-10 text-center text-gray-600">
          Tidak ada berita yang cocok. Coba kata kunci lain atau pilih &quot;Semua&quot;.
        </p>
      )}

      {tampilan === "kartu" ? (
        <ul key={pilih + q} className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((b, i) => (
            <li key={b.id} className="animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
              <Tilt className="h-full rounded-2xl" maks={5}>
                <BeritaCard berita={b} />
              </Tilt>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul key={pilih + q} className="mt-4 divide-y divide-black/10 border-y border-black/10" onMouseLeave={() => setHover(null)}>
            {hasil.map((b, i) => (
              <li key={b.id} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <Link
                  href={`/berita/${b.id}`}
                  onMouseEnter={() => setHover(b.id)}
                  onFocus={() => setHover(b.id)}
                  onBlur={() => setHover(null)}
                  className={`group grid items-center gap-3 py-7 transition-opacity duration-300 md:grid-cols-[56px_1fr_auto_auto] md:gap-6 ${hover && hover !== b.id ? "opacity-30" : ""}`}
                >
                  <img src={b.gambar} alt="" loading="lazy" className="aspect-[16/9] w-full rounded-xl object-cover md:hidden" />
                  <span className="hidden text-xs text-gray-500 md:block">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-4xl leading-[1.02] transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">{b.judul}</span>
                  <span className="text-xs text-gray-500">{b.kategori} · {formatTanggal(b.tanggal)}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-aksen">
                    Baca Selengkapnya
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Gambar yang mengikuti kursor */}
          <div
            ref={pratinjau}
            aria-hidden="true"
            className={`pointer-events-none fixed left-0 top-0 z-30 hidden h-60 w-80 overflow-hidden rounded-2xl shadow-2xl shadow-black/30 transition-opacity duration-300 [@media(pointer:fine)]:block ${hover ? "opacity-100" : "opacity-0"}`}
          >
            {hasil.map((b) => (
              <img key={b.id} src={b.gambar} alt="" className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${hover === b.id ? "scale-100 opacity-100" : "scale-110 opacity-0"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
