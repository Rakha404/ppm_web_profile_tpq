import { HelpCircle, MessageSquare } from "lucide-react";

export const BannerBantuan = () => {
  // Fungsi handle klik otomatis langsung ke WhatsApp Panitia
  const handleHubungiCS = () => {
    const nomorWA = "628819725510"; // Nomor WA resmi pengurus pendaftaran
    const teksPesan = encodeURIComponent(
      "Assalamualaikum Wr. Wb. Pengurus PPDB TPQ/MDTA Raudlatul Ma'arif An-Nahdliyah, saya mengalami kendala / butuh panduan tambahan mengenai pendaftaran..."
    );
    window.open(`https://wa.me/${nomorWA}?text=${teksPesan}`, "_blank");
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      /* PERUBAHAN UTAMA:
        - mb-14: Menambahkan margin bawah yang cukup agar TIDAK MENEMPEL dengan komponen di bawahnya.
        - rounded-[1.75rem]: Mengubah kelengkungan sudut kotak luar menjadi membulat halus & seamless, tidak kaku kotak.
      */
      className="bg-linear-to-br from-amber-50 via-white to-amber-50/40 border-2 border-amber-400 rounded-[1.75rem] p-6 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-md shadow-amber-500/5 relative overflow-hidden max-w-6xl mx-auto group hover:border-[#006432] transition-all duration-300"
    >
      {/* Ornamen Kilau Dekoratif di Latar Belakang */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-amber-200/30 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-200/20 transition-colors duration-300" />

      <div className="flex items-start md:items-center gap-4 relative z-10">
        {/* Wadah Ikon dengan Efek Ring Ganda - Diperhalus sudutnya menjadi rounded-xl */}
        <div className="p-3.5 bg-amber-500 text-white rounded-xl shrink-0 shadow-md shadow-amber-500/20 ring-4 ring-amber-100 animate-pulse">
          <HelpCircle size={24} className="stroke-[2.5]" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
              PENTING
            </span>
            <h4 className="text-sm font-black text-slate-800 tracking-wide uppercase">
              Butuh Panduan Tambahan atau Mengalami Kendala?
            </h4>
          </div>
          <p className="text-slate-600 text-xs font-semibold leading-relaxed max-w-3xl">
            Silakan tanyakan langsung mengenai alur masuk atau teknis administrasi ke pengurus pendaftaran kami melalui scan <span className="font-extrabold text-[#006432] underline decoration-emerald-600/30">QR Code Jalur Pendaftaran</span> di bawah atau klik tombol <span className="font-extrabold text-[#006432] underline decoration-emerald-600/30">Hubungi CS</span> di samping.
          </p>
        </div>
      </div>

      {/* Tombol Status Badge - Sudut diperhalus dengan rounded-xl agar seirama */}
      <button
        onClick={handleHubungiCS}
        className="flex items-center gap-2 bg-[#006432] hover:bg-[#004d26] border border-emerald-700 px-4 py-2.5 rounded-xl shrink-0 text-[11px] font-black text-white uppercase shadow-sm select-none self-end md:self-auto tracking-wider transition-all duration-300 group-hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        <MessageSquare size={14} className="stroke-[2.5]" />
        <span>Hubungi CS</span>
      </button>
    </div>
  );
};

export default BannerBantuan;