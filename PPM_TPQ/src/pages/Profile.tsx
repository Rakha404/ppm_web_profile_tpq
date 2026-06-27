import React, { useState, useEffect } from "react";
import ProfileTeks from "../components/ProfilTeks";
import BigFoto from "../components/BigFoto";
import DaftarSekarang from "../components/DaftarSekarang";
import Visimisi from "../components/Visimisi";

import logo_tpq from "../assets/logo_tpq.png";

export const Profile = () => {
  const [konten, setKonten] = useState({
    titleH1: "Profile Pendidikan TPQ",
    titleH2: "Raudlatul Ma'arif An-Nahdliyah",
    paragraphs: [] as string[],
    imageSrc: "",
    isLogo: true,
    
    // ➕ STATE TAMBAHAN UNTUK VISI MISI MOTO DARI MONGODB
    visi_text: "",
    misi_list: [] as string[],
    moto_list: [] as string[]
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/halaman-dinamis/profil")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setKonten({
            titleH1: resData.data.titleH1 || "Profile Pendidikan TPQ",
            titleH2: resData.data.titleH2 || "Raudlatul Ma'arif An-Nahdliyah",
            paragraphs: resData.data.paragraphs || [],
            imageSrc: resData.data.imageSrc || "",
            isLogo: resData.data.isLogo !== undefined ? resData.data.isLogo : true,
            
            // ➕ AMBIL FIELD DARI BACKEND
            visi_text: resData.data.visi_text || "",
            misi_list: resData.data.misi_list || [],
            moto_list: resData.data.moto_list || []
          });
        }
      })
      .catch((err) => console.error("Gagal memuat data dinamis profil:", err));
  }, []);

  const defaultParagraphs = [
    "Raudlatul Ma'arif An-Nahdliyah hadir sebagai lembaga pendidikan keagamaan non-formal yang mengintegrasikan sistem pembelajaran Taman Pendidikan Al-Qur'an (TPQ). Berpusat di Tegal, kami berkomitmen menjadi mitra terbaik bagi orang tua dalam membangun fondasi akidah, ibadah, dan akhlakul karimah bagi putra-putri tercinta sejak usia dini.",
    "Melalui kurikulum berbasis nilai Ahlussunnah wal Jama'ah An-Nahdliyah, kami berfokus pada metode membaca Al-Qur'an yang tartil and benar (Tahsin), pembiasaan hafalan surah pendek serta doa harian, hingga pendalaman ilmu syariat dasar. Didukung oleh lingkungan belajar yang interaktif, teduh, dan menyenangkan, kami siap menuntun para santri tumbuh menjadi generasi Qur'ani yang berwawasan luas, saleh-salihah, dan membawa keberkahan bagi masyarakat."
  ];

  return (
    <div className="w-full m-0 p-0 block overflow-hidden">
      
      {/* 1. BANNER UTAMA ATAS */}
      <BigFoto pageKey="profile" fallbackTitle="PROFIL LEMBAGA" />

      {/* 2. PROFIL TEKS + FOTO */}
      <div data-aos="fade-right">
        <ProfileTeks
          titleH1={konten.titleH1}
          titleH2={konten.titleH2}
          imageSrc={konten.imageSrc || logo_tpq} 
          imagePosition="right"
          isLogo={konten.isLogo} 
          paragraphs={konten.paragraphs.length > 0 ? konten.paragraphs : defaultParagraphs}
        />
      </div>

      {/* 3. VISI MISI DENGAN DATA DINAMIS DATABASE 🚀 */}
      <Visimisi 
        visi={konten.visi_text}
        misi={konten.misi_list}
        moto={konten.moto_list}
      />

      {/* 4. CALL TO ACTION REGISTER */}
      <DaftarSekarang
        onNavigateToRegister={() => window.location.href = '/pendaftaran'}
      />

    </div>
  );
};

export default Profile;