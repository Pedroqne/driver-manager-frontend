import { MailCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
        
        {/* Ícone */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <MailCheck size={42} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mt-6">
          Verifique seu e-mail
        </h1>

        {/* Texto */}
        <p className="text-gray-600 text-center mt-3">
          Enviamos um link de confirmação para seu e-mail.  
          Clique no link para ativar sua conta.
        </p>

        {/* Botão reenviar */}
        <button
          onClick={() => alert("Código reenviado!")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mt-8 transition"
        >
          Reenviar e-mail
        </button>

        {/* Voltar ao login */}
        <div className="flex justify-center mt-6">
          <Link
            to="/login"
            className="text-green-700 hover:text-green-800 flex items-center gap-2 transition"
          >
            <ArrowLeft size={18} />
            Voltar ao login
          </Link>
        </div>

      </div>
    </div>
  );
}
