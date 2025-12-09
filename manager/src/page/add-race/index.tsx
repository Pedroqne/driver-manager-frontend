import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function AdicionarCorrida() {
  return (
    <main className="pt-20 pb-20 max-w-7xl mx-auto px-6">
      
      {/* Voltar */}
      <Link
        to="/dashboard"
        className="flex items-center gap-2 text-green-700 mb-6 font-medium"
      >
        <ArrowLeft size={18} /> Voltar
      </Link>

      <h1 className="text-3xl font-bold">Adicionar Corrida</h1>
      <p className="text-gray-600 mb-10">Registre os detalhes da sua corrida</p>

      {/* LAYOUT RESPONSIVO - FORM ESQ + SALDO DIR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* COLUNA ESQUERDA - FORM COMPLETO */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <form className="space-y-6 ">

            {/* Linha 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Horário de Início</label>
                <input
                  type="datetime-local"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Horário de Fim</label>
                <input
                  type="datetime-local"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Distância (km)</label>
                <input
                  type="number"
                  placeholder="15.5"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Ganho (R$)</label>
                <input
                  type="number"
                  placeholder="45.50"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Linha 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Número de Passageiros</label>
                <input
                  type="number"
                  placeholder="1"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Classificação (0-5)</label>
                <input
                  type="number"
                  placeholder="5"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Notas */}
            <div>
              <label className="text-sm font-medium text-gray-700">Notas (opcional)</label>
              <textarea
                rows={5}
                placeholder="Adicione alguma observação sobre a corrida..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                Salvar Corrida
              </button>

              <button className="w-40 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                Cancelar
              </button>
            </div>

          </form>
        </div>

        {/* COLUNA DIREITA - CARD ADICIONAR SALDO */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-semibold mb-4">Adicionar Saldo</h2>
          <p className="text-gray-600 text-sm mb-6">
            Use este modo rápido para registrar apenas o valor ganho.
          </p>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">Valor (R$)</label>
              <input
                type="number"
                placeholder="Ex: 50.00"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Notas (opcional)</label>
              <textarea
                rows={3}
                placeholder="Ex: Corrida rápida / bônus / gorjeta..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
              Salvar Saldo
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
