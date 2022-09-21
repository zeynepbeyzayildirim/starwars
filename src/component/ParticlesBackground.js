import React, { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import particlesOptions from "./../particle.json";

const ParticlesBackground=() =>{

  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  return (
  <Particles options={particlesOptions}>

  </Particles>
  );
}
export default ParticlesBackground;