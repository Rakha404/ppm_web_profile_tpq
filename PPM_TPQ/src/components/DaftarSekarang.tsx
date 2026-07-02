import React, { useState, useEffect } from "react";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import foto_kbm from "../assets/foto_kbm.jpeg";
import foro_gedung from "../assets/foto_gedung.jpeg";

interface DaftarSekarangProps {
  onNavigateToRegister: () => void;
}

export const DaftarSekarang: React.FC<DaftarSekarangProps> = ({ onNavigateToRegister }) => {
  const [judulUtama, setJudulUtama] = useState("Mulai Langkah Pertama Membentuk Generasi Qur'ani");
  const [deskripsi, setDeskripsi] = useState("Mari bimbing putra-putri Anda untuk mendapatkan fondasi ilmu agama, adab, dan hafalan Al-Qur'an yang kuat bersama Taman Pendidikan Al-Qur'an Raudlatul Ma'arif.");
  const [images, setImages] = useState<string[]>([foto_kbm, foro_gedung]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("https://tpq-backend-api.vercel.app/api/section-pendaftaran")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          if (resData.data.judul_utama) setJudulUtama(resData.data.judul_utama);
          if (resData.data.deskripsi_pendek) setDeskripsi(resData.data.deskripsi_pendek);
          if (resData.data.gambar_slideshow && resData.data.gambar_slideshow.length > 0) {
            const formatted = resData.data.gambar_slideshow.map((img: string) => `http://localhost:5000${img}`);
            setImages(formatted);
          }
        }
      })
      .catch((err) => console.error("Gagal sinkronisasi data section pendaftaran:", err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="w-full py-12 px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        <div data-aos="zoom-in" className="relative rounded-[2.5rem] bg-[#006432] text-white p-8 md:p-14 lg:p-16 shadow-xl shadow-emerald-950/20 overflow-hidden border-2 border-emerald-700/50 group">
          
          {/* SLIDESHOW */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {images.map((image, index) => (
              <div key={index} style={{ backgroundImage: `url(${image})` }} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-all duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0"}`} />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#006432]/95 via-[#004d26]/90 to-[#006432]/75 mix-blend-multiply z-1" />
          <div className="absolute inset-0 bg-[#006432]/40 z-1" />

          {/* KONTEN */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-full text-amber-400 text-xs font-black tracking-widest uppercase">
                <Sparkles size={14} className="animate-spin [animation-duration:4s]" />
                <span>Penerimaan Santri Baru (PPDB)</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight whitespace-pre-line">
                {judulUtama.includes("Generasi Qur'ani") ? (
                  <>
                    {judulUtama.replace("Generasi Qur'ani", "")}
                    <span className="text-amber-400">Generasi Qur'ani</span>
                  </>
                ) : judulUtama}
              </h2>
              <p className="text-emerald-50/90 text-xs md:text-sm font-semibold leading-relaxed">
                {deskripsi}
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button onClick={onNavigateToRegister} className="w-full lg:w-auto bg-amber-500 hover:bg-amber-400 text-[#006432] font-black text-xs md:text-sm px-8 py-4 rounded-2xl inline-flex items-center justify-center gap-3 shadow-lg uppercase tracking-wider active:scale-95 transition-all">
                <GraduationCap size={18} />
                <span>Daftar Sekarang</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DaftarSekarang;