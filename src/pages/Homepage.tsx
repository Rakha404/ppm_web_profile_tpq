import BigFoto from "../components/BigFoto";
import FotoProfile from "../components/FotoProfile";
import Visimisi from "../components/Visimisi";
import fotogedung from "../assets/foto_gedung.jpg";

export const Homepage = () => {

  const daftarFoto = [fotogedung, fotogedung, fotogedung]; // <-- Contoh array foto untuk slider

  return (
    <div className="w-full m-0 p-0 block">
      {/* 1. Banner Slider Paling Atas */}
      <BigFoto 
      mainTitle="palpale"
      subTitle="heiya"
      boldTitle="apa hayo"
      motto="keren"
      customImages={daftarFoto}
      />

      {/* 2. Grid Jenjang Pendidikan */}
      <FotoProfile />

      {/* 3. Kartu Visi Misi Moto */}
      <Visimisi />
    </div>
  );
};

export default Homepage;