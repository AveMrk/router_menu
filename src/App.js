import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import TimeAttackPage from "./components/TimeAttacPage";
import "./App.css";
export default function App() {
  const menu = [
    {
      name: "Главная",
      link: "/"
    },
    {
      name: "Дрифт-такси",
      link: "/drift"
    },
    {
      name: "Time Attack",
      link: "/timeattack"
    },
    {
      name: "Forza Karting",
      link: "/forza"
    }
  ];
  return (
    <div>
      <Menu items={menu} />
      <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}
