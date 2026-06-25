import ProfileTeks from "../components/Text"
import foto_gedung from "../assets/foto_gedung.jpg";
import logo_tpq from "../assets/logo_tpq.png";
import BigFoto from "../components/BigFoto";
import DaftarSekarang from "../components/DaftarSekarang";
import Visimisi from "../components/Visimisi";
import foto_gurudanmurid from "../assets/foto_gurudanmurid.jpg"
import foto_guru from "../assets/foto_guru.jpg"


export const Profile = () => {
  // Array data 6 foto sesuai jumlah grid di gambar mockup kamu

  return (
    <div className="w-full m-0 p-0 block overflow-hidde">
      <BigFoto
        subTitle="MENGENAL LEBIH DEKAT"
        mainTitle="PROFILE RAUDLATUL MA'ARIF AN-NAHDLIYAH"
        motto="Menjaga Tradisi Islami, Mewujudkan Generasi Beradab, dan Berjiwa Qur'ani Sejak Dini."
        customImages={[foto_gedung, foto_guru, foto_gurudanmurid]}
      />

      {/* 2. Profil Teks + Foto */}
      <div data-aos="fade-right">
        <ProfileTeks
          titleH1="Profile Pendidikan TPQ & MDTA"
          titleH2="Raudlatul Ma'arif An-Nahdliyah"
          paragraphs={[
            "Raudlatul Ma'arif An-Nahdliyah hadir sebagai lembaga pendidikan keagamaan non-formal yang mengintegrasikan sistem pembelajaran Taman Pendidikan Al-Qur'an (TPQ) dan Madrasah Diniyah Takmiliyah Awaliyah (MDTA). Berpusat di Tegal, kami berkomitmen menjadi mitra terbaik bagi orang tua dalam membangun fondasi akidah, ibadah, dan akhlakul karimah bagi putra-putri tercinta sejak usia dini.",
            "Melalui kurikulum berbasis nilai Ahlussunnah wal Jama'ah An-Nahdliyah, kami berfokus pada metode membaca Al-Qur'an yang tartil dan benar (Tahsin), pembiasaan hafalan surah pendek serta doa harian, hingga pendalaman ilmu syariat dasar. Didukung oleh lingkungan belajar yang interaktif, teduh, dan menyenangkan, kami siap menuntun para santri tumbuh menjadi generasi Qur'ani yang berwawasan luas, saleh-salihah, dan membawa keberkahan bagi masyarakat."
          ]}
          imageSrc={logo_tpq}
          imagePosition="right"
        />
      </div>

      <Visimisi />

      <DaftarSekarang
        onNavigateToRegister={() => window.location.href = '/pendaftaran'}

      />

    </div>
  );
};

export default Profile;