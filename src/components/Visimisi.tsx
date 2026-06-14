import { CheckCircle2, Target, Award } from "lucide-react";

export const VisiMisi = () => {
  // Data Misi dalam bentuk array agar mudah dikelola atau di-loop
  const listMisi = [
    "Menyelenggarakan pendidikan Al-Qur'an yang berkualitas dan praktis.",
    "Membentuk karakter santri yang berakhlakul karimah dan disiplin.",
    "Menanamkan nilai-nilai dasar Islam Ahlussunnah wal Jama'ah An-Nahdliyah.",
    "Menjalin sinergi kuat antara lembaga, orang tua, dan masyarakat."
  ];

  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:px-12 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER SECTION */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-[4px] bg-[#FF9900] flex-grow max-w-[100px] md:max-w-[300px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black text-[#006432] tracking-wide text-center whitespace-nowrap">
            Visi, Misi & Moto
          </h2>
          <div className="h-[4px] bg-[#FF9900] flex-grow max-w-[100px] md:max-w-[300px] rounded-full" />
        </div>

        {/* LAYOUT GRID: 3 Kolom Sejajar (Visi, Misi, Moto) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* BOX 1: VISI UTAMA */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xs border border-slate-100 relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            {/* Dekorasi Aksen Hijau */}
            <div className="absolute top-0 left-0 w-full h-3 bg-[#006432]" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 text-[#006432] rounded-2xl">
                  <Target size={26} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-wide">Visi Utama</h3>
              </div>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify font-medium">
                "Mewujudkan generasi Muslim yang mencintai Al-Qur'an, berakhlak mulia, unggul dalam prestasi keagamaan, serta teguh dalam mengamalkan syariat Islam berlandaskan paham Ahlussunnah wal Jama'ah."
              </p>
            </div>

            <div className="text-[11px] font-bold text-emerald-700/40 uppercase tracking-widest pt-8 self-end">
              Raudlatul Ma'arīf
            </div>
          </div>

          {/* BOX 2: MISI LEMBAGA */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xs border border-slate-100 relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
            {/* Dekorasi Aksen Hijau */}
            <div className="absolute top-0 left-0 w-full h-3 bg-[#006432]" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 text-[#006432] rounded-2xl">
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-wide">Misi Lembaga</h3>
              </div>

              {/* List Item Misi */}
              <div className="flex flex-col gap-3">
                {listMisi.map((misi, index) => (
                  <div key={index} className="flex items-start gap-3 p-1.5 rounded-xl">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#006432] text-white text-[11px] font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOX 3: MOTO PENDIDIKAN (Tambahan Baru) */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xs border border-slate-100 relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            {/* Dekorasi Aksen Oranye khusus Moto agar mencolok */}
            <div className="absolute top-0 left-0 w-full h-3 bg-[#FF9900]" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-50 text-[#FF9900] rounded-2xl">
                  <Award size={26} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-wide">Moto Pendidikan</h3>
              </div>
              
              <div className="pt-4 flex flex-col justify-center items-center h-full min-h-[140px] text-center bg-amber-50/40 rounded-2xl p-4 border border-amber-100/70">
                <p className="text-[#006432] text-lg md:text-xl font-extrabold italic tracking-wide leading-snug">
                  "Berilmu Amal'iah, <br /> Beramal Ilmi'ah, <br /> Berakhlak Karimah"
                </p>
              </div>
            </div>

            <div className="text-[11px] font-bold text-amber-700/40 uppercase tracking-widest pt-8 self-end">
              Motto Utama
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VisiMisi;