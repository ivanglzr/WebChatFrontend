import "./common/css/index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
