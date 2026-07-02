import React from "react";
import { School, BookOpen, Users2, GraduationCap, Sparkles } from "lucide-react";

interface PilarItem {
  image: string;
  category: string;
  title: string;
  desc: string;
  iconType: string; // Tipe ikon dinamis
}

interface InfoLembagaProps {
  cards?: PilarItem[];
}

export const InfoLembaga: React.FC<InfoLembagaProps> = ({ cards }) => {
  const fallbackCards = [
    {
      image: "",
      category: "Fasilitas Fisik",
      title: "Bangunan Utama",
      desc: "Gedung pembelajaran yang representatif, aman, dan nyaman, dirancang khusus untuk mendukung konsentrasi santri dalam menghafal Al-Qur'an dan menuntut ilmu adab.",
      iconType: "school"
    },
    {
      image: "",
      category: "Kurikulum Praktis",
      title: "Kegiatan Belajar Mengajar",
      desc: "Metode pembelajaran interaktif dan aplikatif yang memadukan teori tajwid, tahsin, setoran hafalan hafalan, serta praktik fiqih ibadah harian secara terbimbing.",
      iconType: "book"
    },
    {
      image: "",
      category: "Sumber Daya Insani",
      title: "Tenaga Pengajar (Asatidz)",
      desc: "Dibimbing langsung oleh para Ustadz dan Ustadzah yang kompeten, beradab mulia, dan memiliki kompetensi tinggi dalam bidang sanad Al-Qur'an serta ilmu diniyah.",
      iconType: "users"
    }
  ];

  const finalCards = cards && cards.length > 0 ? cards : fallbackCards;

  // FUNGSI MEMETAKAN STRING DATABASE MENJADI ELEMEN IKON LUCIDE ASLI
  const renderPilarIcon = (type: string) => {
    switch (type) {
      case "school":
        return <School size={24} className="stroke-[2.2]" />;
      case "book":
        return <BookOpen size={24} className="stroke-[2.2]" />;
      case "users":
        return <Users2 size={24} className="stroke-[2.2]" />;
      default:
        return <GraduationCap size={24} className="stroke-[2.2]" />;
    }
  };

  return (
    <section className="w-full bg-slate-50/50 py-16 px-6 md:px-12 font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER SEKSION */}
        <div className="max-w-3xl mx-auto text-center space-y-4" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[#006432] text-xs font-black tracking-widest uppercase">
            <Sparkles size={12} className="text-amber-500 animate-pulse" />
            <span>Profil Pilar Lembaga</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#006432] tracking-tight leading-tight">
            Mengenal Lingkungan Pendidikan Kami
          </h2>
          <div className="h-3px w-20 bg-[#FF9900] rounded-full mx-auto" />
        </div>

        {/* GRID KARTU INFORMASI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {finalCards.map((item, index) => {
            const delayAnimasi = 200 + index * 150;
            
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delayAnimasi}
                data-aos-duration="800"
                className="bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:border-emerald-100 flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Bagian Atas: Gambar Dokumentasi */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-emerald-950">
                  <img
                    src={item.image ? `http://localhost:5000${item.image}` : "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* BADGE IKON DINAMIS BERDASARKAN INPUTAN ADMIN MONGO */}
                  <div className="absolute bottom-4 left-5 z-10 bg-gradient-to-br from-[#006432] to-emerald-900 border border-emerald-500/30 text-amber-400 p-3 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:rotate-6 transition-all duration-300">
                    {renderPilarIcon(item.iconType)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bagian Tengah: Teks Deskripsi */}
                <div className="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-wider uppercase text-amber-500 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 tracking-wide leading-snug group-hover:text-[#006432] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify font-medium">
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

export default InfoLembaga;