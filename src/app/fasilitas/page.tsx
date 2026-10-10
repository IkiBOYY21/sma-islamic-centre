import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Fasilitas" };

// TODO: ganti dengan fasilitas asli + foto (taruh foto di /public/fasilitas/)
const fasilitas = [
  { nama: "Ruang kelas", desc: "Ruang belajar yang nyaman dan terawat." },
  { nama: "Laboratorium", desc: "Sarana praktik sains dan komputer." },
  { nama: "Perpustakaan", desc: "Koleksi buku dan ruang baca." },
  { nama: "Masjid / musala", desc: "Tempat ibadah dan kegiatan keagamaan." },
  { nama: "Lapangan olahraga", desc: "Sarana kegiatan olahraga siswa." },
  { nama: "Kantin", desc: "Makanan dan minuman untuk siswa dan guru." },
];

export default function FasilitasPage() {
  return (
    <>
      <PageHeader
        title="Fasilitas"
        description="Sarana yang mendukung kegiatan belajar dan pengembangan diri siswa."
      />
      <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {fasilitas.map((f) => (
          <li key={f.nama} className="rounded-lg border border-brand-100 bg-white p-6">
            <div className="mb-4 aspect-video rounded bg-brand-50" aria-hidden />
            <h2 className="font-semibold">{f.nama}</h2>
            <p className="mt-1 text-sm text-ink/70">{f.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
