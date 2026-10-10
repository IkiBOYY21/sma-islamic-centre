// Data konten SMA Islamic Centre, diambil dari https://smaislamiccentre.sch.id/
// Diambil pada: 10 Oktober 2026
// Semua gambar masih berupa URL absolut ke server sekolah (lihat catatan di bawah).

const BASE = "https://smaislamiccentre.sch.id";

/* ------------------------------------------------------------------ */
/* INFO UMUM                                                           */
/* ------------------------------------------------------------------ */
export const siteInfo = {
  name: "SMA Islamic Centre",
  officialName: "SMA ISLAMIC CENTRE",
  tagline: "Ilmu Amaliah Amal Ilmiah",
  title: "SMA Islamic Centre - Islamic School of Excellence",
  description:
    "Portal resmi SMA Islamic Centre berisi profil sekolah, berita, fasilitas, multimedia, program unggulan, dan informasi kegiatan murid dalam satu halaman yang mudah diakses.",
  footerText:
    "Membangun generasi yang cerdas dalam ilmu dan terampil dalam berkarya. Menanamkan karakter kuat dan akhlakul karimah dalam setiap langkah. Mempersiapkan Generasi Indonesia Hebat untuk masa depan.",
  themeColor: "#214E41",
  logo: `${BASE}/assets/img/logo.png`,
  url: BASE,
  spmbUrl: "https://ppdb.smaislamiccentre.sch.id/",
};

export const contact = {
  address:
    "Jl. Ciujung Raya No.4, RT.009/RW.002, Karawaci Baru, Kec. Karawaci, Kota Tangerang, Banten 15116",
  phone: "0859-6022-4000",
  phoneHref: "tel:085960224000",
  whatsapp: "https://wa.me/085960224000",
  // Email diproteksi Cloudflare di situs asli, jadi tidak terbaca. Isi manual.
  email: "ISI_MANUAL@smaislamiccentre.sch.id",
  hours: "Senin - Jumat: 06.45 - 15.00 WIB",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.80895252914!2d106.5955105476544!3d-6.20392015054087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69feb8cf29fd55%3A0xa8324d1fc276fad3!2sSMAS%20Islamic%20Centre!5e0!3m2!1sid!2sid!4v1782596727918!5m2!1sid!2sid",
};

export const socials = {
  instagram: "https://www.instagram.com/smaislamiccentre?igsh=a2Vqazl3Zm5ucThy",
  tiktok: "https://www.tiktok.com/@smaislamiccentre",
  youtube: "https://www.youtube.com/@smasislamiccentre",
};

