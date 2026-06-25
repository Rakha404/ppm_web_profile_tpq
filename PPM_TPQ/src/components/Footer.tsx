import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, BookOpenCheck, GraduationCap, UserCheck, X, MessageSquare } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo_tpq from "../assets/logo_tpq.png";

export const Footer = () => {
    // State untuk mengontrol buka-tutup pop-up modal WhatsApp di Footer
    const [isWaOpen, setIsWaOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <footer className="w-full bg-[#006432] text-white pt-16 pb-6 px-6 md:px-12 font-sans select-none overflow-hidden relative">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* ================= SECTION 1: KEUNGGULAN PENDIDIKAN (ATAS) ================= */}
                <div
                    data-aos="fade-up"
                    className="text-center space-y-8 border-b border-emerald-700/50 pb-12"
                >
                    <div className="space-y-1">
                        <span className="text-amber-400 font-black tracking-widest text-xs uppercase block animate-pulse">
                            Keunggulan Pendidikan
                        </span>
                        <h2 className="text-xl md:text-3xl font-black tracking-wide drop-shadow-sm">
                            TPQ RAUDLATUL MA'ARIF AN-NAHDLIYAH
                        </h2>
                    </div>

                    {/* 3 Grid Lencana Keunggulan */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-2">
                        {/* Poin 1 */}
                        <div className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                            <div className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-amber-400 group-hover:border-amber-400">
                                <BookOpenCheck size={32} className="text-amber-400 transition-colors duration-300 group-hover:text-[#006432]" />
                            </div>
                            <h4 className="font-extrabold text-sm md:text-base tracking-wide max-w-[200px] leading-snug transition-colors duration-300 group-hover:text-amber-300">
                                Mewujudkan Generasi Hafidz Qur'an
                            </h4>
                        </div>
                        {/* Poin 2 */}
                        <div className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                            <div className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-amber-400 group-hover:border-amber-400">
                                <GraduationCap size={32} className="text-amber-400 transition-colors duration-300 group-hover:text-[#006432]" />
                            </div>
                            <h4 className="font-extrabold text-sm md:text-base tracking-wide max-w-[200px] leading-snug transition-colors duration-300 group-hover:text-amber-300">
                                Kurikulum Terpadu & Berkarakter
                            </h4>
                        </div>
                        {/* Poin 3 */}
                        <div className="flex flex-col items-center text-center space-y-3 group cursor-pointer">
                            <div className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-amber-400 group-hover:border-amber-400">
                                <UserCheck size={32} className="text-amber-400 transition-colors duration-300 group-hover:text-[#006432]" />
                            </div>
                            <h4 className="font-extrabold text-sm md:text-base tracking-wide max-w-[200px] leading-snug transition-colors duration-300 group-hover:text-amber-300">
                                Tenaga Pengajar Kompeten & Beradab
                            </h4>
                        </div>
                    </div>
                </div>

                {/* ================= SECTION 2: INFORMASI & MAPS (BAWAH) ================= */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-emerald-700 pb-12"
                >
                    {/* Kolom A (4/12): Identitas & Kontak */}
                    <div className="lg:col-span-4 flex flex-col gap-5">
                        <div className="flex items-center gap-3 group">
                            <img
                                src={logo_tpq}
                                alt="Logo Raudlatul Ma'arif"
                                className="h-14 w-auto object-contain bg-white p-1 rounded-lg shadow-md transition-transform duration-500 group-hover:rotate-6"
                            />
                            <div className="leading-tight">
                                <h3 className="font-black text-sm md:text-base tracking-wide uppercase">
                                    Raudlatul Ma'arif <br /> An-Nahdliyah
                                </h3>
                                <p className="text-[10px] font-bold text-amber-400 tracking-widest uppercase mt-0.5">
                                    Taman Pendidikan Al-Qur'an
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-xs md:text-sm text-emerald-100/90 font-medium">
                            <div className="flex items-start gap-2.5 group">
                                <MapPin size={16} className="shrink-0 mt-0.5 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                                <span className="leading-relaxed transition-colors duration-300 group-hover:text-white">Jl. Projosumarto 01 Desa Getaskerep RT.019 RW.04 Kecamatan Talang - Kabupaten Tegal</span>
                            </div>
                            <div className="flex items-center gap-2.5 group">
                                <Clock size={16} className="shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                                <span className="transition-colors duration-300 group-hover:text-white">08.00 - 17.00 WIB</span>
                            </div>
                            <div className="flex items-center gap-2.5 group">
                                <Phone size={16} className="shrink-0 text-amber-400 transition-transform duration-300 group-hover:scale-110" />
                                <a href="tel:+6288802491985" className="hover:underline hover:text-white transition-colors">+62 888-0249-1985</a>
                            </div>
                        </div>
                    </div>

                    {/* Kolom B (2/12): Media Sosial */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h3 className="text-md font-bold tracking-wider text-amber-400 uppercase border-b border-emerald-700/60 pb-1.5">
                            Media Sosial
                        </h3>
                        <div className="flex flex-col gap-2.5 text-sm font-semibold text-emerald-100/90">

                            {/* Instagram Link Aktif */}
                            <a
                                href="https://www.instagram.com/tpq_rm.annahdliyah?igsh=MXFneWhiYTF4eTV4MQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 hover:text-white transition-all duration-300 hover:translate-x-1"
                            >
                                <span className="transition-transform duration-300 hover:scale-110 shrink-0 text-amber-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                    </svg>
                                </span>
                                Instagram
                            </a>

                            {/* Facebook Link Fallback */}
                            <a
                                href="https://www.facebook.com/profile.php?id=61591482891232"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 hover:text-white transition-all duration-300 hover:translate-x-1"
                            >
                                <span className="transition-transform duration-300 hover:scale-110 shrink-0 text-amber-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                    </svg>
                                </span>
                                Facebook
                            </a>

                            {/* Youtube Link Fallback */}
                            <a
                                href="https://www.youtube.com/channel/UCLxmZReDF6Z7vqOEHY6hCVw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 hover:text-white transition-all duration-300 hover:translate-x-1"
                            >
                                <span className="transition-transform duration-300 hover:scale-110 shrink-0 text-amber-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M6.443 4.381C7.84 4.25 9.637 4.25 11.96 4.25h.082c2.322 0 4.119 0 5.516.131c1.407.133 2.517.406 3.409 1.03c.928.65 1.377 1.511 1.587 2.607c.197 1.024.197 2.321.197 3.907v.15c0 1.586 0 2.883-.197 3.907c-.21 1.096-.659 1.957-1.587 2.607c-.892.624-2.002.897-3.41 1.03c-1.396.131-3.193.131-5.515.131h-.082c-2.322 0-4.119 0-5.516-.131c-1.407-.133-2.517-.406-3.409-1.03c-.928-.65-1.377-1.511-1.587-2.607c-.197-1.024-.197-2.321-.197-3.907v-.15c0-1.586 0-2.883.197-3.907c.21-1.096.659-1.957 1.587-2.607c.892-.624 2.002-.897 3.41 1.03m5.115 4.564a1.166 1.166 0 0 0-1.608.313c-.13.191-.2.418-.2.65v4.184a1.16 1.16 0 0 0 1.8.968l3.175-2.074a1.155 1.155 0 0 0 .008-1.931z" />
                                    </svg>
                                </span>
                                Youtube
                            </a>

                            {/* WhatsApp Button untuk Trigger Pop-up Modal */}
                            <button
                                onClick={() => setIsWaOpen(true)}
                                className="flex items-center gap-2.5 hover:text-white transition-all duration-300 hover:translate-x-1 cursor-pointer text-left focus:outline-none"
                            >
                                <span className="transition-transform duration-300 hover:scale-110 shrink-0 text-amber-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41/1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                    </svg>
                                </span>
                                WhatsApp
                            </button>

                        </div>
                    </div>

                    {/* Kolom C (3/12): Tentang Kami */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h3 className="text-md font-bold tracking-wider text-amber-400 uppercase border-b border-emerald-700/60 pb-1.5">
                            Tentang Kami
                        </h3>
                        <p className="text-xs md:text-sm text-emerald-100/80 leading-relaxed text-justify font-medium">
                            Raudlatul Ma'arif An-Nahdliyah merupakan lembaga pendidikan non-formal yang menyelenggarakan Taman Pendidikan Al-Qur'an (TPQ). Kami hadir memberikan fondasi keagamaan kuat bagi putra-putri sesuai tuntunan adab Islam.
                        </p>
                    </div>

                    {/* Kolom D (3/12): Peta Lokasi 100% AKURAT (Masjid Ussisa Ala Taqwa Getaskerep) */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-emerald-700/60 pb-1.5">
                            <h3 className="text-md font-bold tracking-wider text-amber-400 uppercase">
                                Detail Alamat
                            </h3>
                            {/* Link Tombol Rute Akurat dari Kamu */}
                            <a
                                href="https://maps.app.goo.gl/ETxUVDxASx3QBmep6?g_st=aw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[9px] font-black bg-emerald-900 hover:bg-amber-500 hover:text-[#006432] text-amber-400 border border-emerald-700 px-2 py-0.5 rounded transition-all uppercase tracking-wider shadow-xs hover:scale-105 active:scale-95"
                            >
                                Petunjuk Rute
                            </a>
                        </div>

                        {/* Box Peta Baru yang Sudah Ditukarkan Datanya */}
                        <div className="w-full h-36 rounded-2xl overflow-hidden shadow-inner border border-emerald-700/80 bg-emerald-900/50 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6713904975586!2d109.15763307421392!3d-6.900845767530664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb85c59791f8b%3A0x3fe4be95045f4b52!2sMasjid%20Ussisa%20Ala%20Taqwa%20Getaskerep%20Talang%20Tegal!5e0!3m2!1sid!2sid!4v1718930000000!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Peta Lokasi Masjid Ussisa Ala Taqwa"
                                className="transition-transform duration-700 group-hover:scale-105 grayscale-[15%] contrast-[105%] group-hover:grayscale-0"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* ================= SECTION 3: COPYRIGHT (BOTTOM) ================= */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-emerald-300/70 font-medium gap-2 pt-2 border-t border-emerald-700/30"
                >
                    <p>© 2026 Raudlatul Ma'arif An-Nahdliyah. All Rights Reserved.</p>
                    <p className="transition-colors duration-300 hover:text-amber-400 cursor-default">Designed for Taman Pendidikan Al-Qur'an</p>
                </div>

            </div>

            {/* ======================= POPUP MODAL WHATSAPP CLEAN & MINIMALIS + ICON ======================= */}
            {isWaOpen && (
                <div
                    className="fixed inset-0 z-[9999] bg-slate-950/40 backdrop-blur-xs flex items-center justify-center px-4"
                    onClick={() => setIsWaOpen(false)}
                >
                    {/* Kotak Modal Utama */}
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

                        {/* Tombol Silang Minimalis */}
                        <button
                            onClick={() => setIsWaOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1"
                        >
                            <X size={16} />
                        </button>

                        {/* Header Minimalis */}
                        <div className="text-center mb-6 pt-2">
                            <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">Hubungi Kami</h3>
                            <p className="text-xs font-medium text-slate-400 mt-1 leading-relaxed">
                                Silakan pilih salah satu kontak layanan di bawah ini
                            </p>
                        </div>

                        {/* Pilihan Kontak dengan Ikon WA Seragam */}
                        <div className="flex flex-col gap-2.5">
                            {/* Admin Tata Usaha (Fadhil) */}
                            <a
                                href="https://wa.me/6288802491985"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsWaOpen(false)}
                                className="w-full bg-slate-50 hover:bg-[#006432] text-slate-800 hover:text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 border border-slate-200/50 hover:border-[#006432] active:scale-[0.99] cursor-pointer text-sm tracking-wide"
                            >
                                {/* Ikon WA Putih */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="shrink-0">
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                                <span>Admin TU (Ustadz Fadhil)</span>
                            </a>

                            {/* Ustadz Anang */}
                            <a
                                href="https://wa.me/628819725510"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsWaOpen(false)}
                                className="w-full bg-slate-50 hover:bg-[#006432] text-slate-800 hover:text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 border border-slate-200/50 hover:border-[#006432] active:scale-[0.99] cursor-pointer text-sm tracking-wide"
                            >
                                {/* Ikon WA Hijau (Otomatis Putih saat Hover berkat pewarnaan currentColor) */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="shrink-0">
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                                <span>Ustadz Anang</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;