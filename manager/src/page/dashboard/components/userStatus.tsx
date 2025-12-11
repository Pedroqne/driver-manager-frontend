import { useEffect, useState } from "react";

export function UserStatus() {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const saved = localStorage.getItem("user_status");
    if (saved) setStatus(saved);
  }, []);

  const updateStatus = (newStatus: string) => {
    setStatus(newStatus);
    localStorage.setItem("user_status", newStatus);
  };

  const getColor = () => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "dirigindo":
        return "bg-yellow-500 animate-pulse";
      case "ocupado":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const getLabel = () => {
    switch (status) {
      case "online":
        return "Online";
      case "dirigindo":
        return "Dirigindo";
      case "ocupado":
        return "Ocupado";
      default:
        return "Indefinido";
    }
  };

  return (
    <div className="relative">
      <details className="group">
        <summary className="flex items-center gap-2 cursor-pointer select-none bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition">
          <span className={`w-3 h-3 rounded-full ${getColor()}`} />
          <span className="font-medium">{getLabel()}</span>
        </summary>

        {/* DROPDOWN */}
        <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg w-40 p-2 z-50">

          {/* Online */}
          <button
            onClick={() => updateStatus("online")}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-left"
          >
            <span className="w-3 h-3 rounded-full bg-green-500" />
            Online
          </button>

          {/* Dirigindo */}
          <button
            onClick={() => updateStatus("dirigindo")}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-left"
          >
            <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
            Dirigindo
          </button>

          {/* Ocupado */}
          <button
            onClick={() => updateStatus("ocupado")}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-100 text-left"
          >
            <span className="w-3 h-3 rounded-full bg-red-500" />
            Ocupado
          </button>
        </div>
      </details>
    </div>
  );
}
