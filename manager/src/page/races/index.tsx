import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Plus } from "lucide-react";

export function CorridasPage() {
  const [filtro, setFiltro] = useState<"recentes" | "ganho" | "distancia">(
    "recentes"
  );

  const corridas = [
    { id: 1, data: "08 de dez., 23:41", ganho: 22.5, distancia: 6.1, duracao: 30, nota: 5 },
    { id: 2, data: "05 de dez., 21:41", ganho: 28.9, distancia: 20.2, duracao: 30, nota: 4.8 },
    { id: 3, data: "01 de dez., 19:41", ganho: 45.5, distancia: 15.5, duracao: 60, nota: 5 },
  ];

  const corridasFiltradas = [...corridas].sort((a, b) => {
    if (filtro === "ganho") return b.ganho - a.ganho;
    if (filtro === "distancia") return b.distancia - a.distancia;
    return 0;
  });

  return (
    <div className="min-h-screen pt-20 pb-20 space-y-20 max-w-7xl mx-auto">
      <div className="p-6 flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">Minhas Corridas</h1>
          <p className="text-gray-500 mt-1">
            Você tem {corridas.length} corridas registradas
          </p>
        </div>

        <Link
          to="/corridas/adicionar"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition"
        >
          <Plus size={18} />
          Adicionar Corrida
        </Link>
      </div>

      {/* Filtros */}
      <div className="flex gap-3 mb-6 px-6">
        <button
          onClick={() => setFiltro("recentes")}
          className={`px-4 py-2 rounded-xl cursor-pointer ${
            filtro === "recentes" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Recentes
        </button>

        <button
          onClick={() => setFiltro("ganho")}
          className={`px-4 py-2 rounded-xl cursor-pointer ${
            filtro === "ganho" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Maior Ganho
        </button>

        <button
          onClick={() => setFiltro("distancia")}
          className={`px-4 py-2 rounded-xl cursor-pointer ${
            filtro === "distancia" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Maior Distância
        </button>
      </div>

      {/* Lista de Corridas  */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {corridasFiltradas.map((corrida) => (
          <div
            key={corrida.id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:border-green-600 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-600">{corrida.data}</p>

              <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg text-sm">
                <Star size={16} /> {corrida.nota}
              </span>
            </div>

            <h2 className="text-xl font-bold mt-1">R$ {corrida.ganho.toFixed(2)}</h2>

            <div className="flex flex-col gap-1 text-gray-600 mt-3">
              <span className="flex items-center gap-2">
                <MapPin size={18} /> {corrida.distancia} km
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} /> {corrida.duracao} min
              </span>
            </div>

            <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-xl cursor-pointer hover:bg-red-700 transition">
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
