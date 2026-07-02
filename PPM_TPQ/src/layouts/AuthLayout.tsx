import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import logoTpq from "../assets/logo_tpq.png"; 
import Footer from "../components/Footer";

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
            {/* Navigasi Header Utama */}
            <Header />
            
            {/* Grid Layout: Full Putih Bersih */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center flex-1 max-w-6xl w-full mx-auto px-6 py-12 gap-8 md:gap-12">

                {/* SISI KIRI: Brand & Logo TPQ (Disesuaikan agar teks berwarna kontras di atas BG Putih) */}
                <div className="hidden md:flex flex-col items-center justify-center gap-5 text-center p-6 border-r border-slate-100 h-[70vh]">
                    <div className="relative">
                        {/* Lingkaran aksen tipis di belakang logo agar lebih estetik */}
                        <div className="absolute inset-0 bg-emerald-50 rounded-full scale-125 blur-xl opacity-60" />
                        <img
                            src={logoTpq}
                            alt="Logo TPQ Raudlatul Ma'arif"
                            className="w-40 h-40 object-contain drop-shadow-sm relative z-10"
                        />
                    </div>
                    
                    <div className="space-y-2 relative z-10">
                        <h1 className="text-2xl font-black text-slate-800 tracking-widest uppercase">
                            TPQ RAUDLATUL <br />
                            <span className="text-[#006432]">MA'ARIF</span>
                        </h1>
                        <div className="w-12 h-3px bg-yellow-400 rounded-full mx-auto" />
                        <p className="text-slate-400 text-xs font-medium max-w-xs mx-auto leading-relaxed pt-1">
                            Sistem Informasi Manajemen & Penerimaan Santri Baru Berbasis Aplikasi Web.
                        </p>
                    </div>
                </div>

                {/* SISI KANAN: Tempat Form Login (Akan melayang indah karena bayangan form-nya kontras) */}
                <div className="flex justify-center items-center w-full py-6">
                    <div className="w-full max-w-sm">
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Footer Komponen bawaan */}
            <Footer />
        </div>
    );
}