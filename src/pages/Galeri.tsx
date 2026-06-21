import BigFoto from "../components/BigFoto"; // Jika kamu mau pasang banner atas juga
import FotoProfile from "../components/FotoProfile"; // Import komponen grid foto yang sudah dinamis
import foto_gedung from "../assets/foto_gedung.jpg";
import logo_tpq from "../assets/logo_tpq.png";
import wisata_religi_1 from "../assets/wisata religi/wisata_religi_1.jpg"
import wisata_religi_2 from "../assets/wisata religi/wisata_religi_2.jpg"
import wisata_religi_3 from "../assets/wisata religi/wisata_religi_3.jpg"
import wisata_religi_4 from "../assets/wisata religi/wisata_religi_4.jpg"
import wisata_religi_5 from "../assets/wisata religi/wisata_religi_5.jpg"
import wisata_religi_6 from "../assets/wisata religi/wisata_religi_6.jpg"
import festival_anak1 from "../assets/festival_seni-anak_indoensia/festival_anak1.jpg";
import festival_anak2 from "../assets/festival_seni-anak_indoensia/festival_anak2.jpg";
import festival_anak3 from "../assets/festival_seni-anak_indoensia/festival_anak3.jpg";
import bukber1 from "../assets/buka_bersama/bukber1.jpg"
import bukber2 from "../assets/buka_bersama/bukber2.jpg"
import bukber3 from "../assets/buka_bersama/bukber3.jpg"
import bukber4 from "../assets/buka_bersama/bukber4.jpg"
import KritikSaran from "../components/KritikdanSaran";
import DaftarSekarang from "../components/DaftarSekarang";

export const Galeri = () => {

  return (
    <div className="w-full m-0 p-0 block overflow-hidde">
      {/* (Opsional) Pasang Banner atas khusus halaman Galeri */}
      <BigFoto
        subTitle="Dokumentasi Kegiatan"
        mainTitle="Galeri Raudlatul Ma'arif"
        motto="Aktivitas dan Kebersamaan Santri"
        customImages={[foto_gedung, logo_tpq]} // Menggunakan salah satu foto assets sebagai banner slider
      />

      <div data-aos="fade-up">
        <FotoProfile
          title="Galeri Kegiatan"
          subTitle="Wisata Religi 2026"
          photos={[wisata_religi_1, wisata_religi_6, wisata_religi_3, wisata_religi_4, wisata_religi_2, wisata_religi_5]}
        />
      </div>

      <div data-aos="fade-up">
        <FotoProfile
          subTitle="Festival Anak Seni Indonesia"
          photos={[festival_anak1, festival_anak3, festival_anak2]}
        />
      </div>

      <div data-aos="fade-up">
        <FotoProfile
          subTitle="Buka Puasa Bersama 2026"
          photos={[bukber2, bukber1, bukber4]}
        />
      </div>


      <div data-aos="fade-up">
        <KritikSaran />
      </div>

      <div>
        <DaftarSekarang
          onNavigateToRegister={() => window.location.href = '/pendaftaran'}
        />
      </div>


    </div>
  );
};

export default Galeri;