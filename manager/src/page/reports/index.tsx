import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { TrendingUp, Clock, MapPin, BarChart2 } from "lucide-react";

export function RelatoriosPage() {
  const [filtro, setFiltro] = useState<"semana" | "mes">("semana");

  const dadosSemana = [
    { name: "qua.", value: 65 },
    { name: "qui.", value: 125 },
    { name: "sex.", value: 105 },
    { name: "sáb.", value: 150 },
    { name: "dom.", value: 110 },
    { name: "seg.", value: 75 },
    { name: "ter.", value: 60 },
  ];

  const dadosMes = [
    { name: "sem.1", value: 480 },
    { name: "sem.2", value: 520 },
    { name: "sem.3", value: 610 },
    { name: "sem.4", value: 430 },
  ];

  const melhoresHorarios = [
    { hora: "20:00", valor: 45.5, barra: "w-[75%]" },
    { hora: "22:00", valor: 28.9, barra: "w-[55%]" },
    { hora: "0:00", valor: 22.5, barra: "w-[45%]" },
  ];

  return (
    <main className="min-h-screen pt-20 pb-20 max-w-7xl mx-auto space-y-16">
      <div className="p-6 space-y-10">

        {/* TÍTULO */}
        <div>
          <h1 className="text-3xl font-bold">Relatórios</h1>
          <p className="text-gray-600">Análise detalhada do seu desempenho</p>
        </div>

        {/* CARDS SUPERIORES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Ganho Total */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-green-600">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl w-fit mb-3">
              <TrendingUp size={22} />
            </div>
            <p className="text-gray-600 text-sm">Ganho Total</p>
            <h2 className="text-2xl font-bold">R$ 96.90</h2>
          </div>

          {/* Total Corridas */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-green-600">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl w-fit mb-3">
              <BarChart2 size={22} />
            </div>
            <p className="text-gray-600 text-sm">Total de Corridas</p>
            <h2 className="text-2xl font-bold">3</h2>
          </div>

          {/* Distância Total */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-green-600">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl w-fit mb-3">
              <MapPin size={22} />
            </div>
            <p className="text-gray-600 text-sm">Distância Total</p>
            <h2 className="text-2xl font-bold">29.8 km</h2>
          </div>

          {/* Classificação Média */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-green-600">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl w-fit mb-3">
              <Clock size={22} />
            </div>
            <p className="text-gray-600 text-sm">Classificação Média</p>
            <h2 className="text-2xl font-bold">4.9</h2>
          </div>
        </div>

        {/* FILTROS */}
        <div className="flex gap-3">
          <button
            onClick={() => setFiltro("semana")}
            className={`px-4 py-2 rounded-xl cursor-pointer ${
              filtro === "semana"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Semana
          </button>
          <button
            onClick={() => setFiltro("mes")}
            className={`px-4 py-2 rounded-xl cursor-pointer ${
              filtro === "mes"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Mês
          </button>
        </div>

        {/* GRÁFICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Ganhos por Dia */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Ganhos por Dia</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filtro === "semana" ? dadosSemana : dadosMes}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Melhores Horários */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-6">Melhores Horários</h2>

            <div className="space-y-6">
              {melhoresHorarios.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-gray-700 w-16">{item.hora}</span>

                  <div className="flex-1 mx-4 h-3 bg-gray-200 rounded-full">
                    <div
                      className={`h-3 bg-green-600 rounded-full ${item.barra}`}
                    ></div>
                  </div>

                  <span className="w-20 text-right text-gray-700 font-medium">
                    R$ {item.valor.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
