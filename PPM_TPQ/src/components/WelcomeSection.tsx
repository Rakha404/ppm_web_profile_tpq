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

<<<<<<< HEAD
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
=======
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600 group-hover:text-amber-400 transition-colors duration-300" />,
      count: "150+",
      label: "Santri Aktif",
      desc: "Generasi muda yang sedang menempuh pendidikan Al-Qur'an & Diniyah."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600 group-hover:text-amber-400 transition-colors duration-300" />,
      count: "12",
      label: "Asatidzah",
      desc: "Ustadz & Ustadzah kompeten yang tulus membimbing dengan metode terbaik."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-emerald-600 group-hover:text-amber-400 transition-colors duration-300" />,
      count: "500+",
      label: "Alumni",
      desc: "Telah berkiprah dan menerapkan ilmu keagamaan di masyarakat luas."
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-slate-50/50 font-sans select-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* GRID KARTU STATISTIK PREMIUM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group relative bg-white border border-slate-100/80 rounded-[2.5rem] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,100,50,0.06)] flex flex-col items-center overflow-hidden"
            >
              {/* Efek Hiasan Siluet Lingkaran Halus Pas Hover */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-125 pointer-events-none" />

              {/* Icon Container - Berubah Hijau Gelap Saat Hover */}
              <div className="bg-emerald-50/60 border border-emerald-100/30 p-4 rounded-2xl transition-all duration-500 mb-6 group-hover:bg-[#006432] group-hover:scale-110 group-hover:shadow-md">
                {item.icon}
              </div>
              
              {/* Angka & Label */}
              <div className="space-y-1 mb-2">
                <h3 className="text-4xl font-black text-slate-800 tracking-tight group-hover:text-emerald-900 transition-colors duration-300">
                  {item.count}
                </h3>
                <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>

              {/* Garis Pembatas - Melebar Cantik Pas Hover */}
              <div className="w-6 h-[3px] bg-amber-400 rounded-full mb-4 transition-all duration-300 group-hover:w-12" />

              {/* Deskripsi */}
              <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-[240px] group-hover:text-slate-600 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

>>>>>>> 370e8fa132afda3eb711a85680edbaaf349df238
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