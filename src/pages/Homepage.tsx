import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import foto_gedung from "../assets/foto_gedung.jpg";

export const Homepage = () => {
  const images = [
    foto_gedung,
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", 
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200"  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    /* PERBAIKAN: Ditambahkan `-mt-[2px] block pt-0 pb-0` untuk memaksa nempel total tanpa celah */
    <section className="relative w-screen left-1/2 -translate-x-1/2 h-[500px] md:h-[600px] overflow-hidden font-sans bg-emerald-950 group -mt-[2px] block pt-0 pb-0 border-none outline-none z-10">
      
      {/* 1. BACKGROUND CAROUSEL IMAGES */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105 transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* 2. KONTEN TEKS DI TENGAH */}
      <div className="relative inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 h-full z-10 select-none">
        <span className="font-serif italic text-white text-xl md:text-3xl tracking-wide mb-2">
          Selamat Datang di
        </span>
        <h1 className="text-white text-3xl md:text-6xl font-black tracking-wide leading-tight drop-shadow-md">
          TPQ & MDTA Awaliyah
        </h1>
        <h2 className="text-white text-2xl md:text-5xl font-black tracking-wide uppercase mt-1 drop-shadow-md">
          RAUDLATUL MA'ARIF AN-NAHDLIYAH
        </h2>
        <p className="text-emerald-100 text-sm md:text-xl font-semibold tracking-widest mt-8 bg-black/30 px-6 py-2.5 rounded-full border border-white/10 backdrop-blur-xs">
          Jujur, Ikhlas, Cerdas
        </p>
      </div>

      {/* 3. BUTTON NAVIGASI MANUAL */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
        <ChevronLeft size={30} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
        <ChevronRight size={30} />
      </button>

      {/* 4. INDIKATOR TITIK (DOTS) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "w-6 bg-[#FF9900]" : "w-2 bg-white/50"}`} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Homepage;