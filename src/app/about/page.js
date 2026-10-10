import PageHeading from "@/components/PageHeading";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: "About" };

// TODO: ganti sejarah, visi, dan misi dengan data resmi sekolah.
const misi = [
  "Menyelenggarakan pembelajaran yang bermutu dan berlandaskan nilai-nilai Islam.",
  "Menanamkan karakter kuat dan akhlakul karimah dalam keseharian siswa.",
  "Membekali siswa dengan keterampilan untuk melanjutkan studi dan berkarya.",
  "Mengembangkan minat dan bakat siswa melalui kegiatan ekstrakurikuler.",
];
// TODO: sesuaikan daftar fasilitas dan foto dengan kondisi asli sekolah.
const fasilitas = [
  { nama: "Ruang kelas", foto: "/about2.jpg" },
  { nama: "Laboratorium", foto: "/lab.jpg" },
  { nama: "Perpustakaan", foto: "/perpus.jpg" },
  { nama: "Masjid / musala", foto: "/masjid.jpg" },
  { nama: "Lapangan olahraga", foto: "/about3.jpg" },
  { nama: "Halaman upacara", foto: "/upacara.jpg" },
];
const ekskul = ["Pramuka", "PMR", "Paskibra", "Futsal", "Basket", "Rohis"];

const panel = "rounded-3xl border border-black/10 bg-white p-6 md:p-9";

export default function AboutPage() {
  return (
    <>
      <PageHeading label="Tentang kami" judul="Tentang sekolah" deskripsi={`${sekolah.nama} ${sekolah.kota} - ${sekolah.slogan}`} />

      <div className="mx-auto max-w-6xl space-y-4 px-3 pb-4 sm:px-4">
        <Reveal>
          <div className="wipe overflow-hidden rounded-3xl">
            <img src="/sekolah.jpg" alt="Gedung SMA Islamic Centre" decoding="async" className="aspect-[16/8] w-full object-cover" />
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className={panel}>
            <h2 className="font-display text-4xl">Profil sekolah</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              {sekolah.nama} adalah sekolah menengah atas di Kota {sekolah.kota}, Banten.
              Sekolah ini membangun generasi yang cerdas dalam ilmu dan terampil dalam
              berkarya, serta mempersiapkan generasi Indonesia hebat untuk masa depan.
            </p>
          </Reveal>
          <Reveal className={panel} delay={120}>
            <h2 className="font-display text-4xl">Sejarah singkat</h2>
            {/* TODO: isi dengan sejarah asli sekolah */}
            <p className="mt-4 leading-relaxed text-gray-700">
              Tuliskan sejarah singkat sekolah di sini: tahun berdiri, pendiri, dan
              perkembangan sekolah hingga saat ini.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-brand-900 p-6 text-white md:p-9">
            <h2 className="font-display text-4xl">Visi</h2>
            <p className="mt-4 leading-relaxed text-brand-100">
              Menjadi sekolah yang mencetak generasi cerdas dalam ilmu, terampil dalam
              berkarya, dan berakhlakul karimah.
            </p>
          </Reveal>
          <Reveal className={panel} delay={120}>
            <h2 className="font-display text-4xl">Misi</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-700">
              {misi.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ol>
          </Reveal>
        </div>

        <section id="fasilitas" className="scroll-mt-28">
          <Reveal className="px-2 pb-4 pt-6">
            <h2 className="font-display text-5xl md:text-6xl">Fasilitas</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((f, i) => (
              <Reveal as="li" key={f.nama} delay={(i % 3) * 120}>
                <Tilt className="rounded-2xl" maks={7}>
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <img src={f.foto} alt={f.nama} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <p className="absolute bottom-5 left-5 font-display text-4xl text-white">{f.nama}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </ul>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className={panel}>
            <h2 className="font-display text-4xl">Ekstrakurikuler</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {ekskul.map((e) => (
                <li key={e} className="rounded-md border border-black/10 px-4 py-2 text-sm transition-colors hover:border-aksen hover:text-aksen">{e}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className={panel} delay={120}>
            <h2 className="font-display text-4xl">Alamat</h2>
            <address className="mt-4 not-italic leading-relaxed text-gray-700">
              {sekolah.alamat}
              <br />
              Telepon: {sekolah.telepon}
            </address>
          </Reveal>
        </div>
      </div>
    </>
  );
}
