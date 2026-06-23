import JalurPendaftaran from "../components/Pendaftaran";
import BigFoto from "../components/BigFoto";
import SyaratPendaftaran from "../components/SyaratPendaftaran";
import FormPendaftaran from "../components/ui/FormPendaftaran";
import { Landmark, ArrowDownCircle, Share2 } from "lucide-react"; // Icon penanda panduan
import BunnerBantuan, { BannerBantuan } from "../components/Bantuan"

import foto_gedung from "../assets/foto_gedung.jpg";
import logo_tpq from "../assets/logo_tpq.png";
import "aos/dist/aos.css";

export const Pendaftaran = () => {
  return (
    <div className="w-full m-0 p-0 block overflow-hidden bg-slate-50 select-none">

      {/* 1. Banner Utama */}
      <BigFoto
        subTitle="PENERIMAAN SANTRI BARU"
        mainTitle="MARI BERGABUNG BERSAMA KAMI"
        boldTitle="DAFTAR SEKARANG "
        motto="Langkah Awal Terbaik untuk Membimbing Putra-Putri Anda Menjadi Generasi yang Berilmu, Beradab, dan Berjiwa Qur'ani."
        customImages={[foto_gedung, logo_tpq]}
      />

      {/* 2. PRIORITAS UTAMA: Form Pendaftaran Online Website */}
      <div data-aos="fade-up" data-aos-delay="100" className="w-full pt-12 pb-2">
        <FormPendaftaran />
      </div>

      {/* ================= PANDUAN ALTERNATIF 1: OFFLINE ================= */}
      <div data-aos="fade-up" className="max-w-5xl mx-auto px-6 mt-16 mb-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-emerald-700/30 flex-1" />
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-emerald-800 shadow-xs">
            <Landmark size={16} className="stroke-[2.5]" />
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase">
              Atau Daftar Secara Offline (Datang Langsung)
            </span>
          </div>
          <div className="h-[2px] bg-gradient-to-l from-transparent to-emerald-700/30 flex-1" />
        </div>
        <p className="text-xs text-slate-400 font-medium max-w-md mx-auto flex items-center justify-center gap-1.5 pt-1">
          Bagi Wali Murid yang ingin menyerahkan berkas langsung fisik ke madrasah
          <ArrowDownCircle size={14} className="text-slate-400 animate-bounce mt-0.5" />
        </p>
      </div>

      {/* 3. Syarat & Berkas Administrasi Offline */}
      <SyaratPendaftaran />


      {/* ================= PANDUAN ALTERNATIF 2: WHATSAPP / GFORM ================= */}
      <div data-aos="fade-up" className="max-w-5xl mx-auto px-6 mt-16 mb-6 text-center space-y-2">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-amber-600/30 flex-1" />
          <div className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl flex items-center gap-2 text-amber-800 shadow-xs">
            <Share2 size={16} className="stroke-[2.5]" />
            <span className="font-black text-xs sm:text-sm tracking-wider uppercase">
              Atau Melalui Alternatif Lain (WhatsApp & Google Form)
            </span>
          </div>
          <div className="h-[2px] bg-gradient-to-l from-transparent to-amber-600/30 flex-1" />
        </div>
        <p className="text-xs text-slate-400 font-medium max-w-md mx-auto flex items-center justify-center gap-1.5 pt-1">
          Gunakan jalur di bawah ini jika mengalami kendala sistem pada formulir website
          <ArrowDownCircle size={14} className="text-slate-400 animate-bounce mt-0.5" />
        </p>
      </div>

      {/* 4. Alur & Pilihan Pendaftaran Cadangan */}
      <div data-aos="fade-up" data-aos-delay="200" className="w-full pb-20">
        <JalurPendaftaran />
      </div>

      <BannerBantuan />

    </div>
  );
};

export default Pendaftaran;