import { useState } from "react";
import { ArrowRight, Car, BarChart3, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    icon: Car,
    title: "Acompanhe suas Corridas",
    text: "Registre ganhos, distâncias e tempo online de forma simples.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    text: "Veja gráficos detalhados sobre seus ganhos semanais e mensais.",
  },
  {
    icon: Target,
    title: "Defina Metas Diárias",
    text: "Acompanhe sua meta diária e melhore seu desempenho.",
  },
];

export function OnboardingPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const isLast = step === slides.length - 1;

  function next() {
    if (isLast) navigate("/login");
    else setStep(step + 1);
  }

  function skip() {
    navigate("/login");
  }

  const SlideIcon = slides[step].icon;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between px-8 py-12">

      {/* SKIP */}
      <div className="w-full flex justify-end">
        <button
          onClick={skip}
          className="text-green-600 font-semibold text-sm hover:underline"
        >
          Pular
        </button>
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-col items-center text-center max-w-sm mt-10">
        <SlideIcon size={90} className="text-green-600" />

        <h1 className="text-3xl font-bold text-gray-900 mt-6">
          {slides[step].title}
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          {slides[step].text}
        </p>
      </div>

      {/* INDICADORES */}
      <div className="flex gap-3 mt-10">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === step ? "bg-green-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* BOTÃO */}
      <button
        onClick={next}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 mt-6 hover:bg-green-700 transition"
      >
        {isLast ? "Começar" : "Próximo"} <ArrowRight size={20} />
      </button>
    </div>
  );
}
