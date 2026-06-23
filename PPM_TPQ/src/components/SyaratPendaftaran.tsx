import { User, Users, FileText, CheckCircle, CalendarDays } from "lucide-react";

export const SyaratPendaftaran = () => {
    const biodataSantri = [
        { label: "Nama Lengkap Santri", desc: "Sesuai dengan akta kelahiran" },
        { label: "Tempat, Tanggal Lahir", desc: "Contoh: Tegal, 12 Januari 2018" },
        { label: "Anak Yang Ke-", desc: "Urutan anak dalam keluarga" },
        { label: "Jumlah Saudara Kandung", desc: "Termasuk kakak dan adik jika ada" }
    ];

    const dataOrangTua = [
        { label: "Nama Lengkap Ayah/Ibu/Wali", desc: "Penanggung jawab utama" },
        { label: "Tempat, Tanggal Lahir", desc: "Identitas lengkap orang tua" },
        { label: "No. HP / WhatsApp", desc: "Nomor aktif untuk informasi TPQ" },
        { label: "Pekerjaan Orang Tua", desc: "Sektor profesi saat ini" },
        { label: "Alamat Tempat Tinggal", desc: "Domisili rumah sekarang" }
    ];

    return (
        <section className="w-full bg-slate-50 py-16 px-4 md:px-12 font-sans select-none overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* ================= HEADER SEKSYEN ================= */}
                <div className="text-center space-y-3 max-w-2xl mx-auto" data-aos="fade-down" data-aos-duration="1000">
                    <span className="bg-[#006432] text-white border border-emerald-700/50 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase inline-block shadow-xs">
                        Alur Dokumen
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight">
                        Berkas & Data Persyaratan
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                        Pahami detail poin informasi formulir digital serta berkas administrasi fisik yang wajib dipersiapkan sebelum melakukan pendaftaran.
                    </p>
                </div>

                {/* ================= LAYOUT GRID UTAMA ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 items-stretch">

                    {/* KARTU JALUR 1: DATA FORMULIR DIGITAL */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="bg-white border border-slate-200/60 rounded-[2.5rem] p-6 md:p-10 shadow-sm flex flex-col justify-between space-y-8"
                    >
                        <div className="space-y-6">
                            {/* Kepala Kartu */}
                            <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                                <div className="p-3 bg-emerald-50 text-[#006432] rounded-2xl shadow-xs">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-slate-800 tracking-wide">1. Preview Isian Data</h3>
                                </div>
                            </div>

                            {/* Sub-Kelompok A: Biodata Santri */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-xs font-black text-[#006432] tracking-wider uppercase">
                                    <User size={14} />
                                    <span>Biodata Santri</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {biodataSantri.map((item, index) => (
                                        <div key={index} className="bg-slate-50/80 border border-slate-200/30 p-3 rounded-xl flex flex-col gap-0.5">
                                            <span className="text-xs font-extrabold text-slate-700">{item.label}</span>
                                            <span className="text-[10px] text-slate-400 font-medium">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sub-Kelompok B: Data Orang Tua */}
                            <div className="space-y-3 pt-2">
                                <div className="flex items-center gap-2 text-xs font-black text-[#006432] tracking-wider uppercase">
                                    <Users size={14} />
                                    <span>Data Orang Tua</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {dataOrangTua.map((item, index) => (
                                        <div key={index} className="bg-slate-50/80 border border-slate-200/30 p-3 rounded-xl flex justify-between items-center gap-4">
                                            <span className="text-xs font-extrabold text-slate-700">{item.label}</span>
                                            <span className="text-[10px] text-slate-400 font-medium text-right shrink-0">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KARTU JALUR 2: PERSYARATAN BERKAS FISIK & BIAYA */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="400"
                        className="bg-[#006432] text-white rounded-[2.5rem] p-6 md:p-10 shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden"
                    >
                        {/* Ornamen Estetik di Latar Belakang */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-950/40 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            {/* Kepala Kartu */}
                            <div className="flex items-center gap-4 border-b border-emerald-800/60 pb-5">
                                <div className="p-3 bg-emerald-900/60 text-amber-400 rounded-2xl shadow-inner">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black tracking-wide text-white">2. Kelengkapan Administrasi</h3>
                                    <p className="text-xs text-emerald-200/60 font-semibold uppercase tracking-wider">Persyaratan Dokumen & Biaya</p>
                                </div>
                            </div>

                            <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-medium">
                                Setelah sukses melakukan pendaftaran daring via Google Form atau WhatsApp, wali murid dimohon untuk mempersiapkan kelengkapan administrasi fisik berikut:
                            </p>

                            {/* Baris Dokumen */}
                            <div className="space-y-3.5 pt-2">
                                <div className="bg-emerald-950/40 border border-emerald-800/40 p-4 rounded-2xl flex items-center justify-between group hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-3.5">
                                        <span className="text-2xl">📁</span>
                                        <div className="flex flex-col">
                                            <span className="text-xs md:text-sm font-black tracking-wide text-white">Fotokopi Kartu Keluarga (KK)</span>
                                            <span className="text-[10px] text-emerald-300/70 font-semibold">Validasi nomor induk & nama santri</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-black uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md shrink-0">
                                        1 Lembar
                                    </span>
                                </div>

                                <div className="bg-emerald-950/40 border border-emerald-800/40 p-4 rounded-2xl flex items-center justify-between group hover:border-amber-500/30 transition-colors">
                                    <div className="flex items-center gap-3.5">
                                        <span className="text-2xl">📜</span>
                                        <div className="flex flex-col">
                                            <span className="text-xs md:text-sm font-black tracking-wide text-white">Fotokopi Akta Kelahiran</span>
                                            <span className="text-[10px] text-emerald-300/70 font-semibold">Validasi usia & tempat lahir santri</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-black uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md shrink-0">
                                        1 Lembar
                                    </span>
                                </div>
                            </div>

                            {/* INFO TAMBAHAN JADWAL PENYERAHAN & BIAYA */}
                            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-2xl flex items-start gap-3 mt-4">
                                <CalendarDays size={20} className="text-amber-400 shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <h5 className="text-xs font-black uppercase tracking-wider text-amber-400">Ketentuan Penyerahan</h5>
                                    <p className="text-[11px] text-emerald-100/90 leading-relaxed font-semibold">
                                        Jika sudah mendaftar melalui WhatsApp atau Google Form, <span className="text-white font-bold">berkas fisik</span> serta <span className="text-white font-bold">biaya pendaftaran</span> (bagi yang memilih pembayaran secara langsung/cash) dapat dibawa dan diserahkan pada saat <span className="text-amber-400 underline decoration-wavy underline-offset-4 font-bold">hari pertama murid pertama kali masuk</span> ke TPQ.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                
            </div>
        </section>
    );
};

export default SyaratPendaftaran;