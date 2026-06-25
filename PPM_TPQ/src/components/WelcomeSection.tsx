import { useState, useEffect } from "react";
// Import foto default/bawaan lokal buat cadangan kalau database belum punya foto
import defaultHero from "../assets/hero.png"; 

export const WelcomeSection = () => {
  const [konten, setKonten] = useState({
    hero_subtitle: "PENERIMAAN SANTRI BARU",
    hero_title: "MARI BERGABUNG BERSAMA KAMI",
    hero_bold_title: "DAFTAR SEKARANG",
    hero_motto: "Langkah Awal Terbaik untuk Membimbing Putra-Putri Anda Menjadi Generasi yang Berilmu, Beradab, dan Berjiwa Qur'ani.",
    hero_image_url: "" // Tambahkan tampungan URL foto dari MongoDB
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setKonten(resData.data);
        }
      })
      .catch((err) => console.log("Gagal mengambil data CMS:", err));
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-slate-900 text-white py-20 px-6 font-sans overflow-hidden">
      
      {/* KANAN/BACKGROUND: FOTO DINAMIS */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          // Jika hero_image_url dari MongoDB ada, panggil URL server backend. 
          // Jika kosong, pakai foto default lokal bawaan proyekmu.
          src={konten.hero_image_url ? `http://localhost:5000${konten.hero_image_url}` : defaultHero} 
          alt="TPQ Raudlatul Ma'arif" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* KIRI/KONTEN UTAMA */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
        <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block">
          {konten.hero_subtitle}
        </span>
        
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
          {konten.hero_title} <br />
          <span className="text-emerald-500">{konten.hero_bold_title}</span>
        </h1>
        
        <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          {konten.hero_motto}
        </p>

        <div className="pt-4">
          <button className="bg-[#006432] hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer">
            Mulai Pendaftaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;