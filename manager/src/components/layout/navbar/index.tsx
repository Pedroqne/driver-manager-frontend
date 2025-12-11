"use client";

import { Link, useLocation } from "react-router-dom";
import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";

// Componente Avatar
function Avatar({ name, size = 36 }: { name: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("")
    .slice(0, 2);

  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-green-600 text-white font-semibold"
    >
      {initials}
    </div>
  );
}

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const userName = "Max Alexandre";

  const menu = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/corridas", label: "Corridas" },
    { to: "/metas", label: "Metas" },
    { to: "/relatorios", label: "Relatórios" },
    { to: "/wrapped", label: "Wrapped" },
  ];

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 px-6 flex justify-center items-center z-50">
      <div className="flex justify-between items-center w-full max-w-6xl">

        {/* LOGO */}
        <Link to="/dashboard" className="text-xl font-semibold text-green-700">
          DriverPay
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          {menu.map((item) => {
            const ativo = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition ${
                  ativo
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* AÇÕES DESKTOP */}
        <div className="ml-auto hidden md:flex items-center gap-6">
          <Moon className="w-5 h-5 text-gray-700 cursor-pointer" />

          {/* AVATAR + NOME */}
          <div className="flex items-center gap-3">
            <Avatar name={userName} size={36} />
            <span className="text-sm text-gray-700 font-medium">{userName}</span>
          </div>

          <button
            type="submit"
            className="text-sm font-semibold text-gray-900 hover:text-red-600"
          >
            <Link to="/login">Sair</Link>
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden ml-auto" onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>

        {/* MOBILE MENU (DRAWER) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-300 z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMenu} />
          </div>

          {/* LINKS MOBILE */}
          <nav className="flex flex-col p-5 gap-4">
            {menu.map((item) => {
              const ativo = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition ${
                    ativo ? "text-green-700 font-semibold" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* USER MOBILE INFO */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-3 mb-4">
              <Avatar name={userName} size={40} />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">{userName}</span>
                <span className="text-xs text-gray-500">Conta ativa</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-center font-semibold text-red-600 cursor-pointer hover:bg-red-50 rounded-lg"
            >
              <Link to="/login">Sair</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
