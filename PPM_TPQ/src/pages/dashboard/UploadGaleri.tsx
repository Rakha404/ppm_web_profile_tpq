import React, { useState, useEffect } from "react";

interface AlbumGaleri {
    _id: string;
    title: string;
    subTitle: string;
    photos: string[];
}

export const UploadGaleri = () => {
    const [title, setTitle] = useState("GALERI KEGIATAN");
    const [subTitle, setSubTitle] = useState("");
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [listGaleri, setListGaleri] = useState<AlbumGaleri[]>([]);

    // State untuk mode Edit
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editSubTitle, setEditSubTitle] = useState("");
    const [editFiles, setEditFiles] = useState<FileList | null>(null); // State foto tambahan saat edit

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const fetchGaleri = () => {
        fetch("https://tpq-backend-api.vercel.app/api/galeri")
            .then((res) => res.json())
            .then((resData) => {
                if (resData.success) setListGaleri(resData.data);
            });
    };

    useEffect(() => {
        fetchGaleri();
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setSelectedFiles(e.target.files);
    };

    // Handler input file saat di dalam mode edit
    const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setEditFiles(e.target.files);
    };

    // 1. Fungsi Tambah Album Baru (POST)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFiles) return setMessage("Silakan pilih minimal 1 foto!");
        setLoading(true);
        setMessage("");

        try {
            const dataToSend = new FormData();
            dataToSend.append("title", title);
            dataToSend.append("subTitle", subTitle);
            for (let i = 0; i < selectedFiles.length; i++) {
                dataToSend.append("images", selectedFiles[i]);
            }

            const res = await fetch("https://tpq-backend-api.vercel.app/api/galeri/add", {
                method: "POST",
                body: dataToSend
            });
            const data = await res.json();
            if (data.success) {
                setMessage("Album galeri baru sukses disimpan!");
                setSubTitle("");
                setSelectedFiles(null);
                fetchGaleri();
            }
        } catch (err) {
            setMessage("Gagal mengunggah galeri.");
        } finally {
            setLoading(false);
        }
    };

    // 2. Fungsi Hapus Album (DELETE)
    const handleDelete = async (id: string) => {
        if (!window.confirm("Apakah kamu yakin ingin menghapus seluruh album kegiatan ini?")) return;

        try {
            const res = await fetch(`https://tpq-backend-api.vercel.app/api/galeri/delete/${id}`, {
                method: "DELETE"
            });
            const data = await res.json();
            if (data.success) {
                setMessage("Album berhasil dihapus!");
                fetchGaleri();
            }
        } catch (err) {
            setMessage("Gagal menghapus album.");
        }
    };

    // 3. Aktifkan Mode Edit Teks & Siapkan Data
    const startEdit = (album: AlbumGaleri) => {
        setEditingId(album._id);
        setEditTitle(album.title);
        setEditSubTitle(album.subTitle);
        setEditFiles(null); // Reset input file edit sebelumnya
    };

    // 4. Simpan Perubahan Edit + Upload Foto Tambahan (PUT)
    const handleUpdate = async (id: string) => {
        setLoading(true);
        setMessage("");
        try {
            const dataToSend = new FormData();
            dataToSend.append("title", editTitle);
            dataToSend.append("subTitle", editSubTitle);

            if (editFiles && editFiles.length > 0) {
                for (let i = 0; i < editFiles.length; i++) {
                    dataToSend.append("images", editFiles[i]);
                }
            }

            // Console log untuk ngecek apakah data siap dikirim
            console.log("Mengirim update untuk ID:", id);
            console.log("Files yang akan ditambah:", editFiles?.length || 0);

            const res = await fetch(`https://tpq-backend-api.vercel.app/api/galeri/update/${id}`, {
                method: "PUT",
                body: dataToSend
            });

            const data = await res.json();
            console.log("Respon dari server backend:", data);

            if (data.success) {
                setMessage("Detail album dan foto tambahan berhasil disimpan!");
                setEditingId(null);
                setEditFiles(null); 
                fetchGaleri(); // Reload data dari MongoDB ke state lokal
            } else {
                setMessage(data.message || "Gagal memperbarui album.");
            }
       } catch (err: any) {
            console.error("Eror saat fetch update:", err);
            setMessage("Gagal memperbarui data album ke server.");
        } finally { 
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto font-sans space-y-10 p-4">
            {/* FORM INPUT ALBUM BARU */}
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-black text-slate-800 border-b pb-2 mb-4 uppercase tracking-wide">Tambah Album Galeri Baru</h2>
                {message && <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold mb-4">{message}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500">Kategori / Nama Kegiatan</label>
                        <input type="text" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} placeholder="Contoh: Wisata Religi Makam Sunan" required className="w-full p-2.5 border rounded-lg text-xs font-semibold outline-none focus:ring-2 focus:ring-emerald-600" />
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 space-y-2">
                        <label className="text-xs font-bold text-slate-600 block">Pilih Foto-Foto Kegiatan</label>
                        <input type="file" accept="image/*" multiple onChange={handleFileChange} required className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer" />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-[#006432] hover:bg-emerald-950 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer">
                        {loading ? "Mengirim ke Server..." : "Publish Album Galeri"}
                    </button>
                </form>
            </div>

            {/* LIST DATABASE ALBUM AKTIF */}
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-black text-slate-800 border-b pb-2 mb-4 uppercase tracking-wide">Daftar Album di Database ({listGaleri.length})</h2>

                <div className="space-y-6">
                    {listGaleri.map((album) => (
                        <div key={album._id} className="p-4 border rounded-xl bg-slate-50/50 space-y-3">

                            {/* Baris Informasi / Form Inline Edit */}
                            <div className="flex flex-col gap-3 border-b pb-3 border-slate-200">
                                {editingId === album._id ? (
                                    // Tampilan Ketika Tombol Edit Diklik (Ada Input Teks + Input File Sekaligus)
                                    <div className="space-y-3 w-full">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="p-2 border text-xs font-bold rounded-lg bg-white" placeholder="Title Utama" />
                                            <input type="text" value={editSubTitle} onChange={(e) => setEditSubTitle(e.target.value)} className="p-2 border text-xs rounded-lg bg-white" placeholder="Nama Sub-Kegiatan" />
                                        </div>

                                        {/* INPUT COMPONENT TAMBAH FOTO BARU PADA MODE EDIT */}
                                        <div className="bg-amber-50/60 p-3 rounded-xl border border-dashed border-amber-300 space-y-1">
                                            <label className="text-[11px] font-bold text-amber-800 block">➕ Tambahkan Foto Baru ke Album Ini (Opsional):</label>
                                            <input type="file" accept="image/*" multiple onChange={handleEditFileChange} className="text-xs text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-[10px] file:font-bold file:bg-amber-100 file:text-amber-800 hover:file:bg-amber-200 cursor-pointer" />
                                            {editFiles && <p className="text-[10px] font-bold text-amber-700">✓ {editFiles.length} foto tambahan siap digabung</p>}
                                        </div>

                                        <div className="flex gap-2 justify-end">
                                            <button onClick={() => handleUpdate(album._id)} disabled={loading} className="px-4 py-1.5 bg-emerald-600 text-white font-bold text-[10px] rounded-lg hover:bg-emerald-700 uppercase cursor-pointer">
                                                {loading ? "Menyimpan..." : "Simpan Perubahan"}
                                            </button>
                                            <button onClick={() => setEditingId(null)} className="px-4 py-1.5 bg-slate-400 text-white font-bold text-[10px] rounded-lg hover:bg-slate-500 uppercase cursor-pointer">Batal</button>
                                        </div>
                                    </div>
                                ) : (
                                    // Tampilan Default Normal Teks Album beserta Tombol Edit & Delete
                                    <div className="flex justify-between items-center w-full">
                                        <div>
                                            <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase tracking-wider">{album.title}</span>
                                            <h3 className="text-xs font-black text-slate-700 mt-1 uppercase tracking-wide">➔ {album.subTitle}</h3>
                                        </div>

                                        <div className="flex gap-2">
                                            <button onClick={() => startEdit(album)} className="px-2.5 py-1 text-[10px] font-bold bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-all uppercase cursor-pointer">Edit</button>
                                            <button onClick={() => handleDelete(album._id)} className="px-2.5 py-1 text-[10px] font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-md transition-all uppercase cursor-pointer">Hapus</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Grid Penampil Semua Foto di Dalam Album */}
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                {album.photos.map((url, imgIndex) => (
                                    <div key={imgIndex} className="aspect-square bg-slate-200 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                                        <img src={`http://localhost:5000${url}`} alt="Dokumentasi" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}

                    {listGaleri.length === 0 && (
                        <p className="text-center text-xs font-bold text-slate-400 py-4">Database masih kosong melompong.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadGaleri;