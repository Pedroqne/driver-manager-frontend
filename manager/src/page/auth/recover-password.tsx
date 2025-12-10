import { useState } from "react";
import { Link } from "react-router-dom";

export function RecoverPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await new Promise((r) => setTimeout(r, 1200));

    setSent(true); // Simula envio
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200 rounded-xl shadow-sm">

        <div className="flex justify-center mb-4">
          <span className="text-5xl">🔐</span>
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-2">
          Recuperar senha
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm">
          Enviaremos um link para redefinir sua senha.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md focus:border-green-600 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 rounded-md"
            >
              Enviar link de recuperação
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Email enviado!
            </h2>
            <p className="text-gray-600 text-sm">
              Se o email estiver cadastrado, você receberá um link para alterar sua senha nos próximos minutos.
            </p>
          </div>
        )}

        <p className="text-center text-sm text-gray-600 mt-6">
          <Link to="/login" className="text-blue-600 hover:underline">
            Voltar ao login
          </Link>
        </p>
      </div>
    </div>
  );
}
