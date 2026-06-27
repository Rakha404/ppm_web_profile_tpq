import React, { useState, useEffect } from "react";

interface Santri {
  _id: string;
  nama_lengkap_santri: string;
  tempat_lahir_santri: string;
  tanggal_lahir_santri: string;
  anak_ke: number;
  jumlah_saudara_kandung: number;
  nama_orangtua: string;
  tempat_lahir_orangtua: string;
  tanggal_lahir_orangtua: string;
  no_hp_orangtua: string;
  pekerjaan_orangtua: string;
  alamat_orangtua: string;
  createdAt: string;
}

export const DataPendaftaran = () => {
  const [listSantri, setListSantri] = useState<Santri[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/pendaftaran")
      .then((res) => res.json())
      .then((resData) => {
        console.log("=== DATA DARi BACKEND ===", resData);
        if (resData.success) {
          setListSantri(resData.data);
        } else {
          setError("Gagal memuat data dari server.");
        }
      })
      .catch(() => setError("Gagal terhubung ke backend server."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 font-bold text-slate-500 text-xs uppercase tracking-widest">
        Memuat Data Santri...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans">
      {/* STATS CARD BANNER */}
      <div className="bg-gradient-to-r from-[#006432] to-emerald-900 p-6 rounded-2xl shadow-md text-white flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black uppercase tracking-wide">Data Pendaftaran Santri</h2>
          <p className="text-[11px] text-emerald-200 font-medium mt-0.5">Manajemen verifikasi calon santri baru TPQ</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-center">
          <span className="block text-[10px] font-bold text-emerald-200 uppercase tracking-wider">Total Pendaftar</span>
          <span className="text-2xl font-black">{listSantri.length} <span className="text-xs font-normal">Anak</span></span>
        </div>
      </div>

      {/* TABEL DATA */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-wider">
                <th className="py-4 px-4 text-center w-12">No</th>
                <th className="py-4 px-5">Nama Santri</th>
                <th className="py-4 px-5">TTL / Detail</th>
                <th className="py-4 px-5">Orang Tua / Pekerjaan</th>
                <th className="py-4 px-5">Kontak & Alamat</th>
                <th className="py-4 px-5 text-center">Tanggal Daftar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {listSantri.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-400 font-bold uppercase tracking-wide">
                    Belum ada santri yang mendaftar.
                  </td>
                </tr>
              ) : (
                listSantri.map((santri, index) => (
                  <tr key={santri._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-slate-400">{index + 1}</td>
                    
                    {/* NAMA SANTRI */}
                    <td className="py-4 px-5">
                      <div className="font-black text-slate-800 uppercase tracking-wide">{santri.nama_lengkap_santri}</div>
                      <div className="text-[10px] text-slate-400 font-bold mt-0.5">
                        Anak ke-{santri.anak_ke} dari {santri.jumlah_saudara_kandung} bersaudara
                      </div>
                    </td>
                    
                    {/* TTL SANTRI */}
                    <td className="py-4 px-5">
                      <div className="font-semibold text-slate-700">
                        {santri.tempat_lahir_santri ? `${santri.tempat_lahir_santri}, ` : ""}
                        {santri.tanggal_lahir_santri ? new Date(santri.tanggal_lahir_santri).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }) : "-"}
                      </div>
                    </td>
                    
                    {/* ORANG TUA */}
                    <td className="py-4 px-5 text-slate-600 space-y-0.5">
                      <div className="font-bold text-slate-800">{santri.nama_orangtua}</div>
                      <div className="text-[11px] text-slate-500"><span className="text-[10px] font-bold text-slate-400 uppercase">Pekerjaan:</span> {santri.pekerjaan_orangtua}</div>
                    </td>
                    
                    {/* KONTAK & ALAMAT */}
                    <td className="py-4 px-5 space-y-1">
                      {santri.no_hp_orangtua ? (
                        <a 
                          href={`https://wa.me/${santri.no_hp_orangtua.toString().replace(/^0/, "62")}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
                        >
                          📞 {santri.no_hp_orangtua}
                        </a>
                      ) : (
                        <span className="text-rose-500 font-bold italic block text-[11px]">⚠️ No. HP Kosong</span>
                      )}
                      <div className="text-slate-500 text-[11px] leading-relaxed max-w-xs">{santri.alamat_orangtua}</div>
                    </td>

                    {/* TANGGAL DAFTAR */}
                    <td className="py-4 px-5 text-center text-[11px] font-bold text-slate-400">
                      {new Date(santri.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataPendaftaran;