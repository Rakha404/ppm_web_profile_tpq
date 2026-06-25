import React from "react";

interface FotoProfileProps {
  title?: string;        // Judul Utama (Opsional, Contoh: "GALERI KEGIATAN")
  subTitle?: string;     // Sub-judul dalam Kapsul (Contoh: "Festival Anak Sholeh Indonesia")
  photos: any[];         // Array file foto dari assets
}

export const FotoProfile: React.FC<FotoProfileProps> = ({
  title,
  subTitle,
  photos
}) => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans select-none overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER UTAMA (Hanya muncul jika title diisi) */}
        {title && (
          <div className="text-center flex flex-col items-center" data-aos="fade-down" data-aos-duration="1000">
            <h2 className="text-3xl md:text-5xl font-black text-[#006432] tracking-wider uppercase inline-block pb-2 relative">
              {title}
              {/* Garis Bawah Hijau Lebar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-yellow-300 rounded-full mx-auto w-[85%]" />
            </h2>
          </div>
        )}

        {/* SUB-HEADER DENGAN KAPSUL (Hanya muncul jika subTitle DIISI) */}
        {subTitle && (
          <div className="relative flex items-center justify-center py-4" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
            {/* Garis Aksen Oranye/Kuning di Latar Belakang */}
            <div className="absolute left-0 right-0 h-[2px] bg-yellow-300 rounded-full" />

            {/* Kapsul Hijau */}
            <div className="relative z-10 bg-[#006432] text-white px-6 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-sm max-w-[90%] text-center">
              {subTitle}
            </div>
          </div>
        )}

        {/* GRID FOTO (Dengan Animasi Muncul Berurutan Satu per Satu + Lazy Loading) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
          {photos.map((fotoUrl, index) => {
            const delayAnimasi = (index % 3 + 1) * 100;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delayAnimasi}
                data-aos-duration="700"
                className="relative aspect-[4/4] sm:aspect-[3/4] rounded-[1.8rem] overflow-hidden shadow-md border border-slate-100 bg-slate-50 group hover:shadow-lg transition-all duration-300"
              >
                <img
                  // Menggunakan .includes agar lebih aman mendeteksi path folder uploads backend
                  src={fotoUrl.includes('/uploads') && !fotoUrl.startsWith('http') ? `http://localhost:5000${fotoUrl}` : fotoUrl}
                  alt={`Kegiatan ${title || "Galeri"} - ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-in-out"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FotoProfile;