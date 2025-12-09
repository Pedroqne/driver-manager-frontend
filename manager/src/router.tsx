import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Dashboard } from "./page/dashboard";
import { AdicionarCorrida } from "./page/add-race";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/", // opcional → redireciona para dashboard
        element: <Dashboard />,
      },
      {
        path: "/corridas/adicionar",
        element: <AdicionarCorrida />,
      }
    ],
  },
]);
