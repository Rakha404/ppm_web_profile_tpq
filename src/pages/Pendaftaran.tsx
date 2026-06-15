import BigFoto from "../components/BigFoto";

// 1. IMPORT FOTO DARI ASSETS KAMU KHA (Sesuaikan letak folder ../ nya ya)
import fotogedung from "../assets/foto_gedung.jpg";
import logo_tpq from "../assets/logo_tpq.png";

export const Pendaftaran = () => {
  
  // 2. Masukkan variabel hasil import tadi ke dalam array
  const daftarFoto = [fotogedung, logo_tpq];

  return (
    <div className="w-full">
      {/* 3. Masukkan array ke properti customImages */}
      <BigFoto 
        subTitle="Penerimaan Santri Baru"
        mainTitle="Informasi Pendaftaran"
        boldTitle="Tahun Ajaran Baru"
        motto="Mari Bergabung Bersama Kami"
        customImages={daftarFoto} // <-- Dia murni render gambar dari folder assets lokarmu!
      />

      {/* Sisa Konten Halaman Pendaftaran Kamu... */}
      <div className="p-8">
         {/* Form pendaftaran dll */}
      </div>
    </div>
  );
};

export default Pendaftaran;