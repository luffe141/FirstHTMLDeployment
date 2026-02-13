import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Achivements from "./components/Achivements.tsx";
import Home from "./pages/Home.tsx";
import Team from "./components/Team.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/achivements" element={<Achivements />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
