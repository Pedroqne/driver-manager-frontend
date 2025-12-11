import { useEffect, useState } from "react";

type Notification = {
  id: number;
  message: string;
  type?: "success" | "info" | "warning";
};

// Mensagens simuladas
const MESSAGES: Notification[] = [
  { id: 1, message: "Corrida concluída! Você ganhou R$ 28,50", type: "success" },
  { id: 2, message: "Nova corrida próxima! 1,2 km de distância", type: "info" },
  { id: 3, message: "Chuva prevista → mais corridas disponíveis", type: "warning" },
  { id: 4, message: "Meta semanal: 75% completada", type: "info" },
];

export const ToastNotifier = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    let currentIndex = 0;

    // Função para adicionar e remover toast
    const showToast = (notif: Notification) => {
      setNotifications((prev) => [...prev, notif]);

      // Remove a notificação depois de 4 segundos
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n !== notif));
      }, 4000);
    };

    // Primeiro toast: bem-vindo
    showToast({ id: 0, message: "Bem-vindo ao DriverPay!", type: "success" });

    // Intervalo para próximos toasts
    const interval = setInterval(() => {
      const notif = MESSAGES[currentIndex];
      showToast(notif);

      currentIndex = (currentIndex + 1) % MESSAGES.length;
    }, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 right-5 flex flex-col gap-3 z-50">
      {notifications.map((n) => (
        <div
          key={n.id + new Date().getTime()}
          className={`px-4 py-3 rounded shadow-md text-white animate-slide-in
            ${n.type === "success"
              ? "bg-green-500"
              : n.type === "info"
              ? "bg-blue-500"
              : "bg-yellow-500"
            }`}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
};
