import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    await new Promise((r) => setTimeout(r, 1200));

    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200 rounded-xl shadow-sm">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <div className="text-5xl text-black">
            {/* Logo opcional */}
            <span className="font-bold">🚗</span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Criar uma conta
        </h1>

        {/* FORM */}
        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="text-gray-700 font-medium">Nome completo</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md focus:border-green-600 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md focus:border-green-600 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md focus:border-green-600 outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 rounded-md"
          >
            Criar conta
          </button>
        </form>

        {/* DIVISOR */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-[1px] flex-1 bg-gray-300" />
          <span className="text-gray-500 text-sm">ou</span>
          <div className="h-[1px] flex-1 bg-gray-300" />
        </div>

        {/* SOCIAL LOGIN */}
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 justify-center border border-gray-300 bg-white py-2 rounded-md hover:bg-gray-100 transition">
            <FcGoogle size={20} />
            <span className="text-gray-700 font-medium">
              Criar conta com Google
            </span>
          </button>

          <button className="w-full flex items-center gap-3 justify-center border border-gray-300 bg-white py-2 rounded-md hover:bg-gray-100 transition">
            <FaApple size={20} className="text-gray-800" />
            <span className="text-gray-700 font-medium">
              Criar conta com Apple
            </span>
          </button>
        </div>

        {/* LOGIN */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Já tem conta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
