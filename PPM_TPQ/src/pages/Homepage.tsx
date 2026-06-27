import BigFoto from "../components/BigFoto";
import KritikdanSaran from "../components/KritikdanSaran";
import { ProfilTeksFull } from "../components/ProfileTeksFull";
import DaftarSekarang from "../components/DaftarSekarang";
import KataMutiara from "../components/KataMutiara";

export const Homepage = () => {
  return (
    <div className="w-full m-0 p-0 block overflow-hidden">

      {/* 1. Banner Slider Paling Atas */}
      <BigFoto
        pageKey="homepage"
        fallbackTitle="RAUDLATUL MA'ARIF AN-NAHDLIYAH"
      />

      {/* 4. Sejarah Singkat */}
      <div data-aos="fade-left">
        <ProfilTeksFull />
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