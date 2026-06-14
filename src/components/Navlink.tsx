import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  icon,
  isActive = false,
}) => {
  // Style diubah menjadi bentuk kapsul (pill) hijau tua sesuai gambar mockup
  const activeStyle = "bg-[#006432] text-white rounded-full shadow-sm";
  const defaultStyle = "text-emerald-950 hover:bg-emerald-700/10 hover:text-[#006432] rounded-full";

  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
        isActive ? activeStyle : defaultStyle
      }`}
    >
      {/* Icon otomatis menyesuaikan jika Anda ingin menampilkannya */}
      {icon && <span className="flex items-center justify-center w-4 h-4 shrink-0">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

export default NavLink;