import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarDropdownProps {
  label: string;
  icon?: React.ReactNode;
  items: DropdownItem[];
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ label, icon, items }) => {
  return (
    /* `group` di sini berfungsi agar elemen anak (kotak putih) 
       tahu kapan tombol utama sedang disentuh (hover) */
    <div className="relative inline-block text-left group">
      
      {/* TOMBOL UTAMA (Kapsul Navigasi) */}
      <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-semibold text-emerald-950 hover:bg-emerald-700/10 hover:text-[#006432] rounded-full transition-all duration-200 cursor-pointer">
        {icon && <span className="flex items-center justify-center w-4 h-4 shrink-0">{icon}</span>}
        <span>{label}</span>
        <ChevronDown size={14} className="mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
      </button>

      {/* KOTAK POP UP DROPDOWN (Melayang di bawahnya) */}
      <div className="absolute left-0 mt-1 w-48 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 
        opacity-0 pointer-events-none scale-95 origin-top-left
        group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 
        transition-all duration-200 ease-out"
      >
        {/* Panah Kecil di Atas Kotak (Opsional biar makin manis) */}
        <div className="absolute -top-1 left-6 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-100" />

        {/* LIST MENU ANAK */}
        <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="px-5 py-2.5 text-xs md:text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-[#006432] transition-colors text-left"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NavbarDropdown;