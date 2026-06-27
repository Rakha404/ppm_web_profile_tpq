import JalurPendaftaran from "../components/Pendaftaran";
import BigFoto from "../components/BigFoto";
import SyaratPendaftaran from "../components/SyaratPendaftaran";
import FormPendaftaran from "../components/ui/FormPendaftaran";
import { Landmark, ArrowDown } from "lucide-react"; 

import "aos/dist/aos.css";

export const Pendaftaran = () => {
  return (
    <div className="w-full m-0 p-0 block overflow-hidden bg-slate-50 select-none">

      {/* 1. Banner Utama */}
      <BigFoto pageKey="pendaftaran" fallbackTitle="PENDAFTARAN SANTRI BARU" />

      {/* 2. PRIORITAS UTAMA: Form Pendaftaran Online Website */}
      <div data-aos="fade-up" data-aos-delay="100" className="w-full pt-12 pb-2">
        <FormPendaftaran />
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