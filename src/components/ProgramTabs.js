"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/Button";

// TODO: sesuaikan teks dengan program asli sekolah.
const tab = [
  {
    label: "Akademik",
    judul: "Belajar yang mengantar ke perguruan tinggi",
    deskripsi: "Pembelajaran dari kelas X sampai XII, termasuk persiapan SNBP, SNBT, dan seleksi mandiri.",
    foto: [
      { src: "/about2.svg", ket: "Belajar di kelas" },
      { src: "/berita5.svg", ket: "Persiapan UTBK" },
      { src: "/berita2.svg", ket: "Diterima di PTN" },
    ],
  },
  {
    label: "Ekstrakurikuler",
    judul: "Tempat menyalurkan minat dan bakat",
    deskripsi: "Olahraga, kepramukaan, dan kegiatan lain yang melatih kerja sama dan kepemimpinan.",
    foto: [
      { src: "/berita4.svg", ket: "Olahraga" },
      { src: "/about1.svg", ket: "Kegiatan bersama" },
      { src: "/about3.svg", ket: "Lapangan sekolah" },
    ],
  },
  {
    label: "Keagamaan",
    judul: "Karakter kuat dan akhlakul karimah",
    deskripsi: "Ibadah, kajian, dan peringatan hari besar Islam menjadi bagian dari keseharian siswa.",
    foto: [
      { src: "/berita3.svg", ket: "Peringatan Maulid" },
      { src: "/berita6.svg", ket: "Pesantren kilat" },
      { src: "/about1.svg", ket: "Kebersamaan siswa" },
    ],
  },
  {
    label: "Fasilitas",
    judul: "Sarana yang mendukung belajar",
    deskripsi: "Ruang kelas, laboratorium, perpustakaan, tempat ibadah, dan lapangan olahraga.",
    foto: [
      { src: "/sekolah.svg", ket: "Gedung sekolah" },
      { src: "/about2.svg", ket: "Ruang kelas" },
      { src: "/about3.svg", ket: "Lapangan" },
    ],
  },
];

export default function ProgramTabs() {
  const [i, setI] = useState(0);
  const aktif = tab[i];
  const pindah = (arah) => setI((i + arah + tab.length) % tab.length);

  return (
    <div className="grid gap-4 rounded-[28px] bg-white p-3 md:grid-cols-[1fr_1.5fr] md:p-4">
      <div className="flex flex-col justify-between gap-8 p-3 md:p-4">
        <div className="flex flex-wrap gap-2" role="tablist">
          {tab.map((t, n) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={n === i}
              onClick={() => setI(n)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium ${
                n === i ? "border-brand-900 bg-brand-900 text-white" : "border-gray-300 text-gray-500 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-semibold leading-tight">{aktif.judul}</h3>
          <p className="mt-4 max-w-sm text-sm text-gray-600">{aktif.deskripsi}</p>
          <div className="mt-6 flex gap-2">
            <button type="button" onClick={() => pindah(-1)} aria-label="Sebelumnya" className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 hover:bg-surface">
              <ArrowIcon className="h-4 w-4 -rotate-90" />
            </button>
            <button type="button" onClick={() => pindah(1)} aria-label="Berikutnya" className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 hover:bg-surface">
              <ArrowIcon className="h-4 w-4 rotate-90" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid h-[420px] grid-cols-2 grid-rows-2 gap-3 md:h-[460px]">
        {aktif.foto.map((f, n) => (
          <figure key={f.src + n} className={`relative overflow-hidden rounded-[20px] ${n === 0 ? "row-span-2" : ""}`}>
            <img src={f.src} alt={f.ket} className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur">
              {f.ket}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
