import Link from "next/link";
import Button from "@/components/Button";
import HeroStage from "@/components/HeroStage";
import Parallax from "@/components/Parallax";
import Magnetic from "@/components/Magnetic";
import RotatingBadge from "@/components/RotatingBadge";
import Kata from "@/components/Kata";
import { sekolah } from "@/data/sekolah";

const mouse = (x, y) => ({
  transform: `translate3d(calc(var(--mx, 0) * ${x}px), calc(var(--my, 0) * ${y}px), 0)`,
  transition: "transform .6s cubic-bezier(.2,.7,.2,1)",
});

export default function Hero() {
  return (
    // Ruang kosong (gap) telah diperbaiki di sini
    <section className="px-2 pt-24 sm:px-4 sm:pt-28">
      <HeroStage className="relative isolate min-h-[650px] overflow-hidden rounded-[24px] md:min-h-[750px] lg:min-h-[800px]">
        
        {/* Gambar Latar Belakang */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/hero-gedung.png"
            alt="SMA Islamic Centre"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Lapisan Gelap (Overlay) agar teks mudah dibaca */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/90 via-brand-900/50 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-black/20" />

        <div className="pointer-events-none absolute inset-0 z-[0] opacity-60" style={mouse(-10, -5)}>
          <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
            <path className="animate-draw" pathLength="1" strokeDasharray="1" strokeDashoffset="1" d="M-40 470C140 430 260 520 420 560S640 590 760 540C880 490 960 420 940 340C920 260 820 250 810 320C800 400 900 450 1010 420C1130 385 1250 330 1480 270" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            <circle cx="420" cy="560" r="16" fill="#E5484D" className="animate-pop" style={{ animationDelay: "1.6s" }} />
          </svg>
        </div>

        {/* Teks Utama */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 pt-10 md:px-16 lg:px-24" style={mouse(6, 3)}>
          <p className="flex animate-fade-up items-center gap-2 text-sm font-semibold text-gold-400 drop-shadow-md">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor"><path d="M8 0a5 5 0 0 0-5 5c0 3.5 5 11 5 11s5-7.5 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
            Karawaci, Kota Tangerang
          </p>
          
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05] drop-shadow-xl">
            <span className="block"><Kata muat teks="Ilmu Amaliah," tunda={100} /></span>
            <span className="block"><Kata muat teks="Amal Ilmiah" tunda={400} /></span>
          </h1>
          
          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-gray-200 drop-shadow-md md:text-lg" style={{ animationDelay: "0.8s" }}>
            Sekolah yang membangun generasi cerdas dalam ilmu dan terampil dalam berkarya, dengan akhlakul karimah.
          </p>
          
          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-5" style={{ animationDelay: "1s" }}>
            <Magnetic>
              <Button href="/about" variant="light">Kenali sekolah kami</Button>
            </Magnetic>
            <Link href="/berita" className="text-sm font-semibold text-white underline-offset-4 hover:text-gold-400 hover:underline">
              Baca kabar terbaru
            </Link>
          </div>
        </div>

        <RotatingBadge href={sekolah.spmb} className="absolute bottom-6 right-5 z-10 md:bottom-10 md:right-10" />
      </HeroStage>
    </section>
  );
}