import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BigFotoProps {
  subTitle?: string;
  mainTitle: string;
  boldTitle?: string;
  motto?: string;
  customImages?: any[]; // Kita ubah jadi any[] agar fleksibel menerima modul hasil import gambar
}

export const BigFoto: React.FC<BigFotoProps> = ({
  subTitle = "Selamat Datang di",
  mainTitle,
  boldTitle,
  motto,
  customImages
}) => {
  
  // Jika halaman tidak oper foto, kosongkan atau arahkan ke default array kosong
  const images = customImages && customImages.length > 0 ? customImages : [];

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
    if (images.length === 0) return;
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex, images.length]);

  // Jika tidak ada gambar yang di-import, tampilkan background emerald polos agar tidak merusak layout
  if (images.length === 0) {
    return (
      <div className="w-full h-[400px] md:h-[550px] bg-emerald-950 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl md:text-5xl font-black">{mainTitle}</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] md:h-[550px] relative m-0 p-0 block clear-both">
      <section className="relative w-full h-full overflow-hidden font-sans bg-emerald-950 group m-0 p-0 block border-none outline-none z-10">
        
        {/* BACKGROUND CAROUSEL IMAGES FROM ASSETS */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img} // Vite otomatis mengubah variabel import menjadi path yang benar di sini
              alt={`Slide ${index}`}
              className={`absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105 transition-opacity duration-1000 ease-in-out
                ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* KONTEN TEKS DI TENGAH */}
        <div className="relative inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 h-full z-10 select-none">
          {subTitle && (
            <span className="font-serif italic text-white text-lg md:text-2xl tracking-wide mb-2">
              {subTitle}
            </span>
          )}
          <h1 className="text-white text-2xl md:text-5xl font-black tracking-wide leading-tight drop-shadow-md">
            {mainTitle}
          </h1>
          {boldTitle && (
            <h2 className="text-white text-xl md:text-4xl font-black tracking-wide uppercase mt-1 drop-shadow-md">
              {boldTitle}
            </h2>
          )}
          {motto && (
            <p className="text-emerald-100 text-xs md:text-sm font-semibold tracking-widest mt-6 bg-black/30 px-5 py-2 rounded-full border border-white/10 backdrop-blur-xs">
              {motto}
            </p>
          )}
        </div>

        {/* BUTTON MANUAL */}
        {images.length > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 transition-all duration-300 cursor-pointer rounded-2xl ${index === currentIndex ? "w-6 bg-emerald-600" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      </section>
    </div>
  );
};

export default BigFoto;