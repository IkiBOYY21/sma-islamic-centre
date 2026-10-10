import PageHeading from "@/components/PageHeader";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { sekolah } from "@/data/sekolah";

export const metadata = { title: "Kontak" };

export default function KontakPage() {
  return (
    <>
      <PageHeading label="Kontak" judul="Hubungi kami" deskripsi="Kunjungi sekolah atau hubungi kami lewat telepon dan WhatsApp." />
      <div className="mx-auto grid max-w-6xl gap-4 px-3 pb-4 sm:px-4 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="space-y-6 rounded-3xl border border-black/10 bg-white p-6 md:p-9">
          <div>
            <h2 className="text-xs font-semibold text-aksen">Alamat</h2>
            <p className="mt-1">{sekolah.alamat}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold text-aksen">Telepon</h2>
            <p className="mt-1">{sekolah.telepon}</p>
          </div>
          <div>
            <h2 className="text-xs font-semibold text-aksen">Jam operasional</h2>
            <p className="mt-1">{sekolah.jam}</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={sekolah.whatsapp} external variant="aksen">Chat WhatsApp</Button>
            <Button href={sekolah.spmb} external>Daftar SPMB</Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="min-h-80 overflow-hidden rounded-3xl border border-black/10 bg-white">
          <iframe src={sekolah.peta} title="Peta lokasi SMA Islamic Centre" className="h-full min-h-80 w-full border-0" loading="lazy" />
        </Reveal>
      </div>
    </>
  );
}
