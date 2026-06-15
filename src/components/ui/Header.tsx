import {
    MapPin,
    Clock,
    Phone,
    Home,
    User,
    GraduationCap,
    ClipboardList,
    Image,
    Calendar,
    Contact
} from "lucide-react";
import logo_tpq from "../../assets/logo_tpq.png"; // Memperbaiki nama file menjadi logo_tpq.png
import NavLink from "../Navlink";

export const Header = () => {
    // Sesuaikan dengan logic routing aplikasi Anda (misal menggunakan useLocation() jika pakai react-router)
    const currentPath = "#";

    const menuItems = [
        { label: "Beranda", href: "/", icon: <Home size={18} /> },
        { label: "Profil", href: "/profile", icon: <User size={18} /> },
        { label: "Pendidikan", href: "/pendidikan", icon: <GraduationCap size={18} /> },
        { label: "Pendaftaran", href: "/pendaftaran", icon: <ClipboardList size={18} /> },
        { label: "Galeri", href: "/galeri", icon: <Image size={18} /> },
        { label: "Kegiatan", href: "/kegiatan", icon: <Calendar size={18} /> },
        { label: "Kontak", href: "/kontak", icon: <Contact size={18} /> },
    ];

    return (
        <header className="w-full shadow-sm font-sans mb-0 ">
            {/* 1. TOP BAR (Baris Hijau Atas) */}
            <div className="bg-[#006432] text-white text-xs md:text-sm py-2.5 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

                    {/* Alamat */}
                    <div className="flex items-center gap-2 text-center md:text-left">
                        <MapPin size={16} className="shrink-0 text-white" />
                        <span>Jalan Projosumarto 1 Getaskerep, Kec. Talang, Kabupaten Tegal, Jawa Tengah</span>
                    </div>

                    {/* Jam Kerja, Kontak, & Sosial Media */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        {/* Jam Kerja */}
                        <div className="flex items-center gap-1.5">
                            <Clock size={16} />
                            <span>08.00 - 17.00</span>
                        </div>

                        {/* No Telepon */}
                        <div className="flex items-center gap-1.5">
                            <Phone size={16} />
                            <a href="tel:+628819725510" className="hover:underline">+62 881-9725-510</a>
                        </div>

                        {/* Ikon Sosial Media */}
                        <div className="flex items-center gap-3 ml-2 border-l border-emerald-600 pl-4">
                            {/* Instagram */}
                            <a href="#" className="hover:text-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a href="#" className="hover:text-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>

                            </a>

                            {/* Facebook */}
                            <a href="#" className="hover:text-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                </svg>
                            </a>

                            {/* Youtube */}
                            <a href="#" className="hover:text-emerald-200 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M6.443 4.381C7.84 4.25 9.637 4.25 11.96 4.25h.082c2.322 0 4.119 0 5.516.131c1.407.133 2.517.406 3.409 1.03c.928.65 1.377 1.511 1.587 2.607c.197 1.024.197 2.321.197 3.907v.15c0 1.586 0 2.883-.197 3.907c-.21 1.096-.659 1.957-1.587 2.607c-.892.624-2.002.897-3.41 1.03c-1.396.131-3.193.131-5.515.131h-.082c-2.322 0-4.119 0-5.516-.131c-1.407-.133-2.517-.406-3.409-1.03c-.928-.65-1.377-1.511-1.587-2.607c-.197-1.024-.197-2.321-.197-3.907v-.15c0-1.586 0-2.883.197-3.907c.21-1.096.659-1.957 1.587-2.607c.892-.624 2.002-.897 3.41-1.03m5.115 4.564a1.166 1.166 0 0 0-1.608.313c-.13.191-.2.418-.2.65v4.184a1.16 1.16 0 0 0 1.8.968l3.175-2.074a1.155 1.155 0 0 0 .008-1.931z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* 2. MAIN NAV BAR (Baris Menu Utama) */}
            <div className="bg-[#D1D9E6] px-6 py-3 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Sisi Kiri: Logo & Nama Lembaga */}
                    <div className="flex items-center gap-3">
                        <img
                            src={logo_tpq}
                            alt="Logo Raudlatul Ma'arif"
                            className="h-14 w-auto object-contain"
                        />
                        <div className="leading-tight">
                            <h1 className="font-extrabold text-[#006432] text-sm md:text-base tracking-wide">
                                RAUDLATUL MA'ARIF <br /> AN-NAHDLIYAH
                            </h1>
                            <p className="text-xs font-semibold text-emerald-800 tracking-wider mt-0.5">
                                TPQ MDTA
                            </p>
                        </div>
                    </div>

                    {/* Sisi Kanan: Menu Navigasi */}
                    <nav className="flex flex-wrap items-center gap-1 md:gap-2">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.label}
                                label={item.label}
                                href={item.href}
                                icon={item.icon}
                            />
                        ))}
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;