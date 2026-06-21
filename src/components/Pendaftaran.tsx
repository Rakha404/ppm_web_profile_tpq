import React from "react";
import { QrCode, Phone, FileText, ArrowUpRight } from "lucide-react";

export const JalurPendaftaran = () => {
  // SILAKAN SESUAIKAN LINK PENDAFTARAN KAMU DI SINI KHA
  const LINK_GFORM = "https://forms.google.com";
  const LINK_WHATSAPP = "https://wa.me/628123456789?text=Halo%20Admin,%20saya%20ingin%20mendaftar%20di%20TPQ/MDTA%20Raudlatul%20Ma'arif";
  
  // URL API untuk generate kedua QR Code secara otomatis
  const QR_GFORM_URL = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(LINK_GFORM)}&color=006432`;
  const QR_WA_URL = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(LINK_WHATSAPP)}&color=006432`;

  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:px-12 font-sans select-none">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HEADER UTAMA (Mengikuti Gaya image_719ace.png tanpa Selamat Datang) */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="bg-[#006432] text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase inline-block shadow-sm">
            Cara Mendaftar
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight">
            Pilih Jalur Pendaftaran Paling Mudah
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
            Kami menyediakan dua jalur pendaftaran digital agar calon santri dan wali murid dapat melakukan registrasi dengan cara yang paling nyaman.
          </p>
        </div>

        {/* LAYOUT UTAMA: KARTU JALUR & BOX DOUBLE QR CODE */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
          
          {/* SISI KIRI: 2 JALUR UTAMA (7 KOLOM) */}
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* JALUR 1: GOOGLE FORM */}
            <div className="bg-[#006432] text-white rounded-[2rem] p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-900/40 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-emerald-900/60 p-3.5 rounded-2xl text-amber-400 shadow-inner">
                    <FileText size={24} />
                  </div>
                  <span className="text-5xl font-black text-emerald-900/40 tracking-tighter">01</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Cara 1</h3>
                  <h4 className="text-xl font-extrabold tracking-wide">Google Form</h4>
                  <p className="text-emerald-100/70 text-xs leading-relaxed font-medium pt-1">
                    Isi Formulir Pendaftaran secara online kapan saja dan di mana saja. Cepat, praktis, dan data langsung tersimpan aman di sistem kami.
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRedirect(LINK_GFORM)}
                className="mt-8 w-full bg-slate-100 hover:bg-white text-slate-800 font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md transform active:scale-98"
              >
                <span>Buka Form</span>
                <ArrowUpRight size={14} className="text-[#006432]" />
              </button>
            </div>

            {/* JALUR 2: WHATSAPP ADMIN */}
            <div className="bg-[#006432] text-white rounded-[2rem] p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-900/40 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="bg-emerald-900/60 p-3.5 rounded-2xl text-amber-400 shadow-inner">
                    <Phone size={24} />
                  </div>
                  <span className="text-5xl font-black text-emerald-900/40 tracking-tighter">02</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Cara 2</h3>
                  <h4 className="text-xl font-extrabold tracking-wide">WhatsApp Admin</h4>
                  <p className="text-emerald-100/70 text-xs leading-relaxed font-medium pt-1">
                    Hubungi admin langsung via WhatsApp. Dapatkan respon cepat, konsultasi program pembelajaran, serta panduan pendaftaran secara personal.
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRedirect(LINK_WHATSAPP)}
                className="mt-8 w-full bg-slate-100 hover:bg-white text-slate-800 font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md transform active:scale-98"
              >
                <span>Chat Sekarang</span>
                <ArrowUpRight size={14} className="text-[#006432]" />
              </button>
            </div>

          </div>

          {/* SISI KANAN: AREA DOUBLE QR CODE MODERN (5 KOLOM) */}
          <div className="xl:col-span-5 bg-white border border-slate-200/60 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between items-center text-center shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-center gap-2 text-[#006432]">
                <QrCode size={18} />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Scan & Daftar</span>
              </div>
              <h4 className="text-base font-extrabold text-slate-800">Akses Cepat QR Code</h4>
            </div>

            {/* CONTAINER UNTUK DUA QR CODE BERDAMPINGAN */}
            <div className="grid grid-cols-2 gap-4 my-6 w-full">
              
              {/* QR CODE 1: GOOGLE FORM */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-amber-500 bg-amber-50 px-2.5 py-1 rounded-md mb-2 border border-amber-200/50 block">
                  G-Form
                </span>
                <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl shadow-inner relative group w-full aspect-square flex items-center justify-center">
                  <img 
                    src={QR_GFORM_URL} 
                    alt="QR Code Google Form"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#006432] rounded-tl" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#006432] rounded-tr" />
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#006432] rounded-bl" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#006432] rounded-br" />
                </div>
              </div>

              {/* QR CODE 2: WHATSAPP */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md mb-2 border border-emerald-200/50 block">
                  WhatsApp
                </span>
                <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl shadow-inner relative group w-full aspect-square flex items-center justify-center">
                  <img 
                    src={QR_WA_URL} 
                    alt="QR Code WhatsApp Admin"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#006432] rounded-tl" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#006432] rounded-tr" />
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#006432] rounded-bl" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#006432] rounded-br" />
                </div>
              </div>

            </div>

            <p className="text-[11px] font-semibold text-slate-400 leading-normal max-w-xs">
              Arahkan kamera smartphone Anda ke salah satu QR Code di atas untuk membuka jalur pendaftaran pilihan Anda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JalurPendaftaran;