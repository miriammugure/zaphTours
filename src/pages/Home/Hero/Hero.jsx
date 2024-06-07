import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div>
      <div className="ContainerHero">
        <div className="ContainerHeroActual">
          <div className="descriptionHero">
            <p>Best safaris and adventures!</p>
            <p>more</p>
            <div className="iconarrow">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
