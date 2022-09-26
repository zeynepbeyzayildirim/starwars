import React, { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesOptions from "./../json/particle.json";

{/*Hareketli arka planımız*/}

const ParticlesBackground=() =>{

  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  return (
    <Particles
    width="100vw"
    height="100vh"
    
    options={particlesOptions}
    init={particlesInit}
  />
  );
}
export default ParticlesBackground;