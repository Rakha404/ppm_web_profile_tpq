import React from "react";
import { BookOpen, BookMarked, Heart, Sparkles, GraduationCap } from "lucide-react";

interface KurikulumItem {
  badge: string;
  title: string;
  desc: string;
}

interface KurikulumFokusProps {
  points?: KurikulumItem[];
}

export const KurikulumFokus: React.FC<KurikulumFokusProps> = ({ points }) => {
  // 1. Fallback data statis asli jika di database MongoDB admin masih kosong/belum diisi
  const fallbackPoints = [
    {
      badge: "Tahsin & Tajwid",
      title: "Keutamaan Al-Qur'an",
      desc: "Metode pengajaran sistematis untuk memastikan santri mampu membaca Al-Qur'an dengan kaidah tajwid dan tahsin yang benar sejak usia dini."
    },
    {
      badge: "Fiqih & Tauhid",
      title: "Fondasi Ilmu Agama",
      desc: "Memberikan pemahaman komprehensif mengenai dasar-dasar ilmu Tauhid, Fiqih ibadah praktis, serta Sejarah Kebudayaan Islam."
    },
    {
      badge: "Aswaja An-Nahdliyah",
      title: "Penanaman Adab & Karakter",
      desc: "Membentuk akhlakul karimah sebagai identitas santri melalui doa harian, etika sosial, sesuai tuntunan Ahlussunnah wal Jama’ah An-Nahdliyah."
    }
  ];

  const finalPoints = points && points.length > 0 ? points : fallbackPoints;

  // Kumpulan template icon melingkar dinamis untuk kartu
  const iconsTemplate = [
    <BookOpen size={26} className="stroke-[2.2]" />,
    <BookMarked size={26} className="stroke-[2.2]" />,
    <Heart size={26} className="stroke-[2.2]" />
  ];

  // Kumpulan style warna border bergantian khas TPQ agar tetep estetik
  const colorsTemplate = [
    "border-emerald-500 text-[#006432] bg-emerald-50/50 group-hover:bg-[#006432] group-hover:text-white",
    "border-amber-500 text-[#FF9900] bg-amber-50/40 group-hover:bg-amber-500 group-hover:text-white"
  ];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-2" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[#006432] text-xs font-black tracking-widest uppercase shadow-2xs mb-2">
            <Sparkles size={12} className="text-amber-500 animate-pulse" />
            <span>Sistem Pendidikan</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black text-[#006432] tracking-tight">
            Fokus Utama Program Pendidikan
          </h3>
          <div className="h-[3px] w-12 bg-amber-400 rounded-full mx-auto mt-2" />
        </div>

        {/* ================= GRID KARTU DINAMIS MONGO ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {finalPoints.map((item, index) => {
            const delay = 150 + index * 100;
            // Pilih icon & warna secara berputar (carousel loop) menggunakan modulus indeks array
            const currentIcon = iconsTemplate[index % iconsTemplate.length] || <GraduationCap size={26} className="stroke-[2.2]" />;
            const currentStyle = colorsTemplate[index % colorsTemplate.length];

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="800"
                className="bg-slate-50/60 border border-slate-200/60 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between group hover:shadow-[0_25px_50px_-20px_rgba(0,100,50,0.06)] hover:-translate-y-1.5 transition-all duration-500 bg-white"
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006432] to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6">
                  {/* ICON REUSABLE DENGAN MODULO */}
                  <div className={`p-3.5 w-14 h-14 rounded-2xl border flex items-center justify-center shadow-2xs transition-all duration-500 ${currentStyle}`}>
                    {currentIcon}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700/70 block group-hover:text-amber-500 transition-colors">
                      {item.badge}
                    </span>
                    <h4 className="text-lg font-black text-slate-800 tracking-wide leading-snug group-hover:text-emerald-950 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed text-justify font-medium transition-colors group-hover:text-slate-600 whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default KurikulumFokus;