import React from "react";
import background from "../../../assets/bg2.jpeg";
import Title from "../../../components/Title/Title";
import "./About.css";
function About() {
  return (
    <div>
      <div className="ContainerAbout">
        <Title titleName="about" />
        <div className="ContainerAboutActual">
          <div className="Aboutimg">
            <img src={background} alt="image of waterfall" />
          </div>
          <div className="AboutDescription">
            <p>
              Zaph Tours is a premier travel company based in Kenya,
              specializing in safaris and adventure tours. With a strong
              reputation for exceptional travel experiences, Zaph Tours
              showcases the natural beauty and cultural richness of Kenya and
              beyond. We're designing and developing a website to enhance Zaph
              Tours' online presence. The site, named "Zaph Tours" with the
              tagline "Best Safaris and Adventures," aims to be visually
              appealing, user-friendly, and informative. Join us on a journey
              with Zaph Tours, where every adventure is a story waiting to be
              told.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
