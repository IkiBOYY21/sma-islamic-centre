# Website SMA Islamic Centre Tangerang

Tugas UTS: website profil SMA dengan **Next.js (JavaScript, App Router) + Tailwind CSS**.
Frontend saja: tanpa TypeScript, database, API, backend, atau login. Tanpa library animasi
tambahan: semua efek memakai CSS dan JavaScript biasa.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:3000
npm run build    # cek build produksi
```

Butuh Node.js 18.18 atau lebih baru dan koneksi internet (font diunduh dari Google Fonts).

## Struktur project

```
src/
├── app/
│   ├── layout.js            # kerangka: <Cursor /> <Navbar /> {children} <Footer />
│   ├── page.js              # /            (Home)
│   ├── about/page.js        # /about
│   ├── berita/page.js       # /berita      (filter, pencarian, 2 tampilan)
│   ├── berita/[id]/page.js  # /berita/<id> (detail, dynamic route)
│   ├── prestasi/page.js     # /prestasi    (tambahan)
│   ├── kontak/page.js       # /kontak      (tambahan)
│   ├── icon.png             # favicon
│   ├── globals.css          # gaya global + efek reveal / kata / wipe / draw
│   └── not-found.js         # halaman 404
├── components/
│   ├── Navbar.js  Footer.js           # dipakai sekali di layout.js
│   ├── Hero.js  HeroStage.js  RotatingBadge.js
│   ├── BeritaCard.js  BeritaExplorer.js  ProgramCards.js  Galeri.js
│   ├── Button.js  Icon.js  Sparkle.js  Lingkaran.js  PageHeading.js
│   └── Reveal.js  Kata.js  Parallax.js  Marquee.js  Tilt.js  Magnetic.js  Cursor.js
└── data/
    ├── sekolah.js           # identitas sekolah (alamat, telepon, dll)
    ├── berita.js            # data 6 berita (simulasi)
    └── galeri.js            # daftar foto galeri
public/                      # semua gambar (lihat bagian "Gambar")
```

## Gambar

Semua gambar memakai tag `<img>` dari folder `public/`:

| File | Dipakai di |
|---|---|
| `logo.png`, `src/app/icon.png` | menu, footer, favicon |
| `hero-gedung.png` | hero Home (PNG transparan, langit dibuat dengan CSS) |
| `sekolah.jpg` | banner About, galeri, program |
| `about1.jpg`, `about2.jpg`, `about3.jpg` | kolase Home, program, galeri |
| `berita1.jpg` sampai `berita6.jpg` | gambar 6 berita |
| `lab.jpg`, `perpus.jpg`, `masjid.jpg`, `upacara.jpg` | fasilitas (About) dan galeri |

Gambar sekarang adalah **ilustrasi** yang dibuat untuk kerangka ini. Untuk versi akhir,
ganti dengan foto asli sekolah dan **pakai nama file yang sama** (misalnya `berita1.jpg`),
sehingga kode tidak perlu diubah. Pakai foto landscape (atau potret untuk galeri), lebar
minimal 1200px.

## Daftar efek dan interaksi

| Efek | Letak |
|---|---|
| Teks hero naik kata demi kata, kursor menggeser tiap lapisan hero (awan, gedung, garis jalur) | `Hero.js`, `HeroStage.js`, `Kata.js` |
| Garis jalur yang "digambar", penanda lokasi muncul dan melayang | `Hero.js` |
| Awan melayang, gedung bergeser pelan saat scroll (parallax) | `Hero.js`, `Parallax.js` |
| Lencana "Daftar SPMB" berputar, tombol "tertarik" ke kursor | `RotatingBadge.js`, `Magnetic.js` |
| Navbar transparan lalu berubah jadi pil kaca; menu layar penuh membuka seperti lingkaran | `Navbar.js` |
| Garis progres scroll | `Navbar.js` |
| Lingkaran mengikuti kursor, membesar dan memberi label ("Geser", "Lihat") | `Cursor.js` |
| Teks kampus berjalan, makin cepat saat scroll dipercepat | `Marquee.js` |
| Konten muncul saat di-scroll, gambar tersingkap (wipe) | `Reveal.js`, `globals.css` |
| Kartu miring 3D dengan kilau cahaya mengikuti kursor | `Tilt.js` |
| Filter chip dan kartu program yang melebar saat di-hover | `ProgramCards.js` |
| Galeri yang bisa diseret + lightbox (panah kiri/kanan, Esc) | `Galeri.js` |
| Berita: pencarian, filter kategori, tampilan kartu/daftar, gambar mengikuti kursor | `BeritaExplorer.js` |
| Lingkaran coretan tangan, bintang berkedip | `Lingkaran.js`, `Sparkle.js` |

Catatan perilaku:
- Semua animasi berhenti jika pengguna mengaktifkan "reduce motion" di sistemnya.
- Kursor kustom, tilt, dan magnet hanya aktif di perangkat dengan mouse. Di HP, galeri digeser dengan jari.
- Tanpa JavaScript, semua konten tetap terlihat.

## Checklist ketentuan dosen

| Ketentuan | Letak |
|---|---|
| Home `/`, About `/about`, Berita `/berita`, Detail `/berita/[id]` | `src/app/` |
| Navbar & Footer sebagai component, dipanggil di layout | `src/components/`, `src/app/layout.js` |
| Minimal 6 berita | `src/data/berita.js` |
| Minimal 3 component | Navbar, Footer, Hero, BeritaCard, Button, ProgramCards, Galeri, dll |
| Navigasi internal pakai `Link` | Navbar, BeritaCard, Button, BeritaExplorer, halaman detail |
| Tailwind, responsive | seluruh komponen (`sm:`, `md:`, `lg:`) |
| Gambar di `public/` | lihat bagian "Gambar" |
| JavaScript (.js), bukan TypeScript | semua file |

## Yang perlu kamu ganti sebelum dikumpulkan

1. **Foto asli** (lihat bagian "Gambar").
2. **Sejarah, visi, misi, sambutan, daftar fasilitas, dan teks program**: sekarang teks contoh.
3. **Isi berita** di `src/data/berita.js`: data simulasi (boleh menurut soal).
4. **Warna aksen**: hijau sekolah. Untuk aksen biru, ubah `aksen` di `tailwind.config.js`.
