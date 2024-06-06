import React from 'react'
import background from "../../../assets/bg2.jpeg"
import Title from '../../../components/Title/Title'
import "./About.css"
function About() {
  return (
    <div>
      <div className="ContainerAbout">
        <Title titleName="about"/>
        <div className="ContainerAboutActual">
          <div className="Aboutimg">
            <img src={background} alt="image of waterfall" />
          </div>
          <div className="AboutDescription">
            <p>

Zaph Tours is a premier travel company based in Kenya, specializing in providing the best safaris and adventure tours. With a strong reputation for delivering exceptional travel experiences, Zaph Tours offers a variety of packages that showcase the natural beauty and cultural richness of Kenya and other destinations.

The company has approached us to design and develop a front-end website to enhance its online presence and attract more customers. The website, aptly named "Zaph Tours", will carry the tagline "Best Safaris and Adventures". Our task is to create a professional and engaging website that reflects the company's brand and values, helping Zaph Tours stand out in the competitive travel industry.

The website will be visually appealing, user-friendly, and informative, providing potential travelers with all the necessary details to plan their perfect safari or adventure tour. Join us on a journey of discovery with Zaph Tours, where every adventure is a story waiting to be told.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
