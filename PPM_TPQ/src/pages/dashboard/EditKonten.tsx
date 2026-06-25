import React, { useState, useEffect } from "react";

export const EditKonten = () => {
  const [formData, setFormData] = useState({
    hero_subtitle: "", hero_title: "", hero_bold_title: "", hero_motto: "",
    kritik_title: "", kritik_desc: ""
  });
  // State tambahan untuk menampung file gambar yang dipilih admin
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 1. Ambil data teks & url foto saat ini dari MongoDB saat halaman dibuka
  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setFormData(resData.data);
          if (resData.data.hero_image_url) {
            setPreviewUrl(`http://localhost:5000${resData.data.hero_image_url}`);
          }
        }
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler saat admin memilih file gambar baru
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Buat preview gambar sementara
    }
  };

  // 2. Kirim perubahan teks dan file gambar ke MongoDB
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Karena mengirim file, kita WAJIB menggunakan objek FormData (bukan JSON biasa)
      const dataToSend = new FormData();
      dataToSend.append("hero_subtitle", formData.hero_subtitle);
      dataToSend.append("hero_title", formData.hero_title);
      dataToSend.append("hero_bold_title", formData.hero_bold_title);
      dataToSend.append("hero_motto", formData.hero_motto);
      dataToSend.append("kritik_title", formData.kritik_title);
      dataToSend.append("kritik_desc", formData.kritik_desc);

      // Jika ada file gambar baru yang dimasukkan, sisipkan ke FormData
      if (imageFile) {
        dataToSend.append("hero_image", imageFile);
      }

      const res = await fetch("http://localhost:5000/api/content/update", {
        method: "PUT",
        // Note: Jangan pasang "Content-Type" di headers saat pakai FormData, biar browser otomatis mengaturnya
        body: dataToSend
      });
      
      const data = await res.json();
      if (data.success) {
        setMessage("Konten teks dan foto hero berhasil diperbarui di MongoDB!");
      }
    } catch (err) {
      setMessage("Gagal menyimpan perubahan ke server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md mt-6 font-sans">
      <h2 className="text-xl font-black text-slate-800 border-b pb-3 mb-4">PENGATURAN TEKS & FOTO WEBSITE (CMS)</h2>
      
      {message && <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold mb-4">{message}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider">➔ Bagian Banner Utama (Hero Section)</h3>
        
        {/* INPUT FILE UPLOAD GAMBAR HERO */}
        <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 space-y-3">
          <label className="text-xs font-bold text-slate-600 block">Foto Banner Utama (Hero Image)</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" 
          />
          {previewUrl && (
            <div className="mt-2">
              <p className="text-[10px] font-bold text-slate-400 mb-1">Preview Gambar:</p>
              <img src={previewUrl} alt="Preview" className="h-32 object-cover rounded-xl shadow-sm border border-slate-200" />
            </div>
          )}
        </div>

        {/* INPUT TEKS SEPERTI SEBELUMNYA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500">Sub-Title Atas</label>
            <input type="text" name="hero_subtitle" value={formData.hero_subtitle} onChange={handleChange} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-2 focus:ring-emerald-600" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500">Judul Tebal Highlight</label>
            <input type="text" name="hero_bold_title" value={formData.hero_bold_title} onChange={handleChange} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-2 focus:ring-emerald-600" />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-bold text-slate-500">Judul Utama (Main Title)</label>
            <input type="text" name="hero_title" value={formData.hero_title} onChange={handleChange} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-2 focus:ring-emerald-600" />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-bold text-slate-500">Motto Lembaga / Deskripsi</label>
            <textarea name="hero_motto" value={formData.hero_motto} onChange={handleChange} rows={2} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-2 focus:ring-emerald-600 resize-none" />
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md">
          {loading ? "Menyimpan ke MongoDB..." : "Simpan Semua Perubahan Teks & Foto"}
        </button>
      </form>
    </div>
  );
};

export default EditKonten;