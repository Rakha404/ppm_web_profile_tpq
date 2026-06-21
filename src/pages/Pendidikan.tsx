import BigFoto from "../components/BigFoto";
import ProfileTeks from "../components/Text"; // <-- Kita panggil komponen teks dinamis di sini
import KurikulumFokus from "../components/Kurikulum";
import InfoLembaga from "../components/InfoLembaga";
import DaftarSekarang from "../components/DaftarSekarang";

// Import Foto Assets
import fotbar_guru from "../assets/fotbar/fotbar_guru.jpg";
import fotbar_murid from "../assets/fotbar/fotbar_murid.jpg";
import kbm2 from "../assets/fotbar/kbm2.jpeg";
import kbm3 from "../assets/fotbar/kbm3.jpeg";
import foto_kbm from "../assets/foto_kbm.jpeg"
import KritikSaran from "../components/KritikdanSaran";

export const Pendidikan = () => {
  return (
    <div className="w-full m-0 p-0 block overflow-hidde">

      {/* 1. BANNER SLIDER ATAS (Motto dibuat pendek agar SEAMLESS & tidak menutupi layar) */}
      <BigFoto
        subTitle="MITRA PENDIDIKAN FORMAL"
        mainTitle="LAYANAN PENDIDIKAN & KURIKULUM"
        boldTitle="TPQ MDTA "
        motto="Menyempurnakan Pendidikan Anak dengan Fondasi Keagamaan yang Kuat, Sistematis, dan Berorientasi Akhlak."
        customImages={[foto_kbm, fotbar_guru, kbm3]}
      />

      {/* 2. JALUR DESKRIPSI UTAMA (Teks panjang dipindah ke sini agar rapi bersanding dengan foto) */}
      <div data-aos="fade-up">
        <ProfileTeks
          titleH1="Pendekatan Kurikulum"
          titleH2="Mitra Terbaik Pendidikan Formal Anak"
          imageSrc={kbm2} // Foto pelengkap di sebelah teks
          imagePosition="right" // Foto di kanan, teks profil di kiri
          paragraphs={[
            "Taman Pendidikan Al-Qur'an (TPQ) dan Madrasah Diniyah Takmiliyah Awaliyah (MDTA) Raudlatul Ma'arif An-Nahdliyah merupakan lembaga pendidikan non-formal berbasis Islam yang berkomitmen memperkuat pondasi keagamaan santri sejak usia dini.",
            "Berlokasi di Kedokansayang, Kecamatan Tarub, kami hadir sebagai mitra dan pelengkap pendidikan formal anak dengan fokus utama pada pembelajaran baca-tulis Al-Qur'an secara tartil, penguasaan ilmu tajwid, serta penanaman adab akhlakul karimah.",
            "Seluruh materi diniyah dan pembiasaan ibadah praktis harian di lembaga kami diselenggarakan secara terbimbing dan sistematis, selaras dengan nilai-nilai luhur syariat Islam yang berhaluan Ahlussunnah wal Jama'ah An-Nahdliyah."
          ]}
        />
      </div>

      {/* 3. FOKUS KURIKULUM */}
      <KurikulumFokus />

      {/* 4. INFO TIGA PILAR (Gedung, KBM, Guru) */}
      <InfoLembaga />


      {/* 5. CALL TO ACTION REGISTER */}
      <div>
        <DaftarSekarang
          onNavigateToRegister={() => window.location.href = '/pendaftaran'}
        />
      </div>

      <KritikSaran />

    </div>
  );
};

export default Pendidikan;