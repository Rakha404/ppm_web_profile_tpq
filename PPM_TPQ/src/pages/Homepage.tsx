import BigFoto from "../components/BigFoto";
import KritikdanSaran from "../components/KritikdanSaran";
import foto_gedung from "../assets/foto_gedung.jpg";
import { ProfilTeksFull } from "../components/TextFile";
import DaftarSekarang from "../components/DaftarSekarang";
import WelcomeSection from "../components/WelcomeSection";
import KataMutiara from "../components/KataMutiara";
import foto_guru from "../assets/foto_guru.jpg"
import foto_gurudanmurid from "../assets/foto_gurudanmurid.jpg"

export const Homepage = () => {
  return (
    <div className="w-full m-0 p-0 block overflow-hidden">

      {/* 1. Banner Slider Paling Atas */}
      <BigFoto
        subTitle="SELAMAT DATANG DI"
        mainTitle="RAUDLATUL MA'ARIF AN-NAHDLIYAH"
        boldTitle="TPQ MDTA "
        motto="Membentuk Generasi Berakhlak Mulia, Cerdas, dan Berjiwa Qur'ani Sejak Dini"
        customImages={[foto_gedung, foto_guru, foto_gurudanmurid]}
      />

      <WelcomeSection />

      {/* 4. Sejarah Singkat */}
      <div data-aos="fade-left">
        <ProfilTeksFull
          titleH1="Sejarah Singkat Berdirinya Lembaga"
          titleH2="Mencetak Generasi Qur'ani Sejak Dini"
          paragraphs={[
            "Lembaga Raudlatul Ma'arif didirikan atas dasar kepedulian para tokoh agama dan masyarakat akan pentingnya pendidikan Al-Qur'an dan akhlak bagi generasi muda. Berawal dari majelis taklim kecil, kini lembaga ini telah berkembang menjadi pusat pendidikan TPQ & MDTA yang terpercaya.",
            "Kami terus berbenah meningkatkan kualitas pengajaran, sarana prasarana, serta pemantapan metode tahsin agar para santri tidak hanya lancar membaca, namun juga menjiwai nilai-nilai Al-Qur'an dalam kehidupan sehari-hari."
          ]}
          pointsTitle="Tujuan Utama Pembelajaran Kami:"
          points={[
            {
              title: "Fasih",
              desc: "Mampu melafalkan huruf-huruf hijaiyah sesuai makhorijul huruf dan kaidah ilmu tajwid."
            },
            {
              title: "Berkarakter",
              desc: "Menjadikan adab terhadap orang tua, guru, dan sesama teman sebagai cerminan utama santri."
            }
          ]}
        />
      </div>

      {/* 5. Kartu Visi Misi Moto */}
      
      <KataMutiara />

      <DaftarSekarang
        onNavigateToRegister={() => window.location.href = '/pendaftaran'}
      />

      {/* 6. SECTION KRITIK & SARAN INTEGRASI GOOGLE FORM (Paling Bawah Sebelum Footer) */}
      <div data-aos="fade-up">
        <KritikdanSaran />
      </div>


    </div>
  );
};

export default Homepage;