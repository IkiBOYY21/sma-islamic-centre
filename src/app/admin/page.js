"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("berita"); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- STATE BERITA ---
  const [beritaList, setBeritaList] = useState([]);
  const [formBerita, setFormBerita] = useState({ id: "", judul: "", tanggal: "", kategori: "", konten: "", gambar: "" });
  const [isEditingBerita, setIsEditingBerita] = useState(false);

  // --- STATE PRESTASI ---
  const [prestasiList, setPrestasiList] = useState([]);
  const [formPrestasi, setFormPrestasi] = useState({ id: "", judul: "", tahun: "", tingkat: "", gambar: "" });
  const [isEditingPrestasi, setIsEditingPrestasi] = useState(false);

  // --- STATE PROFIL & KONTAK ---
  const [profilData, setProfilData] = useState({ deskripsi: "", visi: "", misi: "", gambarBanner: "" });
  const [kontakData, setKontakData] = useState({ alamat: "", telepon: "", email: "", instagram: "" });

  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") === "true") setIsLoggedIn(true);

    const savedBerita = localStorage.getItem("beritaSekolah");
    if (savedBerita && savedBerita !== "[]") {
      setBeritaList(JSON.parse(savedBerita));
    } else {
      const dummyBerita = [
        { id: "1", judul: "Penerimaan Siswa Baru Tahun 2026", tanggal: "2026-10-15", kategori: "Pengumuman", konten: "SMA Islamic Centre resmi membuka pendaftaran siswa baru untuk tahun ajaran mendatang. Segera daftarkan diri Anda.", gambar: "" },
        { id: "2", judul: "Juara 1 Lomba OSN Tingkat Provinsi", tanggal: "2026-09-20", kategori: "Akademik", konten: "Siswa kami berhasil meraih medali emas pada ajang Olimpiade Sains Nasional tingkat provinsi bidang Matematika.", gambar: "" }
      ];
      setBeritaList(dummyBerita);
      localStorage.setItem("beritaSekolah", JSON.stringify(dummyBerita));
    }

    const savedPrestasi = localStorage.getItem("prestasiSekolah");
    if (savedPrestasi && savedPrestasi !== "[]") {
      setPrestasiList(JSON.parse(savedPrestasi));
    } else {
      const dummyPrestasi = [
        { id: "p1", judul: "Medali Emas OSN Matematika", tahun: "2026", tingkat: "Nasional", gambar: "" },
        { id: "p2", judul: "Juara 1 Lomba Cerdas Cermat Islami", tahun: "2025", tingkat: "Provinsi", gambar: "" }
      ];
      setPrestasiList(dummyPrestasi);
      localStorage.setItem("prestasiSekolah", JSON.stringify(dummyPrestasi));
    }

    const savedProfil = localStorage.getItem("profilSekolah");
    if (savedProfil) setProfilData(JSON.parse(savedProfil));

    const savedKontak = localStorage.getItem("kontakSekolah");
    if (savedKontak) setKontakData(JSON.parse(savedKontak));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

  const handleImageUpload = (e, setFormState, currentState, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormState({ ...currentState, [fieldName]: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSimpanBerita = (e) => {
    e.preventDefault();
    let newData = isEditingBerita 
      ? beritaList.map((item) => (item.id === formBerita.id ? formBerita : item))
      : [{ ...formBerita, id: Date.now().toString() }, ...beritaList];
    setBeritaList(newData);
    localStorage.setItem("beritaSekolah", JSON.stringify(newData));
    setFormBerita({ id: "", judul: "", tanggal: "", kategori: "", konten: "", gambar: "" });
    setIsEditingBerita(false);
  };

  const handleSimpanPrestasi = (e) => {
    e.preventDefault();
    let newData = isEditingPrestasi 
      ? prestasiList.map((item) => (item.id === formPrestasi.id ? formPrestasi : item))
      : [{ ...formPrestasi, id: Date.now().toString() }, ...prestasiList];
    setPrestasiList(newData);
    localStorage.setItem("prestasiSekolah", JSON.stringify(newData));
    setFormPrestasi({ id: "", judul: "", tahun: "", tingkat: "", gambar: "" });
    setIsEditingPrestasi(false);
  };

  const handleSimpanProfil = (e) => { e.preventDefault(); localStorage.setItem("profilSekolah", JSON.stringify(profilData)); alert("Data About disimpan!"); };
  const handleSimpanKontak = (e) => { e.preventDefault(); localStorage.setItem("kontakSekolah", JSON.stringify(kontakData)); alert("Data Kontak disimpan!"); };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-[9999] flex h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-black/5 text-center">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Admin Login</h1>
          <button onClick={() => { localStorage.setItem("adminLoggedIn", "true"); setIsLoggedIn(true); }} className="w-full rounded-full bg-[#113a2a] py-3 font-semibold text-white transition hover:bg-opacity-90">
            Masuk ke Dashboard
          </button>
          <Link href="/" className="mt-6 block text-sm text-gray-500 hover:text-[#113a2a]">← Kembali ke Website</Link>
        </div>
      </div>
    );
  }

  return (
    // z-[9999] memastikan dashboard admin selalu di atas navbar publik
    <div className="fixed inset-0 z-[9999] flex h-screen bg-gray-100 font-sans text-gray-800 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className={`absolute inset-y-0 left-0 z-40 w-72 transform bg-[#0d2a1e] text-white transition-transform duration-300 md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* HEADER DASHBOARD */}
        <div className="flex flex-col items-center justify-center border-b border-white/10 py-10 px-4">
          <h1 className="text-3xl font-black tracking-widest text-white">DASHBOARD</h1>
          <p className="mt-2 text-sm font-medium text-gray-400">Panel Admin Sekolah</p>
          <button onClick={() => setIsSidebarOpen(false)} className="absolute right-4 top-4 md:hidden text-white/70 hover:text-white">✕</button>
        </div>

        <nav className="flex-1 space-y-3 p-6 overflow-y-auto">
          <button onClick={() => {setActiveTab("berita"); setIsSidebarOpen(false);}} className={`block w-full text-left rounded-xl px-5 py-4 transition ${activeTab === "berita" ? "bg-white/20 font-bold shadow-sm" : "hover:bg-white/5"}`}>Berita & Artikel</button>
          <button onClick={() => {setActiveTab("prestasi"); setIsSidebarOpen(false);}} className={`block w-full text-left rounded-xl px-5 py-4 transition ${activeTab === "prestasi" ? "bg-white/20 font-bold shadow-sm" : "hover:bg-white/5"}`}>Data Prestasi</button>
          <button onClick={() => {setActiveTab("profil"); setIsSidebarOpen(false);}} className={`block w-full text-left rounded-xl px-5 py-4 transition ${activeTab === "profil" ? "bg-white/20 font-bold shadow-sm" : "hover:bg-white/5"}`}>Tentang Kami (About)</button>
          <button onClick={() => {setActiveTab("kontak"); setIsSidebarOpen(false);}} className={`block w-full text-left rounded-xl px-5 py-4 transition ${activeTab === "kontak" ? "bg-white/20 font-bold shadow-sm" : "hover:bg-white/5"}`}>Info Kontak</button>
          
          <div className="pt-8 mt-4 border-t border-white/10">
            <button onClick={handleLogout} className="block w-full rounded-xl px-5 py-4 text-left font-medium text-red-300 transition hover:bg-red-500/20">Logout</button>
            <Link href="/" className="mt-3 block w-full rounded-xl px-5 py-4 text-left font-medium text-gray-300 transition hover:bg-white/5">Lihat Website ↗</Link>
          </div>
        </nav>
      </aside>

      {/* OVERLAY UNTUK HP */}
      {isSidebarOpen && <div className="fixed inset-0 z-30 bg-black/60 md:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* KONTEN UTAMA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-50">
        
        <header className="flex h-16 items-center justify-between bg-white px-4 shadow-sm md:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <span className="font-bold text-gray-800">Panel Admin</span>
          <div className="w-6"></div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-10">
          
          {/* TAB: BERITA */}
          {activeTab === "berita" && (
            <div className="mx-auto max-w-5xl animate-fade-up">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Kelola Berita & Artikel</h2>
              <form onSubmit={handleSimpanBerita} className="mb-10 rounded-3xl bg-white p-8 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Judul Berita</label>
                  <input type="text" value={formBerita.judul} onChange={(e) => setFormBerita({...formBerita, judul: e.target.value})} required className="w-full border border-gray-300 focus:border-[#113a2a] focus:ring-1 focus:ring-[#113a2a] outline-none rounded-xl px-4 py-3 transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Tanggal</label>
                  <input type="date" value={formBerita.tanggal} onChange={(e) => setFormBerita({...formBerita, tanggal: e.target.value})} required className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Kategori</label>
                  <input type="text" value={formBerita.kategori} onChange={(e) => setFormBerita({...formBerita, kategori: e.target.value})} placeholder="Contoh: Akademik" required className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Konten / Isi Paragraf</label>
                  <textarea value={formBerita.konten} onChange={(e) => setFormBerita({...formBerita, konten: e.target.value})} rows="5" className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3"></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Gambar Cover</label>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFormBerita, formBerita, "gambar")} className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50" />
                  {formBerita.gambar && <img src={formBerita.gambar} alt="Preview" className="mt-4 h-40 w-auto rounded-xl object-cover border shadow-sm" />}
                </div>
                <div className="md:col-span-2 pt-4 flex flex-wrap gap-4">
                  <button type="submit" className="bg-[#113a2a] hover:bg-opacity-90 text-white px-8 py-3 rounded-xl font-bold transition">{isEditingBerita ? "Update Berita" : "Simpan Berita Baru"}</button>
                  {isEditingBerita && <button type="button" onClick={() => {setIsEditingBerita(false); setFormBerita({ id: "", judul: "", tanggal: "", kategori: "", konten: "", gambar: "" });}} className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-300 transition">Batal</button>}
                </div>
              </form>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/80 text-sm text-gray-500 uppercase tracking-wider">
                        <th className="p-5 font-bold">Media</th>
                        <th className="p-5 font-bold">Judul Berita</th>
                        <th className="p-5 font-bold">Tanggal</th>
                        <th className="p-5 font-bold">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {beritaList.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50/50 transition">
                          <td className="p-5">{item.gambar ? <img src={item.gambar} className="w-20 h-16 rounded-lg object-cover shadow-sm" /> : <div className="w-20 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-[10px] text-gray-400">No Image</div>}</td>
                          <td className="p-5 font-semibold text-gray-800 text-lg">{item.judul}</td>
                          <td className="p-5 text-gray-500 font-medium">{item.tanggal}</td>
                          <td className="p-5">
                            <button onClick={() => { setFormBerita(item); setIsEditingBerita(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-blue-600 font-bold mr-5 hover:text-blue-800 transition">Edit</button>
                            <button onClick={() => setBeritaList(beritaList.filter(b => b.id !== item.id))} className="text-red-500 font-bold hover:text-red-700 transition">Hapus</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PRESTASI */}
          {activeTab === "prestasi" && (
            <div className="mx-auto max-w-5xl animate-fade-up">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Kelola Data Prestasi</h2>
              <form onSubmit={handleSimpanPrestasi} className="mb-10 rounded-3xl bg-white p-8 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Nama Prestasi</label>
                  <input type="text" value={formPrestasi.judul} onChange={(e) => setFormPrestasi({...formPrestasi, judul: e.target.value})} required className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Tahun</label>
                  <input type="number" value={formPrestasi.tahun} onChange={(e) => setFormPrestasi({...formPrestasi, tahun: e.target.value})} required className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Tingkat</label>
                  <input type="text" value={formPrestasi.tingkat} onChange={(e) => setFormPrestasi({...formPrestasi, tingkat: e.target.value})} placeholder="Contoh: Nasional" required className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Foto Dokumentasi</label>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFormPrestasi, formPrestasi, "gambar")} className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50" />
                  {formPrestasi.gambar && <img src={formPrestasi.gambar} alt="Preview" className="mt-4 h-40 w-auto rounded-xl object-cover border shadow-sm" />}
                </div>
                <div className="md:col-span-2 pt-4 flex gap-4">
                  <button type="submit" className="bg-[#113a2a] text-white px-8 py-3 rounded-xl font-bold">{isEditingPrestasi ? "Update Prestasi" : "Simpan Prestasi"}</button>
                  {isEditingPrestasi && <button type="button" onClick={() => {setIsEditingPrestasi(false); setFormPrestasi({ id: "", judul: "", tahun: "", tingkat: "", gambar: "" });}} className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-bold">Batal</button>}
                </div>
              </form>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/80 text-sm text-gray-500 uppercase tracking-wider">
                        <th className="p-5 font-bold">Foto</th>
                        <th className="p-5 font-bold">Nama Prestasi</th>
                        <th className="p-5 font-bold">Tahun</th>
                        <th className="p-5 font-bold">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {prestasiList.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50/50 transition">
                          <td className="p-5">{item.gambar ? <img src={item.gambar} className="w-20 h-16 rounded-lg object-cover shadow-sm" /> : "-"}</td>
                          <td className="p-5 font-semibold text-gray-800 text-lg">{item.judul} <span className="block text-sm text-gray-400 font-medium mt-1">Tingkat {item.tingkat}</span></td>
                          <td className="p-5 text-gray-500 font-medium">{item.tahun}</td>
                          <td className="p-5">
                            <button onClick={() => { setFormPrestasi(item); setIsEditingPrestasi(true); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-blue-600 font-bold mr-5 hover:underline">Edit</button>
                            <button onClick={() => setPrestasiList(prestasiList.filter(p => p.id !== item.id))} className="text-red-500 font-bold hover:underline">Hapus</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PROFIL / ABOUT */}
          {activeTab === "profil" && (
            <div className="mx-auto max-w-5xl animate-fade-up">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Kelola Halaman About</h2>
              <form onSubmit={handleSimpanProfil} className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Deskripsi Utama Sekolah</label>
                  <textarea value={profilData.deskripsi} onChange={(e) => setProfilData({...profilData, deskripsi: e.target.value})} rows="6" className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3"></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Visi Sekolah</label>
                    <textarea value={profilData.visi} onChange={(e) => setProfilData({...profilData, visi: e.target.value})} rows="5" className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Misi Sekolah</label>
                    <textarea value={profilData.misi} onChange={(e) => setProfilData({...profilData, misi: e.target.value})} rows="5" className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3"></textarea>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Gambar Banner (About)</label>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setProfilData, profilData, "gambarBanner")} className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50" />
                  {profilData.gambarBanner && <img src={profilData.gambarBanner} alt="Banner Preview" className="mt-4 h-56 w-full rounded-2xl object-cover border shadow-sm" />}
                </div>
                <div className="pt-4">
                  <button type="submit" className="bg-[#113a2a] text-white px-10 py-4 rounded-xl font-bold w-full md:w-auto hover:bg-opacity-90 transition">Update Data About</button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: KONTAK */}
          {activeTab === "kontak" && (
            <div className="mx-auto max-w-5xl animate-fade-up">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Kelola Informasi Kontak</h2>
              <form onSubmit={handleSimpanKontak} className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Alamat Lengkap</label>
                  <textarea value={kontakData.alamat} onChange={(e) => setKontakData({...kontakData, alamat: e.target.value})} rows="3" className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Nomor Telepon</label>
                  <input type="text" value={kontakData.telepon} onChange={(e) => setKontakData({...kontakData, telepon: e.target.value})} className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Alamat Email</label>
                  <input type="email" value={kontakData.email} onChange={(e) => setKontakData({...kontakData, email: e.target.value})} className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Link Instagram (Opsional)</label>
                  <input type="text" value={kontakData.instagram} onChange={(e) => setKontakData({...kontakData, instagram: e.target.value})} placeholder="https://instagram.com/..." className="w-full border border-gray-300 focus:border-[#113a2a] outline-none rounded-xl px-4 py-3" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="bg-[#113a2a] text-white px-10 py-4 rounded-xl font-bold w-full md:w-auto hover:bg-opacity-90 transition">Update Data Kontak</button>
                </div>
              </form>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}