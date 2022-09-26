import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route } from "react-router-dom";

import ShipDetail from "./pages/ShipDetail";
import Starships from "./pages/Starships";
import ParticlesBackground from "./component/ParticlesBackground";
import "./style/App.css"
import Header from "./component/Header";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ParticlesBackground />
    <Header />
    <Routes>
      <Route path="/" element={<Starships />} />
      <Route path="/starship/:id" element={<ShipDetail />} />
    </Routes>
  </BrowserRouter>
);
