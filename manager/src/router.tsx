import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Dashboard } from "./page/dashboard";

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
    ],
  },
]);
