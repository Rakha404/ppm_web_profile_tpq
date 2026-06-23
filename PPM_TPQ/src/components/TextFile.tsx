import React from "react";

interface ProfilTeksFullProps {
  titleH1: string;       // Judul Utama Besar
  titleH2?: string;      // Sub-judul Sedang (Opsional)
  paragraphs: string[];  // Array paragraf deskripsi
  pointsTitle?: string;  // Judul list poin (Opsional)
  points?: { title: string; desc: string }[]; // Array list poin (Opsional)
}

export const ProfilTeksFull: React.FC<ProfilTeksFullProps> = ({
  titleH1,
  titleH2,
  paragraphs,
  pointsTitle,
  points,
}) => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER JUDUL (Animasi Fade Down) */}
        <div 
          className="space-y-2 text-center flex flex-col items-center justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#006432] uppercase tracking-wide leading-tight max-w-3xl">
            {titleH1}
          </h1>
          {titleH2 && (
            <h2 className="text-sm md:text-base font-bold text-emerald-700 tracking-wider uppercase max-w-2xl">
              {titleH2}
            </h2>
          )}
          {/* Garis aksen oranye */}
          <div className="h-[3px] w-24 bg-yellow-300 rounded-full mt-2" />
        </div>

        {/* PARAGRAF DESKRIPSI (Animasi Fade Right) */}
        <div 
          className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed text-justify font-medium"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* LIST POIN */}
        {points && points.length > 0 && (
          <div className="space-y-3 pt-2">
            {pointsTitle && (
              <h3 
                className="text-md md:text-lg font-bold text-slate-900"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {pointsTitle}
              </h3>
            )}
            
            <ul className="space-y-3 pl-5 list-disc text-slate-600 text-sm md:text-base">
              {points.map((point, index) => {
                // Membuat delay animasi berurutan pada setiap item poin (Contoh: 400ms, 500ms, dst)
                const itemDelay = 400 + index * 100;

                return (
                  <li 
                    key={index} 
                    className="leading-relaxed text-justify"
                    data-aos="fade-up"
                    data-aos-delay={itemDelay}
                    data-aos-duration="800"
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
    </section>
  );
};

export default ProfilTeksFull;