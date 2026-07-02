import React, { useState, useEffect } from "react";
import { MessageSquare, Calendar, User, Phone, ExternalLink } from "lucide-react";

interface MasukanItem {
  _id: string;
  nama_lengkap: string;
  no_whatsapp: string;
  pesan_saran: string;
  createdAt: string;
}

export const DataKritikSaran = () => {
  const [listSaran, setListSaran] = useState<MasukanItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/kritik-saran")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setListSaran(resData.data);
        }
      })
      .catch((err) => console.error("Gagal menarik data kritik saran:", err))
      .finally(() => setLoading(false));
  }, []);

  // Fungsi untuk memformat tanggal agar lebih mudah dibaca admin
  const formatTanggal = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Fungsi interaktif agar admin bisa langsung membalas/merespon saran via WhatsApp
  const handleHubungiWali = (noWa: string, nama: string) => {
    // Bersihkan nomor dari spasi atau karakter aneh
    let cleanedNo = noWa.replace(/[^0-9]/g, "");
    if (cleanedNo.startsWith("0")) {
      cleanedNo = "62" + cleanedNo.slice(1);
    }
    const pesanText = `Assalamu'alaikum Wr. Wb. Terima kasih Bapak/Ibu *${nama}* atas kritik dan saran yang telah dikirimkan melalui website TPQ Raudlatul Ma'arif. Kami selaku pengurus...`;
    window.open(`https://wa.me/${cleanedNo}?text=${encodeURIComponent(pesanText)}`, "_blank");
  };

  return (
    <div className="p-6 font-sans min-h-screen bg-slate-50">
      
      {/* HEADER BANNER */}
      <div className="mb-8 border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 text-[#006432] rounded-xl shadow-xs">
            <MessageSquare size={24} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight">
              Rekapitulasi Kritik & Saran
            </h1>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-0.5">
              Berikut adalah daftar pesan, masukan, dan evaluasi real-time yang dikirimkan oleh Wali Murid maupun masyarakat.
            </p>
          </div>
        </div>
      </div>

      {/* RENDER KONDISI MEMUAT / KOSONG / KARTU DATA */}
      {loading ? (
        <div className="text-center py-12 text-xs font-bold text-slate-400 uppercase tracking-wider">
          Sedang menarik kotak pesan dari MongoDB...
        </div>
      ) : listSaran.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200 max-w-md mx-auto mt-6 space-y-2">
          <span className="text-3xl block">📥</span>
          <h4 className="text-sm font-black text-slate-700 uppercase">Kotak Masukan Kosong</h4>
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            Belum ada kritik atau saran baru yang masuk dari formulir website luar untuk saat ini.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {listSaran.map((item) => (
            <div 
              key={item._id} 
              className="bg-white border border-slate-200/80 rounded-2rem p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Bagian Atas: Metadata Identitas */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-slate-700">
                    <User size={14} className="text-emerald-700 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wide max-w-160px truncate">
                      {item.nama_lengkap}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                    <Calendar size={13} className="shrink-0" />
                    <span>{formatTanggal(item.createdAt)}</span>
                  </div>
                </div>

                {/* Bagian Tengah: Isi Pesan Pengirim */}
                <div className="bg-slate-50/70 border border-slate-100 p-4 rounded-2xl">
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed text-justify italic whitespace-pre-line">
                    "{item.pesan_saran}"
                  </p>
                </div>
              </div>

              {/* Bagian Bawah: Aksi Hubungi Balik WA */}
              <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Phone size={13} className="shrink-0 text-slate-400" />
                  <span className="text-xs font-bold font-mono tracking-tight">{item.no_whatsapp}</span>
                </div>
                
                <button
                  onClick={() => handleHubungiWali(item.no_whatsapp, item.nama_lengkap)}
                  className="bg-emerald-50 text-emerald-800 hover:bg-[#006432] hover:text-white border border-emerald-100/70 font-bold px-3.5 py-2 rounded-xl text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs active:scale-97"
                >
                  <span>Respon WA</span>
                  <ExternalLink size={12} className="stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default DataKritikSaran;