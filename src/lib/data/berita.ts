export type Berita = {
  slug: string;
  judul: string;
  ringkasan: string;
  tanggal: string; // ISO date
  kategori: string;
};

export const beritaData: Berita[] = [
  {
    slug: "contoh-berita-1",
    judul: "Contoh judul berita sekolah pertama",
    ringkasan: "Ringkasan singkat berita. Ganti dengan berita asli dari sekolah.",
    tanggal: "2026-09-20",
    kategori: "Kegiatan",
  },
  {
    slug: "contoh-berita-2",
    judul: "Contoh judul berita sekolah kedua",
    ringkasan: "Ringkasan singkat berita. Ganti dengan berita asli dari sekolah.",
    tanggal: "2026-09-12",
    kategori: "Prestasi",
  },
  {
    slug: "contoh-berita-3",
    judul: "Contoh judul berita sekolah ketiga",
    ringkasan: "Ringkasan singkat berita. Ganti dengan berita asli dari sekolah.",
    tanggal: "2026-09-01",
    kategori: "Pengumuman",
  },
];

export function formatTanggal(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
