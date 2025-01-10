import "./common/css/index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import LogInView from "./auth/views/LogInView.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/log-in" element={<LogInView />} />
    </Routes>
  </BrowserRouter>
);
