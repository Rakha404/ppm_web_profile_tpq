import React from "react";
// 1. Import NavLink dari react-router-dom agar bisa mendeteksi halaman aktif otomatis
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  //isActive sudah tidak butuh dioper manual lagi karena dideteksi otomatis oleh react-router-dom
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
}) => {
  // Style kapsul (pill) hijau tua dan hover-nya tetap dipertahankan sesuai keinginanmu
  const activeStyle = "bg-[#006432] text-white rounded-full shadow-xs";
  const defaultStyle = "text-emerald-950 hover:bg-emerald-700/10 hover:text-[#006432] rounded-full";

  return (
    /* 2. Mengubah tag <a> menjadi RouterNavLink dan 'href' menjadi 'to' */
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
          isActive ? activeStyle : defaultStyle
        }`
      }
    >
      {/* Icon otomatis menyesuaikan */}
      {icon && <span className="flex items-center justify-center w-4 h-4 shrink-0">{icon}</span>}
      <span>{label}</span>
    </RouterNavLink>
  );
};

export default NavLink;