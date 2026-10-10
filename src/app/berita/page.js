import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { beritaList, formatTanggal } from "@/data/berita";

export function generateStaticParams() {
  return beritaList
    .filter(
      (berita) =>
        berita.id !== null &&
        berita.id !== undefined
    )
    .map((berita) => ({
      id: `${berita.id}`,
    }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const berita = beritaList.find(
    (item) => String(item.id) === String(id)
  );

  return {
    title: berita
      ? berita.judul
      : "Berita tidak ditemukan",
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;

  const berita = beritaList.find(
    (item) => String(item.id) === String(id)
  );

  if (!berita) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 pb-4 pt-32 md:pt-40">
      <Link
        href="/berita"
        className="text-sm text-gray-500 hover:text-ink"
      >
        ← Kembali ke Berita
      </Link>

      <p className="mt-6 inline-block animate-fade-up rounded-full border border-black/10 bg-white px-3 py-1 text-xs">
        {formatTanggal(berita.tanggal)}
      </p>

      <h1
        className="mt-4 animate-fade-up font-display text-5xl leading-[0.98] md:text-7xl"
        style={{ animationDelay: "120ms" }}
      >
        {berita.judul}
      </h1>

      <Reveal>
        <img
          src={berita.gambar}
          alt={berita.judul}
          className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover"
        />
      </Reveal>

      <Reveal className="mt-4 space-y-5 rounded-3xl border border-black/10 bg-white p-6 text-lg leading-relaxed text-gray-800 md:p-10">
        {(berita.konten ?? []).map((paragraf, index) => (
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