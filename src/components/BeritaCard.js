import Link from "next/link";
import Button, { ArrowIcon } from "@/components/Button";
import { formatTanggal } from "@/data/berita";

// variant: "kartu" (daftar berita), "utama" (besar, di Home), "baris" (horizontal, di Home)
export default function BeritaCard({ berita, variant = "kartu" }) {
  const href = `/berita/${berita.id}`;

  if (variant === "utama") {
    return (
      <Link href={href} className="group relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden rounded-3xl p-6 text-white md:h-full md:p-8">
        <img src={berita.gambar} alt={berita.judul} className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <span
          className="absolute left-6 top-0 grid h-14 w-10 place-items-center bg-aksen text-white [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" className="mb-2 h-4 w-4" fill="currentColor"><path d="M8 1l2.2 4.6 5 .7-3.6 3.5.9 5L8 12.4 3.5 14.8l.9-5L.8 6.3l5-.7z" /></svg>
        </span>
        <span className="mb-3 self-start rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">{formatTanggal(berita.tanggal)}</span>
        <h3 className="max-w-md font-display text-4xl leading-[1.02] md:text-5xl">{berita.judul}</h3>
        <p className="mt-3 max-w-md text-sm text-white/85">{berita.ringkasan}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          Baca Selengkapnya
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
        </span>
      </Link>
    );
  }

  if (variant === "baris") {
    return (
      <Link href={href} className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5">
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
          <img src={berita.gambar} alt={berita.judul} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-gray-500">{formatTanggal(berita.tanggal)}</p>
          <h3 className="mt-1 font-display text-2xl leading-tight">{berita.judul}</h3>
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-aksen">
            Baca Selengkapnya
            <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-black/10 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
      <div className="relative overflow-hidden rounded-xl">
        <img src={berita.gambar} alt={berita.judul} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs backdrop-blur">{formatTanggal(berita.tanggal)}</span>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 className="font-display text-3xl leading-[1.05]">{berita.judul}</h3>
        <p className="mb-5 mt-3 flex-1 text-sm text-gray-600">{berita.ringkasan}</p>
        <Button href={href} variant="aksen" penuh>Baca Selengkapnya</Button>
      </div>
    </article>
  );
}
