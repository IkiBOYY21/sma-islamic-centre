import PageHeading from "@/components/PageHeading";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: "Prestasi" };

// Ringkasan penerimaan PTN (tanpa nama siswa).
// Daftar lengkap: https://www.smaislamiccentre.sch.id/prestasi/informasi-ptn
const penerimaan = [
  { kampus: "Universitas Gadjah Mada", prodi: "Teknik Elektro", jalur: "Mandiri PTN" },
  { kampus: "Institut Teknologi Bandung", prodi: "FTI-SP", jalur: "SNBT" },
  { kampus: "IPB University", prodi: "Manajemen Industri", jalur: "SNBP" },
  { kampus: "Universitas Brawijaya", prodi: "Teknik Komputer", jalur: "SNBP" },
  { kampus: "Universitas Diponegoro", prodi: "Teknik Komputer", jalur: "SNBP" },
  { kampus: "UIN Jakarta", prodi: "Sastra Arab", jalur: "UMPTKIN" },
];

export default function PrestasiPage() {
  return (
    <>
      <PageHeading label="Prestasi" judul="Lulus PTN" deskripsi="Contoh sebagian alumni yang diterima di perguruan tinggi tahun 2025/2026." />
      <div className="mx-auto max-w-6xl px-3 pb-4 sm:px-4">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {penerimaan.map((p, i) => (
            <Reveal as="li" key={p.kampus + p.prodi} delay={(i % 3) * 120}
              className="group flex min-h-48 flex-col justify-between rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-900 hover:text-white hover:shadow-2xl hover:shadow-black/10">
              <span className="self-start rounded-md border border-black/20 px-3 py-1 text-xs font-medium">{p.jalur}</span>
              <div>
                <p className="font-display text-3xl leading-tight">{p.kampus}</p>
                <p className="mt-1 text-sm opacity-70">{p.prodi}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10">
          <Button href={`${sekolah.websiteAsli}/prestasi/informasi-ptn`} external>
            Daftar lengkap di website sekolah
          </Button>
        </Reveal>
      </div>
    </>
  );
}
