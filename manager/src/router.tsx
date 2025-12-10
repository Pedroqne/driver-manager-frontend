import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Dashboard } from "./page/dashboard";
import { AdicionarCorrida } from "./page/add-race";
import { CorridasPage } from "./page/races";
import { MetasPage } from "./page/goals";
import { RelatoriosPage } from "./page/reports";
import { WrappedPage } from "./page/wrapper";
import { RegisterPage } from "./page/auth/register";
import { LoginPage } from "./page/auth/login";
import { RecoverPasswordPage } from "./page/auth/recover-password";
import { VerifyEmailPage } from "./page/auth/verify-email";
import { OnboardingPage } from "./page/auth/onboarding";


export const router = createBrowserRouter([
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmailPage />,
  },
  {
    path: "/recover-password",
    element: <RecoverPasswordPage />,
  },

  
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/corridas",
        element: <CorridasPage />,
      },
      {
        path: "/corridas/adicionar",
        element: <AdicionarCorrida />,
      },
      {
        path: "/metas",
        element: <MetasPage />,
      },
      {
        path: "/relatorios",
        element: <RelatoriosPage />,
      },
      {
        path: "/wrapped",
        element: <WrappedPage />,
      },
    ],
  },
]);
