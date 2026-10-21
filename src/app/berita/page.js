"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BeritaPage() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    // Ambil data dari localStorage yang disimpan admin
    const savedBerita = localStorage.getItem("beritaSekolah");
    if (savedBerita) {
      setBerita(JSON.parse(savedBerita));
    }
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 pt-32 pb-20 md:pt-40">
      <Reveal>
        <h1 className="mb-8 font-display text-4xl font-bold md:text-6xl">Berita & Pengumuman</h1>
      </Reveal>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {berita.length === 0 ? (
          <p className="col-span-full text-gray-500">Belum ada berita yang dipublikasikan.</p>
        ) : (
          berita.map((item) => (
            <Reveal key={item.id} className="group flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:shadow-lg">
              <Link href={`/berita/${item.id}`} className="flex flex-1 flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  {item.gambar ? (
                    <img src={item.gambar} alt={item.judul} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-400">Tidak ada gambar</div>
                  )}
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    {item.kategori}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-sm text-gray-500">{item.tanggal}</span>
                  <h3 className="font-display text-xl font-bold leading-snug text-gray-900 group-hover:text-brand-900">{item.judul}</h3>
                  <div className="mt-auto pt-4 text-sm font-semibold text-brand-900">Baca selengkapnya →</div>
                </div>
              </Link>
            </Reveal>
          ))
        )}
      </div>
    </main>
  );
}