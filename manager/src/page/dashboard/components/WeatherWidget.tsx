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
  const [error, setError] = useState(false);

  // Mapeamento de códigos WMO → texto PT
  const wmoCodeToText = (code: number): string => {
    const map: Record<number, string> = {
      0: "Céu limpo",
      1: "Parcialmente nublado",
      2: "Nublado",
      3: "Encoberto",
      45: "Nevoeiro",
      48: "Nevoeiro com geada",
      51: "Garoa leve",
      53: "Garoa",
      55: "Garoa forte",
      61: "Chuva leve",
      63: "Chuva",
      65: "Chuva forte",
      66: "Chuva gelada leve",
      67: "Chuva gelada forte",
      71: "Neve leve",
      73: "Neve",
      75: "Neve forte",
      95: "Trovoada",
      96: "Trovoada com granizo leve",
      99: "Trovoada com granizo forte",
    };
    return map[code] || "Clima variável";
  };

  // Ícones por código WMO
  const getIconFromCode = (code: number) => {
    if (code === 0) return <Sun className="w-6 h-6 text-yellow-500" />;
    if ([1, 2, 3, 45, 48].includes(code))
      return <Cloud className="w-6 h-6 text-gray-500" />;
    if ([51, 53, 55, 61, 63, 65, 66, 67].includes(code))
      return <CloudRain className="w-6 h-6 text-blue-500" />;
    if ([95, 96, 99].includes(code))
      return <Zap className="w-6 h-6 text-yellow-400" />;
    if ([71, 73, 75].includes(code))
      return <CloudSnow className="w-6 h-6 text-blue-300" />;
    return <Sun className="w-6 h-6 text-yellow-500" />;
  };

  // Cache por 15 min
  const CACHE_TIME = 15 * 60 * 1000;

    async function loadWeather(lat: number, lon: number) {
        try {
            const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude: lat,
                longitude: lon,
                current_weather: true,
                timezone: "auto",
                geocoding: true,            
                models: "best_match",
            },
            });

            const cw = res.data.current_weather;
            const city =
            res.data?.city ||
            res.data?.address?.city ||
            res.data?.address?.name ||
            res.data?.address?.locality ||
            "Sua Cidade";

            const result = {
            name: city,
            main: { temp: cw.temperature },
            weather: [{ description: wmoCodeToText(cw.weathercode) }],
            weathercode: cw.weathercode,
            };

            localStorage.setItem(
            "weather-cache",
            JSON.stringify({ data: result, time: Date.now() })
            );

            setWeather(result);
            setError(false);
        } catch (err) {
            console.error("Erro carregando clima:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    }


  async function initWeather() {
   
    const cache = localStorage.getItem("weather-cache");
    if (cache) {
      const parsed = JSON.parse(cache);
      if (Date.now() - parsed.time < CACHE_TIME) {
        setWeather(parsed.data);
        setLoading(false);
        return;
      }
    }

    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          loadWeather(pos.coords.latitude, pos.coords.longitude);
        },
        async () => {
          console.warn("GPS negado → tentando IP");

          // 3. Fallback por IP (funciona sem permissão!)
          try {
            const ipRes = await axios.get(
              "https://api.open-meteo.com/v1/forecast",
              {
                params: {
                  latitude: "auto",
                  longitude: "auto",
                  current_weather: true,
                  timezone: "auto",
                },
              }
            );

            const lat = ipRes.data.latitude;
            const lon = ipRes.data.longitude;

            await loadWeather(lat, lon);
          } catch (err) {
            // 4. Fallback final São Paulo (quase nunca será usado agora)
            console.warn("IP também falhou → usando SP");
            loadWeather(-23.5505, -46.6333);
          }
        },
        { timeout: 8000 }
      );
    } else {
      // Sem geoloc → IP
      const ipRes = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude: "auto",
            longitude: "auto",
            current_weather: true,
            timezone: "auto",
          },
        }
      );

      loadWeather(ipRes.data.latitude, ipRes.data.longitude);
    }
  }

  useEffect(() => {
    initWeather();
  }, []);

  if (loading || !weather) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  const temp = Math.round(weather.main.temp);
  const desc = weather.weather[0].description.toLowerCase();
  const code = weather.weathercode ?? 0;

  const getTip = () => {
    if (desc.includes("chuva") || desc.includes("garoa") || desc.includes("trovoada"))
      return { text: "Chuva prevista → demanda alta!", bg: "bg-emerald-100 text-emerald-800" };
    if (temp >= 32)
      return { text: "Calor forte → muita corrida com ar!", bg: "bg-orange-100 text-orange-800" };
    if (temp <= 16)
      return { text: "Frio → menos concorrência na rua", bg: "bg-blue-100 text-blue-800" };
    return null;
  };

  const tip = getTip();

  return (
    <div className="relative">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300 select-none"
      >
        {getIconFromCode(code)}
        <span className="font-semibold text-lg">{temp}°</span>
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {expanded && (
        <div className="absolute top-full mt-2 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-5 z-50">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">
              Clima em {weather.name}
            </h4>
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-6xl">{getIconFromCode(code)}</div>
            <div>
              <p className="text-4xl font-bold text-gray-900">{temp}°C</p>
              <p className="text-sm text-gray-600 capitalize mt-1">
                {weather.weather[0].description}
              </p>
            </div>
          </div>

          {tip && (
            <div
              className={`mt-5 px-4 py-3 rounded-lg text-sm font-medium ${tip.bg} shadow-sm`}
            >
              {tip.text}
            </div>
          )}

          {error && (
            <p className="text-xs text-amber-600 mt-3 text-center">
              Não foi possível obter localização precisa — usando aproximação
            </p>
          )}

          <p className="text-xs text-gray-500 mt-4 text-center">
            Clique novamente para fechar
          </p>
        </div>
      )}
    </div>
  );
}
