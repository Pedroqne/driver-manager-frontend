import { ArrowUpRight, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { WeatherWidget } from "./components/WeatherWidget";
import { UserStatus } from "./components/userStatus";
import { ToastNotifier } from "./components/toastNotifier";

const data = [
  { name: "ter.", value: 180 },
  { name: "qua.", value: 90 },
  { name: "qui.", value: 135 },
  { name: "sex.", value: 150 },
  { name: "sáb.", value: 138 },
  { name: "dom.", value: 95 },
  { name: "seg.", value: 60 }
];

export function Dashboard() {
  return (
    <main className=" min-h-screen pt-20 pb-20 space-y-20 max-w-7xl mx-auto">
      <div className="p-6 space-y-10">

        {/* Título */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Resumo completo do seu desempenho</p>
          </div>

          <div className="flex items-center gap-4">
            <UserStatus />
            <WeatherWidget />
          </div>
        </div>

        {/* Cards superiores */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Ganho Hoje */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-600 transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                <DollarSign size={22} />
              </div>
            </div>
            <p className="text-sm text-gray-700">Ganho Hoje</p>
            <h2 className="text-2xl font-bold">R$ 96.90</h2>
            <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <ArrowUpRight size={14} /> +12% vs ontem
            </p>
          </div>

          {/* Custo Estimado */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-600 transition duration-300">
            <div className="p-3 w-12 bg-orange-100 text-orange-600 rounded-xl mb-4">
              <TrendingUp size={22} />
            </div>
            <p className="text-sm text-gray-700">Custo Estimado</p>
            <h2 className="text-2xl font-bold">R$ 14.54</h2>
          </div>

          {/* Lucro Líquido */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-600 transition duration-300">
            <div className="p-3 w-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
              <DollarSign size={22} />
            </div>
            <p className="text-sm text-gray-700">Lucro Líquido</p>
            <h2 className="text-2xl font-bold">R$ 82.37</h2>
          </div>

          {/* Horas Online */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-600 transition duration-300">
            <div className="p-3 w-12 bg-purple-100 text-purple-600 rounded-xl mb-4">
              <Clock size={22} />
            </div>
            <p className="text-sm text-gray-700">Horas Online</p>
            <h2 className="text-2xl font-bold">3.0h</h2>
          </div>
        </div>

        {/* Gráfico + Resumo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* GRÁFICO */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2">
            <h2 className="text-lg font-semibold mb-4">Ganhos da Semana</h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Resumo do Dia */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold mb-6">Resumo do Dia</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Corridas</span>
                <span className="font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Distância</span>
                <span className="font-semibold">29.8 km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Classificação</span>
                <span className="font-semibold">4.9/5</span>
              </div>
            </div>
              <Link
                to="/corridas/adicionar"
                className="mt-6 block text-center w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 cursor-pointer transition"
              >
                Adicionar Corrida
              </Link>
          </div>

        </div>
      </div>
      <ToastNotifier />
    </main>
  );
}
