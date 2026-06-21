import JalurPendaftaran from "../components/Pendaftaran"; // 1. Import komponen JalurPendaftaran
import BigFoto from "../components/BigFoto";
import foto_gedung from "../assets/foto_gedung.jpg";
import logo_tpq from "../assets/logo_tpq.png";
import "aos/dist/aos.css";
import SyaratPendaftaran from "../components/SyaratPendaftaran";


export const Pendaftaran = () => {

  return (
    // Ditambahkan w-full dan overflow-hidden agar AOS tidak nge-bug/macet saat kalkulasi posisi halaman
    <div className="w-full m-0 p-0 block overflow-hidden">


      {/* 1. Banner Slider Paling Atas */}
      <BigFoto
        subTitle="PENERIMAAN SANTRI BARU"
        mainTitle="MARI BERGABUNG BERSAMA KAMI"
        boldTitle="DAFTAR SEKARANG "
        motto="Langkah Awal Terbaik untuk Membimbing Putra-Putri Anda Menjadi Generasi yang Berilmu, Beradab, dan Berjiwa Qur'ani."
        customImages={[foto_gedung, logo_tpq]}
      />

      <SyaratPendaftaran />

      {/* Komponen Utama Alur Pendaftaran dengan Animasi Fade Up */}
      <div data-aos="fade-up" data-aos-delay="200" className="w-full">
        <JalurPendaftaran />
      </div>


    </div>
  );
};

export default Pendaftaran;