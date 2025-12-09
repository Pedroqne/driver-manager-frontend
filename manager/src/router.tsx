import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Dashboard } from "./page/dashboard";
import { AdicionarCorrida } from "./page/add-race";
import { CorridasPage } from "./page/races";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/", 
        element: <Dashboard />,
      },
      {
        path: "/corridas", 
        element: <CorridasPage />,
      },
      {
        path: "/corridas/adicionar",
        element: <AdicionarCorrida />,
      }
    ],
  },
]);
