import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
  dark?: boolean;
}

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services" },
  { label: "Отзывы", path: "/reviews" },
  { label: "Контакты", path: "/contacts" },
];

export default function Header({ className, dark }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const textColor = dark ? "text-neutral-900" : "text-white";
  const hoverColor = dark ? "hover:text-amber-600" : "hover:text-amber-400";

  return (
    <header className={`absolute top-0 left-0 right-0 z-30 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className={`font-display text-xl md:text-2xl tracking-wide ${textColor}`}>
          Lady<span className="text-amber-400">&</span>Gentleman
        </Link>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${textColor} ${hoverColor} transition-colors duration-300 uppercase text-sm tracking-wide ${
                location.pathname === item.path ? "text-amber-400" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <Icon name={open ? "X" : "Menu"} size={28} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden mt-6 flex flex-col gap-4 bg-neutral-900/95 rounded-lg p-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-white hover:text-amber-400 transition-colors duration-300 uppercase text-sm tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
