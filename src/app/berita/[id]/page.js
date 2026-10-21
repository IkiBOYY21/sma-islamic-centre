"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";
// Pastikan path formatTanggal sesuai dengan file Anda
import { formatTanggal } from "@/data/berita"; 

export default function DetailBeritaPage() {
  const params = useParams();
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Coba ambil data dari localStorage (yang dibuat di Admin)
    const savedBerita = localStorage.getItem("beritaSekolah");
    
    if (savedBerita) {
      const parsedBerita = JSON.parse(savedBerita);
      const foundBerita = parsedBerita.find((item) => String(item.id) === String(params.id));
      setBerita(foundBerita);
    }
    
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <div className="pt-40 text-center">Memuat berita...</div>;
  }

  if (!berita) {
    return (
      <div className="flex flex-col items-center justify-center pt-40 pb-20">
        <h1 className="text-2xl font-bold">Berita tidak ditemukan</h1>
        <Link href="/berita" className="mt-4 text-brand-900 hover:underline">← Kembali ke daftar berita</Link>
      </div>
    );
  }

  // Menangani format paragraf apakah dari string atau array (sesuai kode asli Anda)
  const paragrafBerita = Array.isArray(berita.konten)
    ? berita.konten
    : Array.isArray(berita.isi)
      ? berita.isi
      : typeof berita.konten === "string" 
        ? [berita.konten] 
        : ["Konten berita belum tersedia."];

  return (
    <article className="mx-auto max-w-3xl px-4 pb-4 pt-32 md:pt-40">
      <Link href="/berita" className="text-sm text-gray-500 hover:text-ink">
        ← Kembali ke Berita
      </Link>

      <p className="mt-6 inline-block animate-fade-up rounded-full border border-black/10 bg-white px-3 py-1 text-xs">
        {berita.tanggal ? formatTanggal(berita.tanggal) : "Tanggal tidak diketahui"}
      </p>

      <h1
        className="mt-4 animate-fade-up font-display text-5xl leading-[0.98] md:text-7xl"
        style={{ animationDelay: "120ms" }}
      >
        {berita.judul}
      </h1>

      {berita.gambar && (
        <Reveal>
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover"
          />
        </Reveal>
      )}

      <Reveal className="mt-4 space-y-5 rounded-3xl border border-black/10 bg-white p-6 text-lg leading-relaxed text-gray-800 md:p-10">
        {paragrafBerita.map((paragraf, index) => (
          <p key={index}>{paragraf}</p>
        ))}
      </Reveal>

      <Link
        href="/berita"
        className="mt-8 inline-block rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-700"
      >
        Kembali ke Berita
      </Link>
    </article>
  );
}