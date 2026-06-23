import BigFoto from "../components/BigFoto"; // Jika kamu mau pasang banner atas juga
import FotoProfile from "../components/FotoProfile"; // Import komponen grid foto yang sudah dinamis
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
import bukber4 from "../assets/buka_bersama/bukber4.jpg"
import fotbar_murid from "../assets/fotbar/fotbar_murid.jpg"
import KritikSaran from "../components/KritikdanSaran";
import DaftarSekarang from "../components/DaftarSekarang";

export const Kegiatan = () => {

  return (
    <div className="w-full">
      {/* (Opsional) Pasang Banner atas khusus halaman Galeri */}
      <BigFoto
        subTitle="DOKUMENTASI KEGIATAN"
        mainTitle="TPQ & MDTA RAUDLATUL MA'ARIF AN-NAHDLIYAH"
        boldTitle=""
        motto="Mengukir Cerita Indah dan Ukhuwah dalam Setiap Langkah Pembelajaran Santri"
        customImages={[wisata_religi_6, fotbar_murid]}
      />

      <div data-aos="fade-up">
        <FotoProfile
          title="Galeri"
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



      <div>
        <DaftarSekarang
          onNavigateToRegister={() => window.location.href = '/pendaftaran'}
        />
      </div>

      <div data-aos="fade-up">
        <KritikSaran />
      </div>

    </div>
  );
};

export default Kegiatan;