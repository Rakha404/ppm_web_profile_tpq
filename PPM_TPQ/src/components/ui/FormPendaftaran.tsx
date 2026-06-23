import React, { useState } from "react";

interface FormData {
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
  tanda_tangan_wali: string;
}

export const FormPendaftaran = () => {
  const [formData, setFormData] = useState<FormData>({
    nama_lengkap_santri: "",
    tempat_lahir_santri: "",
    tanggal_lahir_santri: "",
    anak_ke: 1,
    jumlah_saudara_kandung: 0,
    nama_orangtua: "",
    tempat_lahir_orangtua: "",
    tanggal_lahir_orangtua: "",
    no_hp_orangtua: "",
    pekerjaan_orangtua: "",
    alamat_orangtua: "",
    tanda_tangan_wali: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  
  // State baru untuk mengontrol tampilan pop-up modal sukses
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registeredName, setRegisteredName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "anak_ke" || name === "jumlah_saudara_kandung" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:5000/api/pendaftaran", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Simpan nama santri sementara untuk ditampilkan di dalam pop-up modal
        setRegisteredName(formData.nama_lengkap_santri);
        // Munculkan pop-up sukses
        setShowSuccessModal(true);
        
        // Reset isi formulir pendaftaran
        setFormData({
          nama_lengkap_santri: "",
          tempat_lahir_santri: "",
          tanggal_lahir_santri: "",
          anak_ke: 1,
          jumlah_saudara_kandung: 0,
          nama_orangtua: "",
          tempat_lahir_orangtua: "",
          tanggal_lahir_orangtua: "",
          no_hp_orangtua: "",
          pekerjaan_orangtua: "",
          alamat_orangtua: "",
          tanda_tangan_wali: "",
        });
      } else {
        setMessage({ type: "error", text: data.error || "Gagal menyimpan pendaftaran." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Gagal terhubung ke server backend. Pastikan server sudah jalan." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-6 p-6 sm:p-10 bg-white rounded-2xl shadow-xl border border-slate-100 relative">
      
      {/* ================================= POP-UP MODAL SUKSES (TAILWIND) ================================= */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-fadeIn">
          {/* Lapisan Blur Latar Belakang (Backdrop) */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setShowSuccessModal(false)}
          />
          
          {/* Kotak Konten Utama Pop-up */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border border-slate-100 transform scale-100 transition-all z-10 relative animate-scaleUp">
            {/* Lingkaran Centang Animasi */}
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-emerald-200 shadow-inner">
              <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h3 className="text-xl font-black text-slate-800 tracking-tight">Pendaftaran Sukses!</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Alhamdulillah, berkas formulir pendaftaran online untuk calon santri:
            </p>
            <p className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl inline-block mt-3 border border-emerald-100 uppercase tracking-wide">
              {registeredName}
            </p>
            <p className="text-[11px] text-slate-400 mt-3 italic">
              Data telah berhasil disimpan. Silakan bawa fotokopi KK & Akta saat validasi fisik ke madrasah.
            </p>
            
            {/* Tombol Tutup Pop-up */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-600/10 transition-all active:scale-95 text-sm uppercase tracking-wider"
            >
              Selesai & Tutup
            </button>
          </div>
        </div>
      )}
      {/* ================================================================================================== */}

      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Formulir Pendaftaran Santri Baru</h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2">Silakan isi data calon santri dan wali dengan lengkap dan benar.</p>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
          message.type === "success" 
            ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
            : "bg-rose-50 text-rose-800 border-rose-200"
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SECTION 1: BIODATA SANTRI */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 border-b pb-2 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">1</span>
            Biodata Calon Santri
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap Santri <span className="text-rose-500">*</span></label>
              <input type="text" name="nama_lengkap_santri" value={formData.nama_lengkap_santri} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Contoh: Ahmad Fauzi" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tempat Lahir <span className="text-rose-500">*</span></label>
              <input type="text" name="tempat_lahir_santri" value={formData.tempat_lahir_santri} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Contoh: Tegal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Lahir <span className="text-rose-500">*</span></label>
              <input type="date" name="tanggal_lahir_santri" value={formData.tanggal_lahir_santri} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Anak Ke- <span className="text-rose-500">*</span></label>
              <input type="number" name="anak_ke" min="1" value={formData.anak_ke} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Jumlah Saudara Kandung <span className="text-rose-500">*</span></label>
              <input type="number" name="jumlah_saudara_kandung" min="0" value={formData.jumlah_saudara_kandung} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
            </div>
          </div>
        </div>

        {/* SECTION 2: DATA ORANG TUA / WALI */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 border-b pb-2 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">2</span>
            Data Orang Tua / Wali
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap Orang Tua / Wali <span className="text-rose-500">*</span></label>
              <input type="text" name="nama_orangtua" value={formData.nama_orangtua} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Contoh: Budi Santoso" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tempat Lahir Orang Tua <span className="text-rose-500">*</span></label>
              <input type="text" name="tempat_lahir_orangtua" value={formData.tempat_lahir_orangtua} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal Lahir Orang Tua <span className="text-rose-500">*</span></label>
              <input type="date" name="tanggal_lahir_orangtua" value={formData.tanggal_lahir_orangtua} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">No. HP / WhatsApp <span className="text-rose-500">*</span></label>
              <input type="tel" name="no_hp_orangtua" value={formData.no_hp_orangtua} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Contoh: 081234567890" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pekerjaan <span className="text-rose-500">*</span></label>
              <input type="text" name="pekerjaan_orangtua" value={formData.pekerjaan_orangtua} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Contoh: Karyawan Swasta" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Alamat Lengkap Rumah <span className="text-rose-500">*</span></label>
              <textarea name="alamat_orangtua" value={formData.alamat_orangtua} onChange={handleChange} required rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-none" placeholder="Tuliskan alamat lengkap RT/RW, Desa, Kecamatan, Kabupaten"></textarea>
            </div>
          </div>
        </div>

        {/* SECTION 3: PENGESAHAN */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 border-b pb-2 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">3</span>
            Pernyataan & Pengesahan
          </h3>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              Dengan mengisi formulir ini, saya menyatakan bertanggung jawab penuh atas keaslian data yang diberikan dan bersedia mematuhi segala peraturan dan ketentuan akademik serta administrasi yang berlaku di lingkungan lembaga.
            </p>
          </div>
          <div className="max-w-xs">
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Terang Wali (Sebagai Tanda Tangan) <span className="text-rose-500">*</span></label>
            <input type="text" name="tanda_tangan_wali" value={formData.tanda_tangan_wali} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition font-medium text-center italic tracking-wider bg-amber-50/50" placeholder="Ketik nama lengkap Anda" />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-4 border-t flex justify-end">
          <button type="submit" disabled={loading} className={`w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 transition transform active:scale-95 flex items-center justify-center gap-2 ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}>
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses data...
              </>
            ) : (
              "Kirim Pendaftaran Online"
            )}
          </button>
        </div>

      </form>
    </div>
  );
};

export default FormPendaftaran;