/* ------------------------------------------------------------------ */
/* NAVIGASI                                                            */
/* Menu Profil, Akademik, Prestasi, Kesiswaan, Publikasi adalah        */
/* dropdown. Submenu Profil/Akademik/Prestasi/Kesiswaan tidak terbaca. */
/* ------------------------------------------------------------------ */
export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "#", children: [] as { label: string; href: string }[] },
  { label: "Akademik", href: "#", children: [] as { label: string; href: string }[] },
  { label: "Prestasi", href: "#", children: [] as { label: string; href: string }[] },
  { label: "Kesiswaan", href: "#", children: [] as { label: string; href: string }[] },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "SPMB", href: siteInfo.spmbUrl, external: true },
  {
    label: "Publikasi",
    href: "#",
    children: [
      { label: "Berita", href: "/news" },
      { label: "Multimedia", href: "/multimedia" },
      { label: "Instagram", href: socials.instagram },
      { label: "Tiktok", href: socials.tiktok },
      { label: "Youtube", href: socials.youtube },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* HERO / JUMBOTRON                                                    */
/* ------------------------------------------------------------------ */
export const jumbotron = [
  `${BASE}/jumbotron/4ae80a25-e051-40dd-a5d0-b45584641d48.jpg`,
  `${BASE}/jumbotron/6352bca1-0380-4a58-b901-8f2a4969a172.jpg`,
].map((src) => ({ src, alt: "Banner Jumbotron SMA Islamic Centre" }));

/* ------------------------------------------------------------------ */
/* SAMBUTAN KEPALA SEKOLAH                                             */
/* ------------------------------------------------------------------ */
export const principal = {
  name: "Sumardi, S.Pd., M.M.",
  title: "Kepala Sekolah",
  photo: `${BASE}/school-principal/53ada640-8af0-49d8-bfce-7e0389f6c75d.png`,
  greetingOpen: "Assalamu'alaikum warahmatullahi wabarakatuh.",
  greetingClose: "Wassalamu'alaikum warahmatullahi wabarakatuh.",
  paragraphs: [
    'Selamat datang di website resmi SMA Islamic Centre Kota Tangerang. Website ini kami hadirkan sebagai media informasi, komunikasi, dan transparansi sekolah kepada peserta didik, orang tua, alumni, serta masyarakat. Dengan semangat "Ilmu Amaliah, Amal Ilmiah", kami berkomitmen menyelenggarakan pendidikan yang mengintegrasikan keunggulan akademik, nilai-nilai keislaman, serta pembentukan karakter sehingga lahir generasi yang beriman, berilmu, berakhlak mulia, dan siap menghadapi tantangan masa depan.',
    "Kami percaya bahwa pendidikan merupakan hasil kolaborasi antara sekolah, keluarga, dan masyarakat. Oleh karena itu, melalui website ini kami berharap dapat mempererat sinergi tersebut dengan menyajikan berbagai informasi mengenai program, prestasi, dan kegiatan sekolah secara mudah dan aktual. Terima kasih atas kepercayaan yang diberikan kepada SMA Islamic Centre Kota Tangerang. Semoga Allah SWT senantiasa memberikan keberkahan dan kemudahan dalam setiap ikhtiar kita mencerdaskan generasi penerus bangsa.",
  ],
};

/* ------------------------------------------------------------------ */
/* BERITA (arsip hanya berisi 3 berita)                                */
/* ------------------------------------------------------------------ */
export type NewsItem = {
  id: number;
  slug: string; // sesuai URL asli: /news/{id}
  title: string;
  category: "Kegiatan" | "Prestasi" | "Akademik";
  date: string; // ISO
  dateLabel: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[]; // satu elemen = satu paragraf
};

export const news: NewsItem[] = [
  {
    id: 4,
    slug: "4",
    title: "SMA Islamic Centre Awali Pekan dengan Upacara Bendera",
    category: "Kegiatan",
    date: "2026-10-01T13:52:48+07:00",
    dateLabel: "01 Oktober 2026",
    author: "Muhammad Ilham Ramadhan",
    image: `${BASE}/news-media/8e9ab7c2-04a3-4286-b3a2-e43e68602eaf.png`,
    excerpt:
      "Senin pagi menjadi momen bagi seluruh warga SMA Islamic Centre untuk mengawali kegiatan pembelajaran dengan penuh semangat melalui pelaksanaan upacara bendera.",
    content: [
      "Senin pagi menjadi momen bagi seluruh warga SMA Islamic Centre untuk mengawali kegiatan pembelajaran dengan penuh semangat melalui pelaksanaan upacara bendera. Kegiatan yang dilaksanakan di lapangan upacara sekolah ini diikuti oleh peserta didik, guru, dan tenaga kependidikan dengan tertib dan penuh khidmat.",
      "Upacara bendera menjadi salah satu kegiatan rutin sekolah yang tidak hanya bertujuan menumbuhkan sikap disiplin, tetapi juga menjadi sarana membangun rasa tanggung jawab, kebersamaan, dan cinta tanah air. Melalui kegiatan ini, peserta didik dibiasakan untuk mengikuti setiap rangkaian kegiatan secara tertib serta menghargai nilai-nilai kebangsaan.",
      "Pelaksanaan upacara diawali dengan persiapan peserta dan petugas upacara, dilanjutkan dengan pengibaran Sang Merah Putih, pembacaan teks Pancasila, pembacaan Pembukaan UUD 1945, serta rangkaian upacara lainnya. Kegiatan kemudian dilanjutkan dengan amanat yang menjadi bagian penting untuk memberikan pesan, motivasi, dan penguatan karakter kepada seluruh peserta didik.",
      "Bagi SMA Islamic Centre, upacara bendera bukan sekadar kegiatan rutin setiap Senin pagi. Kegiatan ini menjadi bagian dari pembiasaan karakter yang sejalan dengan nilai-nilai sekolah dalam membentuk peserta didik yang disiplin, berkarakter, bertanggung jawab, serta memiliki semangat kebangsaan.",
      "Dengan semangat yang dibangun sejak pagi, seluruh warga SMA Islamic Centre diharapkan dapat memulai proses pembelajaran dengan lebih siap, positif, dan penuh tanggung jawab. Senin pagi pun menjadi awal untuk terus bergerak bersama menuju pribadi yang cerdas, terampil, dan berakhlakul karimah.",
    ],
  },
  {
    id: 3,
    slug: "3",
    title: "Dua Siswi SMA Islamic Centre Raih Prestasi dalam Ajang Kompetisi",
    category: "Prestasi",
    date: "2026-09-24T13:54:18+07:00",
    dateLabel: "24 September 2026",
    author: "Muhammad Ilham Ramadhan",
    image: `${BASE}/news-media/459c18b0-8c33-4c3b-b49c-31ebf4125a97.png`,
    excerpt:
      "SMA Islamic Centre kembali menorehkan prestasi melalui dua peserta didik yang berhasil meraih juara dalam kompetisi di bidang yang berbeda.",
    content: [
      "SMA Islamic Centre kembali menorehkan prestasi melalui dua peserta didik yang berhasil meraih juara dalam kompetisi di bidang yang berbeda. Prestasi tersebut menjadi kebanggaan bagi sekolah sekaligus menunjukkan keberagaman potensi peserta didik dalam bidang keagamaan dan bahasa.",
      "Salah satu prestasi diraih oleh Rayi Innayah Abimanyu yang berhasil meraih Juara I pada cabang Ghina Araby dalam kegiatan Musabaqoh Al-Lughatul Arabiyah (MLA) yang diselenggarakan oleh HIMA PBA Universitas Muhammadiyah Tangerang pada 20 September 2026. Pencapaian ini menunjukkan kemampuan peserta didik dalam mengembangkan kompetensi bahasa Arab sekaligus keberanian untuk berkompetisi di tingkat eksternal sekolah.",
      "Sementara itu, Khansa Rida Humaira juga berhasil meraih Juara 2 dalam ajang MHQ. Prestasi tersebut menjadi bukti atas kesungguhan peserta didik dalam mengembangkan kemampuan di bidang keagamaan dan menjadi bagian dari pencapaian SMA Islamic Centre dalam mendorong siswa/i untuk aktif mengikuti berbagai kompetisi.",
      "Kedua prestasi tersebut menjadi motivasi bagi peserta didik lainnya untuk terus mengembangkan potensi, mengikuti berbagai kegiatan kompetitif, dan membawa nama baik SMA Islamic Centre. Sekolah terus memberikan dukungan agar setiap siswa/i memiliki kesempatan untuk berkembang sesuai minat, bakat, dan kemampuan yang dimilikinya.",
    ],
  },
  {
    id: 2,
    slug: "2",
    title:
      "Program Vokasi Keterampilan Digital SMA Islamic Centre: Membekali Siswa dengan Kompetensi Siap Masa Depan",
    category: "Akademik",
    date: "2026-09-21T07:59:58+07:00",
    dateLabel: "21 September 2026",
    author: "Muhammad Ilham Ramadhan",
    image: `${BASE}/news-media/b9d0158f-a0d9-43b6-818d-ace79a0ec3bc.png`,
    excerpt:
      "SMA Islamic Centre menghadirkan Program Vokasi Keterampilan Digital sebagai bagian dari komitmen sekolah dalam mempersiapkan peserta didik menghadapi perkembangan dunia kerja dan ekonomi digital.",
    content: [
      "SMA Islamic Centre menghadirkan Program Vokasi Keterampilan Digital sebagai bagian dari komitmen sekolah dalam mempersiapkan peserta didik menghadapi perkembangan dunia kerja dan ekonomi digital. Program ini dirancang agar siswa tidak hanya memiliki kemampuan akademik, tetapi juga keterampilan praktis yang dapat diterapkan dalam dunia kerja, pendidikan lanjutan, maupun pengembangan usaha.",
      "Program vokasi dilaksanakan selama tiga tahun dengan kompetensi yang berbeda pada setiap jenjang. Siswa kelas X mempelajari Junior Office Operator, kelas XI mengembangkan keterampilan Junior Desain Grafis, sedangkan kelas XII mempelajari Digital Marketing. Pembelajaran dilakukan secara bertahap melalui teori dan praktik sehingga siswa memiliki pengalaman dalam menghasilkan karya serta mengembangkan portofolio sesuai bidang yang dipelajari.",
      "Program ini menjadi salah satu upaya SMA Islamic Centre untuk memperkecil kesenjangan antara kompetensi lulusan dengan kebutuhan dunia kerja. Selain bagi siswa yang akan melanjutkan pendidikan ke perguruan tinggi, keterampilan yang diperoleh juga dapat menjadi bekal bagi siswa yang ingin bekerja, menjadi freelancer, maupun mengembangkan usaha berbasis digital setelah menyelesaikan pendidikan.",
      "Dalam pelaksanaannya, Program Vokasi Keterampilan Digital mengacu pada standar kompetensi yang relevan dengan skema keterampilan yang dipelajari. SMA Islamic Centre juga mempersiapkan peserta didik untuk mengikuti sertifikasi kompetensi dalam ekosistem BNSP, sehingga keterampilan yang dimiliki dapat menjadi bagian dari portofolio dan pengembangan karier siswa.",
      "Melalui program ini, SMA Islamic Centre berupaya menghadirkan pendidikan yang tidak hanya berorientasi pada pengetahuan, tetapi juga keterampilan, karakter, kreativitas, dan kesiapan menghadapi masa depan. Program Vokasi Keterampilan Digital menjadi ruang bagi siswa untuk belajar, berkarya, menemukan potensi, dan membangun kompetensi yang dapat mereka manfaatkan setelah lulus dari sekolah.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* PRESTASI (diturunkan dari berita kategori Prestasi)                 */
/* Halaman Prestasi asli (menu dropdown) tidak bisa diakses.           */
/* ------------------------------------------------------------------ */
export const achievements = [
  {
    student: "Rayi Innayah Abimanyu",
    rank: "Juara I",
    competition:
      "Musabaqoh Al-Lughatul Arabiyah (MLA), cabang Ghina Araby",
    organizer: "HIMA PBA Universitas Muhammadiyah Tangerang",
    date: "2026-09-20",
    sourceNewsId: 3,
  },
  {
    student: "Khansa Rida Humaira",
    rank: "Juara 2",
    competition: "MHQ",
    organizer: null,
    date: null,
    sourceNewsId: 3,
  },
];

/* ------------------------------------------------------------------ */
/* FASILITAS                                                           */
/* ------------------------------------------------------------------ */
const F = `${BASE}/facilities-media`;

export const facilities = [
  {
    id: 6,
    slug: "6-lapangan-upacara",
    name: "Lapangan Upacara",
    date: "2026-10-01",
    description: [
      "Lapangan Upacara SMA Islamic Centre area terbuka yang digunakan untuk pelaksanaan upacara bendera dan berbagai kegiatan resmi sekolah. Area yang luas dan tertata memberikan ruang yang memadai bagi seluruh warga sekolah untuk mengikuti kegiatan dengan tertib dan nyaman.",
      "Selain sebagai tempat upacara, lapangan ini juga dimanfaatkan untuk berbagai kegiatan sekolah, pembinaan kedisiplinan, serta aktivitas bersama peserta didik. Keberadaannya menjadi bagian penting dalam mendukung pembentukan sikap disiplin, tanggung jawab, nasionalisme, dan kebersamaan di lingkungan SMA Islamic Centre.",
    ],
    images: [
      `${F}/a8f230d2-79fc-4579-9bb8-973ca3a3a1c2.jpg`,
      `${F}/58f0fe05-fa1f-4877-ade9-8e0c43b12141.jpg`,
      `${F}/b03329b5-e680-46d9-a745-7a20f9203785.jpg`,
      `${F}/1592618d-c137-43c5-92ee-1632e6f18a9f.jpg`,
    ],
  },
  {
    id: 5,
    slug: "5-lab-komputer",
    name: "Lab. Komputer",
    date: "2026-09-21",
    description: [
      "Lab Komputer SMA Islamic Centre merupakan fasilitas pembelajaran berbasis teknologi yang digunakan untuk mendukung Program Vokasi Keterampilan Digital, mata pelajaran TIK, serta pembelajaran coding. Laboratorium ini memberikan ruang bagi siswa untuk belajar secara praktik, mulai dari pengoperasian komputer, pengembangan keterampilan digital, desain, hingga penerapan teknologi dalam berbagai proyek.",
      "Melalui kegiatan praktik di Lab Komputer, siswa dapat mengembangkan kemampuan berpikir logis, kreatif, dan problem solving sekaligus membangun keterampilan yang relevan dengan perkembangan teknologi. Fasilitas ini juga mendukung pembelajaran yang lebih interaktif dan aplikatif sehingga siswa dapat menghasilkan karya serta mengembangkan kompetensi digital sebagai bekal pendidikan lanjutan maupun dunia kerja.",
    ],
    images: [
      `${F}/3e1ab152-2e39-49b5-8f6b-5d1e37e55525.png`,
      `${F}/60889c7a-1702-40a7-9e93-e01075faf07e.png`,
      `${F}/d8b06b14-1b41-41ff-8835-2f14dfcb1663.png`,
      `${F}/b9d29d0c-da56-4936-8cd6-8a555af00ab6.png`,
    ],
  },
  {
    id: 4,
    slug: "4-ruang-kelas",
    name: "Ruang Kelas",
    date: "2026-09-21",
    description: [
      "Ruang kelas SMA Islamic Centre dirancang sebagai ruang belajar yang nyaman dan mendukung proses pembelajaran yang efektif. Setiap ruang kelas dilengkapi AC, proyektor, dan akses Wi-Fi untuk menunjang kegiatan belajar yang interaktif, modern, dan memanfaatkan teknologi.",
      "Dengan fasilitas tersebut, siswa dapat mengikuti pembelajaran dalam suasana yang lebih kondusif sekaligus mengakses berbagai sumber belajar digital. Ruang kelas menjadi lingkungan yang mendukung siswa untuk aktif, kreatif, dan berkembang sesuai kebutuhan pembelajaran.",
    ],
    images: [
      `${F}/d0f20679-3869-4b7b-b709-eca03be284ec.png`,
      `${F}/80a45f12-2894-4439-8f28-5838c1ef4c8d.png`,
      `${F}/90d27426-d517-428e-9117-313facb831db.png`,
    ],
  },
  {
    id: 3,
    slug: "3-perpustakaan",
    name: "Perpustakaan",
    date: "2026-09-21",
    description: [
      "Perpustakaan SMA Islamic Centre merupakan fasilitas literasi yang menyediakan berbagai koleksi buku untuk menunjang kebutuhan belajar peserta didik. Ruang perpustakaan dapat dimanfaatkan siswa untuk membaca, mencari informasi, mengerjakan tugas, serta memperluas wawasan di luar pembelajaran di kelas.",
      "Dengan suasana yang mendukung kegiatan membaca dan belajar, perpustakaan menjadi bagian penting dalam membangun budaya literasi di lingkungan sekolah. Keberadaan fasilitas ini juga memberikan ruang bagi peserta didik untuk mengembangkan pengetahuan, kemandirian belajar, dan minat baca.",
    ],
    images: [
      `${F}/d40a637a-3b49-4d15-a55a-77aac82e1eeb.png`,
      `${F}/fd5d4fca-ce1d-4434-80a8-ad5c4bd7d4f2.png`,
      `${F}/f1103d1c-48de-4e64-b3c2-10b8fb6f6ecf.png`,
      `${F}/d592475a-7ea4-41ae-af7e-d0fbd60db891.png`,
    ],
  },
  {
    id: 2,
    // Slug asli di situs memang "gor-olahraha" (typo). Ubah jika ingin dikoreksi.
    slug: "2-gor-olahraha",
    name: "GOR Olahraga",
    date: "2026-09-21",
    description: [
      "GOR Olahraga Indoor SMA Islamic Centre merupakan fasilitas olahraga multifungsi yang menjadi ruang bagi peserta didik untuk mengembangkan kebugaran, keterampilan, bakat, dan prestasi di bidang olahraga. Fasilitas ini mendukung kegiatan pembelajaran PJOK serta berbagai kegiatan ekstrakurikuler olahraga seperti futsal, basket, voli, dan badminton dalam lingkungan yang nyaman dan terlindungi dari kondisi cuaca.",
      "Selain sebagai sarana olahraga, GOR Indoor juga menjadi ruang aktivitas bersama bagi warga sekolah dalam berbagai kegiatan yang membutuhkan area luas. Keberadaan fasilitas ini menjadi bagian dari komitmen SMA Islamic Centre dalam menciptakan lingkungan pendidikan yang aktif, sehat, sportif, dan mendukung setiap peserta didik untuk mengembangkan potensi serta meraih prestasi.",
    ],
    images: [`${F}/2ef5e050-312c-423c-b385-79a625a839a2.png`],
  },
];

/* ------------------------------------------------------------------ */
/* MULTIMEDIA (YouTube)                                                */
/* ------------------------------------------------------------------ */
export const multimedia = [
  { youtubeId: "7-aW7Iq-uFs", title: "Apa Kata Mereka tentang SMA Islamic Centre?", date: "2026-08-27" },
  { youtubeId: "nCi41Cy7xv0", title: "Film Pendek Siswa: Abhipraya", date: "2026-08-27" },
  { youtubeId: "JlBEFP9Wo0g", title: "Film Pendek Siswa: Say No to FOMO", date: "2026-08-27" },
  { youtubeId: "rlan1INnEzg", title: "Profil SMA Islamic Centre", date: "2026-08-27" },
].map((v) => ({
  ...v,
  embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0`,
  watchUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
  thumbnail: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
}));

/* ------------------------------------------------------------------ */
/* TESTIMONI                                                           */
/* ------------------------------------------------------------------ */
const T = `${BASE}/storage/testimonials/2026/09`;

export const testimonials = [
  {
    name: "Fadlan Ali Putra Irawan",
    role: "Alumni 2026",
    photo: `${T}/c8dcf266-540e-4fe2-a42e-4f63fdeff7be.png`,
    quote:
      "Menjadi siswa di SMA Islamic Centre adalah pengalaman berharga yang mengajarkan saya kerja keras, disiplin, dan pantang menyerah untuk berkembang.",
  },
  {
    name: "Wildan Ryan Angkasa",
    role: "Alumni 2026",
    photo: `${T}/e0f15bb9-40bc-4374-9d98-5795e9c96068.png`,
    quote:
      "Saya senang menjadi bagian SMA Islamic Centre dengan lingkungan menyenangkan, guru mendukung, informasi aktif, serta pengalaman yang membantu saya berkembang.",
  },
  {
    name: "Shandrina Qeisha Hurisma",
    role: "Alumni 2026",
    photo: `${T}/be15a5fe-f69c-437a-86d6-bc2012bd2f99.png`,
    quote:
      "Saya bersyukur menjadi bagian dari SMA Islamic Centre, dengan guru yang membimbing, lingkungan nyaman, dan kesempatan untuk berkembang serta membangun karakter.",
  },
  {
    name: "Dion Izzudin Reza",
    role: "Alumni 2026",
    photo: `${T}/f3faa8eb-6509-4459-9676-012b345b25b2.png`,
    quote:
      "Selama tiga tahun di SMA Islamic Centre, saya bersyukur atas bimbingan guru dan staf yang membantu menemukan potensi serta menentukan langkah pendidikan saya.",
  },
  {
    name: "Rizkia Sahila Putri",
    role: "Alumni 2026",
    photo: `${T}/fe2f79f9-372a-4754-a3f7-8935cdfd7001.png`,
    quote:
      "SMA Islamic Centre mengajari saya menghadapi pertanyaan, berpikir dengan berani, dan terus berkembang sebagai manusia.",
  },
  {
    name: "Nico Aziz Nugroho",
    role: "Alumni 2026",
    photo: `${T}/da3c4e1b-fa6a-47ad-8dd1-8649722c7c62.png`,
    quote:
      "Sebagai alumni SMA Islamic Centre, saya bersyukur mendapat ilmu, akhlak, disiplin, dan pengalaman berharga sebagai bekal masa depan.",
  },
  {
    name: "Muhammad Zakki Qoulan Sadida",
    role: "Alumni 2026",
    photo: `${T}/86ef74a5-52c8-4d47-ad5d-4d8010a26d23.png`,
    quote:
      "SMA Islamic Centre bukan hanya tempat belajar, tetapi juga tempat untuk berkembang dengan fasilitas memadai dan lingkungan pertemanan yang saling mendukung.",
  },
  {
    name: "Siti Aisyah Ufairah",
    role: "Alumni 2026",
    photo: `${T}/e848f443-7a53-4894-b6ee-92ca91c42f5c.png`,
    quote:
      "ISCEN bukan hanya tempat belajar, tetapi juga tempat berkembang, dengan guru inspiratif, pembelajaran menyenangkan, dan lingkungan pertemanan yang positif.",
  },
  {
    name: "Raffa Abimael Lazuardy",
    role: "Alumni 2026",
    photo: `${T}/f6966382-82ad-4cb2-a491-41f30ee2b053.png`,
    quote:
      "Lingkungan yang ramah, guru yang seru dan kompeten, serta fasilitas lengkap membuat belajar di SMA Islamic Centre semakin nyaman.",
  },
  {
    name: "Dinda Avrilita Nur Indah",
    role: "Alumni 2026",
    photo: `${T}/ce5f9e27-9185-4284-bfc1-5e436be95bab.png`,
    quote:
      "Di SMA Islamic Centre, saya merasa didukung untuk menggapai cita-cita dengan fasilitas yang menunjang pendidikan saya.",
  },
];

/* ------------------------------------------------------------------ */
/* PROGRAM UNGGULAN (dari berita #2, bisa dipakai di halaman Akademik) */
/* ------------------------------------------------------------------ */
export const vocationalProgram = {
  name: "Program Vokasi Keterampilan Digital",
  durationYears: 3,
  levels: [
    { grade: "X", skill: "Junior Office Operator" },
    { grade: "XI", skill: "Junior Desain Grafis" },
    { grade: "XII", skill: "Digital Marketing" },
  ],
  certification: "Persiapan sertifikasi kompetensi dalam ekosistem BNSP",
  facility: "Lab. Komputer",
};

/* ------------------------------------------------------------------ */
/* DATA YANG BELUM TERAMBIL (isi manual / ambil dari admin)            */
/* ------------------------------------------------------------------ */
export const missing = [
  "Submenu Profil (visi-misi, sejarah, struktur, guru/staf)",
  "Submenu Akademik (kurikulum, jadwal, dll.)",
  "Submenu Prestasi (daftar prestasi lengkap, informasi PTN / alumni diterima)",
  "Submenu Kesiswaan (ekstrakurikuler, OSIS, dll.)",
  "Alamat email sekolah (diproteksi Cloudflare)",
  "Situs SPMB: https://ppdb.smaislamiccentre.sch.id/ (domain terpisah, belum diambil)",
];
