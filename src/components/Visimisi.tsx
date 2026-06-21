import React from "react";
import { CheckCircle2, Target, Award } from "lucide-react";

export const Visimisi = () => {
  const listMisi = [
    "Menyelenggarakan pendidikan Al-Qur'an yang berkualitas dan praktis.",
    "Membentuk karakter santri yang berakhlakul karimah dan disiplin.",
    "Menanamkan nilai-nilai dasar Islam Ahlussunnah wal Jama'ah An-Nahdliyah.",
    "Menjalin sinergi kuat antara lembaga, orang tua, dan masyarakat."
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 font-sans text-slate-800 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER UTAMA */}
        <div className="flex items-center justify-center gap-6" data-aos="fade-down" data-aos-duration="1000">
          <div className="h-[4px] bg-yellow-300 flex-grow max-w-[100px] md:max-w-[300px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black text-[#006432] tracking-wide text-center whitespace-nowrap">
            Visi, Misi & Moto
          </h2>
          <div className="h-[4px] bg-yellow-300 flex-grow max-w-[100px] md:max-w-[300px] rounded-full" />
        </div>

        {/* CONTAINER GRID KARTU (DESAIN BARU SUPAYA LEBIH MENONJOL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* BOX 1: VISI UTAMA (Muncul Pertama - Delay 200ms) */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="800"
            className="bg-slate-50/60 border border-slate-200/70 rounded-[2.5rem] p-8 shadow-md relative overflow-hidden flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-[#006432]" />
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-[#006432] rounded-2xl shadow-2xs">
                  <Target size={26} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-wide">Visi Utama</h3>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed text-justify font-semibold">
                "Mewujudkan generasi Muslim yang mencintai Al-Qur'an, berakhlak mulia, unggul dalam prestasi keagamaan, serta teguh dalam mengamalkan syariat Islam berlandaskan paham Ahlussunnah wal Jama'ah."
              </p>
            </div>
          </div>

          {/* BOX 2: MISI LEMBAGA (Muncul Kedua - Delay 400ms) */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            data-aos-duration="800"
            className="bg-slate-50/60 border border-slate-200/70 rounded-[2.5rem] p-8 shadow-md relative overflow-hidden flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-[#006432]" />
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 border border-emerald-100 text-[#006432] rounded-2xl shadow-2xs">
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-wide">Misi Lembaga</h3>
              </div>
              <div className="flex flex-col gap-3">
                {listMisi.map((misi, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/40 border border-slate-400/30 p-2.5 rounded-2xl group-hover:bg-slate-50/50 transition-colors">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#006432] text-white text-[10px] font-black shrink-0 mt-0.5 shadow-sm">{index + 1}</span>
                    <p className="text-slate-600 text-xs font-semibold leading-relaxed">{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOX 3: MOTO PENDIDIKAN (Muncul Ketiga - Delay 600ms) */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="600"
            data-aos-duration="800"
            className="bg-amber-50/40 border border-amber-200/60 rounded-[2.5rem] p-8 shadow-md relative overflow-hidden flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:border-amber-200 transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-yellow-300" />
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-50 border border-amber-100 text-yellow-400 rounded-2xl shadow-2xs"><Award size={26} /></div>
                <h3 className="text-xl font-black text-slate-900 tracking-wide">Moto Pendidikan</h3>
              </div>
              <div className="pt-4 flex flex-col justify-center items-center h-full min-h-[140px] text-center bg-white/80 rounded-2xl p-5 border border-amber-100/50 shadow-inner group-hover:bg-amber-50/30 transition-colors">
                <p className="text-[#006432] text-md md:text-lg font-black italic tracking-wide leading-relaxed">
                  "Berilmu Amal'iah, <br /> Beramal Ilmi'ah, <br /> Berakhlak Karimah"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Visimisi;