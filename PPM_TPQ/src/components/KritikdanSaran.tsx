import React, { useState } from "react";
import { MessageSquare, Send } from "lucide-react";

export const KritikSaran = () => {
  // State untuk menampung input data form
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    no_whatsapp: "",
    pesan_saran: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("http://localhost:5000/api/kritik-saran", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", text: data.message });
        // Mengosongkan form kembali setelah berhasil terkirim
        setFormData({ nama_lengkap: "", no_whatsapp: "", pesan_saran: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Gagal mengirim masukan." });
      }
    } catch (error) {
      setStatus({ type: "error", text: "Gagal terhubung ke server backend. Pastikan server Node.js menyala." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 font-sans select-none bg-white">
      <div className="max-w-5xl mx-auto">

        {/* CONTAINER KARTU UTAMA GRID 12 */}
        <div className="bg-white rounded-[2.5rem] border-2 border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.09),0_10px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">

          {/* SISI KIRI: INFORMASI & AJAKAN (5 KOLOM) */}
          <div className="lg:col-span-5 bg-[#006432] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-900/40 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-lg pointer-events-none" />

            <div className="space-y-5 relative z-10 my-auto">
              <div className="bg-emerald-900/50 p-3.5 rounded-2xl inline-block text-amber-400 shadow-inner">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-wide leading-tight">
                Kritik & Saran <br />
                Membangun
              </h3>
              <p className="text-emerald-100/80 text-xs md:text-sm leading-relaxed font-medium">
                Setiap masukan, kritik, maupun saran dari Wali Murid dan Masyarakat sangat berharga bagi peningkatan mutu pendidikan di TPQ & MDTA Raudlatul Ma'arif.
              </p>
            </div>
          </div>

          {/* SISI KANAN: FORM INTERAKTIF MONGODB (7 KOLOM) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">Hubungi Kami</span>
              <h4 className="text-xl md:text-2xl font-black text-slate-800 tracking-wide">
                Kirim Masukan Anda
              </h4>
            </div>

            {/* Balon Status Berhasil / Gagal */}
            {status.text && (
              <div className={`p-4 rounded-xl text-xs font-semibold border ${status.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : "bg-rose-50 text-rose-800 border-rose-200"
                }`}>
                {status.text}
              </div>
            )}

            {/* INPUT ELEMENT SEKARANG AKTIF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 pl-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama_lengkap"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                  required
                  placeholder="Ketik nama lengkap Anda"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-xs font-semibold shadow-inner outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 pl-1">No. WhatsApp</label>
                <input
                  type="tel"
                  name="no_whatsapp"
                  value={formData.no_whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: 08123456xxx"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-xs font-semibold shadow-inner outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 pl-1">Pesan / Saran</label>
              <textarea
                name="pesan_saran"
                value={formData.pesan_saran}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tuliskan saran, kritik, atau pesan berharga Anda di sini..."
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl p-4 text-xs font-semibold shadow-inner outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all resize-none leading-relaxed"
              />
            </div>

            {/* TOMBOL AKSI UTAMA KIRIM KE DATABASE */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#006432] hover:bg-emerald-950 text-white font-black py-4 px-6 rounded-xl text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_4px_14px_rgba(0,100,50,0.25)] hover:shadow-[0_6px_20px_rgba(0,100,50,0.35)] cursor-pointer group transform active:scale-99 mt-2 ${loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
            >
              {loading ? (
                <span>Sedang Mengirim...</span>
              ) : (
                <>
                  <span>Kirim Kritik & Saran</span>
                  <Send size={14} className="text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default KritikSaran;