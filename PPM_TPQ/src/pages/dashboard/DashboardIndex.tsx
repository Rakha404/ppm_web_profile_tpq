import React from "react";
import { Link } from "react-router-dom";

export default function DashboardIndex() {
  return (
    <div className="p-6 font-sans min-h-screen bg-slate-50">
      {/* Header Dashboard */}
      <div className="mb-8 border-b pb-4">
        <h1 className="text-2xl md:text-3xl font-black text-slate-800">
          HALAMAN DASHBOARD UTAMA
        </h1>
        <p className="text-slate-500 text-xs md:text-sm mt-1">
          Selamat datang Admin, silakan pilih menu di bawah ini untuk mengelola konten website TPQ Raudlatul Ma'arif.
        </p>
      </div>

      {/* Grid Menu Navigasi CMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Card 1: Edit Teks & Banner */}
        <Link 
          to="/dashboard/edit-konten" 
          className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
            📝
          </div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            Kelola Teks & Banner
          </h3>
          <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed">
            Ubah judul website, motto lembaga, teks ajakan kritik saran, serta ganti foto utama banner halaman depan.
          </p>
        </Link>

        {/* Card 2: Upload Galeri */}
        <Link 
          to="/dashboard/upload-galeri" 
          className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-500 transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
            📸
          </div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            Upload Galeri Kegiatan
          </h3>
          <p className="text-slate-500 text-[11px] mt-1.5 leading-relaxed">
            Tambah album foto dokumentasi kegiatan terbaru, beserta subjudul atau kategori nama festival/acaranya.
          </p>
        </Link>

        {/* Card 3: Tempat Cadangan Menu Lain (Misal Data Santri / Kritik Saran nanti) */}
        <div className="p-6 bg-slate-100/60 rounded-2xl border border-dashed border-slate-300 flex flex-col justify-center items-center text-center opacity-60">
          <span className="text-xl mb-1">🔒</span>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Menu Selanjutnya
          </h3>
          <p className="text-[10px] text-slate-400 max-w-[200px] mt-1">
            Bisa kamu pakai untuk fitur rekap pendaftaran santri atau list kritik saran ke depannya.
          </p>
        </div>

      </div>
    </div>
  );
}