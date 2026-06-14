import { MapPin, Phone, Clock } from "lucide-react";
import logo_tpq from "../assets/logo_tpq.png"; // Sesuaikan path jika letak file Footer berbeda folder dengan Header

export const Footer = () => {
    return (
        <footer className="w-full bg-[#006432] text-white pt-12 pb-6 px-6 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-b border-emerald-700 pb-10">
                
                {/* Kolom 1: Identitas Lembaga & Kontak */}
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <img
                            src={logo_tpq}
                            alt="Logo Raudlatul Ma'arif"
                            className="h-16 w-auto object-contain bg-white p-1 rounded-md"
                        />
                        <div className="leading-tight">
                            <h2 className="font-extrabold text-sm md:text-base tracking-wide">
                                RAUDLATUL MA'ARIF <br /> AN-NAHDLIYAH
                            </h2>
                            <p className="text-xs font-semibold text-emerald-200 tracking-wider mt-0.5">
                                TPQ MDTA
                            </p>
                        </div>
                    </div>
                    
                    <p className="text-sm text-emerald-100/90 leading-relaxed">
                        Mewujudkan Generasi Hafidz Qur'an yang berakhlakul karimah, unggul dalam pendidikan TPQ & MDTA Awaliyah.
                    </p>

                    <div className="flex flex-col gap-3 text-sm text-emerald-100 mt-2">
                        <div className="flex items-start gap-2.5">
                            <MapPin size={18} className="shrink-0 mt-0.5 text-emerald-300" />
                            <span>Jalan Projosumarto 1 Getaskerep, Kec. Talang, Kabupaten Tegal, Jawa Tengah</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Clock size={18} className="text-emerald-300" />
                            <span>08.00 - 17.00 WIB</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Phone size={18} className="text-emerald-300" />
                            <a href="tel:+628819725510" className="hover:underline">+62 881-9725-510</a>
                        </div>
                    </div>
                </div>

                {/* Kolom 2: Sosial Media (Sesuai Mockup Figma Anda) */}
                <div className="flex flex-col gap-4 md:pl-8">
                    <h3 className="text-lg font-bold tracking-wide border-b border-emerald-600 pb-2">
                        Media Sosial
                    </h3>
                    <div className="flex flex-col gap-3.5 mt-2">
                        {/* WhatsApp */}
                        <a href="#" className="flex items-center gap-3 hover:text-emerald-200 transition-colors group">
                            <div className="p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">WhatsApp</span>
                        </a>

                        {/* Youtube */}
                        <a href="#" className="flex items-center gap-3 hover:text-emerald-200 transition-colors group">
                            <div className="p-2  rounded-lg group-hover:bg-emerald-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M6.443 4.381C7.84 4.25 9.637 4.25 11.96 4.25h.082c2.322 0 4.119 0 5.516.131c1.407.133 2.517.406 3.409 1.03c.928.65 1.377 1.511 1.587 2.607c.197 1.024.197 2.321.197 3.907v.15c0 1.586 0 2.883-.197 3.907c-.21 1.096-.659 1.957-1.587 2.607c-.892.624-2.002.897-3.41 1.03c-1.396.131-3.193.131-5.515.131h-.082c-2.322 0-4.119 0-5.516-.131c-1.407-.133-2.517-.406-3.409-1.03c-.928-.65-1.377-1.511-1.587-2.607c-.197-1.024-.197-2.321-.197-3.907v-.15c0-1.586 0-2.883.197-3.907c.21-1.096.659-1.957 1.587-2.607c.892-.624 2.002-.897 3.41-1.03m5.115 4.564a1.166 1.166 0 0 0-1.608.313c-.13.191-.2.418-.2.65v4.184a1.16 1.16 0 0 0 1.8.968l3.175-2.074a1.155 1.155 0 0 0 .008-1.931z" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Youtube</span>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="flex items-center gap-3 hover:text-emerald-200 transition-colors group">
                            <div className="p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Facebook</span>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="flex items-center gap-3 hover:text-emerald-200 transition-colors group">
                            <div className="p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" className="fill-current">
                                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                </svg>
                            </div>
                            <span className="font-medium text-sm">Instagram</span>
                        </a>
                    </div>
                </div>

                {/* Kolom 3: Detail Alamat / Peta Interaktif */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold tracking-wide border-b border-emerald-600 pb-2">
                        Detail Alamat
                    </h3>
                    <div className="w-full h-48 rounded-xl overflow-hidden shadow-md border-2 border-emerald-700/50 mt-2">
                        {/* Google Maps Embed dengan Koordinat Presisi Getaskerep Talang Tegal */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6728078519445!2d109.1287950!3d-6.9296683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6bbe65edb0e77d%3A0xc48ca98ee5dfd8a8!2sMDA%20RAUDLATUL%20MA&#39;ARIF!5e0!3m2!1sid!2sid!4v1718360000000!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Lokasi MDA Raudlatul Ma'arif"
                        ></iframe>
                    </div>
                </div>

            </div>

            {/* Bagian Hak Cipta / Bottom Footer */}
            <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-200/80 gap-2">
                <p>© 2026 Raudlatul Ma'arif An-Nahdliyah. All Rights Reserved.</p>
                <p>Designed for TPQ & MDTA Awaliyah</p>
            </div>
        </footer>
    );
};

export default Footer;