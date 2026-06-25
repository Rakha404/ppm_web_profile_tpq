import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";
import logoTpq from "../assets/logo_tpq.png"; // Import logo TPQ milikmu

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handlelogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="flex w-full min-h-screen bg-slate-50 font-sans">
            {/* SIDEBAR ADMIN (Ubah dari pink ke Slate gelap yang elegan) */}
            <div className="bg-slate-900 w-64 flex flex-col justify-between sticky top-0 h-screen p-5 shrink-0 text-slate-300 border-r border-slate-800 shadow-xl">
                
                <div className="space-y-8">
                    {/* LOGO TPQ */}
                    <div className="flex flex-col items-center gap-2 pt-4 border-b border-slate-800 pb-5">
                        <img src={logoTpq} alt="Logo TPQ" className="w-16 h-16 object-contain" />
                        <span className="font-black text-white tracking-widest text-xs mt-1 uppercase text-center">
                            CMS ADMIN TPQ
                        </span>
                    </div>

                    {/* MENU NAVIGASI CMS */}
                    <div className="w-full px-2">
                        <ul className="flex flex-col gap-2 w-full">
                            <li>
                                <Link 
                                    to="/dashboard" 
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:text-white transition-all"
                                >
                                    📊 Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/dashboard/edit-konten" 
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:text-white transition-all"
                                >
                                    📝 Kelola Teks & Banner
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/dashboard/upload-galeri" 
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:text-white transition-all"
                                >
                                    📸 Upload Galeri
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to="/" 
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-950/50 text-emerald-400 hover:bg-emerald-900 hover:text-white transition-all border border-emerald-800/30"
                                >
                                    🌐 Lihat Web Profil
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* TOMBOL LOGOUT */}
                <div className="p-2">
                    <button 
                        type="button"
                        onClick={handlelogout}
                        className="w-full py-3 bg-rose-950/40 hover:bg-rose-900 border border-rose-800/50 text-rose-200 hover:text-white font-bold rounded-xl text-xs uppercase tracking-widest cursor-pointer transition-all shadow-sm"
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