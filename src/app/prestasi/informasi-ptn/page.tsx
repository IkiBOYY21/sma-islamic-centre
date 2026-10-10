import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PtnList from "@/components/PtnList";
import { ptnData } from "@/lib/data/ptn";

export const metadata: Metadata = {
  title: "Informasi PTN",
  description:
    "Daftar siswa SMA Islamic Centre yang diterima di perguruan tinggi, lengkap dengan program studi, jalur, dan periode.",
};

export default function InformasiPtnPage() {
  return (
    <>
      <PageHeader
        label="Prestasi"
        judul="Informasi PTN"
        deskripsi="Daftar siswa yang diterima di perguruan tinggi, lengkap dengan program studi, jalur, dan periode."
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <PtnList data={ptnData} />
      </div>
    </>
  );
}
