import { Download } from "lucide-react";

export function WrappedPage() {
  const dados = {
    nome: "Max Alexandre",
    ano: 2025,
    ganhoTotal: 97,
    corridas: 3,
    distancia: 30,
    classificacao: 4.9,
    melhorDia: {
      data: "08/12/2025",
      ganho: 74.4,
    },
  };

  return (
    <main className="min-h-screen pt-20 pb-20 max-w-7xl mx-auto space-y-12">
      {/* BANNER */}
      <div className="mx-6 bg-linear-to-r from-green-700 to-green-600 text-white p-10 rounded-3xl shadow-lg">
        <p className="uppercase tracking-widest text-sm opacity-90">
          {dados.ano} - Driver Wrapped
        </p>

        <h1 className="text-4xl font-extrabold mt-2 leading-snug">
          Que ano incrível, {dados.nome}!
        </h1>

        <p className="text-white/90 mt-3 text-lg">
          Confira os destaques do seu desempenho como motorista
        </p>
      </div>

      {/* CARDS DE ESTATÍSTICAS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Ganho */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
          <h2 className="text-green-600 text-3xl font-bold">
            R$ {dados.ganhoTotal}
          </h2>
          <p className="text-gray-600 mt-1">Ganho Total</p>
        </div>

        {/* Corridas */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
          <h2 className="text-blue-600 text-3xl font-bold">
            {dados.corridas}
          </h2>
          <p className="text-gray-600 mt-1">Corridas</p>
        </div>

        {/* Distância */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
          <h2 className="text-orange-600 text-3xl font-bold">
            {dados.distancia} km
          </h2>
          <p className="text-gray-600 mt-1">Distância</p>
        </div>

        {/* Classificação */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
          <h2 className="text-purple-600 text-3xl font-bold">
            {dados.classificacao}
          </h2>
          <p className="text-gray-600 mt-1">Classificação</p>
        </div>
      </div>

      {/* MELHOR DIA */}
      <div className="px-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Seu Melhor Dia</h2>

          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <p className="text-gray-700 font-medium">Data</p>
            <p className="text-2xl font-bold mt-1">{dados.melhorDia.data}</p>

            <p className="text-gray-700 font-medium mt-4">Ganho</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              R$ {dados.melhorDia.ganho.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* BOTÃO BAIXAR RESUMO */}
      <div className="px-6 flex justify-center">
        <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-green-700 transition w-full md:w-auto">
          <Download size={18} />
          Baixar Resumo
        </button>
      </div>
    </main>
  );
}
