import React, { useCallback,} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particle.json";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./component/HomePage";
import StarshipDetail from "./component/StarshipDetail";




function App() {

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <Particles
        width="100vw"
        height="100vh"
        s
        options={particlesOptions}
        init={particlesInit}
      />
      <div >
        <div>
          <nav>
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/detail">StarShip</NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<StarshipDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
