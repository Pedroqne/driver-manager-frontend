"use client";

import { Link, useLocation } from "react-router-dom";
import { Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menu = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/corridas", label: "Corridas" },
    { to: "/metas", label: "Metas" },
    { to: "/relatorios", label: "Relatórios" },
    { to: "/wrapped", label: "Wrapped" },
  ];

  const toggleMenu = () => setOpen(!open);

  return (
    <header className=" fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 px-6 flex justify-center items-center z-50">
      <div className="flex justify-between  items-center w-full max-w-6xl">
           
            {/* LOGO */}
            <div className="flex items-center gap-3">
                
                <Link to="/dashboard" className="text-xl font-semibold text-green-700">
                DriverPay
                </Link>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
                {menu.map((item) => {
                const ativo = location.pathname === item.to;
                return (
                    <Link
                    key={item.to}
                    to={item.to}
                    className={`text-sm font-medium transition
                        ${ativo ? "text-green-700 font-semibold" : "text-gray-700 hover:text-gray-900"}
                    `}
                    >
                    {item.label}
                    </Link>
                );
                })}
            </nav>

            {/* AÇÕES DESKTOP / MOBILE */}
            <div className="ml-auto hidden md:flex items-center gap-6">
                <Moon className="w-5 h-5 text-gray-700 cursor-pointer" />
                <span className="text-sm text-gray-700 font-medium">Max Alexandre</span>
                <button className="text-sm font-semibold text-gray-900 hover:text-red-600">
                Sair
                </button>
            </div>

            {/* MOBILE - ICON HAMBURGUER */}
            <button className="md:hidden ml-auto" onClick={toggleMenu}>
                <Menu className="w-6 h-6 text-gray-800" />
            </button>

            {/* MOBILE MENU (DRAWER) */}
            <div
                className={`
                fixed top-0 right-0 h-full w-64 bg-white shadow-2xl border-l border-gray-200
                transform transition-transform duration-300 z-50
                ${open ? "translate-x-0" : "translate-x-full"}
                `}
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
                            className={`text-base font-medium transition
                            ${ativo ? "text-green-700 font-semibold" : "text-gray-800"}
                            `}
                        >
                            {item.label}
                        </Link>
                        );
                    })}
                </nav>

                {/* USER INFO MOBILE */}
                <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center gap-3 mb-4">
                        <Moon className="w-5 h-5 text-gray-700 cursor-pointer" />
                        <span className="text-sm text-gray-700 font-medium">Max Alexandre</span>
                    </div>

                    <button className="w-full py-2 text-center font-semibold text-red-600 hover:bg-red-50 cursor-pointer rounded-lg">
                        Sair
                    </button>
                </div>
            </div>
      </div>
    </header>
  );
};
