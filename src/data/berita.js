// src/data/berita.js

// Fungsi ini yang sebelumnya hilang dan menyebabkan error
export function formatTanggal(tanggal) {
  const date = new Date(tanggal);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const beritaList = [
  {
    id: 4,
    slug: "sma-islamic-centre-awali-pekan-dengan-upacara",
    judul: "SMA Islamic Centre Awali Pekan dengan Upacara Bendera",
    kategori: "Kegiatan",
    tanggal: "2026-10-01",
    penulis: "Muhammad Ilham Ramadhan",
    gambar: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", 
    ringkasan: "Senin pagi menjadi momen bagi seluruh warga SMA Islamic Centre untuk mengawali kegiatan pembelajaran dengan penuh semangat melalui pelaksanaan upacara bendera.",
    konten: [
      "Senin pagi menjadi momen bagi seluruh warga SMA Islamic Centre untuk mengawali kegiatan pembelajaran dengan penuh semangat melalui pelaksanaan upacara bendera. Kegiatan yang dilaksanakan di lapangan upacara sekolah ini diikuti oleh peserta didik, guru, dan tenaga kependidikan dengan tertib dan penuh khidmat.",
      "Upacara bendera menjadi salah satu kegiatan rutin sekolah yang tidak hanya bertujuan menumbuhkan sikap disiplin, tetapi juga menjadi sarana membangun rasa tanggung jawab, kebersamaan, dan cinta tanah air.",
      "Dengan semangat yang dibangun sejak pagi, seluruh warga SMA Islamic Centre diharapkan dapat memulai proses pembelajaran dengan lebih siap, positif, dan penuh tanggung jawab."
    ]
  },
  {
    id: 3,
    slug: "dua-siswi-raih-prestasi",
    judul: "Dua Siswi SMA Islamic Centre Raih Prestasi dalam Ajang Kompetisi",
    kategori: "Prestasi",
    tanggal: "2026-09-24",
    penulis: "Muhammad Ilham Ramadhan",
    gambar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", 
    ringkasan: "SMA Islamic Centre kembali menorehkan prestasi melalui dua peserta didik yang berhasil meraih juara dalam kompetisi di bidang yang berbeda.",
    konten: [
      "SMA Islamic Centre kembali menorehkan prestasi melalui dua peserta didik yang berhasil meraih juara dalam kompetisi di bidang yang berbeda. Prestasi tersebut menjadi kebanggaan bagi sekolah sekaligus menunjukkan keberagaman potensi peserta didik dalam bidang keagamaan dan bahasa.",
      "Salah satu prestasi diraih oleh Rayi Innayah Abimanyu yang berhasil meraih Juara I pada cabang Ghina Araby dalam kegiatan Musabaqoh Al-Lughatul Arabiyah (MLA) yang diselenggarakan oleh HIMA PBA Universitas Muhammadiyah Tangerang.",
      "Sementara itu, Khansa Rida Humaira juga berhasil meraih Juara 2 dalam ajang MHQ. Prestasi tersebut menjadi bukti atas kesungguhan peserta didik dalam mengembangkan kemampuan di bidang keagamaan."
    ]
  },
  {
    id: 2,
    slug: "program-vokasi-keterampilan-digital",
    judul: "Program Vokasi Keterampilan Digital SMA Islamic Centre",
    kategori: "Akademik",
    tanggal: "2026-09-21",
    penulis: "Muhammad Ilham Ramadhan",
    gambar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", 
    ringkasan: "Menghadirkan Program Vokasi Keterampilan Digital sebagai komitmen sekolah mempersiapkan peserta didik menghadapi ekonomi digital.",
    konten: [
      "SMA Islamic Centre menghadirkan Program Vokasi Keterampilan Digital sebagai bagian dari komitmen sekolah dalam mempersiapkan peserta didik menghadapi perkembangan dunia kerja dan ekonomi digital.",
      "Siswa kelas X mempelajari Junior Office Operator, kelas XI mengembangkan keterampilan Junior Desain Grafis, sedangkan kelas XII mempelajari Digital Marketing.",
      "SMA Islamic Centre juga mempersiapkan peserta didik untuk mengikuti sertifikasi kompetensi dalam ekosistem BNSP, sehingga keterampilan yang dimiliki dapat menjadi bagian dari portofolio."
    ]
  }
];