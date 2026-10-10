"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sekolah } from "@/data/sekolah";

const menuUtama = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Berita", href: "/berita" },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [buka, setBuka] = useState(false);
  const pathname = usePathname();

  // Menutup menu mobile otomatis jika pindah halaman
  useEffect(() => setBuka(false), [pathname]);
  const aktif = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full bg-white shadow-md">
      {/* Top Bar (Lapis Atas) - Warna Hijau Tua */}
      <div className="hidden bg-brand-900 px-4 py-2 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 text-xs font-semibold text-white">
          <Link href="/about" className="hover:text-gold-400">Calon Siswa</Link>
          <Link href="/berita" className="hover:text-gold-400">Siswa</Link>
          <Link href="/kontak" className="hover:text-gold-400">Orang Tua</Link>
          <Link href="/prestasi" className="hover:text-gold-400">Alumni</Link>
        </div>
      </div>

      {/* Main Navbar (Lapis Bawah) - Putih Solid */}
      <div className="px-4 py-3 md:px-8 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Logo & Nama Sekolah (Tebal, Besar, Hijau Tua) */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo SMA Islamic Centre" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div className="flex flex-col">
              <span className="font-sans text-xl font-black tracking-tight text-brand-900 sm:text-2xl">
                SMA ISLAMIC CENTRE
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Tangerang
              </span>
            </div>
          </Link>

          {/* Menu Kanan (Desktop) */}
          <nav className="hidden items-center gap-7 lg:flex">
            {menuUtama.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  aktif(m.href) ? "text-brand-900" : "text-gray-500 hover:text-brand-900"
                }`}
              >
                {m.label}
              </Link>
            ))}
            {/* Tombol Portal SPMB (Kuning) */}
            <a
              href={sekolah.spmb}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-gold-500 px-5 py-2.5 text-sm font-bold uppercase text-brand-900 transition-colors hover:bg-gold-400"
            >
              Portal SPMB
            </a>
          </nav>

          {/* Tombol Hamburger (Mobile) */}
          <button onClick={() => setBuka(!buka)} className="p-2 text-brand-900 lg:hidden" aria-label="Toggle Menu">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={buka ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Layar Kecil (Mobile) */}
      {buka && (
        <div className="absolute w-full border-t border-gray-200 bg-white shadow-xl lg:hidden">
          <nav className="flex flex-col p-6">
            {menuUtama.map((m) => (
              <Link key={m.href} href={m.href} className="border-b border-gray-100 py-4 font-bold uppercase text-brand-900">
                {m.label}
              </Link>
            ))}
            <a href={sekolah.spmb} target="_blank" rel="noopener noreferrer" className="mt-4 rounded bg-gold-500 py-3 text-center font-bold uppercase text-brand-900">
              Portal SPMB
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}