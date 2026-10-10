// Contoh data. Nanti bisa diganti dengan database / API / CMS.
// Daftar lengkap ada di https://www.smaislamiccentre.sch.id/prestasi/informasi-ptn
export type PtnEntry = {
  id: number;
  nama: string;
  kampus: string;
  prodi: string;
  jalur: "SNBP" | "SNBT" | "MANDIRI PTN" | "UMPTKIN" | "POLTEKKES";
  periode: string;
  foto?: string; // URL foto (opsional)
};

export const ptnData: PtnEntry[] = [
  { id: 1, nama: "Contoh Siswa Satu", kampus: "UNTIRTA", prodi: "HUKUM", jalur: "SNBP", periode: "2025/2026" },
  { id: 2, nama: "Contoh Siswa Dua", kampus: "ITERA", prodi: "TEKNIK PERTAMBANGAN", jalur: "SNBT", periode: "2025/2026" },
  { id: 3, nama: "Contoh Siswa Tiga", kampus: "UNIVERSITAS GADJAH MADA", prodi: "TEKNIK ELEKTRO", jalur: "MANDIRI PTN", periode: "2025/2026" },
  { id: 4, nama: "Contoh Siswa Empat", kampus: "UIN JAKARTA", prodi: "SASTRA ARAB", jalur: "UMPTKIN", periode: "2025/2026" },
  { id: 5, nama: "Contoh Siswa Lima", kampus: "UNIVERSITAS BRAWIJAYA", prodi: "TEKNIK KOMPUTER", jalur: "SNBP", periode: "2025/2026" },
  { id: 6, nama: "Contoh Siswa Enam", kampus: "POLTEKKES BANTEN", prodi: "KEPERAWATAN", jalur: "POLTEKKES", periode: "2025/2026" },
  { id: 7, nama: "Contoh Siswa Tujuh", kampus: "IPB", prodi: "MANAJEMEN INDUSTRI", jalur: "SNBP", periode: "2025/2026" },
  { id: 8, nama: "Contoh Siswa Delapan", kampus: "UPNVJ", prodi: "KEDOKTERAN", jalur: "SNBT", periode: "2025/2026" },
];

export const jalurList = ["SNBP", "SNBT", "MANDIRI PTN", "UMPTKIN", "POLTEKKES"] as const;
