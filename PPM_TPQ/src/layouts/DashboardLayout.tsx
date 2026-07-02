import React from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";
import logoTpq from "../assets/logo_tpq.png"; 

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    const location = useLocation();

    const handlelogout = () => {
        logout();
        navigate("/login");
    };

    const menuItems = [
        { to: "/dashboard", label: "Dashboard Utama" },
        { to: "/dashboard/edit-konten", label: "Kelola Beranda" },
        { to: "/dashboard/kelola-halaman", label: "Kelola Profil & Pendidikan" },
        { to: "/dashboard/upload-galeri", label: "Kelola Kegiatan" },
        { to: "/dashboard/edit-banner", label: "Kelola Slider & Banner" },
        { to: "/dashboard/kelola-kontak", label: "Kelola Kontak & Footer" },
        { to: "/dashboard/kritik-saran", label: "Kotak Masukan Aspirasi" },
        { to: "/dashboard/edit-section-pendaftaran", label: "Kelola Banner PPDB" },
        { to: "/dashboard/pendaftaran", label: "Data Pendaftaran PPDB" },
    ];

    return (
        <div className="flex w-full min-h-screen bg-slate-50 font-sans antialiased">
            {/* SIDEBAR ADMIN */}
            <div className="bg-[#0b2f1d] w-64 flex flex-col justify-between sticky top-0 h-screen p-5 shrink-0 text-emerald-100/80 border-r border-emerald-900 shadow-2xl">

                {/* CONTAINER MENU (Scrollbar disembunyikan total di sini) */}
                <div className="space-y-6 overflow-y-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    
                    {/* LOGO TPQ */}
                    <div className="flex flex-col items-center gap-2 pt-2 border-b border-emerald-950 pb-5">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-inner">
                            <img src={logoTpq} alt="Logo TPQ" className="w-12 h-12 object-contain" />
                        </div>
                        <span className="font-black text-white tracking-widest text-[11px] mt-2 uppercase text-center block">
                            TPQ Raudhatul Ma'arif
                        </span>
                    </div>

                    {/* MENU NAVIGASI */}
                    <div className="w-full">
                        <ul className="flex flex-col gap-2 w-full">
                            {menuItems.map((menu) => {
                                const isActive = location.pathname === menu.to;

                                return (
                                    <li key={menu.to}>
                                        <Link
                                            to={menu.to}
                                            className={`flex items-center px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200
                                                ${isActive 
                                                    ? "bg-[#006432] text-white shadow-md shadow-black/20 font-bold border-l-4 border-emerald-400 pl-3" 
                                                    : "hover:bg-emerald-900/40 hover:text-white text-emerald-200/70"
                                                }`}
                                        >
                                            <span>{menu.label}</span>
                                        </Link>
                                    </li>
                                );
                            })}

                            <li className="pt-4 border-t border-emerald-900/50 mt-2">
                                <Link
                                    to="/"
                                    target="_blank"
                                    className="flex items-center justify-center px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-950/40 text-emerald-400 hover:bg-[#006432] hover:text-white transition-all border border-emerald-900/40 shadow-sm"
                                >
                                    <span>Lihat Web Profil</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* TOMBOL LOGOUT */}
                <div className="p-1 pt-4 border-t border-emerald-900">
                    <button
                        type="button"
                        onClick={handlelogout}
                        className="w-full py-2.5 bg-rose-950/30 hover:bg-rose-900/80 border border-rose-900/40 text-rose-300 hover:text-white font-semibold rounded-xl text-xs tracking-wider cursor-pointer transition-all shadow-md active:scale-98 text-center uppercase"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* AREA KONTEN UTAMA */}
            <div className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}