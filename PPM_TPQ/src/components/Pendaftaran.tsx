import { useState, useEffect } from "react";
import { QrCode, Phone, ArrowUpRight } from "lucide-react";

export const JalurPendaftaran = () => {
  // State nomor telepon yang ditarik secara dinamis dari database
  const [nomorAdmin, setNomorAdmin] = useState("6288802491985");

  useEffect(() => {
    // Ambil nomor telepon dinamis dari settingan backend
    fetch("http://localhost:5000/api/section-pendaftaran")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data && resData.data.nomor_wa) {
          setNomorAdmin(resData.data.nomor_wa);
        }
      })
      .catch((err) => console.error("Gagal memuat link kontak cadangan WhatsApp:", err));
  }, []);

  // LOGIKA OTOMATIS: Link WA & QR Code mengikut string nomorAdmin dari MongoDB realtime!
  const LINK_WHATSAPP = `https://wa.me/${nomorAdmin}?text=Halo%20Admin%20TPQ,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20santri%20baru`;
  const QR_WA_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(LINK_WHATSAPP)}&color=006432`;

  const handleRedirect = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-slate-50 pb-16 pt-4 px-6 md:px-12 font-sans select-none">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* HEADER SEKSYEN */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="bg-[#006432] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block shadow-xs">
            Jalur Cadangan
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            Pendaftaran Via WhatsApp Admin
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
            Gunakan alternatif di bawah ini untuk terhubung langsung dengan pengurus jika Bapak/Ibu mengalami kendala teknis saat mengisi formulir utama website.
          </p>
        </div>

        {/* LAYOUT UTAMA: SEIMBANG KIRI KANAN (KARTU CHAT VS QR CODE) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* SISI KIRI: KARTU DETIL WHATSAPP (7 KOLOM) */}
          <div className="md:col-span-7 bg-[#006432] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-950/30 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex justify-between items-start">
                <div className="bg-emerald-900/60 p-3 rounded-xl text-amber-400 shadow-inner">
                  <Phone size={22} className="stroke-[2.5]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base md:text-lg font-black tracking-wide">Konsultasi & Penyerahan Data Personal</h4>
                <p className="text-emerald-100/80 text-xs leading-relaxed font-medium">
                  Hubungi kontak layanan pengurus pendaftaran kami. Anda akan mendapatkan panduan pengisian berkas, informasi seragam atribut santri, serta respon cepat secara langsung dan bersahabat.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleRedirect(LINK_WHATSAPP)}
              className="mt-6 w-full bg-slate-50 hover:bg-white text-slate-800 font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs transform active:scale-98"
            >
              <span>Hubungi Admin Via Chat</span>
              <ArrowUpRight size={14} className="text-[#006432] stroke-[2.5]" />
            </button>
          </div>

          {/* SISI KAIAN: QR CODE TUNGGAL (5 KOLOM) */}
          <div className="md:col-span-5 bg-white border border-slate-200/70 rounded-3xl p-6 flex flex-col justify-between items-center text-center shadow-xs">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-[#006432]">
                <QrCode size={15} className="stroke-[2.5]" />
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">Akses Cepat Scan</span>
              </div>
              <h4 className="text-xs font-bold text-slate-400">Scan QR Code WhatsApp</h4>
            </div>

            {/* BOX CONTAINER QR CODE TUNGGAL */}
            <div className="my-4 w-40 aspect-square flex items-center justify-center bg-slate-50/50 border border-slate-100 p-3 rounded-2xl shadow-inner relative group">
              <img 
                src={QR_WA_URL} 
                alt="QR Code WhatsApp Official TPQ"
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-102"
              />
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#006432] rounded-tl-xs" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#006432] rounded-tr-xs" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#006432] rounded-bl-xs" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#006432] rounded-br-xs" />
            </div>

            <p className="text-[10px] md:text-[11px] font-semibold text-slate-400 leading-normal max-w-200px">
              Arahkan kamera HP Anda langsung ke gambar untuk diarahkan otomatis menuju chat admin.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JalurPendaftaran;