import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";
import logoTpq from "../assets/logo_tpq.png"; 

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handlelogout = () => {
        logout();
        navigate("/login");
    };

    const menuItems = [
        { to: "/dashboard", label: "📊 Dashboard Utama" },
        { to: "/dashboard/kelola-halaman", label: "📚 Kelola Pilar & Metode" },
        { to: "/dashboard/edit-konten", label: "📝 Kelola Teks & Banner" },
        { to: "/dashboard/upload-galeri", label: "📸 Upload Foto Galeri" },
        { to: "/dashboard/edit-banner", label: "🌄 Kelola Header Banner" },
        { to: "/dashboard/kelola-kontak", label: "📞 Kelola Kontak & Footer" },
        { to: "/dashboard/pendaftaran", label: "📄 Data Pendaftaran PPDB" },
        { to: "/dashboard/kritik-saran", label: "📩 Kotak Masukan Aspirasi" },
    ];

    return (
        <div className="flex w-full min-h-screen bg-slate-50 font-sans">
            {/* SIDEBAR ADMIN (Slate Gelap Premium) */}
            <div className="bg-slate-900 w-64 flex flex-col justify-between sticky top-0 h-screen p-5 shrink-0 text-slate-300 border-r border-slate-800 shadow-xl">

                <div className="space-y-6 overflow-y-auto pr-1 select-none scrollbar-thin">
                    {/* LOGO TPQ */}
                    <div className="flex flex-col items-center gap-2 pt-2 border-b border-slate-800 pb-4">
                        <img src={logoTpq} alt="Logo TPQ" className="w-14 h-14 object-contain" />
                        <span className="font-black text-white tracking-widest text-[11px] mt-1 uppercase text-center">
                            CMS ADMIN TPQ
                        </span>
                    </div>

                    {/* MENU NAVIGASI CMS DINAMIS */}
                    <div className="w-full px-1">
                        <ul className="flex flex-col gap-1.5 w-full">
                            {menuItems.map((menu) => (
                                <li key={menu.to}>
                                    <Link
                                        to={menu.to}
                                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
                                    >
                                        {menu.label}
                                    </Link>
                                </li>
                            ))}

                            <li className="pt-2 border-t border-slate-800/60 mt-2">
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-950/40 text-emerald-400 hover:bg-[#006432] hover:text-white transition-all border border-emerald-800/30"
                                >
                                    🌐 Lihat Web Profil
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* TOMBOL LOGOUT */}
                <div className="p-1 pt-4 border-t border-slate-800">
                    <button
                        type="button"
                        onClick={handlelogout}
                        className="w-full py-3 bg-rose-950/30 hover:bg-rose-900 border border-rose-900/40 text-rose-300 hover:text-white font-black rounded-xl text-xs uppercase tracking-widest cursor-pointer transition-all shadow-sm active:scale-98"
                    >
                        Logout ➔
                    </button>
                </div>
            </div>

            {/* AREA KONTEN UTAMA (Kanan) */}
            <div className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}