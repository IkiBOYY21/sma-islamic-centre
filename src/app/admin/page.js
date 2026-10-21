"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("berita"); 

  // --- STATE BERITA ---
  const [beritaList, setBeritaList] = useState([]);
  const [formBerita, setFormBerita] = useState({ id: "", judul: "", tanggal: "", kategori: "", konten: "", gambar: "" });
  const [isEditingBerita, setIsEditingBerita] = useState(false);

  // --- STATE PRESTASI ---
  const [prestasiList, setPrestasiList] = useState([]);
  const [formPrestasi, setFormPrestasi] = useState({ id: "", judul: "", tahun: "", tingkat: "", gambar: "" });
  const [isEditingPrestasi, setIsEditingPrestasi] = useState(false);

  // --- STATE PROFIL (ABOUT) ---
  const [profilData, setProfilData] = useState({ deskripsi: "", visi: "", misi: "", gambarBanner: "" });

  // --- STATE KONTAK ---
  const [kontakData, setKontakData] = useState({ alamat: "", telepon: "", email: "", instagram: "" });

  // --- INISIALISASI DATA DARI LOCALSTORAGE ---
  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") === "true") setIsLoggedIn(true);

    const savedBerita = localStorage.getItem("beritaSekolah");
    if (savedBerita) setBeritaList(JSON.parse(savedBerita));

    const savedPrestasi = localStorage.getItem("prestasiSekolah");
    if (savedPrestasi) setPrestasiList(JSON.parse(savedPrestasi));

    const savedProfil = localStorage.getItem("profilSekolah");
    if (savedProfil) setProfilData(JSON.parse(savedProfil));

    const savedKontak = localStorage.getItem("kontakSekolah");
    if (savedKontak) setKontakData(JSON.parse(savedKontak));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

  // --- FUNGSI UPLOAD GAMBAR (BASE64) UNTUK SEMUA FORM ---
  const handleImageUpload = (e, setFormState, currentState, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...currentState, [fieldName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // --- HANDLER SIMPAN BERITA ---
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

  // --- HANDLER SIMPAN PRESTASI ---
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

  // --- HANDLER SIMPAN PROFIL & KONTAK ---
  const handleSimpanProfil = (e) => {
    e.preventDefault();
    localStorage.setItem("profilSekolah", JSON.stringify(profilData));
    alert("Data halaman About berhasil disimpan!");
  };

  const handleSimpanKontak = (e) => {
    e.preventDefault();
    localStorage.setItem("kontakSekolah", JSON.stringify(kontakData));
    alert("Data Kontak berhasil disimpan!");
  };

  // --- TAMPILAN LOGIN ---
  if (!isLoggedIn) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl border border-black/5 text-center">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Admin Login</h1>
          <button onClick={() => { localStorage.setItem("adminLoggedIn", "true"); setIsLoggedIn(true); }} className="w-full rounded-full bg-brand-900 py-3 font-semibold text-white transition hover:bg-brand-700">
            Masuk ke Dashboard
          </button>
          <Link href="/" className="mt-6 block text-sm text-gray-500 hover:text-brand-900">← Kembali ke Website</Link>
        </div>
      </div>
    );
  }

  // --- TAMPILAN DASHBOARD ---
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 flex-shrink-0 bg-brand-900 text-white flex flex-col overflow-y-auto hidden md:flex">
        <div className="p-6 text-xl font-bold border-b border-white/20">Panel Admin</div>
        <nav className="flex-1 space-y-2 p-4">
          <button onClick={() => setActiveTab("berita")} className={`block w-full text-left rounded-xl px-4 py-3 transition ${activeTab === "berita" ? "bg-white/20 font-bold" : "hover:bg-white/10"}`}>Berita & Artikel</button>
          <button onClick={() => setActiveTab("prestasi")} className={`block w-full text-left rounded-xl px-4 py-3 transition ${activeTab === "prestasi" ? "bg-white/20 font-bold" : "hover:bg-white/10"}`}>Data Prestasi</button>
          <button onClick={() => setActiveTab("profil")} className={`block w-full text-left rounded-xl px-4 py-3 transition ${activeTab === "profil" ? "bg-white/20 font-bold" : "hover:bg-white/10"}`}>Tentang Kami (About)</button>
          <button onClick={() => setActiveTab("kontak")} className={`block w-full text-left rounded-xl px-4 py-3 transition ${activeTab === "kontak" ? "bg-white/20 font-bold" : "hover:bg-white/10"}`}>Info Kontak</button>
          <div className="pt-8 border-t border-white/20 mt-4">
            <button onClick={handleLogout} className="block w-full rounded-xl px-4 py-3 text-left text-red-200 transition hover:bg-red-500/20">Logout</button>
            <Link href="/" className="mt-2 block w-full rounded-xl px-4 py-3 text-left text-gray-300 transition hover:bg-white/10">Lihat Website ↗</Link>
          </div>
        </nav>
      </aside>

      {/* KONTEN UTAMA */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        
        {/* --- TAB: BERITA --- */}
        {activeTab === "berita" && (
          <div className="animate-fade-up">
            <h2 className="mb-6 text-2xl font-bold">Kelola Berita & Artikel</h2>
            <form onSubmit={handleSimpanBerita} className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Judul Berita</label>
                <input type="text" value={formBerita.judul} onChange={(e) => setFormBerita({...formBerita, judul: e.target.value})} required className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tanggal</label>
                <input type="date" value={formBerita.tanggal} onChange={(e) => setFormBerita({...formBerita, tanggal: e.target.value})} required className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Kategori</label>
                <input type="text" value={formBerita.kategori} onChange={(e) => setFormBerita({...formBerita, kategori: e.target.value})} placeholder="Contoh: Akademik" required className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Konten / Isi Paragraf</label>
                <textarea value={formBerita.konten} onChange={(e) => setFormBerita({...formBerita, konten: e.target.value})} rows="4" className="w-full border rounded-lg px-3 py-2"></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Upload Gambar Cover</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFormBerita, formBerita, "gambar")} className="w-full border rounded-lg px-3 py-2 bg-gray-50" />
                {formBerita.gambar && <img src={formBerita.gambar} alt="Preview" className="mt-3 h-32 w-auto rounded-lg object-cover border" />}
              </div>
              <div className="md:col-span-2 pt-2 flex gap-2">
                <button type="submit" className="bg-brand-900 text-white px-6 py-2 rounded-lg font-medium">{isEditingBerita ? "Update Berita" : "Simpan Berita Baru"}</button>
                {isEditingBerita && <button type="button" onClick={() => {setIsEditingBerita(false); setFormBerita({ id: "", judul: "", tanggal: "", kategori: "", konten: "", gambar: "" });}} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium">Batal</button>}
              </div>
            </form>

            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b bg-gray-50 text-sm">
                    <th className="p-3">Media</th>
                    <th className="p-3">Judul Berita</th>
                    <th className="p-3">Tanggal</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {beritaList.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{item.gambar ? <img src={item.gambar} className="w-16 h-12 rounded object-cover" /> : <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center text-xs">Kosong</div>}</td>
                      <td className="p-3 font-medium">{item.judul}</td>
                      <td className="p-3 text-sm text-gray-500">{item.tanggal}</td>
                      <td className="p-3">
                        <button onClick={() => { setFormBerita(item); setIsEditingBerita(true); }} className="text-blue-600 font-medium mr-3 hover:underline">Edit</button>
                        <button onClick={() => setBeritaList(beritaList.filter(b => b.id !== item.id))} className="text-red-600 font-medium hover:underline">Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB: PRESTASI --- */}
        {activeTab === "prestasi" && (
          <div className="animate-fade-up">
            <h2 className="mb-6 text-2xl font-bold">Kelola Data Prestasi</h2>
            <form onSubmit={handleSimpanPrestasi} className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Nama Prestasi / Penghargaan</label>
                <input type="text" value={formPrestasi.judul} onChange={(e) => setFormPrestasi({...formPrestasi, judul: e.target.value})} required className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tahun</label>
                <input type="number" value={formPrestasi.tahun} onChange={(e) => setFormPrestasi({...formPrestasi, tahun: e.target.value})} required className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tingkat (Contoh: Nasional)</label>
                <input type="text" value={formPrestasi.tingkat} onChange={(e) => setFormPrestasi({...formPrestasi, tingkat: e.target.value})} required className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Foto Dokumentasi Prestasi</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setFormPrestasi, formPrestasi, "gambar")} className="w-full border rounded-lg px-3 py-2 bg-gray-50" />
                {formPrestasi.gambar && <img src={formPrestasi.gambar} alt="Preview" className="mt-3 h-32 w-auto rounded-lg object-cover border" />}
              </div>
              <div className="md:col-span-2 pt-2 flex gap-2">
                <button type="submit" className="bg-brand-900 text-white px-6 py-2 rounded-lg font-medium">{isEditingPrestasi ? "Update Prestasi" : "Simpan Prestasi"}</button>
                {isEditingPrestasi && <button type="button" onClick={() => {setIsEditingPrestasi(false); setFormPrestasi({ id: "", judul: "", tahun: "", tingkat: "", gambar: "" });}} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium">Batal</button>}
              </div>
            </form>

            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b bg-gray-50 text-sm">
                    <th className="p-3">Foto</th>
                    <th className="p-3">Nama Prestasi</th>
                    <th className="p-3">Tahun</th>
                    <th className="p-3">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {prestasiList.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{item.gambar ? <img src={item.gambar} className="w-16 h-12 rounded object-cover" /> : "-"}</td>
                      <td className="p-3 font-medium">{item.judul} <span className="block text-xs text-gray-500">Tingkat {item.tingkat}</span></td>
                      <td className="p-3">{item.tahun}</td>
                      <td className="p-3">
                        <button onClick={() => { setFormPrestasi(item); setIsEditingPrestasi(true); }} className="text-blue-600 font-medium mr-3 hover:underline">Edit</button>
                        <button onClick={() => setPrestasiList(prestasiList.filter(p => p.id !== item.id))} className="text-red-600 font-medium hover:underline">Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- TAB: PROFIL / ABOUT --- */}
        {activeTab === "profil" && (
          <div className="animate-fade-up">
            <h2 className="mb-6 text-2xl font-bold">Kelola Halaman About</h2>
            <form onSubmit={handleSimpanProfil} className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Deskripsi Utama Sekolah</label>
                <textarea value={profilData.deskripsi} onChange={(e) => setProfilData({...profilData, deskripsi: e.target.value})} rows="5" className="w-full border rounded-lg px-3 py-2"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Visi Sekolah</label>
                  <textarea value={profilData.visi} onChange={(e) => setProfilData({...profilData, visi: e.target.value})} rows="4" className="w-full border rounded-lg px-3 py-2"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Misi Sekolah</label>
                  <textarea value={profilData.misi} onChange={(e) => setProfilData({...profilData, misi: e.target.value})} rows="4" className="w-full border rounded-lg px-3 py-2"></textarea>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Gambar Banner / Fasilitas (About)</label>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setProfilData, profilData, "gambarBanner")} className="w-full border rounded-lg px-3 py-2 bg-gray-50" />
                {profilData.gambarBanner && <img src={profilData.gambarBanner} alt="Banner Preview" className="mt-3 h-48 w-full max-w-2xl rounded-lg object-cover border" />}
              </div>
              <button type="submit" className="bg-brand-900 text-white px-8 py-3 rounded-xl font-medium w-full md:w-auto">Update Data About</button>
            </form>
          </div>
        )}

        {/* --- TAB: KONTAK --- */}
        {activeTab === "kontak" && (
          <div className="animate-fade-up">
            <h2 className="mb-6 text-2xl font-bold">Kelola Informasi Kontak</h2>
            <form onSubmit={handleSimpanKontak} className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Alamat Lengkap</label>
                <textarea value={kontakData.alamat} onChange={(e) => setKontakData({...kontakData, alamat: e.target.value})} rows="2" className="w-full border rounded-lg px-3 py-2"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                <input type="text" value={kontakData.telepon} onChange={(e) => setKontakData({...kontakData, telepon: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Alamat Email</label>
                <input type="email" value={kontakData.email} onChange={(e) => setKontakData({...kontakData, email: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Link Instagram (Opsional)</label>
                <input type="text" value={kontakData.instagram} onChange={(e) => setKontakData({...kontakData, instagram: e.target.value})} placeholder="https://instagram.com/..." className="w-full border rounded-lg px-3 py-2" />
              </div>
              <div className="md:col-span-2 pt-2">
                <button type="submit" className="bg-brand-900 text-white px-8 py-3 rounded-xl font-medium w-full md:w-auto">Update Data Kontak</button>
              </div>
            </form>
          </div>
        )}

      </main>
    </div>
  );
}