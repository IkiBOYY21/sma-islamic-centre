export const site = {
  name: "SMA Islamic Centre",
  tagline: "Ilmu Amaliah, Amal Ilmiah",
  description:
    "Membangun generasi yang cerdas dalam ilmu dan terampil dalam berkarya, dengan karakter kuat dan akhlakul karimah.",
  address:
    "Jl. Ciujung Raya No.4, RT.009/RW.002, Karawaci Baru, Kec. Karawaci, Kota Tangerang, Banten 15116",
  phone: "0859-6022-4000",
  phoneHref: "tel:085960224000",
  whatsapp: "https://wa.me/6285960224000",
  email: "info@smaislamiccentre.sch.id", // TODO: ganti dengan email resmi sekolah
  hours: "Senin - Jumat: 06.45 - 15.00 WIB",
  spmbUrl: "https://ppdb.smaislamiccentre.sch.id/",
  social: {
    instagram: "https://www.instagram.com/smaislamiccentre",
    tiktok: "https://www.tiktok.com/@smaislamiccentre",
    youtube: "https://www.youtube.com/@smasislamiccentre",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.80895252914!2d106.5955105476544!3d-6.20392015054087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69feb8cf29fd55%3A0xa8324d1fc276fad3!2sSMAS%20Islamic%20Centre!5e0!3m2!1sid!2sid",
};

export type NavChild = { label: string; href: string; desc: string };
export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

// Struktur menu mengikuti website sekolah yang sudah ada.
export const nav: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil",
    children: [
      { label: "Visi & Misi", href: "/profil/visi-misi", desc: "Arah dan tujuan sekolah" },
      { label: "Sejarah", href: "/profil/sejarah", desc: "Perjalanan SMA Islamic Centre" },
      { label: "Sambutan Kepala Sekolah", href: "/profil/sambutan", desc: "Pesan dari kepala sekolah" },
    ],
  },
  {
    label: "Akademik",
    children: [
      { label: "Kurikulum", href: "/akademik/kurikulum", desc: "Program belajar dan peminatan" },
      { label: "Kalender Akademik", href: "/akademik/kalender", desc: "Jadwal kegiatan satu tahun ajaran" },
    ],
  },
  {
    label: "Prestasi",
    children: [
      { label: "Lulus PTN", href: "/prestasi/informasi-ptn", desc: "Alumni yang diterima di perguruan tinggi" },
      { label: "Akademik", href: "/prestasi/akademik", desc: "Prestasi lomba dan olimpiade" },
      { label: "Non Akademik", href: "/prestasi/non-akademik", desc: "Seni, olahraga, dan keagamaan" },
    ],
  },
  {
    label: "Kesiswaan",
    children: [
      { label: "Ekstrakurikuler", href: "/kesiswaan/ekstrakurikuler", desc: "Kegiatan pengembangan minat" },
      { label: "OSIS", href: "/kesiswaan/osis", desc: "Organisasi siswa intra sekolah" },
    ],
  },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "SPMB", href: site.spmbUrl, external: true },
  {
    label: "Publikasi",
    children: [
      { label: "Berita", href: "/publikasi/berita", desc: "Kabar terbaru dari sekolah" },
      { label: "Galeri", href: "/publikasi/galeri", desc: "Foto dan video kegiatan" },
    ],
  },
];
