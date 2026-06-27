import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DashboardIndex() {
  const [totalSantri, setTotalSantri] = useState<number>(0);

  useEffect(() => {
    // Mengambil total pendaftar santri dari backend untuk dipajang di halaman utama
    fetch("http://localhost:5000/api/pendaftaran")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setTotalSantri(resData.data.length);
        }
      })
      .catch((err) => console.error("Gagal memuat total pendaftar untuk dashboard stats:", err));
  }, []);

  return (
    <div className="p-6 font-sans min-h-screen bg-slate-50">

      {/* ================= HEADER DASHBOARD BANNER ================= */}
      <div className="bg-gradient-to-r from-[#006432] to-emerald-950 p-6 md:p-8 rounded-3xl shadow-xs text-white mb-8 relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-800/20 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="bg-yellow-300 text-emerald-950 px-4 py-1 rounded-full text-[10px] font-black tracking-wider uppercase inline-block shadow-sm">
            Admin Panel Active
          </span>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Selamat Datang di CMS Utama
          </h1>
          <p className="text-emerald-100/80 text-xs md:text-sm font-medium leading-relaxed max-w-xl">
            Silakan pilih modul navigasi kontrol di bawah ini untuk merubah susunan data teks bergradasi, album foto, slider gambar, hingga memverifikasi calon santri baru.
          </p>
        </div>
      </div>

      {/* ================= GRID MENU NAVIGASI CMS BERKEMBANG ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Card 1: Edit Teks Sejarah & Struktur */}
        <Link
          to="/dashboard/edit-konten"
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              📝
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              Kelola Teks & Grup Poin
            </h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">
              Ubah judul utama website, isi teks paragraf deskripsi sejarah, serta manipulasi array grup list poin visi-misi secara dinamis.
            </p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">
            Buka Pengaturan →
          </span>
        </Link>

        {/* Card 2: Upload Galeri */}
        <Link
          to="/dashboard/upload-galeri"
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              📸
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              Upload Galeri Kegiatan
            </h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">
              Tambah album foto dokumentasi kegiatan terbaru, beserta subjudul atau kategori nama festival/acara keagamaan santri TPQ.
            </p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">
            Buka Pengaturan →
          </span>
        </Link>

        {/* Card 3: Kelola Banner Slider Carousel Database */}
        <Link
          to="/dashboard/edit-banner"
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              🌁
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              Kelola Slider & Banner
            </h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">
              Atur sistem dynamic slider carousel per halaman (Homepage, Profil, Kegiatan) langsung membaca unggahan foto dari database MongoDB.
            </p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">
            Buka Pengaturan →
          </span>
        </Link>

        {/* Card Modul Baru: Kelola Banner Banner Pendaftaran */}
        <Link
          to="/dashboard/edit-section-pendaftaran"
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              📢
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              Kelola CTA Banner PPDB
            </h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">
              Ubah teks headline, kalimat paragraf ajakan, serta ganti/tambah banyak koleksi gambar slideshow latar belakang section pendaftaran depan.
            </p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">
            Buka Pengaturan →
          </span>
        </Link>

        {/* Card Modul Baru: Kelola Dua Halaman Dinamis */}
        <Link 
          to="/dashboard/kelola-halaman" 
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              🖥️
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              Kelola Teks Profil & Pendidikan
            </h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">
              Panel ganda khusus mengatur konten judul teks, susunan banyak paragraf, serta unggahan foto utama untuk halaman Profil dan halaman Pendidikan.
            </p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">
            Buka Pengaturan →
          </span>
        </Link>

        {/* Card 3: Kelola Kritik & Saran Real-time Database */}
        <Link 
          to="/dashboard/kritik-saran" 
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              📩
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              Kotak Masukan Kritik Saran
            </h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">
              Lihat, baca, dan evaluasi rekapitulasi pesan aspirasi wali murid dari database MongoDB secara terstruktur lengkap dengan pintasan chat respon balik WhatsApp.
            </p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">
            Buka Pengaturan →
          </span>
        </Link>

        <Link 
          to="/dashboard/kelola-kontak" 
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
              📞
            </div>
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">Kelola Kontak Navigasi</h3>
            <p className="text-slate-500 text-[11px] mt-2 leading-relaxed font-medium">Ubah nomor telepon topbar, tautan profil Instagram, Facebook, Youtube, serta isi dua tombol layanan WhatsApp secara dinamis.</p>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mt-4 block group-hover:translate-x-1 transition-transform">Buka Pengaturan →</span>
        </Link>

        {/* Card 4: Data Real-Time Pendaftaran Santri Baru */}
        <Link
          to="/dashboard/pendaftaran"
          className="p-6 bg-white rounded-2xl shadow-xs border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group md:col-span-3 flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-gradient-to-r hover:from-white hover:to-emerald-50/20"
        >
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-lg shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
              📋
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-wide">
                Data Rekapitulasi Pendaftaran Online
              </h3>
              <p className="text-slate-500 text-[11px] leading-relaxed font-medium max-w-xl">
                Pantau daftar biodata wali murid dan santri baru yang masuk secara real-time. Terhubung otomatis dengan fitur format link klik chat langsung ke nomor WhatsApp orang tua.
              </p>
            </div>
          </div>
          {/* Badge Jumlah Pendaftar Otomatis */}
          <div className="bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 text-center shrink-0 min-w-[120px] group-hover:bg-white group-hover:border-emerald-200 transition-all">
            <span className="block text-[9px] font-black uppercase text-slate-400 tracking-wider">Pendaftar</span>
            <span className="text-xl font-black text-[#006432]">{totalSantri} <span className="text-xs font-normal text-slate-500">Anak</span></span>
          </div>
        </Link>



      </div>
    </div>
  );
}