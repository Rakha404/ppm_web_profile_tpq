import React, { useState, useEffect } from "react";
import { Contact, ShieldAlert, Info, Plus, Trash2 } from "lucide-react";

interface KeunggulanItem {
  icon_name: string;
  teks_judul: string;
}

export const KelolaKontakHeader = () => {
  const [nomorTopbar, setNomorTopbar] = useState("");
  const [linkIg, setLinkIg] = useState("");
  const [linkFb, setLinkFb] = useState("");
  const [linkYt, setLinkYt] = useState("");
  
  const [namaAdmin1, setNamaAdmin1] = useState("");
  const [waAdmin1, setWaAdmin1] = useState("");
  const [namaAdmin2, setNamaAdmin2] = useState("");
  const [waAdmin2, setWaAdmin2] = useState("");

  const [tentangKami, setTentangKami] = useState("");
  const [mapsRute, setMapsRute] = useState("");
  const [mapsIframe, setMapsIframe] = useState("");

  // State Baru untuk Repeater Keunggulan Pendidikan
  const [keunggulanList, setKeunggulanList] = useState<KeunggulanItem[]>([]);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Opsi pilihan ikon Lucide yang valid untuk kebutuhan edukasi TPQ
  const opsiIkon = [
    { value: "BookOpenCheck", label: "📖 Buku & Centang (Default 1)" },
    { value: "GraduationCap", label: "🎓 Toga Kuliah (Default 2)" },
    { value: "UserCheck", label: "👤 Guru & Centang (Default 3)" },
    { value: "Heart", label: "❤️ Hati / Kasih Sayang" },
    { value: "Award", label: "🏅 Medali Penghargaan" },
    { value: "Star", label: "⭐ Bintang Prestasi" },
    { value: "Users", label: "👥 Jamaah / Santri Banyak" },
    { value: "BookMarqued", label: "🔖 Al-Qur'an / Kitab" }
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/kontak-header")
      .then((res) => res.json())
      .then((resData) => {
        if (resData.success && resData.data) {
          const d = resData.data;
          setNomorTopbar(d.nomor_topbar || "");
          setLinkIg(d.link_instagram || "");
          setLinkFb(d.link_facebook || "");
          setLinkYt(d.link_youtube || "");
          setNamaAdmin1(d.nama_admin_1 || "");
          setWaAdmin1(d.wa_admin_1 || "");
          setNamaAdmin2(d.nama_admin_2 || "");
          setWaAdmin2(d.wa_admin_2 || "");
          setTentangKami(d.tentang_kami || "");
          setMapsRute(d.maps_petunjuk_rute || "");
          setMapsIframe(d.maps_iframe_src || "");
          
          // Set list keunggulan dari database mongo
          setKeunggulanList(d.keunggulan_list || []);
        }
      });
  }, []);

  // Handler fungsi repeater tambah & hapus item
  const handleTambahKeunggulan = () => {
    setKeunggulanList([...keunggulanList, { icon_name: "BookOpenCheck", teks_judul: "Tulis keunggulan baru di sini..." }]);
  };

  const handleHapusKeunggulan = (index: number) => {
    setKeunggulanList(keunggulanList.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (index: number, field: keyof KeunggulanItem, val: string) => {
    const updated = [...keunggulanList];
    updated[index][field] = val;
    setKeunggulanList(updated);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/kontak-header/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomor_topbar: nomorTopbar,
          link_instagram: linkIg,
          link_facebook: linkFb,
          link_youtube: linkYt,
          nama_admin_1: namaAdmin1,
          wa_admin_1: waAdmin1,
          nama_admin_2: namaAdmin2,
          wa_admin_2: waAdmin2,
          tentang_kami: tentangKami,
          maps_petunjuk_rute: mapsRute,
          maps_iframe_src: mapsIframe,
          keunggulan_list: keunggulanList // ➕ Kirim array list terbaru
        }),
      });
      const resJson = await res.json();
      if (resJson.success) {
        setMessage("Alhamdulillah, seluruh data navigasi, footer & lencana keunggulan sukses disimpan!");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      setMessage("Gagal mengirim data ke server database.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md mt-4 font-sans mb-12">
      <div className="flex items-center gap-2.5 border-b pb-3 mb-5">
        <Contact className="text-emerald-700" size={22} />
        <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide">
        KELOLA KONTAK TOPBAR & ELEMENT FOOTER
        </h2>
      </div>

      {message && <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold mb-5">{message}</div>}

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* SEKSYEN 1 & SEKSYEN 2 BIARKAN SEPERTI KEMARIN */}
        <div className="space-y-3">
          <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider">➔ 1. Kontak Utama & Tautan Sosial Media</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Nomor Telepon Utama (Topbar & Footer)</label>
              <input type="text" value={nomorTopbar} onChange={(e) => setNomorTopbar(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-bold text-[#006432] outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">URL Link Instagram Profile</label>
              <input type="url" value={linkIg} onChange={(e) => setLinkIg(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">URL Link Facebook Profile</label>
              <input type="url" value={linkFb} onChange={(e) => setLinkFb(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">URL Link Youtube Channel</label>
              <input type="url" value={linkYt} onChange={(e) => setLinkYt(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none" />
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* POPUP DUA TOMBOL CHAT */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider">➔ 2. Konfigurasi Modal Popup WhatsApp (Dua Tombol)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200/70 rounded-2xl bg-slate-50/50 space-y-3">
              <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Tombol Atas (Admin 1)</span>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Nama Label Layanan</label>
                <input type="text" value={namaAdmin1} onChange={(e) => setNamaAdmin1(e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-bold outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Nomor WhatsApp Admin 1</label>
                <input type="text" value={waAdmin1} onChange={(e) => setWaAdmin1(e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-semibold outline-none" />
              </div>
            </div>
            <div className="p-4 border border-slate-200/70 rounded-2xl bg-slate-50/50 space-y-3">
              <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">Tombol Bawah (Admin 2)</span>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Nama Label Layanan</label>
                <input type="text" value={namaAdmin2} onChange={(e) => setNamaAdmin2(e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-bold outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase">Nomor WhatsApp Admin 2</label>
                <input type="text" value={waAdmin2} onChange={(e) => setWaAdmin2(e.target.value)} required className="w-full p-2 bg-white border rounded-lg text-xs font-semibold outline-none" />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* SEKSYEN BARU REPEATER: KELOLA 3 LENCANA KEUNGGULAN DI FOOTER (BISA EDIT, HAPUS, TAMBAH) */}
        <div className="space-y-4 pt-1 bg-slate-50/60 p-4 rounded-2xl border border-slate-200/60">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider">➔ 3. Manajemen Lencana Keunggulan Pendidikan</h3>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Edit kalimat & ganti jenis lencana ikon yang nampil di atas footer utama.</p>
            </div>
            <button 
              type="button" 
              onClick={handleTambahKeunggulan}
              className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-1.5 px-3 rounded-lg text-[10px] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Plus size={12} /> Tambah Poin
            </button>
          </div>

          <div className="space-y-3">
            {keunggulanList.map((item, index) => (
              <div key={index} className="flex gap-3 bg-white border p-3 rounded-xl shadow-2xs items-end relative group">
                {/* Kolom Dropdown Pilihan Ikon */}
                <div className="w-1/3 space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase block">Pilih Ikon Lencana</label>
                  <select 
                    value={item.icon_name} 
                    onChange={(e) => handleUpdateItem(index, "icon_name", e.target.value)}
                    className="w-full p-2 bg-slate-50 border rounded-lg text-xs font-semibold text-slate-700 outline-none"
                  >
                    {opsiIkon.map((opsi) => (
                      <option key={opsi.value} value={opsi.value}>{opsi.label}</option>
                    ))}
                  </select>
                </div>

                {/* Kolom Isi Teks Kalimat */}
                <div className="w-2/3 space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase block">Teks Kalimat Judul Poin</label>
                  <input 
                    type="text" 
                    value={item.teks_judul} 
                    onChange={(e) => handleUpdateItem(index, "teks_judul", e.target.value)}
                    required 
                    className="w-full p-2 bg-white border rounded-lg text-xs font-bold text-slate-700 outline-none"
                  />
                </div>

                {/* Tombol Hapus Poin */}
                <button 
                  type="button" 
                  onClick={() => handleHapusKeunggulan(index)}
                  className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white border border-rose-100 p-2 rounded-lg cursor-pointer transition-colors"
                  title="Hapus poin ini"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* MODUL PARAGRAF & GOOGLE MAPS */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-emerald-800 uppercase tracking-wider">➔ 4. Modul Keterangan Paragraf & Peta Lokasi Footer</h3>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Isi Deskripsi Paragraf "Tentang Kami" Footer</label>
            <textarea value={tentangKami} onChange={(e) => setTentangKami(e.target.value)} required rows={3} className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none resize-none leading-relaxed" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Link Tombol Rute Google Maps (Petunjuk Rute)</label>
            <input type="url" value={mapsRute} onChange={(e) => setMapsRute(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Link URL 'src' iFrame Embed Google Maps</label>
            <input type="text" value={mapsIframe} onChange={(e) => setMapsIframe(e.target.value)} required className="w-full p-2.5 bg-white border rounded-lg text-xs font-semibold outline-none font-mono" />
          </div>
        </div>

        {/* WARNING ALERT NOTES */}
        <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-2 text-slate-600 text-[11px] font-medium leading-normal">
          <ShieldAlert size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <span><strong>Perhatian:</strong> Pastikan seluruh inputan nomor menggunakan awalan 62 (Kode Negara Indonesia) langsung tanpa spasi atau tanda plus (+) agar link bekerja dengan normal.</span>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-black py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer">
          {loading ? "Sedang Mengirim data..." : "Simpan Perubahan Navigasi & Footer"}
        </button>
      </form>
    </div>
  );
};

export default KelolaKontakHeader;