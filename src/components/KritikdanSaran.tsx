import React from "react";
import { MessageSquare, ExternalLink, Lock } from "lucide-react";

export const KritikSaran = () => {
  // SILAKAN GANTI LINK DI BAWAH INI DENGAN LINK GOOGLE FORM ASLI KAMU KHA
  const GOOGLE_FORM_URL = "https://forms.google.com";

  const handleOpenForm = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 font-sans select-none bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* CONTAINER KARTU UTAMA GRID 12 (EFEK TIMBUL MAKSIMAL) */}
        <div 
          /* ⚡ SEKARANG MENGGUNAKAN LAYERED REALISTIC SHADOWS DAN BORDER-2 AGAR SISI PUTIHNYA TERPISAH TEGAS DARI BACKGROUND */
          className="bg-white rounded-[2.5rem] border-2 border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.09),0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
        >
          
          {/* SISI KIRI: INFORMASI & AJAKAN (5 KOLOM) */}
          <div className="lg:col-span-5 bg-[#006432] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-900/40 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-lg pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="bg-emerald-900/50 p-3.5 rounded-2xl inline-block text-amber-400 shadow-inner">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-wide leading-tight">
                Kritik & Saran <br />
                Membangun
              </h3>
              <p className="text-emerald-100/80 text-xs md:text-sm leading-relaxed font-medium">
                Setiap masukan, kritik, maupun saran dari Wali Murid dan Masyarakat sangat berharga bagi peningkatan mutu pendidikan di TPQ & MDTA Raudlatul Ma'arif.
              </p>
            </div>
          </div>

          {/* SISI KANAN: VISUAL FORM PREMIUM READ-ONLY (7 KOLOM) */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">Hubungi Kami</span>
              <h4 className="text-xl md:text-2xl font-black text-slate-800 tracking-wide">
                Kirim Masukan Anda
              </h4>
            </div>

            {/* INPUT ELEMEN VISUAL YANG TERKUNCI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 pl-1">Nama Lengkap</label>
                <div className="w-full bg-slate-100/80 border border-slate-200/70 text-slate-400 rounded-xl px-4 py-3 text-xs font-semibold italic flex items-center justify-between shadow-inner cursor-not-allowed">
                  <span>Isi nama di Google Form...</span>
                  <Lock size={12} className="text-slate-300" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 pl-1">No. WhatsApp</label>
                <div className="w-full bg-slate-100/80 border border-slate-200/70 text-slate-400 rounded-xl px-4 py-3 text-xs font-semibold italic flex items-center justify-between shadow-inner cursor-not-allowed">
                  <span>Isi WhatsApp di Google Form...</span>
                  <Lock size={12} className="text-slate-300" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 pl-1">Pesan / Saran</label>
              <div className="w-full bg-slate-100/80 border border-slate-200/70 text-slate-400 rounded-xl p-4 text-xs font-semibold italic flex justify-between items-start shadow-inner cursor-not-allowed min-h-[90px] leading-relaxed">
                <span>Kritik dan saran diinputkan langsung pada halaman utama Google Form demi mengoptimalkan kenyamanan dan privasi data Anda.</span>
                <Lock size={12} className="text-slate-300 mt-0.5 flex-shrink-0 ml-2" />
              </div>
            </div>

            {/* TOMBOL AKSI UTAMA REDIREKSI */}
            <button
              onClick={handleOpenForm}
              className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-black py-4 px-6 rounded-xl text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_4px_14px_rgba(0,100,50,0.25)] hover:shadow-[0_6px_20px_rgba(0,100,50,0.35)] cursor-pointer group transform active:scale-99 mt-2"
            >
              <span>Isi Formulir di Google Form</span>
              <ExternalLink size={16} className="text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KritikSaran;