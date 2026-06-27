import React, { useState, useEffect } from "react";

export const EditBanner = () => {
  const [pageKey, setPageKey] = useState("homepage");
  const [formData, setFormData] = useState({ subTitle: "", mainTitle: "", boldTitle: "", motto: "" });
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const loadBannerData = () => {
    setImagesToDelete([]);
    setNewFiles(null);
    fetch(`http://localhost:5000/api/banner/${pageKey}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setFormData(resData.data);
          setExistingImages(resData.data.images || []);
        } else {
          setFormData({ subTitle: "", mainTitle: "", boldTitle: "", motto: "" });
          setExistingImages([]);
        }
      });
  };

  useEffect(() => { loadBannerData(); }, [pageKey]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleDeleteImage = (imgUrl: string) => {
    if (imagesToDelete.includes(imgUrl)) {
      setImagesToDelete(imagesToDelete.filter(item => item !== imgUrl));
    } else {
      setImagesToDelete([...imagesToDelete, imgUrl]);
    }
  };

  const handleUpdateBanner = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const dataToSend = new FormData();
      dataToSend.append("subTitle", formData.subTitle);
      dataToSend.append("mainTitle", formData.mainTitle);
      dataToSend.append("boldTitle", formData.boldTitle);
      dataToSend.append("motto", formData.motto);
      dataToSend.append("imagesToDelete", JSON.stringify(imagesToDelete));

      if (newFiles) {
        for (let i = 0; i < newFiles.length; i++) {
          dataToSend.append("images", newFiles[i]);
        }
      }

      const res = await fetch(`http://localhost:5000/api/banner/update/${pageKey}`, {
        method: "PUT",
        body: dataToSend
      });
      const data = await res.json();
      if (data.success) {
        setMessage(`Banner halaman ${pageKey} berhasil diperbarui!`);
        loadBannerData();
      }
    } catch (err) {
      setMessage("Gagal menyimpan perubahan banner.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100 font-sans mt-4">
      <h2 className="text-xl font-black text-slate-800 border-b pb-3 mb-4 uppercase">Kelola Banner Carousel Halaman</h2>
      
      {message && <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold mb-4">{message}</div>}

      {/* PILIH HALAMAN YANG MAU DIEDIT */}
      <div className="mb-6 space-y-1.5">
        <label className="text-xs font-bold text-slate-500">Pilih Halaman yang Ingin Dikelola:</label>
        <select value={pageKey} onChange={(e) => setPageKey(e.target.value)} className="w-full p-3 bg-slate-50 border rounded-xl text-xs font-bold uppercase text-slate-700 outline-none focus:ring-2 focus:ring-emerald-600">
          <option value="homepage">🏠 Beranda (Home)</option>
          <option value="profile">📖 Profil Lembaga</option>
          <option value="pendidikan">🎓 Pendidikan</option>
          <option value="pendaftaran">📝 Pendaftaran Santri</option>
          <option value="kegiatan">📸 Dokumentasi Kegiatan</option>
        </select>
      </div>

      <form onSubmit={handleUpdateBanner} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Sub-Title Atas</label><input type="text" name="subTitle" value={formData.subTitle} onChange={handleTextChange} className="w-full p-2.5 bg-slate-50 border rounded-lg text-xs font-semibold outline-none focus:bg-white" /></div>
          <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Judul Highlight Tebal</label><input type="text" name="boldTitle" value={formData.boldTitle} onChange={handleTextChange} className="w-full p-2.5 bg-slate-50 border rounded-lg text-xs font-semibold outline-none focus:bg-white" /></div>
          <div className="sm:col-span-2 space-y-1"><label className="text-xs font-bold text-slate-500">Judul Utama Halaman</label><input type="text" name="mainTitle" value={formData.mainTitle} onChange={handleTextChange} required className="w-full p-2.5 bg-slate-50 border rounded-lg text-xs font-semibold outline-none focus:bg-white" /></div>
          <div className="sm:col-span-2 space-y-1"><label className="text-xs font-bold text-slate-500">Motto / Deskripsi Pendek Banner</label><textarea name="motto" value={formData.motto} onChange={handleTextChange} rows={2} className="w-full p-2.5 bg-slate-50 border rounded-lg text-xs font-semibold outline-none focus:bg-white resize-none" /></div>
        </div>

        {/* PREVIEW & FITUR HAPUS FOTO BANNER SATU PER SATU */}
        {existingImages.length > 0 && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 block">Foto Carousel Aktif (Klik gambar untuk menandai HAPUS):</label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {existingImages.map((img, i) => {
                const isMarked = imagesToDelete.includes(img);
                return (
                  <div key={i} onClick={() => toggleDeleteImage(img)} className={`aspect-video rounded-xl overflow-hidden border cursor-pointer relative transition-all ${isMarked ? "border-rose-600 opacity-40 scale-95" : "border-slate-200 hover:scale-103"}`}>
                    <img src={`http://localhost:5000${img}`} className="w-full h-full object-cover" alt="Carousel" />
                    {isMarked && <div className="absolute inset-0 bg-rose-900/40 flex items-center justify-center text-white text-[10px] font-black uppercase">Hapus ❌</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* INPUT FOTO BARU */}
        <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 space-y-2">
          <label className="text-xs font-bold text-slate-600 block">➕ Tambah Foto Baru ke Carousel Banner Halaman ini</label>
          <input type="file" accept="image/*" multiple onChange={(e) => { if(e.target.files) setNewFiles(e.target.files); }} className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" />
          {newFiles && <p className="text-[10px] font-bold text-emerald-600">✓ {newFiles.length} foto tambahan siap di-upload</p>}
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer">
          {loading ? "Menyimpan ke MongoDB..." : "Update Banner Halaman"}
        </button>
      </form>
    </div>
  );
};

export default EditBanner;