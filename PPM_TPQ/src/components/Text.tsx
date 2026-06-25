import React from "react";

interface ProfilTeksProps {
  titleH1: string;       
  titleH2: string;       
  paragraphs: string[];  
  pointsTitle?: string;  
  points?: { title: string; desc: string }[]; 
  imageSrc?: any;        
  imagePosition?: "left" | "right"; 
  isLogo?: boolean; // <-- Tambahan properti baru untuk membedakan LOGO vs FOTO
}

export const ProfilTeks: React.FC<ProfilTeksProps> = ({
  titleH1,
  titleH2,
  paragraphs,
  pointsTitle,
  points,
  imageSrc,
  imagePosition = "right", 
  isLogo = false, // Secara default dianggap foto (false) jika tidak ditulis
}) => {
  const textAnimation = imagePosition === "right" ? "fade-right" : "fade-left";
  const imageAnimation = imagePosition === "right" ? "fade-left" : "fade-right";

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* KONDISI 1: JIKA GAMBAR DI SEBELAH KIRI */}
        {imageSrc && imagePosition === "left" && (
          <div 
            className="w-full lg:w-5/12 flex justify-center items-center"
            data-aos={imageAnimation}
            data-aos-duration="1000"
          >
            <div 
              className={`w-full max-w-[380px] rounded-[2.5rem] bg-slate-50/80 border border-slate-100 flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(0,100,50,0.04)] transition-all duration-500 hover:scale-103 
                ${isLogo ? "aspect-square p-8" : "aspect-[4/5] p-0 overflow-hidden"}`}
            >
              <img 
                src={imageSrc} 
                alt="Profil Gambar" 
                className={`w-full h-full ${isLogo ? "object-contain filter drop-shadow-sm" : "object-cover"}`} 
              />
            </div>
          </div>
        )}

        {/* BLOK KONTEN TEKS */}
        <div 
          className="w-full lg:flex-grow lg:w-7/12 space-y-6"
          data-aos={textAnimation}
          data-aos-duration="1000"
        >
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-black text-[#006432] tracking-tight leading-tight">
              {titleH1}
            </h1>
            <h2 className="text-xs font-black text-emerald-700 tracking-widest uppercase block">
              {titleH2}
            </h2>
            <div className="h-[3px] w-12 bg-yellow-400 rounded-full mt-3" />
          </div>

          <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed text-justify font-medium">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* List Poin */}
          {points && points.length > 0 && (
            <div className="space-y-3 pt-2">
              {pointsTitle && <h3 className="text-md md:text-lg font-bold text-slate-900">{pointsTitle}</h3>}
              <ul className="space-y-3 pl-5 list-disc text-slate-600 text-sm md:text-base">
                {points.map((point, index) => {
                  const pointDelay = 200 + index * 100;
                  return (
                    <li 
                      key={index} 
                      className="leading-relaxed text-justify"
                      data-aos="fade-up"
                      data-aos-delay={pointDelay}
                      data-aos-duration="600"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <strong className="text-[#006432] font-bold">{point.title}: </strong>
                      {point.desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* KONDISI 2: JIKA GAMBAR DI SEBELAH KANAN */}
        {imageSrc && imagePosition === "right" && (
          <div 
            className="w-full lg:w-5/12 flex justify-center items-center"
            data-aos={imageAnimation}
            data-aos-duration="1000"
          >
            <div 
              className={`w-full max-w-[380px] rounded-[2.5rem] bg-slate-50/80 border border-slate-100 flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(0,100,50,0.04)] transition-all duration-500 hover:scale-103 
                ${isLogo ? "aspect-square p-8" : "aspect-[4/5] p-0 overflow-hidden"}`}
            >
              <img 
                src={imageSrc} 
                alt="Profil Gambar" 
                className={`w-full h-full ${isLogo ? "object-contain filter drop-shadow-sm" : "object-cover"}`} 
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfilTeks;