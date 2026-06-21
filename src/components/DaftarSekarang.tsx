import React, { useState, useEffect } from "react";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

// 1. Import foto-foto kegiatan TPQ kamu dari folder assets
// Silakan sesuaikan nama file-nya dengan gambar asli yang kamu punya di folder assets
import foto_kbm from "../assets/foto_kbm.jpeg";
import foro_gedung from "../assets/foto_gedung.jpg";

interface DaftarSekarangProps {
  onNavigateToRegister: () => void;
}

export const DaftarSekarang: React.FC<DaftarSekarangProps> = ({ onNavigateToRegister }) => {
  // 2. Kumpulan foto-foto yang akan berganti otomatis
  const images = [foto_kbm, foro_gedung]; // Ganti dengan foto-foto kegiatan TPQ kamu
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 3. Logika untuk mengganti gambar otomatis setiap 5 detik (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); // Membersihkan interval saat komponen tidak dipakai
  }, [images.length]);

  return (
    <section className="w-full py-12 px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        <div 
          data-aos="zoom-in"
          className="relative rounded-[2.5rem] bg-[#006432] text-white p-8 md:p-14 lg:p-16 shadow-xl shadow-emerald-950/20 overflow-hidden border-2 border-emerald-700/50 group"
        >
          {/* ================= BACKGROUND SLIDESHOW OTOMATIS ================= */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {images.map((image, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${image})` }}
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-all duration-1000 ease-in-out ${
                  index === currentImageIndex 
                    ? "opacity-100 scale-100" 
                    : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* ================= PREMIUM OVERLAY & GRADIENT GLOW ================= */}
          {/* Lapisan Hijau Tua Pekat + Gradasi agar Teks Tetap Sangat Jelas Dibaca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#006432]/95 via-[#004d26]/90 to-[#006432]/75 mix-blend-multiply z-1" />
          <div className="absolute inset-0 bg-[#006432]/40 z-1" />

          {/* Efek Glow Kuning Ornamen */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/30 transition-colors duration-500 z-2" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-950/80 rounded-full blur-2xl pointer-events-none z-2" />
          
          {/* Ornamen Garis Ismali Abstrak Geometris */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-2" />

          {/* ================= KONTEN UTAMA (Z-INDEX DIATAS LATER) ================= */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
            
            {/* Bagian Teks & Informasi */}
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-full text-amber-400 text-xs font-black tracking-widest uppercase">
                <Sparkles size={14} className="animate-spin [animation-duration:4s]" />
                <span>Penerimaan Santri Baru (PPDB)</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight md:leading-none drop-shadow-sm">
                Mulai Langkah Pertama <br className="hidden md:inline" />
                Membentuk <span className="text-amber-400">Generasi Qur'ani</span>
              </h2>
              
              <p className="text-emerald-50/90 text-xs md:text-sm font-semibold leading-relaxed drop-shadow-xs">
                Mari bimbing putra-putri Anda untuk mendapatkan fondasi ilmu agama, adab, dan hafalan Al-Qur'an yang kuat bersama TPQ & MDTA Awaliyah Raudlatul Ma'arif An-Nahdliyah. Kuota pendaftaran terbatas untuk setiap kelasnya.
              </p>
            </div>

            {/* Bagian Tombol Aksi Mandiri */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col items-center gap-3">
              <button
                onClick={onNavigateToRegister}
                className="w-full lg:w-auto bg-amber-500 hover:bg-amber-400 text-[#006432] font-black text-sm md:text-base px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-200 group/btn relative overflow-hidden tracking-wide uppercase"
              >
                {/* Efek Kilau Shimmer */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_0.75s_ease-in-out]" />
                
                <GraduationCap size={20} className="stroke-[2.5]" />
                <span>Daftar Sekarang</span>
                <ArrowRight size={18} className="stroke-[2.5] transform group-hover/btn:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DaftarSekarang;