import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="ContainerHero">
        <div className="ContainerHeroActual">
          <div className="descriptionHero">
            <h3>Best safaris and adventures!</h3>
            <p className="para">explore with us to get the best </p>

            <div className="iconarrow">
              <Link to="/Destination" className="link">
                <p>More &rarr;</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
