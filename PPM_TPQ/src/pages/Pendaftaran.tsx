import JalurPendaftaran from "../components/Pendaftaran";
import BigFoto from "../components/BigFoto";
import SyaratPendaftaran from "../components/SyaratPendaftaran";
import FormPendaftaran from "../components/ui/FormPendaftaran";
import { Landmark, ArrowDown } from "lucide-react"; 

import foto_gedung from "../assets/foto_gedung.jpeg";
import foto_kbm from "../assets/foto_kbm.jpeg";
import copyan_f3 from "../assets/festival_seni-anak_indoensia/festival_anak3.jpg";
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
        customImages={[foto_gedung, foto_kbm, copyan_f3]}
      />

      {/* 2. PRIORITAS UTAMA: Form Pendaftaran Online Website */}
      <div data-aos="fade-up" data-aos-delay="100" className="w-full pt-12 pb-2">
        <FormPendaftaran />
      </div>

      {/* ================= PANDUAN ALTERNATIF 1: OFFLINE ================= */}
      {/* FIX SPASI: Mengubah mt-20 mb-8 menjadi mt-10 mb-4 agar naik rapat ke atas & seimbang */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto px-6 mt-10 mb-4 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-100 mx-auto text-[11px] font-bold uppercase tracking-wider">
          <Landmark size={13} className="stroke-[2.5]" />
          <span>Opsi Tatap Muka</span>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
          Pendaftaran Offline (Datang Langsung)
        </h3>
        <p className="text-xs md:text-sm text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
          Bagi Wali Murid yang menghendaki penyerahan berkas dokumen fisik secara langsung ke sekretariat madrasah.
        </p>
        <div className="flex justify-center pt-1.5">
          <ArrowDown size={15} className="text-slate-300 animate-bounce" />
        </div>
      </div>

      {/* 3. Syarat & Berkas Administrasi Offline */}
      <SyaratPendaftaran />

      {/* 4. Alur & Pilihan Pendaftaran Cadangan */}
      <div data-aos="fade-up" data-aos-delay="200" className="w-full pb-20">
        <JalurPendaftaran />
      </div>
    </div>
  );
};

export default Pendaftaran;