import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Backup foto bawaan lokal jika database belum di-upload gambarnya oleh admin
import bacaDefault from "../assets/baca.jpeg";

export default function KataMutiara() {
  const [konten, setKonten] = useState({
    quote_text: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya.",
    quote_footer: "H.R. Bukhari",
    quote_bg_url: ""
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Fetch data teks dan gambar dari backend
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setKonten(resData.data);
        }
      })
      .catch((err) => console.log("Gagal mengambil data Kata Mutiara:", err));
  }, []);

  // Tentukan link background: pakai dari backend jika ada, jika tidak pakai default lokal
  const backgroundUrl = konten.quote_bg_url 
    ? `http://localhost:5000${konten.quote_bg_url}` 
    : bacaDefault;

  return (
    <section className="w-full py-24 px-6 font-sans select-none relative overflow-hidden flex items-center justify-center bg-[#002612]">
      
      {/* BACKGROUND FOTO DINAMIS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-65 transition-opacity duration-300">
        <div
          style={{ backgroundImage: `url(${backgroundUrl})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-100"
        />
      </div>
      
      {/* PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002612]/95 via-[#004221]/60 to-[#002612]/95 z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-500px h-500px bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-2" />

      {/* KONTEN UTAMA */}
      <div data-aos="zoom-in" className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="bg-emerald-950/80 border-2 border-emerald-500/30 p-4 rounded-3xl inline-block text-amber-400 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.1)] mb-2">
          <Quote size={36} className="transform rotate-180 stroke-[2.5]" />
        </div>

        <blockquote className="space-y-4">
          <p className="text-white text-2xl md:text-3xl font-black tracking-wide leading-relaxed italic max-w-3xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            "{konten.quote_text}"
          </p>
          
          <footer className="text-xs md:text-sm font-black text-amber-400 tracking-widest uppercase pt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] flex items-center justify-center gap-3">
            <span className="w-4 h-2px bg-amber-400/50" />
            {konten.quote_footer}
            <span className="w-4 h-2px bg-amber-400/50" />
          </footer>
        </blockquote>

        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full mx-auto shadow-sm" />
      </div>
    </section>
  );
}