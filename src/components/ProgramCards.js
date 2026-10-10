"use client";

import { useState } from "react";
import Button from "@/components/Button";

const filter = ["Semua", "Akademik", "Ekstrakurikuler", "Keagamaan", "Fasilitas"];

// TODO: sesuaikan teks dengan program asli sekolah.
const data = [
  { id: 1, judul: "Persiapan SNBP & SNBT", kategori: "Akademik", lokasi: "Kelas XII", foto: "/berita5.jpg", href: "/prestasi",
    deskripsi: "Pendampingan siswa menghadapi seleksi masuk perguruan tinggi negeri, dari strategi belajar sampai latihan soal." },
  { id: 2, judul: "Belajar di Kelas", kategori: "Akademik", lokasi: "Kelas X - XII", foto: "/about2.jpg", href: "/about",
    deskripsi: "Pembelajaran yang menyeimbangkan ilmu pengetahuan dan nilai-nilai Islam sepanjang tahun ajaran." },
  { id: 3, judul: "Olahraga & Futsal", kategori: "Ekstrakurikuler", lokasi: "Lapangan sekolah", foto: "/berita4.jpg", href: "/berita/pekan-olahraga-dan-seni",
    deskripsi: "Latihan dan pertandingan antar kelas yang melatih sportivitas dan kerja sama tim." },
  { id: 4, judul: "Kegiatan Bersama", kategori: "Ekstrakurikuler", lokasi: "Seluruh siswa", foto: "/about1.jpg", href: "/about",
    deskripsi: "Pramuka, PMR, dan kegiatan lain yang menumbuhkan kepemimpinan serta kepedulian sosial." },
  { id: 5, judul: "Peringatan Maulid Nabi", kategori: "Keagamaan", lokasi: "Lingkungan sekolah", foto: "/berita3.jpg", href: "/berita/peringatan-maulid-nabi",
    deskripsi: "Shalawat, ceramah, dan penampilan kelas untuk meneladani akhlak Rasulullah." },
  { id: 6, judul: "Pesantren Kilat", kategori: "Keagamaan", lokasi: "Seluruh tingkat", foto: "/berita6.jpg", href: "/berita/pesantren-kilat",
    deskripsi: "Tahsin Al-Qur'an, kajian akhlak, dan praktik ibadah bersama." },
  { id: 7, judul: "Gedung Sekolah", kategori: "Fasilitas", lokasi: "Karawaci", foto: "/sekolah.jpg", href: "/about#fasilitas",
    deskripsi: "Ruang kelas, laboratorium, dan perpustakaan yang mendukung kegiatan belajar." },
  { id: 8, judul: "Lapangan Olahraga", kategori: "Fasilitas", lokasi: "Area terbuka", foto: "/about3.jpg", href: "/about#fasilitas",
    deskripsi: "Area untuk olahraga, upacara, dan kegiatan di luar kelas." },
];

const ambil = (k) => (k === "Semua" ? data : data.filter((d) => d.kategori === k));

export default function ProgramCards() {
  const [pilihan, setPilihan] = useState("Semua");
  const [aktif, setAktif] = useState(data[0].id);
  const daftar = ambil(pilihan);

  const ganti = (k) => {
    setPilihan(k);
    setAktif(ambil(k)[0].id);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter program">
        {filter.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={f === pilihan}
            onClick={() => ganti(f)}
            className={`rounded-md border px-4 py-2 text-xs transition-all duration-300 ${
              f === pilihan
                ? "border-aksen bg-aksen text-white shadow-md shadow-aksen/30"
                : "border-black/10 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-aksen hover:text-aksen"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* key=pilihan membuat kartu muncul ulang dengan animasi saat filter berganti */}
      <ul key={pilihan} className="mt-8 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {daftar.map((d, i) => {
          const buka = aktif === d.id;
          return (
            <li key={d.id} className="animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
              <article
                tabIndex={0}
                onMouseEnter={() => setAktif(d.id)}
                onFocus={() => setAktif(d.id)}
                onClick={() => setAktif(d.id)}
                className={`overflow-hidden rounded-xl border bg-white p-2 outline-none transition-all duration-500 ${
                  buka ? "-translate-y-2 border-black/5 shadow-2xl shadow-black/10" : "border-black/10"
                }`}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img src={d.foto} alt={d.judul} loading="lazy" decoding="async" className={`h-full w-full object-cover transition-transform duration-[1200ms] ${buka ? "scale-110" : "scale-100"}`} />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <h3 className="font-display text-2xl leading-tight">{d.judul}</h3>
                  <p className="mt-1 text-xs text-gray-500">{d.kategori} · {d.lokasi}</p>

                  <div className={`grid transition-[grid-template-rows,opacity] duration-500 ${buka ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pt-3 text-xs leading-relaxed text-gray-600">{d.deskripsi}</p>
                      <div className="pb-1 pt-4">
                        <Button href={d.href} variant="aksen" penuh size="sm">Lihat selengkapnya</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
