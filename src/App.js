/* eslint-disable react/jsx-no-undef */
import React from "react";

import "./App.css";
import { Routes, Route} from "react-router-dom";

import ShipDetail from "./pages/ShipDetail";
import Starships from "./pages/Starships";
import ParticlesBackground from "./component/ParticlesBackground";
import Logo from "./component/Logo";
import BackButton from "./component/BackButton";

function App() {
 

  return (
    <>
     
     <ParticlesBackground/>
      <div>
      
        <div>

          <div className="particlesheader">
          <div class=	"grid gap-3 grid-cols-3">
          <BackButton/> 
          <Logo/>
       
        
          </div>
       
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
