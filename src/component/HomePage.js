import ParticlesBackground from "./ParticlesBackground";
import React from "react";
import StarshipList from "./StarshipList";

function HomePage() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="particlesheader">
        <header>
        <section
          class="hero  max-w-screen-lg mx-auto flex justify-center">
          <img
            class="mx-auto"
            src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
          ></img>
        </section>
        </header>
        
      </div>
      <StarshipList />
    </div>
  );
}
export default HomePage;
