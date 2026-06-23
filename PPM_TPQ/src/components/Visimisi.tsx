import { CheckCircle2, Target, Award } from "lucide-react";

export const Visimisi = () => {
  const listMisi = [
    "Menyelenggarakan pendidikan Al-Qur'an yang berkualitas dan praktis.",
    "Membentuk karakter santri yang berakhlakul karimah dan disiplin.",
    "Menanamkan nilai-nilai dasar Islam Ahlussunnah wal Jama'ah An-Nahdliyah.",
    "Menjalin sinergi kuat antara lembaga, orang tua, dan masyarakat."
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 font-sans text-slate-800 overflow-hidden bg-slate-50/40">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* HEADER UTAMA CLEAN */}
        <div className="text-center space-y-2" data-aos="fade-down" data-aos-duration="1000">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
            Visi, Misi & Moto
          </h2>
          <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto" />
        </div>

        {/* CONTAINER GRID KARTU */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* BOX 1: VISI UTAMA */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="200"
            data-aos-duration="800"
            className="bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:shadow-[0_25px_50px_-20px_rgba(0,100,50,0.06)] hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-emerald-50 text-[#006432] rounded-2xl group-hover:bg-[#006432] group-hover:text-white transition-colors duration-300">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Visi Utama</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
                "Mewujudkan generasi Muslim yang mencintai Al-Qur'an, berakhlak mulia, unggul dalam prestasi keagamaan, serta teguh dalam mengamalkan syariat Islam berlandaskan paham Ahlussunnah wal Jama'ah."
              </p>
            </div>
          </div>

          {/* BOX 2: MISI LEMBAGA */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400"
            data-aos-duration="800"
            className="bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:shadow-[0_25px_50px_-20px_rgba(0,100,50,0.06)] hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-emerald-50 text-[#006432] rounded-2xl group-hover:bg-[#006432] group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Misi Lembaga</h3>
              </div>
              <div className="flex flex-col gap-3.5">
                {listMisi.map((misi, index) => (
                  <div key={index} className="flex items-start gap-3.5 group/item">
                    <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-50 text-emerald-700 font-extrabold text-xs shrink-0 mt-0.5 transition-colors duration-300 group-hover/item:bg-amber-400 group-hover/item:text-emerald-950">
                      {index + 1}
                    </span>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{misi}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOX 3: MOTO PENDIDIKAN */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="600"
            data-aos-duration="800"
            className="bg-amber-400/10 border border-amber-200/40 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:shadow-[0_25px_50px_-20px_rgba(245,158,11,0.08)] hover:-translate-y-1.5 transition-all duration-500 md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-amber-400 text-amber-950 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Moto Pendidikan</h3>
              </div>
              <div className="flex flex-col justify-center items-center bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-amber-200/50 shadow-xs space-y-3">
                <p className="text-[#006432] text-md md:text-lg font-black italic tracking-wide">
                  "Berilmu Amal'iah,"
                </p>
                <p className="text-[#006432] text-md md:text-lg font-black italic tracking-wide">
                  "Beramal Ilmi'ah,"
                </p>
                <p className="text-[#006432] text-md md:text-lg font-black italic tracking-wide">
                  "Berakhlak Karimah"
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