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
              Welcome to Zaph Tours, Kenya's top travel company for safaris and
              adventures. We showcase Kenya's natural beauty and cultural
              richness with unforgettable journeys. Join us for thrilling
              safaris and serene getaways, and experience the magic of Kenya.
              Every adventure with Zaph Tours is a story waiting to be told.
              Experience the best safaris and adventures with us, and discover
              the magic of Kenya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
