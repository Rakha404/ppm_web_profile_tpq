import { useState, useEffect } from "react";
import BigFoto from "../components/BigFoto";
import FotoProfile from "../components/FotoProfile";
import KritikSaran from "../components/KritikdanSaran";
import DaftarSekarang from "../components/DaftarSekarang";

// Foto backup/default lokal (buat cadangan banner atas kalau database kosong)
import wisata_religi_6 from "../assets/wisata religi/wisata_religi_6.jpg";
import fotbar_murid from "../assets/fotbar/fotbar_murid.jpg";

// Siapkan interface untuk tipe data Galeri dari MongoDB
interface AlbumGaleri {
  _id: string;
  title: string;
  subTitle: string;
  photos: string[];
}

export const Kegiatan = () => {
  // 1. Siapkan state untuk menampung semua data album dari MongoDB
  const [listGaleri, setListGaleri] = useState<AlbumGaleri[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Ambil data dari backend saat halaman Kegiatan dibuka
  useEffect(() => {
    fetch("http://localhost:5000/api/galeri")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setListGaleri(resData.data);
        }
      })
      .catch((err) => console.error("Gagal mengambil galeri dari MongoDB:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full">
      {/* Banner Atas Halaman Kegiatan */}
      <BigFoto
        subTitle="DOKUMENTASI KEGIATAN"
        mainTitle="TPQ & MDTA RAUDLATUL MA'ARIF AN-NAHDLIYAH"
        boldTitle=""
        motto="Mengukir Cerita Indah dan Ukhuwah dalam Setiap Langkah Pembelajaran Santri"
        customImages={[wisata_religi_6, fotbar_murid]}
      />

      {/* 3. LOOPING ALBUM DARI MONGODB */}
      {loading ? (
        <div className="text-center py-12 font-semibold text-slate-500 text-sm">
          Memuat Galeri Kegiatan...
        </div>
      ) : listGaleri.length > 0 ? (
        listGaleri.map((album, index) => (
          <div key={album._id} data-aos="fade-up">
            <FotoProfile
              title={index === 0 ? album.title : undefined}
              subTitle={album.subTitle}
              // Kirim data mentah asli dari MongoDB apa adanya
              photos={album.photos}
            />
          </div>
        ))
      ) : (
        // Tampilan cadangan jika di MongoDB belum ada data album sama sekali
        <div className="text-center py-12 font-semibold text-slate-400 text-xs">
          Belum ada dokumentasi kegiatan yang di-publish.
        </div>
      )}

      {/* Bagian Bawah Halaman */}
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