import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BigFotoProps {
  pageKey: 'homepage' | 'profile' | 'pendidikan' | 'pendaftaran' | 'kegiatan';
  fallbackTitle: string; // Judul cadangan sebelum data di database terisi
}

export const BigFoto: React.FC<BigFotoProps> = ({ pageKey, fallbackTitle }) => {
  const [konten, setKonten] = useState({
    subTitle: "",
    mainTitle: fallbackTitle,
    boldTitle: "",
    motto: "",
    images: [] as string[]
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/banner/${pageKey}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setKonten(resData.data);
        }
      })
      .catch((err) => console.error("Gagal memuat banner:", err));
  }, [pageKey]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? konten.images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === konten.images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (konten.images.length <= 1) return;
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex, konten.images.length]);

  if (konten.images.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[550px] bg-emerald-950 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl md:text-5xl font-black">{konten.mainTitle}</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[550px] relative m-0 p-0 block clear-both">
      <section className="relative w-full h-full overflow-hidden font-sans bg-emerald-950 group m-0 p-0 block z-10">
        
        {/* IMAGES SLIDER */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {konten.images.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:5000${img}`}
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* TEXT KONTEN */}
        <div className="relative inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 h-full z-10 select-none">
          {konten.subTitle && <span className="font-serif italic text-white text-lg md:text-2xl tracking-wide mb-2">{konten.subTitle}</span>}
          <h1 className="text-white text-2xl md:text-5xl font-black tracking-wide leading-tight drop-shadow-md">{konten.mainTitle}</h1>
          {konten.boldTitle && <h2 className="text-white text-xl md:text-4xl font-black tracking-wide uppercase mt-1 drop-shadow-md">{konten.boldTitle}</h2>}
          {konten.motto && <p className="text-emerald-100 text-xs md:text-sm font-semibold tracking-widest mt-6 bg-black/30 px-5 py-2 rounded-full border border-white/10 backdrop-blur-xs">{konten.motto}</p>}
        </div>

        {/* CONTROLS */}
        {konten.images.length > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer"><ChevronRight size={24} /></button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {konten.images.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 transition-all duration-300 cursor-pointer rounded-2xl ${index === currentIndex ? "w-6 bg-yellow-300" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default BigFoto;