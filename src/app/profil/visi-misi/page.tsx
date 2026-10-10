import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Visi & Misi" };

export default function VisiMisiPage() {
  return (
    <>
      <PageHeader
  label="Profil"
  judul="Visi & Misi"
  deskripsi="Mengenal visi dan misi SMA Islamic Centre Tangerang sebagai pedoman dalam mewujudkan pendidikan yang berkualitas."
/>
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
        <section>
          <h2 className="font-serif text-2xl font-semibold">Visi</h2>
          {/* TODO: ganti dengan visi resmi sekolah */}
          <p className="mt-3 leading-relaxed">
            Menjadi sekolah yang mencetak generasi cerdas dalam ilmu, terampil dalam berkarya, dan berakhlakul karimah.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-semibold">Misi</h2>
          {/* TODO: ganti dengan misi resmi sekolah */}
          <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed">
            <li>Menyelenggarakan pembelajaran yang bermutu dan berlandaskan nilai Islam.</li>
            <li>Menanamkan karakter kuat dan akhlakul karimah dalam keseharian siswa.</li>
            <li>Membekali siswa dengan keterampilan untuk melanjutkan studi dan berkarya.</li>
          </ol>
        </section>
      </div>
    </>
  );
}
