import React, { useState, useEffect } from "react";
import BigFoto from "../components/BigFoto";
import ProfileTeks from "../components/ProfilTeks"; 
import KurikulumFokus from "../components/Kurikulum"; 
import InfoLembaga from "../components/InfoLembaga"; // Komponen Pilar Informasi Lingkungan
import DaftarSekarang from "../components/DaftarSekarang";
import KritikSaran from "../components/KritikdanSaran";

import kbm2 from "../assets/fotbar/kbm2.jpeg";

export const Pendidikan = () => {
  const [konten, setKonten] = useState({
    titleH1: "Pendekatan Kurikulum",
    titleH2: "Mitra Terbaik Pendidikan Formal Anak",
    paragraphs: [] as string[],
    imageSrc: "",
    isLogo: false,
    kurikulum_points: [] as any[],
    // ➕ Tampung array pilar cards dari MongoDB
    pilar_cards: [] as any[]
  });

  useEffect(() => {
    fetch("https://tpq-backend-api.vercel.app/api/halaman-dinamis/pendidikan")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setKonten({
            titleH1: resData.data.titleH1 || "Pendekatan Kurikulum",
            titleH2: resData.data.titleH2 || "Mitra Terbaik Pendidikan Formal Anak",
            paragraphs: resData.data.paragraphs || [],
            imageSrc: resData.data.imageSrc || "",
            isLogo: resData.data.isLogo || false,
            kurikulum_points: resData.data.kurikulum_points || [],
            // Tarik array dari response database
            pilar_cards: resData.data.pilar_cards || []
          });
        }
      })
      .catch((err) => console.error("Gagal memuat data dinamis pendidikan:", err));
  }, []);

  return (
    <div className="w-full m-0 p-0 block overflow-hidden">

      <BigFoto pageKey="pendidikan" fallbackTitle="PENDIDIKAN JENJANG" />

      <div data-aos="fade-up">
        <ProfileTeks
          titleH1={konten.titleH1}
          titleH2={konten.titleH2}
          imageSrc={konten.imageSrc || kbm2} 
          imagePosition="right" 
          isLogo={konten.isLogo}
          paragraphs={konten.paragraphs.length > 0 ? konten.paragraphs : ["Belum ada konten teks pendidikan yang tersedia."]}
        />
      </div>

      <KurikulumFokus points={konten.kurikulum_points} />

      {/* 4. INFO LINGKUNGAN PENDIDIKAN SEKARANG SUDAH DINAMIS MONGO REALTIME 🚀 */}
      <InfoLembaga cards={konten.pilar_cards} />

      <div>
        <DaftarSekarang onNavigateToRegister={() => window.location.href = '/pendaftaran'} />
      </div>

      <KritikSaran />

    </div>
  );
};

export default Pendidikan;