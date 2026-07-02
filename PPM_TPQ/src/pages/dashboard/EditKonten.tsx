import React, { useState, useEffect } from "react";

interface PointItem {
  title: string;
  desc: string;
}

interface PointGroup {
  pointsTitle: string;
  items: PointItem[];
}

export const EditKonten = () => {
  // State Kata Mutiara & Kritik Saran
  const [formData, setFormData] = useState({
    quote_text: "", quote_footer: "", kritik_title: "", kritik_desc: ""
  });
  const [quoteBg, setQuoteBg] = useState<File | null>(null);
  const [quotePreview, setQuotePreview] = useState("");

  // State Segmen Profil Sejarah Utama
  const [profilData, setProfilData] = useState({ titleH1: "", titleH2: "" });
  const [paragraphs, setParagraphs] = useState<string[]>([]);
  
  // State Grup List Poin Dinamis (Array Berundak)
  const [pointGroups, setPointGroups] = useState<PointGroup[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // 1. Ambil data Content Dasar
    fetch("http://localhost:5000/api/content")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setFormData({
            quote_text: resData.data.quote_text || "",
            quote_footer: resData.data.quote_footer || "",
            kritik_title: resData.data.kritik_title || "",
            kritik_desc: resData.data.kritik_desc || ""
          });
          if (resData.data.quote_bg_url) setQuotePreview(`http://localhost:5000${resData.data.quote_bg_url}`);
        }
      });

    // 2. Ambil data Profil Bertingkat
    fetch("http://localhost:5000/api/profil-full")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          setProfilData({
            titleH1: resData.data.titleH1 || "",
            titleH2: resData.data.titleH2 || ""
          });
          setParagraphs(resData.data.paragraphs || []);
          
          // Bersihkan metadata _id bawaan mongoose agar tracking array React aman
          const cleanGroups = (resData.data.pointGroups || []).map((g: any) => ({
            pointsTitle: g.pointsTitle || "",
            items: (g.items || []).map((i: any) => ({ title: i.title || "", desc: i.desc || "" }))
          }));
          setPointGroups(cleanGroups);
        }
      });
  }, []);

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfilChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfilData({ ...profilData, [e.target.name]: e.target.value });
  };

  // Dinamis Manipulasi Paragraf Deskripsi
  const handleParagraphValueChange = (index: number, val: string) => {
    const updated = [...paragraphs];
    updated[index] = val;
    setParagraphs(updated);
  };

  const handleAddParagraph = (e: React.MouseEvent) => {
    e.preventDefault();
    setParagraphs([...paragraphs, ""]);
  };

  const handleRemoveParagraph = (e: React.MouseEvent, indexToRemove: number) => {
    e.preventDefault(); // Mencegah submit otomatis
    setParagraphs(paragraphs.filter((_, idx) => idx !== indexToRemove));
  };

  // MANIPULASI GRUP UTAMA (Judul List Poin)
  const handleGroupTitleChange = (gIndex: number, val: string) => {
    const updated = [...pointGroups];
    updated[gIndex].pointsTitle = val;
    setPointGroups(updated);
  };

  const handleAddGroup = (e: React.MouseEvent) => {
    e.preventDefault();
    setPointGroups([...pointGroups, { pointsTitle: "", items: [{ title: "", desc: "" }] }]);
  };

  const handleRemoveGroup = (e: React.MouseEvent, gIndex: number) => {
    e.preventDefault();
    setPointGroups(pointGroups.filter((_, idx) => idx !== gIndex));
  };

  // ➔ MANIPULASI SUB-ARRAY (Daftar Item Poin di dalam Grup)
  const handleItemValueChange = (gIndex: number, iIndex: number, key: 'title' | 'desc', val: string) => {
    const updated = [...pointGroups];
    updated[gIndex].items[iIndex][key] = val;
    setPointGroups(updated);
  };

  const handleAddItemToGroup = (e: React.MouseEvent, gIndex: number) => {
    e.preventDefault(); 
    const updated = [...pointGroups];
    updated[gIndex].items.push({ title: "", desc: "" }); 
    setPointGroups(updated);
  };

  const handleRemoveItemFromGroup = (e: React.MouseEvent, gIndex: number, iIndex: number) => {
    e.preventDefault(); 
    const updated = [...pointGroups];
    updated[gIndex].items = updated[gIndex].items.filter((_, idx) => idx !== iIndex); 
    setPointGroups(updated);
  };

  const handleSubmitAll = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const dataToSend = new FormData();
      Object.keys(formData).forEach((key) => dataToSend.append(key, (formData as any)[key]));
      if (quoteBg) dataToSend.append("quote_bg", quoteBg);
      await fetch("http://localhost:5000/api/content/update", { method: "PUT", body: dataToSend });

      // Kirim array berundak murni JSON
      const resProfil = await fetch("http://localhost:5000/api/profil-full/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titleH1: profilData.titleH1,
          titleH2: profilData.titleH2,
          paragraphs: paragraphs,
          pointGroups: pointGroups
        })
      });

      const resProfilJson = await resProfil.json();
      if (resProfilJson.success) {
        setMessage("Seluruh perubahan teks bergradasi sukses disimpan ke database MongoDB!");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err) {
      setMessage("Gagal menyimpan data konten website.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md mt-4 font-sans">
      <h2 className="text-xl font-black text-slate-800 border-b pb-3 mb-4 uppercase">Pengaturan Konten Beranda Website</h2>
      {message && <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold mb-4">{message}</div>}

      <form onSubmit={handleSubmitAll} className="space-y-10">

        {/* COMPONENT 1: KELOLA PROFIL SEJARAH & BANYAK GRUP LIST POIN */}
        <div className="space-y-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-sm font-bold text-[#006432] uppercase tracking-wider">➔ Kelola Profil Sejarah & Grup List Poin</h3>
            <button type="button" onClick={handleAddGroup} className="text-[10px] font-black bg-[#006432] text-white px-2.5 py-1.5 rounded-lg hover:bg-emerald-950 uppercase cursor-pointer shadow-sm">
              + Tambah Judul Grup Baru
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Judul Utama (H1)</label><input type="text" name="titleH1" value={profilData.titleH1} onChange={handleProfilChange} className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-600" /></div>
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Sub-Judul (H2)</label><input type="text" name="titleH2" value={profilData.titleH2} onChange={handleProfilChange} className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-emerald-600" /></div>
          </div>

          {/* Input Paragraf */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center"><label className="text-xs font-bold text-slate-500">Isi Paragraf Deskripsi ({paragraphs.length}):</label><button type="button" onClick={handleAddParagraph} className="text-[10px] font-bold bg-emerald-700 text-white px-2 py-1 rounded hover:bg-emerald-800 uppercase cursor-pointer">+ Paragraf</button></div>
            <div className="space-y-2">
              {paragraphs.map((para, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-[10px] font-bold text-slate-400 pt-3">{i + 1}.</span>
                  <textarea value={para} onChange={(e) => handleParagraphValueChange(i, e.target.value)} rows={2} className="w-full p-2 bg-white border rounded-lg text-xs outline-none focus:ring-1 focus:ring-emerald-600 resize-none" />
                  {/* FIX TOMBOL HAPUS PARAGRAF: Memanggil handleRemoveParagraph bawaan */}
                  <button type="button" onClick={(e) => handleRemoveParagraph(e, i)} className="text-xs bg-rose-100 text-rose-700 px-2 py-1.5 rounded hover:bg-rose-200 mt-1 cursor-pointer font-bold">✕</button>
                </div>
              ))}
            </div>
          </div>

          {/* LOOPING SEGMEN GRUP LIST UTAMA */}
          {pointGroups.map((group, gIndex) => (
            <div key={gIndex} className="p-4 border border-slate-200 bg-white rounded-2xl shadow-xs space-y-4 relative">
              
              {/* Box Judul Grup Poin & Tombol Hapus Grup */}
              <div className="bg-slate-50 p-3 rounded-xl border border-dashed border-slate-300 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black text-emerald-800 uppercase">Grup List Poin {gIndex + 1}</label>
                  <button type="button" onClick={(e) => handleRemoveGroup(e, gIndex)} className="text-[9px] font-black bg-rose-100 text-rose-700 px-2 py-1 rounded hover:bg-rose-200 uppercase cursor-pointer">
                    Hapus Halaman Grup ✕
                  </button>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500">Judul List Poin (Opsional) [Milik Grup {gIndex + 1}]</label>
                  <input type="text" value={group.pointsTitle} onChange={(e) => handleGroupTitleChange(gIndex, e.target.value)} className="w-full p-2 bg-white border rounded-lg text-xs font-bold outline-none" placeholder="Contoh: Visi & Misi Utama" />
                </div>
              </div>

              {/* Bagian Sub-List Item Poin di dalam Grup ini */}
              <div className="space-y-3 pl-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-600">Daftar Item Poin Di Dalam Grup ({group.items.length}):</label>
                  <button type="button" onClick={(e) => handleAddItemToGroup(e, gIndex)} className="text-[10px] font-black bg-emerald-700 text-white px-2.5 py-1.5 rounded-lg hover:bg-emerald-800 uppercase cursor-pointer shadow-xs">
                    + Item Poin
                  </button>
                </div>

                <div className="space-y-3">
                  {group.items.map((point, iIndex) => (
                    <div key={iIndex} className="p-3 border rounded-xl bg-slate-50/50 space-y-2 relative border-slate-100">
                      <div className="flex gap-2 items-center">
                        <span className="text-[10px] font-bold text-slate-400">Grup {gIndex+1} ➔ Poin {iIndex + 1}</span>
                        <button type="button" onClick={(e) => handleRemoveItemFromGroup(e, gIndex, iIndex)} className="text-[9px] font-bold bg-rose-50 text-rose-600 px-1.5 py-0.5 rounded ml-auto hover:bg-rose-100 uppercase cursor-pointer">
                          Hapus
                        </button>
                      </div>
                      <input type="text" value={point.title} onChange={(e) => handleItemValueChange(gIndex, iIndex, 'title', e.target.value)} className="w-full p-2 bg-white border rounded-md text-xs outline-none font-bold" placeholder="Judul Singkat Poin" />
                      <textarea value={point.desc} onChange={(e) => handleItemValueChange(gIndex, iIndex, 'desc', e.target.value)} rows={2} className="w-full p-2 bg-white border rounded-md text-xs outline-none resize-none" placeholder="Penjelasan lengkap mengenai poin terkait..." />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* COMPONENT 2 & 3: KATA MUTIARA HADITS & KRITIK SARAN */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider">➔ Bagian Kutipan / Kata Mutiara Hadits</h3>
          <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 space-y-3">
            <label className="text-xs font-bold text-slate-600 block">Background Gambar Kutipan</label>
            <input type="file" accept="image/*" onChange={(e) => { if (e.target.files?.[0]) { setQuoteBg(e.target.files[0]); setQuotePreview(URL.createObjectURL(e.target.files[0])); } }} className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" />
            {quotePreview && <img src={quotePreview} alt="Preview" className="h-24 object-cover rounded-xl shadow-sm border" />}
          </div>
          <div className="space-y-3">
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Isi Teks Hadits / Kata Mutiara</label><textarea name="quote_text" value={formData.quote_text} onChange={handleGeneralChange} rows={3} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none resize-none" /></div>
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Perawi / Sumber Kutipan</label><input type="text" name="quote_footer" value={formData.quote_footer} onChange={handleGeneralChange} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none" /></div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider">➔ Bagian Teks Kritik & Saran</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Judul Kritik Saran</label><input type="text" name="kritik_title" value={formData.kritik_title} onChange={handleGeneralChange} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none" /></div>
            <div className="space-y-1"><label className="text-xs font-bold text-slate-500">Deskripsi Pendek</label><textarea name="kritik_desc" value={formData.kritik_desc} onChange={handleGeneralChange} rows={2} className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none resize-none" /></div>
          </div>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer">
          {loading ? "Menyimpan ke MongoDB..." : "Simpan Semua Perubahan Konten"}
        </button>
      </form>
    </div>
  );
};

export default EditKonten;