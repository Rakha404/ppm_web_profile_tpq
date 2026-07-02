import { useState, useEffect } from "react";
import {
    MapPin,
    Clock,
    Phone,
    Home,
    User,
    GraduationCap,
    ClipboardList,
    Image,
    Contact,
    X
} from "lucide-react";
import logo_tpq from "../../assets/logo_tpq.png";
import NavLink from "../Navlink";

export const Header = () => {
    const [isWaOpen, setIsWaOpen] = useState(false);

    // State menampung data kontak header dinamis dari MongoDB
    const [kontak, setKontak] = useState({
        nomor_topbar: "6288802491985",
        link_instagram: "https://www.instagram.com/tpq_rm.annahdliyah?igsh=MXFneWhiYTF4eTV4MQ==",
        link_facebook: "https://www.facebook.com/profile.php?id=61591482891232",
        link_youtube: "https://www.youtube.com/channel/UCLxmZReDF6Z7vqOEHY6hCVw",
        nama_admin_1: "Admin TU (Ustadz Fadhil)",
        wa_admin_1: "6288802491985",
        nama_admin_2: "Ustadz Anang",
        wa_admin_2: "628819725510"
    });

    useEffect(() => {
        fetch("https://tpq-backend-api.vercel.app/api/kontak-header")
            .then((res) => res.json())
            .then((resData) => {
                if (resData.success && resData.data) {
                    setKontak(resData.data);
                }
            })
            .catch((err) => console.error("Gagal memuat kontak dinamis header:", err));
    }, []);

    // Fungsi pembantu memformat text agar sedap dipandang (+62 888-0249-1985)
    const formatTextNumber = (num: string) => {
        if (num.startsWith("62")) {
            return `+62 ${num.slice(2, 5)}-${num.slice(5, 9)}-${num.slice(9)}`;
        }
        return num;
    };

    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Profile", href: "/profile", icon: <User size={18} /> },
        { label: "Pendidikan", href: "/pendidikan", icon: <GraduationCap size={18} /> },
        { label: "Pendaftaran", href: "/pendaftaran", icon: <ClipboardList size={18} /> },
        { label: "Kegiatan", href: "/kegiatan", icon: <Image size={18} /> },
        { label: "Kontak", href: "/kontak", icon: <Contact size={18} /> },
    ];

    return (
        <header className="w-full shadow-xs font-sans mb-0 select-none bg-white">
            {/* 1. TOP BAR (Baris Hijau Atas) */}
            <div className="bg-[#006432] text-white text-[11px] md:text-sm py-3 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-3">

                    {/* Alamat */}
                    <div className="flex items-start justify-start gap-2 text-left font-medium max-w-xs sm:max-w-md lg:max-w-none mx-auto lg:mx-0 w-fit">
                        <MapPin size={14} className="shrink-0 text-amber-400 mt-0.5" />
                        <span className="leading-relaxed tracking-wide">Jl. Projosumarto 01 Desa Getaskerep RT.019 RW.04 Kecamatan Talang - Kabupaten Tegal</span>
                    </div>

                    {/* Jam Kerja, Kontak, & Sosial Media Dinamis 🚀 */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 font-medium w-full lg:w-auto border-t border-emerald-600/30 lg:border-t-0 pt-2.5 lg:pt-0">
                        <div className="flex items-center justify-center gap-5 sm:gap-6 w-full sm:w-auto">
                            <div className="flex items-center gap-1.5">
                                <Clock size={14} className="text-amber-400" />
                                <span>08.00 - 17.00 WIB</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Phone size={14} className="text-amber-400" />
                                <a href={`tel:+${kontak.nomor_topbar}`} className="hover:underline hover:text-amber-300 transition-colors">
                                    {formatTextNumber(kontak.nomor_topbar)}
                                </a>
                            </div>
                        </div>

                        {/* Ikon Sosial Media Dinamis */}
                        <div className="flex items-center justify-center gap-4 border-t sm:border-t-0 sm:border-l border-emerald-600/40 pt-2 sm:pt-0 sm:pl-4 w-full sm:w-auto">
                            {/* Instagram */}
                            <a
                                href={kontak.link_instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-400 hover:scale-110 transition-all shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                </svg>
                            </a>

                            {/* WhatsApp Trigger Modal */}
                            <button
                                onClick={() => setIsWaOpen(true)}
                                className="hover:text-amber-400 hover:scale-110 transition-all cursor-pointer flex items-center justify-center shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                            </button>

                            {/* Facebook */}
                            <a
                                href={kontak.link_facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-400 hover:scale-110 transition-all shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                </svg>
                            </a>

                            {/* Youtube */}
                            <a
                                href={kontak.link_youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-amber-400 hover:scale-110 transition-all shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M6.443 4.381C7.84 4.25 9.637 4.25 11.96 4.25h.082c2.322 0 4.119 0 5.516.131c1.407.133 2.517.406 3.409 1.03c.928.65 1.377 1.511 1.587 2.607c.197 1.024.197 2.321.197 3.907v.15c0 1.586 0 2.883-.197 3.907c-.21 1.096-.659 1.957-1.587 2.607c-.892.624-2.002.897-3.41 1.03c-1.396.131-3.193.131-5.515.131h-.082c-2.322 0-4.119 0-5.516-.131c-1.407-.133-2.517-.406-3.409-1.03c-.928-.65-1.377-1.511-1.587-2.607c-.197-1.024-.197-2.321-.197-3.907v-.15c0-1.586 0-2.883.197-3.907c.21-1.096.659-1.957 1.587-2.607c.892-.624 2.002-.897 3.41-1.03m5.115 4.564a1.166 1.166 0 0 0-1.608.313c-.13.191-.2.418-.2.65v4.184a1.16 1.16 0 0 0 1.8.968l3.175-2.074a1.155 1.155 0 0 0 .008-1.931z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* 2. MAIN NAV BAR (Baris Menu Utama) */}
            <div className="bg-white px-4 py-5 md:px-8 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-5">

                    {/* Logo & Nama Lembaga */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                        <img
                            src={logo_tpq}
                            alt="Logo Raudlatul Ma'arif"
                            className="h-12 md:h-14 w-auto object-contain shrink-0"
                        />
                        <div className="leading-tight">
                            <h1 className="font-black text-[#006432] text-sm md:text-base tracking-wide uppercase">
                                Raudlatul Ma'arif <br /> An-Nahdliyah
                            </h1>
                            <p className="text-[10px] font-bold text-amber-500 tracking-widest uppercase mt-0.5">
                                Taman Pendidikan Al-Qur'an
                            </p>
                        </div>
                    </div>

                    {/* Menu Navigasi */}
                    <nav className="grid grid-cols-2 gap-2 w-full max-w-sm sm:max-w-none sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2 lg:w-auto px-1">
                        {menuItems.map((item) => (
                            <div
                                key={item.label}
                                className="w-full sm:w-auto flex items-stretch justify-center rounded-2xl sm:border-0 sm:bg-transparent sm:shadow-none overflow-hidden"
                            >
                                <div className="w-full text-center flex justify-center &>*:w-full &>*:py-3.5 sm:&>*:py-2 &>*:px-4">
                                    <NavLink
                                        label={item.label}
                                        href={item.href}
                                        icon={item.icon}
                                    />
                                </div>
                            </div>
                        ))}
                    </nav>

                </div>
            </div>

            {/*  POPUP MODAL WHATSAPP DINAMIS */}
            {isWaOpen && (
                <div
                    className="fixed inset-0 z-9999 bg-slate-950/40 backdrop-blur-xs flex items-center justify-center px-4"
                    onClick={() => setIsWaOpen(false)}
                >
                    <div
                        className="bg-white w-full max-w-xs rounded-3xl p-6 border border-slate-100 shadow-xl relative animate-[slideUp_0.2s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <style>{`
                            @keyframes slideUp {
                                from { opacity: 0; transform: translateY(6px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                        `}</style>

                        <button
                            onClick={() => setIsWaOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1"
                        >
                            <X size={16} />
                        </button>

                        <div className="text-center mb-6 pt-2">
                            <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">Hubungi Kami</h3>
                            <p className="text-xs font-medium text-slate-400 mt-1 leading-relaxed">
                                Silakan pilih salah satu kontak layanan di bawah ini
                            </p>
                        </div>

                        {/* Tombol Ditarik Dinamis Sesuai Dashboard Admin */}
                        <div className="flex flex-col gap-2.5">
                            <a
                                href={`https://wa.me/${kontak.wa_admin_1}?text=Assalamu'alaikum%20${encodeURIComponent(kontak.nama_admin_1)},%20saya%20ingin%20bertanya...`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsWaOpen(false)}
                                className="w-full bg-[#006432] hover:bg-[#004d26] text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-xs active:scale-[0.99] cursor-pointer text-sm tracking-wide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="shrink-0">
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                                <span>{kontak.nama_admin_1}</span>
                            </a>

                            <a
                                href={`https://wa.me/${kontak.wa_admin_2}?text=Assalamu'alaikum%20${encodeURIComponent(kontak.nama_admin_2)},%20saya%20ingin%20bertanya...`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsWaOpen(false)}
                                className="w-full bg-slate-50 hover:bg-[#006432] text-slate-800 hover:text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 border border-slate-200/50 hover:border-[#006432] active:scale-[0.99] cursor-pointer text-sm tracking-wide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="shrink-0">
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                                <span>{kontak.nama_admin_2}</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;