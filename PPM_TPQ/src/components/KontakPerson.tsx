import { useEffect } from 'react';
import { Clock, Phone } from 'lucide-react';
// import BigFoto from '../components/BigFoto';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function KontakPage() {
  // Inisialisasi AOS biar animasinya aktif pas halaman dibuka
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Nomor kontak asli TPQ 
  const NOMOR_WA = "628819725510";
  const LINK_WHATSAPP = `https://wa.me/${NOMOR_WA}?text=Assalamu'alaikum%20Admin%20Raudlatul%20Ma'arif,%20saya%20ingin%20bertanya%20mengenai...`;

  // URL API Otomatis untuk generate QR Code WhatsApp
  const QR_WA_URL = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(LINK_WHATSAPP)}&color=006432`;

  return (
    /* BACKGROUND UTAMA TETAP PUTIH BERSIH SESUAI KEINGINAN*/
    <div className="bg-white min-h-screen py-16 px-4 md:px-12 font-sans select-none overflow-hidden">
      {/* 1. Header Banner Halaman (Gunakan BigFoto jika diperlukan) */}
      {/* <BigFoto subTitle="HUBUNGI KAMI" mainTitle="Layanan Informasi Santri" motto="..." /> */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* KOLOM KIRI: KARTU TIMBUL (INFORMASI & WHATSAPP) */}
        <div
          data-aos="fade-right"
          /* ⚡ EFEK TIMBUL: Menggunakan custom shadow tebal berlapis + border slate-200 tebal agar memisahkan diri dari background putih luar */
          className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-6 md:p-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08),0_10px_20px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-8"
        >
          <div>
            <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase">
              Respon Cepat
            </span>
            <h2 className="text-2xl font-black text-slate-800 mt-2 mb-4 tracking-wide">
              Layanan Informasi & Pendaftaran
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm font-medium text-justify">
              Silakan hubungi Layanan Administrasi Taman Pendidikan Al-Qur'an Raudlatul Ma'arif An-Nahdliyah untuk informasi pendaftaran santri baru, jadwal kegiatan pembelajaran, atau konsultasi administrasi lainnya. Kami siap melayani Anda.
            </p>
             
            {/* ======================= INFO LIST MINIMALIS (ANTI-JAMET) ======================= */}
            <div className="space-y-4 text-sm text-slate-600 border-t border-slate-100/80 pt-5">
              {/* Baris Jam Layanan */}
              <div className="flex items-center gap-3 py-0.5 group">
                <div className="p-2 bg-emerald-50 text-[#006432] rounded-lg border border-emerald-100/50 transition-colors group-hover:bg-[#006432] group-hover:text-white">
                  <Clock size={16} className="stroke-[2.2]" />
                </div>
                <span className="font-bold text-slate-800">Jam Layanan</span>
                <span className="font-medium text-slate-500 ml-auto bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md text-xs">
                  08.00 - 17.00 WIB
                </span>
              </div>

              {/* Baris Nomor Kontak */}
              <div className="flex items-center gap-3 py-0.5 group">
                <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-100/50 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                  <Phone size={16} className="stroke-[2.2]" />
                </div>
                <span className="font-bold text-slate-800">Nomor Kontak</span>
                <a
                  href="https://wa.me/6288802491985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline ml-auto bg-emerald-50/60 border border-emerald-100 px-2.5 py-1 rounded-md text-xs transition-colors"
                >
                  +62 888-0249-1985
                </a>
              </div>
            </div>
          </div>

          {/* Tombol Interaktif WhatsApp */}
          <a
            href="https://wa.me/6288802491985"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-black py-4 px-6 rounded-xl text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_4px_12px_rgba(0,100,50,0.2)] hover:shadow-[0_6px_20px_rgba(0,100,50,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-99 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current text-amber-400" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.165 1.24 8.413 3.494 2.25 2.253 3.487 5.244 3.487 8.425 0 6.551-5.336 11.899-11.886 11.899-2.007-.001-3.982-.511-5.734-1.482L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.407 9.864-9.822.002-2.623-1.023-5.09-2.885-6.956C16.531 1.991 14.066.96 11.455.96 6.012.96 1.586 5.368 1.583 10.785c-.001 1.71.452 3.382 1.311 4.857L1.925 21.97l6.586-1.728z" />
            </svg>
            <span>Hubungi via WhatsApp Chat</span>
          </a>
        </div>

        {/* KOLOM KANAN: KARTU TIMBUL (AREA BARCODE) */}
        <div
          data-aos="fade-left"
          /* ⚡ EFEK TIMBUL: Dipasangkan shadow berlapis yang sama, ketika di-hover kartu akan naik sedikit (-translate-y-1.5) memunculkan efek kedalaman 3D */
          className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-6 md:p-10 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08),0_10px_20px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_40px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center space-y-6"
        >
          <div className="space-y-2 w-full">
            <span className="text-xs font-bold tracking-wider text-amber-500 uppercase block tracking-widest">
              Scan QR Code
            </span>
            <h3 className="text-xl font-black text-slate-800 tracking-wide">
              Akses Instan Lewat Barcode
            </h3>
            <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
              Buka aplikasi WhatsApp di HP Anda, pilih menu tautkan perangkat atau scan, lalu arahkan kamera ke barcode di bawah ini.
            </p>
          </div>

          {/* Container Bingkai Barcode Efek Siku-Siku */}
          <div className="bg-white border border-slate-200 p-3 rounded-2xl shadow-inner relative group w-52 h-52 flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={QR_WA_URL}
              alt="Barcode WhatsApp Raudlatul Ma'arif"
              className="w-full h-full object-contain"
              loading="lazy"
            />
            {/* Ornamen Siku Pojok Hijau */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#006432] rounded-tl-xs" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#006432] rounded-tr-xs" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#006432] rounded-bl-xs" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#006432] rounded-br-xs" />
          </div>

          <p className="text-xs font-black text-emerald-800 bg-emerald-50 border border-emerald-100 px-5 py-2 rounded-full tracking-wider uppercase shadow-xs">
            @tpq.raudlatulmaarif
          </p>
        </div>

      </div>
    </div>
  );
}