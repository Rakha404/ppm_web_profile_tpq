import { School, BookOpen, Users2, ShieldCheck, Sparkles } from "lucide-react";

// Import foto-foto dokumentasi asli dari assets kamu
import foto_gedung from "../assets/foto_gedung.jpg";
import foto_kbm from "../assets/foto_kbm.jpeg";
import foto_guru from "../assets/foto_guru.jpg"; // Ganti dengan foto guru jika sudah ada

export const InfoLembaga = () => {
  const dataLembaga = [
    {
      image: foto_gedung,
      icon: <School size={24} className="stroke-[2.2]" />,
      category: "Fasilitas Fisik",
      title: "Bangunan Utama",
      desc: "Gedung pembelajaran yang representatif, aman, dan nyaman, dirancang khusus untuk mendukung konsentrasi santri dalam menghafal Al-Qur'an dan menuntut ilmu adab.",
      meta: "Kondisi Nyaman & Aman"
    },
    {
      image: foto_kbm,
      icon: <BookOpen size={24} className="stroke-[2.2]" />,
      category: "Kurikulum Praktis",
      title: "Kegiatan Belajar Mengajar",
      desc: "Metode pembelajaran interaktif dan aplikatif yang memadukan teori tajwid, tahsin, setoran hafalan hafalan, serta praktik fiqih ibadah harian secara terbimbing.",
      meta: "Metode Sorogan & Klasikal"
    },
    {
      image: foto_guru,
      icon: <Users2 size={24} className="stroke-[2.2]" />,
      category: "Sumber Daya Insani",
      title: "Tenaga Pengajar (Asatidz)",
      desc: "Dibimbing langsung oleh para Ustadz dan Ustadzah yang kompeten, beradab mulia, dan memiliki kompetensi tinggi dalam bidang sanad Al-Qur'an serta ilmu diniyah.",
      meta: "Kompeten & Beradab"
    }
  ];

  return (
    <section className="w-full bg-slate-50/50 py-16 px-6 md:px-12 font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HEADER SEKSION ================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[#006432] text-xs font-black tracking-widest uppercase">
            <Sparkles size={12} className="text-amber-500 animate-pulse" />
            <span>Profil Pilar Lembaga</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-[#006432] tracking-tight leading-tight">
            Mengenal Lingkungan Pendidikan Kami
          </h2>
          <div className="h-[3px] w-20 bg-[#FF9900] rounded-full mx-auto" />
        </div>

        {/* ================= GRID KARTU INFORMASI UTAMA ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {dataLembaga.map((item, index) => {
            const delayAnimasi = 200 + index * 150;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delayAnimasi}
                data-aos-duration="800"
                className="bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:border-emerald-100 flex flex-col justify-between group transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Bagian Atas: Gambar Dokumentasi dengan Overlay Potongan */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-emerald-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  {/* Badge Ikon Terapung */}
                  <div className="absolute bottom-4 left-5 z-10 bg-[#006432] border border-emerald-500/30 text-amber-400 p-3 rounded-2xl shadow-lg shadow-emerald-950/40 flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  {/* Efek Fade Gradasi Halus di bawah gambar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bagian Tengah: Teks Deskripsi */}
                <div className="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black tracking-wider uppercase text-amber-500">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 tracking-wide leading-snug group-hover:text-[#006432] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bagian Bawah Kartu: Info Status / Meta Tag */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-[10px] font-black uppercase text-slate-400 tracking-wider group-hover:text-emerald-800 transition-colors">
                    <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                    <span>{item.meta}</span>
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