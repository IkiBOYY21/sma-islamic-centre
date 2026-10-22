"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt"; // Memakai komponen Tilt.js buatanmu

export default function PrestasiPage() {
  const [prestasi, setPrestasi] = useState([
    { id: "1", judul: "Belum Ada Prestasi", tahun: "-", tingkat: "-", gambar: "" }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("prestasiSekolah");
    if (saved) {
        const parsed = JSON.parse(saved);
        if(parsed.length > 0) setPrestasi(parsed);
    }
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 pt-32 pb-20 md:pt-40">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-900 uppercase">Kebanggaan Sekolah</p>
          <h1 className="font-display text-4xl font-bold md:text-6xl text-gray-900">Prestasi Siswa</h1>
        </div>
      </Reveal>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {prestasi.map((item) => (
          <Tilt key={item.id}>
            <Reveal className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-md transition-shadow hover:shadow-2xl cursor-pointer">
              <div className="aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                {item.gambar ? (
                  <img src={item.gambar} alt={item.judul} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-gray-400 bg-gray-50">Tanpa Dokumentasi</div>
                )}
              </div>
              <div className="flex flex-col p-6 flex-1 bg-white">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-brand-900/10 px-3 py-1 text-xs font-bold text-brand-900">
                    Tingkat {item.tingkat}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{item.tahun}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-snug text-gray-900 group-hover:text-brand-900 transition-colors">
                  {item.judul}
                </h3>
              </div>
            </Reveal>
          </Tilt>
        ))}
      </div>
    </main>
  );
} 