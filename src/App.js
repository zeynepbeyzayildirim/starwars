/* eslint-disable react/jsx-no-undef */
import React, { useCallback, useState } from "react";

import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import ShipDetail from "./pages/ShipDetail";
import Starships from "./pages/Starships";
import ParticlesBackground from "./component/ParticlesBackground";

function App() {
 

  return (
    <>
     
     <ParticlesBackground/>
      <div>
      
        <div>
          <nav>
            <NavLink to="/">Anasayfa</NavLink>
          </nav>

          <div className="particlesheader">
            <header>
              <section class="hero  max-w-screen-lg mx-auto flex justify-center">
                <img
                  class="mx-auto"
                  src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
                  alt=""
                ></img>
              </section>
            </header>
          </div>
          <Routes>
            <Route path="/" element={<Starships />} />
            <Route path="/starship/:id" element={<ShipDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
