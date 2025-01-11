import "./common/css/index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import LogInView from "./auth/views/LogInView.tsx";
import RegisterView from "./auth/views/RegisterView.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/log-in" element={<LogInView />} />
      <Route path="/register" element={<RegisterView />} />
    </Routes>
  </BrowserRouter>
);
