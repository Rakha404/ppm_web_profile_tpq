import { CheckCircle, CalendarDays, FolderOpen } from "lucide-react";

export const SyaratPendaftaran = () => {
    const berkasFisik = [
        { 
            title: "Fotokopi Kartu Keluarga (KK)", 
            desc: "Digunakan oleh pengurus untuk validasi kesesuaian Nomor Induk Kependudukan (NIK) dan data nama lengkap santri.",
            qty: "1 Lembar" 
        },
        { 
            title: "Fotokopi Akta Kelahiran Santri", 
            desc: "Digunakan oleh pengurus untuk verifikasi ketepatan tempat tanggal lahir serta penentuan batasan kelas santri.",
            qty: "1 Lembar" 
        },
        { 
            title: "Pas Foto Berwarna Terbaru", 
            desc: "Ukuran 3x4 latar belakang bebas rapi, digunakan sebagai foto identitas pada buku induk dan kartu santri.",
            qty: "2 Lembar" 
        }
    ];

    return (
        <section className="w-full bg-slate-50 pb-16 pt-4 px-4 md:px-8 font-sans select-none overflow-hidden">
            <div className="max-w-4xl mx-auto">
                
                {/* SATU KOTAK UTUH PERSYARATAN */}
                <div 
                    data-aos="fade-up"
                    className="bg-white border border-slate-200/80 rounded-3xl shadow-xs p-6 md:p-10 space-y-8"
                >
                    {/* Kepala Kartu */}
                    <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
                        <div className="p-3 bg-emerald-50 text-[#006432] rounded-xl shrink-0">
                            <FolderOpen size={22} className="stroke-[2.5]" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-black text-slate-800 tracking-tight">
                                Kelengkapan Berkas Administrasi Fisik
                            </h3>
                            <p className="text-xs text-slate-400 font-medium mt-0.5">
                                Mohon persiapkan dokumen-dokumen berikut sebelum diserahkan langsung ke madrasah
                            </p>
                        </div>
                    </div>

                    {/* Daftar Berkas Fisik */}
                    <div className="space-y-3">
                        {berkasFisik.map((berkas, idx) => (
                            <div 
                                key={idx} 
                                className="p-4 rounded-2xl bg-slate-50/60 border border-slate-100 flex items-start justify-between gap-4 hover:border-emerald-600/20 transition-all duration-200"
                            >
                                <div className="flex items-start gap-3.5">
                                    <div className="mt-0.5 text-emerald-600 shrink-0">
                                        <CheckCircle size={16} className="stroke-[2.5]" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h4 className="text-xs md:text-sm font-bold text-slate-700 tracking-wide">
                                            {berkas.title}
                                        </h4>
                                        <p className="text-[11px] md:text-xs text-slate-400 font-medium leading-relaxed max-w-2xl">
                                            {berkas.desc}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-lg shrink-0">
                                    {berkas.qty}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Informasi Ketentuan Penyerahan (Pindah ke Bagian Bawah Kotak) */}
                    <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl flex items-start gap-3.5">
                        <div className="p-1.5 bg-emerald-600 text-white rounded-lg shrink-0 mt-0.5">
                            <CalendarDays size={14} className="stroke-[2.5]" />
                        </div>
                        <div className="space-y-1">
                            <h5 className="text-xs font-black uppercase tracking-wider text-[#006432]">
                                Ketentuan Waktu Penyerahan Berkas
                            </h5>
                            <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-medium">
                                Jika Bapak/Ibu sudah sukses mendaftar secara online melalui website, WhatsApp, atau Google Form, seluruh <span className="text-emerald-700 font-bold">berkas fisik di atas</span> cukup dibawa dan diserahkan kepada petugas panitia pada saat <span className="text-emerald-700 font-bold underline decoration-indigo-500/30 underline-offset-4">hari pertama santri mulai masuk belajar</span> di TPQ Raudlatul Ma'arif An-Nahdliyah.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SyaratPendaftaran;