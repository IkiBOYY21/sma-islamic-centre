"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import BeritaCard from "@/components/BeritaCard";
import ProgramCards from "@/components/ProgramCards";
import Galeri from "@/components/Galeri";
import Reveal from "@/components/Reveal";
import Kata from "@/components/Kata";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import Sparkle from "@/components/Sparkle";
import Lingkaran from "@/components/Lingkaran";
import Icon from "@/components/Icon";
import { beritaList } from "@/data/berita";
import { galeri } from "@/data/galeri";
import { sekolah } from "@/data/sekolah";


// Daftar Kampus 
const kampus = [
  "Universitas Indonesia (UI)", "Universitas Gadjah Mada (UGM)", "Institut Teknologi Bandung (ITB)", 
  "IPB University", "Universitas Airlangga (UNAIR)", "Universitas Brawijaya (UB)", 
  "Universitas Diponegoro (UNDIP)", "Universitas Padjadjaran (UNPAD)", "Universitas Hasanuddin (UNHAS)", 
  "UNTIRTA", "UIN Jakarta"
];

const bidang = [
  { label: "Akademik", ikon: "akademik", href: "/about" },
  { label: "Prestasi", ikon: "prestasi", href: "/prestasi" },
  { label: "Kegiatan", ikon: "kegiatan", href: "/berita" },
  { label: "Fasilitas", ikon: "fasilitas", href: "/about#fasilitas" },
];

export default function HomePage() {
  const [utama, ...lainnya] = beritaList;
  const [slideAktif, setSlideAktif] = useState(0);
  
  // FOTO JPG BARU (Terkoneksi langsung ke gambar resolusi tinggi)
  const fotoTentang = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop", // Kampus/Sekolah
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", // Ruang Kelas
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"  // Perpustakaan
  ];

  // Auto-Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAktif((prev) => (prev + 1) % fotoTentang.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [fotoTentang.length]);

  return (
    <>
      <Hero />

      {/* MARQUEE KAMPUS */}
      <section className="py-14 border-y border-gray-200">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-aksen">Alumni kami diterima di</p>
        <Marquee items={kampus} />
      </section>

      {/* TENTANG SEKOLAH & SLIDER FOTO */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 md:grid-cols-2 md:py-24">
        
        {/* SLIDER FOTO (Bebas halangan, pasti bisa di klik) */}
        <div className="relative mx-auto w-full max-w-md pb-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-[6px] border-white shadow-xl shadow-black/10 bg-gray-200 group">
            
            {/* Render Gambar */}
            {fotoTentang.map((gbr, idx) => (
              <img 
                key={idx} 
                src={gbr} 
                alt={`Fasilitas ${idx + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${slideAktif === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
              />
            ))}
            
            {/* Tombol Geser Kiri */}
            <button 
              onClick={() => setSlideAktif(prev => (prev === 0 ? fotoTentang.length - 1 : prev - 1))}
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-900 shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95"
              aria-label="Geser Kiri"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            {/* Tombol Geser Kanan */}
            <button 
              onClick={() => setSlideAktif(prev => (prev + 1) % fotoTentang.length)}
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-brand-900 shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95"
              aria-label="Geser Kanan"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>

            {/* Indikator Titik */}
            <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm">
              {fotoTentang.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSlideAktif(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${slideAktif === idx ? 'bg-white w-6' : 'bg-white/50 w-2.5 hover:bg-white'}`}
                />
              ))}
            </div>

          </div>
          <Sparkle className="absolute -right-2 top-1/3 z-40 h-12 w-12 text-aksen" />
        </div>

        {/* Teks Penjelasan */}
        <Reveal delay={150}>
          <p className="text-xs font-semibold text-aksen">Tentang sekolah</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.98] md:text-6xl">
            <Kata teks="Ruang tumbuh bagi siswa yang haus ilmu, senang berkarya, dan berakhlak mulia" />
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-gray-600">
            Di {sekolah.nama} siswa belajar, beribadah, dan berkegiatan bersama. Sekolah
            menanamkan karakter yang kuat dan akhlakul karimah dalam setiap langkah.
          </p>
          <ul className="mt-8 grid max-w-md grid-cols-4 gap-2">
            {bidang.map((b) => (
              <li key={b.label}>
                <Link href={b.href} className="group flex flex-col items-center gap-2 text-xs">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white transition-all duration-300 group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:bg-aksen group-hover:text-white group-hover:shadow-lg group-hover:shadow-aksen/30">
                    <Icon name={b.ikon} />
                  </span>
                  {b.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Program */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <p className="text-xs font-semibold text-aksen">Program</p>
          <h2 className="mt-2 flex items-start gap-1 font-display text-5xl leading-none md:text-7xl">
            <span><Kata teks="Kegiatan yang Mungkin Kamu Suka" /></span>
            <Sparkle className="hidden h-10 w-10 shrink-0 text-ink md:block" />
          </h2>
        </Reveal>
        <div className="mt-8">
          <ProgramCards />
        </div>
      </section>

      {/* Galeri */}
      <section className="py-16">
        <Reveal className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold text-aksen">Galeri</p>
          <h2 className="mt-2 max-w-2xl font-display text-5xl leading-[0.98] md:text-7xl">
            <Kata teks="Sekilas kehidupan di sekolah" />
          </h2>
        </Reveal>
        <div className="mt-10">
          <Galeri items={galeri} />
        </div>
      </section>

      {/* Berita */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="text-center">
          <p className="text-xs font-semibold text-aksen">Berita</p>
          <h2 className="mt-2 font-display text-5xl leading-[1.05] md:text-7xl">
            Kabar sekolah yang
            <br />
            <Lingkaran>tak boleh terlewat</Lingkaran>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <BeritaCard berita={utama} variant="utama" />
          </Reveal>
          <div className="flex flex-col gap-4">
            {lainnya.slice(0, 3).map((b, i) => (
              <Reveal key={b.id} delay={120 * (i + 1)}>
                <BeritaCard berita={b} variant="baris" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 text-center">
          <Magnetic><Button href="/berita" variant="dark">Lihat semua berita</Button></Magnetic>
        </Reveal>
      </section>

      {/* Ajakan */}
      <section className="px-2 sm:px-3">
        <Reveal className="relative isolate overflow-hidden rounded-[28px] bg-brand-900 px-6 py-20 text-center text-white md:rounded-[44px] md:py-28">
          <img src="/masjid.jpg" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-900/80 via-brand-900/70 to-brand-900" />
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" fill="none" className="absolute inset-0 -z-10 h-full w-full opacity-30" aria-hidden="true">
            <path className="draw" pathLength="1" d="M-20 220C120 160 220 260 360 230S560 90 640 150C720 210 640 280 570 220C500 160 620 40 780 90S940 160 1020 110" stroke="#fff" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <Sparkle className="absolute left-[12%] top-[18%] h-10 w-10 text-gold-400" />
          <Sparkle className="absolute bottom-[20%] right-[14%] h-14 w-14 text-gold-400" delay={800} />
          <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.98] md:text-7xl">
            <Kata teks={`Siap melangkah bersama ${sekolah.nama}?`} />
          </h2>
          <p className="mx-auto mt-5 max-w-md text-brand-100">
            Cari tahu jadwal dan alur pendaftaran, atau hubungi kami langsung lewat WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Magnetic><Button href={sekolah.spmb} external variant="light">Daftar SPMB</Button></Magnetic>
            <Magnetic><Button href={sekolah.whatsapp} external variant="outline">Chat WhatsApp</Button></Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}