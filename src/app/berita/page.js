import PageHeading from "@/components/PageHeading";
import BeritaExplorer from "@/components/BeritaExplorer";
import { beritaList } from "@/data/berita";

export const metadata = { title: "Berita" };

export default function BeritaPage() {
  return (
    <>
      <PageHeading label="Berita" judul="Kabar sekolah" deskripsi="Kegiatan dan kabar terbaru dari SMA Islamic Centre. Cari, saring, atau ganti ke tampilan daftar." />
      <BeritaExplorer data={beritaList} />
    </>
  );
}
