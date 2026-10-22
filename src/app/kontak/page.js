"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";

export default function KontakPage() {
  const [kontak, setKontak] = useState({
    alamat: "Alamat default...",
    telepon: "021-000000",
    email: "info@sekolah.com",
    instagram: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("kontakSekolah");
    if (saved) setKontak(JSON.parse(saved));
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 pt-32 pb-20 md:pt-40">
      <Reveal>
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-900 uppercase">Tanya Kami</p>
          <h1 className="font-display text-4xl font-bold md:text-6xl text-gray-900">Hubungi Kami</h1>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Kolom Informasi dari Admin */}
        <Reveal className="flex flex-col justify-center space-y-8 rounded-3xl bg-brand-900 p-8 text-white shadow-xl md:p-12">
          <div>
            <h2 className="font-display text-3xl font-bold">Informasi Kontak</h2>
            <p className="mt-2 text-brand-100">Silakan hubungi kami melalui jalur di bawah ini.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">📍</div>
              <div>
                <h3 className="text-sm font-semibold text-brand-100 uppercase tracking-wider">Alamat Lengkap</h3>
                <p className="mt-1 text-lg font-medium whitespace-pre-wrap">{kontak.alamat}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">📞</div>
              <div>
                <h3 className="text-sm font-semibold text-brand-100 uppercase tracking-wider">Telepon</h3>
                <p className="mt-1 text-lg font-medium">{kontak.telepon}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">✉️</div>
              <div>
                <h3 className="text-sm font-semibold text-brand-100 uppercase tracking-wider">Email</h3>
                <p className="mt-1 text-lg font-medium">{kontak.email}</p>
              </div>
            </div>

            {kontak.instagram && (
              <div className="flex items-start gap-4 pt-4 border-t border-white/20">
                <a href={kontak.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-brand-900 transition hover:bg-gray-100 hover:scale-105">
                  Kunjungi Instagram Kami →
                </a>
              </div>
            )}
          </div>
        </Reveal>

        {/* Kolom Form Kirim Pesan (Mockup UI Saja) */}
        <Reveal className="rounded-3xl border border-black/5 bg-white p-8 shadow-xl md:p-12">
          <h2 className="mb-6 font-display text-2xl font-bold text-gray-900">Kirim Pesan Langsung</h2>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Pesan terkirim (Mockup)"); }}>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Nama Lengkap</label>
              <input type="text" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-brand-900 focus:bg-white" placeholder="Masukkan nama..." required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Alamat Email</label>
              <input type="email" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-brand-900 focus:bg-white" placeholder="email@contoh.com" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Isi Pesan</label>
              <textarea rows="4" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-brand-900 focus:bg-white" placeholder="Tuliskan pertanyaan Anda di sini..." required></textarea>
            </div>
            <button className="w-full rounded-full bg-brand-900 py-4 font-bold text-white transition-transform hover:-translate-y-1 hover:shadow-lg">
              Kirim Pesan Sekarang
            </button>
          </form>
        </Reveal>
      </div>
    </main>
  );
}