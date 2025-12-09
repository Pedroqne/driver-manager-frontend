import { useState } from "react";
import { Plus } from "lucide-react";

export function MetasPage() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tipoMeta, setTipoMeta] = useState("diaria");
  const [valorMeta, setValorMeta] = useState("");

  // Exemplo de metas existentes
  const metas = [
    {
      id: 1,
      tipo: "Meta Diária",
      valor: 150,
      atual: 97.4,
    },
    {
      id: 2,
      tipo: "Meta Semanal",
      valor: 1000,
      atual: 450,
    },
  ];

  const calcularProgresso = (meta: any) =>
    Math.min(Math.round((meta.atual / meta.valor) * 100), 100);

  return (
    <main className="min-h-screen pt-20 pb-20 space-y-16 max-w-7xl mx-auto">
      {/* Título */}
      <div className="p-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Metas</h1>
          <p className="text-gray-600">Acompanhe suas metas de ganho</p>
        </div>

        <button
          onClick={() => setMostrarFormulario(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition"
        >
          <Plus size={18} /> Nova Meta
        </button>
      </div>

      {/* FORMULÁRIO DE NOVA META — aparece só quando clicar */}
      {mostrarFormulario && (
        <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm mx-6">
          <h2 className="text-xl font-semibold mb-4">Criar Nova Meta</h2>

          <div className="space-y-4">
            {/* Tipo da Meta */}
            <div>
              <label className="text-gray-700 text-sm">Tipo de Meta</label>
              <select
                className="w-full mt-1 border rounded-xl px-3 py-2"
                value={tipoMeta}
                onChange={(e) => setTipoMeta(e.target.value)}
              >
                <option value="diaria">Meta Diária</option>
                <option value="semanal">Meta Semanal</option>
                <option value="mensal">Meta Mensal</option>
              </select>
            </div>

            {/* Valor da Meta */}
            <div>
              <label className="text-gray-700 text-sm">Valor da Meta (R$)</label>
              <input
                type="number"
                className="w-full mt-1 border rounded-xl px-3 py-2"
                placeholder="150.00"
                value={valorMeta}
                onChange={(e) => setValorMeta(e.target.value)}
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
                Criar Meta
              </button>

              <button
                onClick={() => setMostrarFormulario(false)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LISTA DE METAS */}
      <div className="space-y-10 px-6">
        {metas.map((meta) => {
          const progresso = calcularProgresso(meta);
          const falta = (meta.valor - meta.atual).toFixed(2);

          return (
            <div
              key={meta.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{meta.tipo}</h2>

              {/* Cabeçalho */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 font-medium">
                  R$ {meta.atual.toFixed(2)}
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-red-600 cursor-pointer hover:underline">
                    Remover
                  </span>
                  <span className="text-gray-700">{progresso}%</span>
                </div>
              </div>

              {/* BARRA DE PROGRESSO */}
              <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>

              {/* Rodapé */}
              <div className="flex justify-between text-sm mt-2">
                <p className="text-gray-600">
                  Faltam R$ {falta} para atingir a meta
                </p>

                <p className="text-gray-600">
                  de R$ {meta.valor.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
