import React, { useState, useEffect } from "react";

interface KurikulumItem {
  badge: string;
  title: string;
  desc: string;
}

interface PilarItem {
  image: string;
  category: string;
  title: string;
  desc: string;
  iconType: string; // ➕ Ditambahkan ke interface state
  fileObject?: File | null;
  localPreview?: string;
}

export const KelolaHalamanDinamis = () => {
  const [activeTab, setActiveTab] = useState<"profil" | "pendidikan">("profil");
  const [titleH1, setTitleH1] = useState("");
  const [titleH2, setTitleH2] = useState("");
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  const [isLogo, setIsLogo] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  // State Profil (Visi, Misi, Moto)
  const [visiText, setVisiText] = useState("");
  const [misiList, setMisiList] = useState<string[]>([]);
  const [motoList, setMotoList] = useState<string[]>([]);

  // State Pendidikan (Kurikulum & Pilar)
  const [kurikulumPoints, setKurikulumPoints] = useState<KurikulumItem[]>([]);
  const [pilarCards, setPilarCards] = useState<PilarItem[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
    setSelectedFile(null);
    setPreviewUrl("");
    
    const subPath = activeTab === "profil" ? "profil" : "pendidikan";
    
    fetch(`http://localhost:5000/api/halaman-dinamis/${subPath}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setTitleH1(resData.data.titleH1 || "");
          setTitleH2(resData.data.titleH2 || "");
          setParagraphs(resData.data.paragraphs || []);
          setIsLogo(resData.data.isLogo || false);
          if (resData.data.imageSrc) setPreviewUrl(`http://localhost:5000${resData.data.imageSrc}`);
          
          if (activeTab === "profil") {
            setVisiText(resData.data.visi_text || "");
            setMisiList(resData.data.misi_list || []);
            setMotoList(resData.data.moto_list || []);
          } else {
            setKurikulumPoints(resData.data.kurikulum_points || []);
            setPilarCards(resData.data.pilar_cards || []);
          }
        }
      })
      .catch((err) => console.error("Gagal mengambil data halaman dinamis:", err));
  }, [activeTab]);

  const handleParaChange = (idx: number, value: string) => {
    const updated = [...paragraphs];
    updated[idx] = value;
    setParagraphs(updated);
  };

  const handleRemoveParagraph = (e: React.MouseEvent, idxToRemove: number) => {
    e.preventDefault();
    setParagraphs(paragraphs.filter((_, idx) => idx !== idxToRemove));
  };

  const handleAddPara = (e: React.MouseEvent) => {
    e.preventDefault();
    setParagraphs([...paragraphs, ""]);
  };

  const handleMisiChange = (idx: number, value: string) => {
    const updated = [...misiList];
    updated[idx] = value;
    setMisiList(updated);
  };

  const handleMotoChange = (idx: number, value: string) => {
    const updated = [...motoList];
    updated[idx] = value;
    setMotoList(updated);
  };

  const handleKurikulumValueChange = (idx: number, key: keyof KurikulumItem, value: string) => {
    const updated = [...kurikulumPoints];
    updated[idx][key] = value;
    setKurikulumPoints(updated);
  };

  const handleAddKurikulumCard = (e: React.MouseEvent) => {
    e.preventDefault();
    setKurikulumPoints([...kurikulumPoints, { badge: "", title: "", desc: "" }]);
  };

  const handleRemoveKurikulumCard = (e: React.MouseEvent, idxToRemove: number) => {
    e.preventDefault();
    setKurikulumPoints(kurikulumPoints.filter((_, idx) => idx !== idxToRemove));
  };

  // Handler Kartu Pilar
  const handlePilarValueChange = (idx: number, key: keyof PilarItem, value: any) => {
    const updated = [...pilarCards];
    updated[idx] = { ...updated[idx], [key]: value };
    setPilarCards(updated);
  };

  const handlePilarFileChange = (idx: number, file: File) => {
    const updated = [...pilarCards];
    updated[idx].fileObject = file;
    updated[idx].localPreview = URL.createObjectURL(file);
    setPilarCards(updated);
  };

  const handleAddPilarCard = (e: React.MouseEvent) => {
    e.preventDefault();
    setPilarCards([...pilarCards, { image: "", category: "", title: "", desc: "", iconType: "school" }]);
  };

  const handleRemovePilarCard = (e: React.MouseEvent, idxToRemove: number) => {
    e.preventDefault();
    setPilarCards(pilarCards.filter((_, idx) => idx !== idxToRemove));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const subPath = activeTab === "profil" ? "profil/update" : "pendidikan/update";
    const fileFieldName = activeTab === "profil" ? "foto_profil" : "foto_pendidikan";

    try {
      const dataToSend = new FormData();
      dataToSend.append("titleH1", titleH1);
      dataToSend.append("titleH2", titleH2);
      dataToSend.append("paragraphs", JSON.stringify(paragraphs));
      dataToSend.append("isLogo", String(isLogo));
      if (selectedFile) dataToSend.append(fileFieldName, selectedFile);

      if (activeTab === "profil") {
        dataToSend.append("visi_text", visiText);
        dataToSend.append("misi_list", JSON.stringify(misiList));
        dataToSend.append("moto_list", JSON.stringify(motoList));
      } else {
        dataToSend.append("kurikulum_points", JSON.stringify(kurikulumPoints));
        dataToSend.append("pilar_cards", JSON.stringify(pilarCards));
        
        pilarCards.forEach((card, idx) => {
          if (card.fileObject) {
            dataToSend.append(`pilar_image_${idx}`, card.fileObject);
          }
        });
      }

      const res = await fetch(`http://localhost:5000/api/halaman-dinamis/${subPath}`, {
        method: "PUT",
        body: dataToSend,
      });
      const resJson = await res.json();

      if (resJson.success) {
        setMessage(`Alhamdulillah, data halaman ${activeTab === 'profil' ? 'Profil' : 'Pendidikan'} berhasil disimpan!`);
        if (resJson.data.imageSrc) setPreviewUrl(`http://localhost:5000${resJson.data.imageSrc}`);
        if (activeTab === "pendidikan") setPilarCards(resJson.data.pilar_cards || []);
        setSelectedFile(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setMessage(resJson.error || "Gagal menyimpan perubahan.");
      }
    } catch (err) {
      setMessage("Gagal mengirim perubahan ke server MongoDB.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md mt-4 font-sans">
      <h2 className="text-xl font-black text-slate-800 border-b pb-3 mb-4 uppercase">⚙️ Kelola Halaman Web Dinamis</h2>
      
      {/* Tab Selector */}
      <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl">
        <button type="button" onClick={() => setActiveTab("profil")} className={`w-1/2 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${activeTab === "profil" ? "bg-[#006432] text-white shadow" : "text-slate-600 hover:bg-slate-200"}`}>
          📁 Halaman Profil
        </button>
        <button type="button" onClick={() => setActiveTab("pendidikan")} className={`w-1/2 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${activeTab === "pendidikan" ? "bg-[#006432] text-white shadow" : "text-slate-600 hover:bg-slate-200"}`}>
          📚 Halaman Pendidikan
        </button>
      </div>

      {message && (
        <div className={`p-3 rounded-xl text-xs font-bold mb-4 border ${message.includes("Alhamdulillah") ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-rose-50 text-rose-800 border-rose-200"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1"><label className="text-xs font-bold text-slate-500 uppercase">Judul Utama (H1)</label><input type="text" value={titleH1} onChange={(e) => setTitleH1(e.target.value)} required className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-600" /></div>
          <div className="space-y-1"><label className="text-xs font-bold text-slate-500 uppercase">Sub Judul (H2)</label><input type="text" value={titleH2} onChange={(e) => setTitleH2(e.target.value)} required className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-600" /></div>
        </div>

        {/* INPUT PARAGRAF */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-500 uppercase">Daftar Paragraf Deskripsi ({paragraphs.length}):</label>
            <button type="button" onClick={handleAddPara} className="text-[10px] font-bold bg-emerald-700 text-white px-2 py-1 rounded hover:bg-emerald-800 uppercase cursor-pointer">
              + Paragraf
            </button>
          </div>
          <div className="space-y-2">
            {paragraphs.map((para, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <span className="text-[10px] font-bold text-slate-400 pt-3">{idx + 1}.</span>
                <textarea value={para} onChange={(e) => handleParaChange(idx, e.target.value)} rows={2} required className="w-full p-2 border rounded-lg text-xs outline-none focus:ring-1 focus:ring-emerald-600 resize-none" />
                <button type="button" onClick={(e) => handleRemoveParagraph(e, idx)} className="text-xs bg-rose-100 text-rose-700 px-2 py-1.5 rounded hover:bg-rose-200 mt-1 cursor-pointer font-bold">✕</button>
              </div>
            ))}
          </div>
        </div>

        {/* MODUL PROFIL */}
        {activeTab === "profil" && (
          <div className="space-y-6 pt-4 border-t border-dashed border-slate-200">
            <h3 className="text-xs font-black text-[#006432] uppercase tracking-widest">📋 Modul Pengaturan Visi, Misi & Moto</h3>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Isi Teks Visi Utama</label>
              <textarea value={visiText} onChange={(e) => setVisiText(e.target.value)} required rows={2} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none resize-none" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase">Daftar Misi Lembaga ({misiList.length}):</label>
                <button type="button" onClick={(e) => { e.preventDefault(); setMisiList([...misiList, ""]); }} className="text-[10px] font-bold bg-[#006432] text-white px-2 py-1 rounded hover:bg-emerald-950 uppercase cursor-pointer">
                  + Misi
                </button>
              </div>
              <div className="space-y-2">
                {misiList.map((misi, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <span className="text-[10px] font-bold text-slate-400 pt-3">{idx + 1}.</span>
                    <input type="text" value={misi} onChange={(e) => handleMisiChange(idx, e.target.value)} required className="w-full p-2 border rounded-lg text-xs font-semibold outline-none" />
                    <button type="button" onClick={(e) => { e.preventDefault(); setMisiList(misiList.filter((_, i) => i !== idx)); }} className="text-xs bg-rose-100 text-rose-700 px-2 py-1.5 rounded hover:bg-rose-200 mt-0.5 font-bold cursor-pointer">✕</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-500 uppercase">Baris Moto Pendidikan ({motoList.length}):</label>
                <button type="button" onClick={(e) => { e.preventDefault(); setMotoList([...motoList, ""]); }} className="text-[10px] font-bold bg-[#006432] text-white px-2 py-1 rounded hover:bg-emerald-950 uppercase cursor-pointer">
                  + Baris Moto
                </button>
              </div>
              <div className="space-y-2">
                {motoList.map((moto, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <span className="text-[10px] font-bold text-slate-400 pt-3">{idx + 1}.</span>
                    <input type="text" value={moto} onChange={(e) => handleMotoChange(idx, e.target.value)} required className="w-full p-2 border rounded-lg text-xs font-semibold outline-none" placeholder="Contoh: Berilmu Amal'iah" />
                    <button type="button" onClick={(e) => { e.preventDefault(); setMotoList(motoList.filter((_, i) => i !== idx)); }} className="text-xs bg-rose-100 text-rose-700 px-2 py-1.5 rounded hover:bg-rose-200 mt-0.5 font-bold cursor-pointer">✕</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MODUL PENDIDIKAN */}
        {activeTab === "pendidikan" && (
          <>
            <div className="space-y-6 pt-4 border-t border-dashed border-slate-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-black text-emerald-800 uppercase tracking-widest">🟢 Kelola Kartu Fokus Utama Kurikulum</h3>
                <button type="button" onClick={handleAddKurikulumCard} className="text-[10px] font-black bg-emerald-700 text-white px-2.5 py-1.5 rounded-lg hover:bg-emerald-800 uppercase cursor-pointer">
                  + Tambah Kartu Baru
                </button>
              </div>
              <div className="space-y-4">
                {kurikulumPoints.map((item, idx) => (
                  <div key={idx} className="p-4 border rounded-2xl bg-slate-50/50 space-y-3 relative border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">Kartu Ke-{idx + 1}</span>
                      <button type="button" onClick={(e) => handleRemoveKurikulumCard(e, idx)} className="text-[9px] font-bold bg-rose-100 text-rose-700 px-2 py-1 rounded hover:bg-rose-200 uppercase cursor-pointer">Hapus Kartu ✕</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase">Badge Atas</label><input type="text" value={item.badge} onChange={(e) => handleKurikulumValueChange(idx, "badge", e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-semibold outline-none" /></div>
                      <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase">Judul Kartu</label><input type="text" value={item.title} onChange={(e) => handleKurikulumValueChange(idx, "title", e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-bold outline-none" /></div>
                    </div>
                    <div className="space-y-1"><label className="text-[10px] font-bold text-slate-500 uppercase">Isi Deskripsi Kartu</label><textarea value={item.desc} onChange={(e) => handleKurikulumValueChange(idx, "desc", e.target.value)} required rows={2} className="w-full p-2 bg-white border rounded-lg text-xs outline-none resize-none" /></div>
                  </div>
                ))}
              </div>
            </div>

            {/* KELOLA PILAR LINGKUNGAN (DENGAN SELECT OPTION PILIHAN IKON 🔴) */}
            <div className="space-y-6 pt-6 border-t border-dashed border-slate-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-black text-amber-600 uppercase tracking-widest">🏆 Kelola Profil Pilar Lingkungan Lembaga</h3>
                <button type="button" onClick={handleAddPilarCard} className="text-[10px] font-black bg-amber-500 text-amber-950 px-2.5 py-1.5 rounded-lg hover:bg-amber-600 uppercase cursor-pointer">
                  + Tambah Pilar Baru
                </button>
              </div>

              <div className="space-y-4">
                {pilarCards.map((card, idx) => (
                  <div key={idx} className="p-4 border rounded-2xl bg-amber-50/10 border-amber-200/50 space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-1 rounded-md border border-amber-100">Pilar Ke-{idx + 1}</span>
                      <button type="button" onClick={(e) => handleRemovePilarCard(e, idx)} className="text-[9px] font-bold bg-rose-100 text-rose-700 px-2 py-1 rounded hover:bg-rose-200 uppercase cursor-pointer">Hapus Pilar ✕</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Kategori Pilar</label>
                        <input type="text" value={card.category} onChange={(e) => handlePilarValueChange(idx, "category", e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-semibold outline-none" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Judul Pilar</label>
                        <input type="text" value={card.title} onChange={(e) => handlePilarValueChange(idx, "title", e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-bold outline-none" />
                      </div>
                      
                      {/* 🔴 MENU DROPDOWN PILIHAN IKON PILAR */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase block">Pilih Ikon Pilar</label>
                        <select 
                          value={card.iconType || "school"} 
                          onChange={(e) => handlePilarValueChange(idx, "iconType", e.target.value)}
                          className="w-full p-2 bg-white border border-slate-200 rounded-lg text-xs font-bold outline-none text-slate-700 focus:ring-1 focus:ring-emerald-600"
                        >
                          <option value="school">🏫 Gedung / Fasilitas (School)</option>
                          <option value="book">📖 KBM / Al-Qur'an (BookOpen)</option>
                          <option value="users">👥 Tenaga Pengajar / Guru (Users2)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Isi Deskripsi Penjelasan Pilar</label>
                      <textarea value={card.desc} onChange={(e) => handlePilarValueChange(idx, "desc", e.target.value)} required rows={2} className="w-full p-2 bg-white border rounded-lg text-xs font-semibold outline-none resize-none" />
                    </div>

                    <div className="p-3 bg-white border border-slate-100 rounded-xl flex items-center gap-4">
                      <div className="w-20 h-14 bg-slate-50 rounded-lg overflow-hidden border shrink-0 flex items-center justify-center">
                        {card.localPreview ? (
                          <img src={card.localPreview} alt="Preview Baru" className="w-full h-full object-cover" />
                        ) : card.image ? (
                          <img src={`http://localhost:5000${card.image}`} alt="Pilar" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[9px] text-slate-400 font-bold uppercase">No Photo</span>
                        )}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase block">Ganti Gambar Dokumentasi Pilar</label>
                        <input type="file" accept="image/*" onChange={(e) => { if (e.target.files?.[0]) handlePilarFileChange(idx, e.target.files[0]); }} className="text-[10px] text-slate-500 file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-[10px] file:font-bold file:bg-emerald-50 file:text-emerald-700 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* PENGATURAN GAMBAR UTAMA */}
        <div className="p-4 bg-slate-50 border rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-600 uppercase">File Gambar Utama</label>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer select-none">
              <input type="checkbox" checked={isLogo} onChange={(e) => setIsLogo(e.target.checked)} className="rounded text-emerald-600 focus:ring-emerald-500" />
              Gunakan Format Sizing LOGO (Aspect Square)
            </label>
          </div>
          <input type="file" accept="image/*" onChange={(e) => { if (e.target.files?.[0]) { setSelectedFile(e.target.files[0]); setPreviewUrl(URL.createObjectURL(e.target.files[0])); } }} className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" />
          {previewUrl && (
            <div className="w-32 h-32 border rounded-xl overflow-hidden bg-white p-1 shadow-sm">
              <img src={previewUrl} alt="Preview" className="w-full h-full object-contain mx-auto" />
            </div>
          )}
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer">
          {loading ? "Sedang Menyimpan data..." : `Simpan Konten Halaman ${activeTab === 'profil' ? 'Profil' : 'Pendidikan'}`}
        </button>
      </form>
    </div>
  );
};

export default KelolaHalamanDinamis;