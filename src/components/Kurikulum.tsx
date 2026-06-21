import { BookOpen, BookMarked, Heart, Sparkles } from "lucide-react";

export const KurikulumFokus = () => {
  const points = [
    {
      icon: <BookOpen size={28} className="stroke-[2.2]" />,
      title: "Keutamaan Al-Qur'an",
      desc: "Metode pengajaran sistematis untuk memastikan santri mampu membaca Al-Qur'an dengan kaidah tajwid dan tahsin yang benar sejak usia dini.",
      badge: "Tahsin & Tajwid",
      color: "border-emerald-500 text-[#006432] bg-emerald-50/50"
    },
    {
      icon: <BookMarked size={28} className="stroke-[2.2]" />,
      title: "Fondasi Ilmu Agama",
      desc: "Memberikan pemahaman komprehensif mengenai dasar-dasar ilmu Tauhid, Fiqih ibadah praktis, serta Sejarah Kebudayaan Islam.",
      badge: "Fiqih & Tauhid",
      color: "border-amber-500 text-[#FF9900] bg-amber-50/40"
    },
    {
      icon: <Heart size={28} className="stroke-[2.2]" />,
      title: "Penanaman Adab & Karakter",
      desc: "Membentuk akhlakul karimah sebagai identitas santri melalui doa harian, etika sosial, sesuai tuntunan Ahlussunnah wal Jama’ah An-Nahdliyah.",
      badge: "Aswaja An-Nahdliyah",
      color: "border-emerald-500 text-[#006432] bg-emerald-50/50"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HEADER SEKSION ================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[#006432] text-xs font-black tracking-widest uppercase shadow-2xs">
            <Sparkles size={12} className="text-amber-500 animate-pulse" />
            <span>Sistem Pendidikan</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#006432] tracking-tight leading-tight">
            Pendekatan Kurikulum & Pembelajaran
          </h2>
          <div className="h-[3px] w-20 bg-[#FF9900] rounded-full mx-auto" />
          <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-2xl mx-auto pt-1">
            Kami menerapkan kurikulum terpadu yang menitikberatkan pada keselarasan antara aspek kognitif, spiritual, dan perilaku demi mencetak generasi saleh-salihah.
          </p>
        </div>

        {/* ================= GRID KARTU INTERAKTIF ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {points.map((item, index) => {
            // Animasi staggered delay berurutan agar estetik
            const delay = 200 + index * 150;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-duration="800"
                className="bg-slate-50/70 border border-slate-200/60 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between group hover:bg-white hover:shadow-2xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Garis Aksen Dekoratif di Atas Kartu */}
                <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-[#006432] to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6">
                  {/* Container Ikon */}
                  <div className={`p-3.5 w-14 h-14 rounded-2xl border flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                    {item.icon}
                  </div>

                  {/* Informasi Konten */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-wider uppercase text-slate-400 block group-hover:text-amber-500 transition-colors">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 tracking-wide leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Penanda Desain Pojok Kanan Bawah */}
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest pt-8 self-end group-hover:text-[#006432]/30 transition-colors">
                  Fokus 0{index + 1}
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