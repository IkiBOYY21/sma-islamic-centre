import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";
import { sekolah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="px-2 pb-2 pt-24 sm:px-3 sm:pb-3">
      <Reveal className="relative overflow-hidden rounded-[28px] bg-brand-900 p-6 text-brand-100 md:rounded-[44px] md:p-14">
        <Sparkle className="absolute right-8 top-8 h-14 w-14 text-gold-400/60" />
        <Sparkle className="absolute right-24 top-20 h-7 w-7 text-gold-400/50" delay={900} />

        <img src="/logo.png" alt="Logo SMA Islamic Centre" className="mb-6 h-16 w-16" />
        <p className="max-w-3xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
          {sekolah.slogan}
        </p>

        <div className="mt-14 grid gap-10 text-sm md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="font-semibold text-white">Alamat</h3>
            <address className="mt-3 max-w-xs not-italic leading-relaxed">
              {sekolah.alamat}
              <br />
              <a href={sekolah.teleponHref} className="mt-2 inline-block hover:underline">{sekolah.telepon}</a>
            </address>
          </div>
          <div>
            <h3 className="font-semibold text-white">Jelajahi</h3>
            <ul className="mt-3 space-y-1.5">
              <li><Link href="/about" className="hover:text-white hover:underline">About</Link></li>
              <li><Link href="/berita" className="hover:text-white hover:underline">Berita</Link></li>
              <li><Link href="/prestasi" className="hover:text-white hover:underline">Prestasi</Link></li>
              <li><Link href="/kontak" className="hover:text-white hover:underline">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Ikuti kami</h3>
            <ul className="mt-3 space-y-1.5">
              <li><a href={sekolah.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">Instagram</a></li>
              <li><a href={sekolah.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">YouTube</a></li>
              <li><a href={sekolah.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {sekolah.nama} {sekolah.kota}. All Rights Reserved.</span>
          <a href="#" className="group inline-flex items-center gap-2 hover:text-white">
            Kembali ke atas
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition-transform group-hover:-translate-y-1">↑</span>
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
