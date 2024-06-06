import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <div className="ContainerHero">
        <div className="ContainerHeroActual">
          <div className="descriptionHero">
            <p>Best safaris and adventures!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
