import "./common/css/index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";

import AuthLayout from "./auth/components/AuthLayout.tsx";
import { AuthContextProvider } from "./auth/context/auth-provider.tsx";

import App from "./App.tsx";
import LogInView from "./auth/views/LogInView.tsx";
import RegisterView from "./auth/views/RegisterView.tsx";

import { ROUTES } from "./routes.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route
        element={
          <AuthContextProvider>
            <AuthLayout />
          </AuthContextProvider>
        }
      >
        <Route path="/" element={<App />} />
      </Route>
      <Route path={ROUTES.LOG_IN} element={<LogInView />} />
      <Route path={ROUTES.REGISTER} element={<RegisterView />} />
    </Routes>
  </BrowserRouter>
);
