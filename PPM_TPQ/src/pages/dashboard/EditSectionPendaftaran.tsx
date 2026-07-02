import React, { useState, useEffect } from "react";

export const EditSectionPendaftaran = () => {
  const [judulUtama, setJudulUtama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [nomorWa, setNomorWa] = useState("");
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<FileList | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/section-pendaftaran")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setJudulUtama(resData.data.judul_utama || "");
          setDeskripsi(resData.data.deskripsi_pendek || "");
          setNomorWa(resData.data.nomor_wa || "6288802491985");
          setExistingImages(resData.data.gambar_slideshow || []);
        }
      });
  }, []);

  const handleMarkForDeletion = (imgUrl: string) => {
    if (imagesToDelete.includes(imgUrl)) {
      setImagesToDelete(imagesToDelete.filter((url) => url !== imgUrl));
    } else {
      setImagesToDelete([...imagesToDelete, imgUrl]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const dataToSend = new FormData();
      dataToSend.append("judul_utama", judulUtama);
      dataToSend.append("deskripsi_pendek", deskripsi);
      dataToSend.append("nomor_wa", nomorWa);
      dataToSend.append("hapus_gambar", JSON.stringify(imagesToDelete));

      if (newFiles) {
        for (let i = 0; i < newFiles.length; i++) {
          dataToSend.append("files_slideshow", newFiles[i]);
        }
      }

      const res = await fetch("http://localhost:5000/api/section-pendaftaran/update", {
        method: "PUT",
        body: dataToSend,
      });
      const resData = await res.json();

      if (resData.success) {
        setMessage("Alhamdulillah, seluruh perubahan data PPDB & nomor kontak admin sukses disimpan!");
        setExistingImages(resData.data.gambar_slideshow);
        setImagesToDelete([]);
        setNewFiles(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      setMessage("Gagal menyimpan perubahan ke server database.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md mt-4 font-sans">
      <h2 className="text-xl font-black text-slate-800 border-b pb-3 mb-4 uppercase tracking-wide">
        KELOLA TEKS, KONTAK WA & GAMBAR PPDB BANNER
      </h2>
      
      {message && <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold mb-4">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* SEKSYEN 1: PENGATURAN TEKS BANNER PPDB */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider">➔ 1. Teks Konten Utama Banner Front-Page</h3>
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Judul Utama</label>
            <input type="text" value={judulUtama} onChange={(e) => setJudulUtama(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-600" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Deskripsi Ajakan Pendaftaran</label>
            <textarea value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} required rows={3} className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-600 resize-none" />
          </div>
        </div>

        {/* SEKSYEN 2: KELOLA MULTI-IMAGES BACKGROUND SLIDESHOW */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider">➔ 2. Manajemen Foto Dokumentasi Slideshow</h3>
          
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-600 uppercase block">Foto Background Saat Ini ({existingImages.length}):</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {existingImages.map((img) => {
                const isMarked = imagesToDelete.includes(img);
                return (
                  <div key={img} className="relative rounded-xl overflow-hidden border aspect-video group bg-slate-100">
                    <img src={`http://localhost:5000${img}`} alt="Slideshow" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 flex items-center justify-center transition-all ${isMarked ? "bg-rose-900/80 backdrop-blur-xs" : "bg-black/0 group-hover:bg-black/40"}`}>
                      <button 
                        type="button" 
                        onClick={() => handleMarkForDeletion(img)}
                        className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${isMarked ? "bg-white text-rose-700 shadow" : "bg-rose-600 text-white scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"}`}
                      >
                        {isMarked ? "🔄 Batalkan Hapus" : "✕ Hapus Foto"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase block">Tambah Foto Background Baru:</label>
            <input type="file" accept="image/*" multiple onChange={(e) => setNewFiles(e.target.files)} className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" />
          </div>
        </div>

        {/* Garis Pembatas Tegas (Sesuai mockup pembatas merah diganti border elegan) */}
        <hr className="border-t-2 border-dashed border-slate-200 my-6" />

        {/* SEKSYEN 3: KHUSUS NOMOR HOTLINE WHATSAPP ADMIN (DIPISAH) */}
        <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100/80 space-y-3">
          <div className="space-y-1">
            <h3 className="text-xs font-black text-amber-600 uppercase tracking-wider">➔ 3. Jalur Kontak Cadangan (WhatsApp Hotline)</h3>
            <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
              Keterangan: Mengubah nomor di bawah ini akan secara otomatis memperbarui link tombol <strong>"Hubungi Admin Via Chat"</strong> sekaligus men-generate gambar <strong>QR Code / Barcode baru</strong> pada landing page pendaftaran secara real-time.
            </p>
          </div>

          <div className="space-y-1 pt-1">
            <label className="text-xs font-bold text-slate-600 uppercase block">Nomor WhatsApp Aktif Admin</label>
            <input 
              type="text" 
              value={nomorWa} 
              onChange={(e) => setNomorWa(e.target.value)} 
              required 
              className="w-full sm:w-1/2 p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-black text-[#006432] outline-none focus:ring-1 focus:ring-emerald-600 shadow-xs" 
              placeholder="Contoh: 6288802491985" 
            />
            <span className="text-[10px] font-bold text-slate-400 block pt-0.5">⚠️ Wajib diawali kode negara (Contoh: 62859...) tanpa spasi atau tanda plus (+).</span>
          </div>
        </div>

        {/* TOMBOL SUBMIT */}
        <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer">
          {loading ? "Sedang Mengirim ke MongoDB..." : "Simpan Seluruh Perubahan Konten"}
        </button>
      </form>
    </div>
  );
};

export default EditSectionPendaftaran;