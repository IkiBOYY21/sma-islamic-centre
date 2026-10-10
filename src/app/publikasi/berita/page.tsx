import type { Metadata } from "next";
import PageHeader from "@/components/PageHeading";
import { beritaData, formatTanggal } from "@/lib/data/berita";

export const metadata: Metadata = { title: "Berita" };

export default function BeritaPage() {
  return (
    <>
      <PageHeader section="Publikasi" title="Berita" description="Kabar terbaru dari SMA Islamic Centre." />
      <ul className="mx-auto max-w-3xl space-y-4 px-4 py-12">
        {beritaData.map((b) => (
          <li key={b.slug} className="rounded-lg border border-brand-100 bg-white p-6">
            <p className="text-xs text-ink/60">{b.kategori} · {formatTanggal(b.tanggal)}</p>
            <h2 className="mt-2 text-lg font-semibold">{b.judul}</h2>
            <p className="mt-2 text-ink/70">{b.ringkasan}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
