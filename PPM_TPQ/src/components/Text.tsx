import React from "react";

// Interface Props agar semua teks, list poin, posisi gambar, dan gambar assets bisa diatur manual
interface ProfilTeksProps {
  titleH1: string;       // Judul Hijau Besar (Contoh: PROFIL PENDIDIKAN...)
  titleH2: string;       // Sub-judul Hijau Sedang (Contoh: RAUDLATUL MA'ARIF...)
  paragraphs: string[];  // Array paragraf deskripsi
  pointsTitle?: string;  // Judul untuk list poin (Opsional)
  points?: { title: string; desc: string }[]; // Array berisi objek judul poin & deskripsinya (Opsional)
  imageSrc?: any;        // Foto manual dari assets (Opsional)
  imagePosition?: "left" | "right"; // Posisi gambar maunya di kiri atau di kanan teks
}

export const ProfilTeks: React.FC<ProfilTeksProps> = ({
  titleH1,
  titleH2,
  paragraphs,
  pointsTitle,
  points,
  imageSrc,
  imagePosition = "right", // Default gambar di sebelah kanan teks
}) => {
  // Menentukan arah animasi teks & gambar secara otomatis berdasarkan properti imagePosition
  const textAnimation = imagePosition === "right" ? "fade-right" : "fade-left";
  const imageAnimation = imagePosition === "right" ? "fade-left" : "fade-right";

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* KONDISI: Jika ada gambar dan posisinya di KIRI */}
        {imageSrc && imagePosition === "left" && (
          <div 
            className="w-full lg:w-1/2 shrink-0 max-h-[450px] rounded-[2rem] overflow-hidden shadow-md border border-slate-100 group"
            data-aos={imageAnimation}
            data-aos-duration="1000"
          >
            <img 
              src={imageSrc} 
              alt="Profil Dokumentasi" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        )}

        {/* BLOK KONTEN TEKS */}
        <div 
          className="flex-grow space-y-6"
          data-aos={textAnimation}
          data-aos-duration="1000"
        >
          {/* Header Judul (Sesuai mockup hijau tua tebal) */}
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#006432] uppercase tracking-wide leading-tight">
              {titleH1}
            </h1>
            <h2 className="text-md md:text-lg font-bold text-emerald-700 tracking-wider uppercase">
              {titleH2}
            </h2>
            {/* Garis aksen oranye penanda estetik */}
            <div className="h-[3px] w-16 bg-yellow-300 rounded-full mt-2" />
          </div>

          {/* Render Paragraf-paragraf secara dinamis */}
          <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed text-justify font-medium">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Render Poin-poin Berbulat jika dikirim lewat props */}
          {points && points.length > 0 && (
            <div className="space-y-3 pt-2">
              {pointsTitle && <h3 className="text-md md:text-lg font-bold text-slate-900">{pointsTitle}</h3>}
              <ul className="space-y-3 pl-5 list-disc text-slate-600 text-sm md:text-base">
                {points.map((point, index) => {
                  // Membuka delay bertahap khusus untuk baris list poin
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

        {/* KONDISI: Jika ada gambar dan posisinya di KANAN */}
        {imageSrc && imagePosition === "right" && (
          <div 
            className="w-full lg:w-1/2 shrink-0 max-h-[450px] rounded-[2rem] overflow-hidden shadow-md border border-slate-100 group"
            data-aos={imageAnimation}
            data-aos-duration="1000"
          >
            <img 
              src={imageSrc} 
              alt="Profil Dokumentasi" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default ProfilTeks;