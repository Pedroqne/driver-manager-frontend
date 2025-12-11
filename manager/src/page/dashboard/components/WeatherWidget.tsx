// src/components/WeatherWidget.tsx
import { useEffect, useState } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  CloudSnow,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import axios from "axios";

export function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const API_KEY = "SUA_CHAVE_OPENWEATHERMAP_AQUI"; // ← coloca sua chave aqui
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        setWeather(res.data);
      } catch (err) {
        // Fallback silencioso caso a API falhe
        setWeather({
          name: "São Paulo",
          main: { temp: 26 },
          weather: [{ description: "parcialmente nublado", icon: "02d" }],
        });
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(-23.55, -46.63) // fallback: São Paulo
      );
    } else {
      fetchWeather(-23.55, -46.63);
    }
  }, []);

  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm">
        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  const temp = Math.round(weather.main.temp);
  const desc = weather.weather[0].description;
  const iconCode = weather.weather[0].icon;

  const getIcon = () => {
    if (iconCode.includes("01")) return <Sun className="w-6 h-6 text-yellow-500" />;
    if (iconCode.includes("02") || iconCode.includes("03") || iconCode.includes("04"))
      return <Cloud className="w-6 h-6 text-gray-500" />;
    if (iconCode.includes("09") || iconCode.includes("10"))
      return <CloudRain className="w-6 h-6 text-blue-500" />;
    if (iconCode.includes("11")) return <Zap className="w-6 h-6 text-yellow-400" />;
    if (iconCode.includes("13")) return <CloudSnow className="w-6 h-6 text-blue-300" />;
    return <Sun className="w-6 h-6 text-yellow-500" />;
  };

  const getTip = () => {
    if (desc.includes("chuva") || desc.includes("garoa"))
      return { text: "Chuva prevista → demanda alta!", bg: "bg-emerald-100 text-emerald-800" };
    if (temp >= 32)
      return { text: "Calor → muita corrida com ar!", bg: "bg-orange-100 text-orange-800" };
    if (temp <= 16)
      return { text: "Frio → menos motoristas na rua", bg: "bg-blue-100 text-blue-800" };
    return null;
  };

  const tip = getTip();

  return (
    <div className="relative">
      {/* Botão compacto */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300"
      >
        {getIcon()}
        <span className="font-semibold text-lg">{temp}°</span>
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* Painel expansível */}
      {expanded && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-5 z-10 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900">Clima em {weather.name}</h4>
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-5xl">{getIcon()}</div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{temp}°C</p>
              <p className="text-sm text-gray-600 capitalize">{desc}</p>
            </div>
          </div>

          {tip && (
            <div className={`mt-4 px-4 py-2.5 rounded-lg text-sm font-medium ${tip.bg}`}>
              {tip.text}
            </div>
          )}

          <p className="text-xs text-gray-500 mt-4 text-center">
            Clique novamente para fechar
          </p>
        </div>
      )}
    </div>
  );
}