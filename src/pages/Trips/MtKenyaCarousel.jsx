import React from "react";
import ImageSlider from "./ImageSlider";
import "./Trips.css";
import Title from "../../components/Title/Title";
import mtkenya1 from "../../assets/mtkenya1.jpg";
import mtkenya2 from "../../assets/mt.jpeg";
import mtkenya3 from "../../assets/mtkenya3.jpg";
import mtkenya4 from "../../assets/mtkenya3.jpg";
import mtkenya5 from "../../assets/camping.jpeg";
import mtkenya6 from "../../assets/mtkenya6.jpg";
import mtkenya7 from "../../assets/mtkenya7.jpg";

import mtruwe1 from "../../assets/mtruwe4.jpg";
import mtruwe2 from "../../assets/culture2.jpeg";
import mtruwe3 from "../../assets/culture3.jpeg";
import mtruwe4 from "../../assets/culture6.jpeg";
import mtruwe5 from "../../assets/culture4.jpeg";
import mtruwe6 from "../../assets/culture5.jpeg";
import mtruwe7 from "../../assets/peak.jpeg";
import coast1 from "../../assets/coast2.jpg";
import coast2 from "../../assets/coast3.jpeg";
import coast3 from "../../assets/coast4.jpeg";
import coast4 from "../../assets/coast5.jpeg";
import coast5 from "../../assets/coast6.jpeg";
import coast6 from "../../assets/coast2.jpg";
import coast7 from "../../assets/coast2.jpg";
import nakuru1 from "../../assets/LakeNakuru1.jpeg";
import nakuru2 from "../../assets/LakeNakuru2.jpeg";
import nakuru3 from "../../assets/LakeNakuru3.jpeg";
import nakuru4 from "../../assets/LakeNakuru4.jpeg";
import nakuru5 from "../../assets/LakeNakuru5.jpeg";
import nakuru6 from "../../assets/LakeNakuru6.jpeg";
import nakuru7 from "../../assets/LakeNakuru7.jpeg";
import tsavo1 from "../../assets/tsavo.jpg";
import tsavo2 from "../../assets/tsavopost.jpeg";
import tsavo3 from "../../assets/tsavo2.jpeg";
import tsavo4 from "../../assets/ts.jpeg";
import tsavo5 from "../../assets/tsavo4.jpeg";
import tsavo6 from "../../assets/tsavo7.jpeg";
import tsavo7 from "../../assets/tsavo6.jpeg";
import nairobi1 from "../../assets/nairobipark.jpg";
import nairobi2 from "../../assets/nairobi3.jpeg";
import nairobi3 from "../../assets/nairobi1.jpeg";
import nairobi4 from "../../assets/nairobi2.jpeg";
import nairobi5 from "../../assets/nairobi5.webp";
import nairobi6 from "../../assets/nairobi6.jpeg";
const mtKenyaslides = [
  { image: mtkenya1 },
  { image: mtkenya2 },
  { image: mtkenya3 },
  { image: mtkenya4 },
  { image: mtkenya5 },
  { image: mtkenya6 },
  { image: mtkenya7 },
];
const mtRuwenzoriSlides = [
  { image: mtruwe1 },
  { image: mtruwe2 },
  { image: mtruwe3 },
  { image: mtruwe4 },
  { image: mtruwe5 },
  { image: mtruwe6 },
  { image: mtruwe7 },
];
const coastSlides = [
  { image: coast1 },
  { image: coast2 },
  { image: coast3 },
  { image: coast4 },
  { image: coast5 },
  { image: coast6 },
  { image: coast7 },
];

const nakuruSlides = [
  { image: nakuru1 },
  { image: nakuru2 },
  { image: nakuru3 },
  { image: nakuru4 },
  { image: nakuru5 },
  { image: nakuru6 },
  { image: nakuru7 },
];
const tsavoSlides = [
  { image: tsavo1 },
  { image: tsavo2 },
  { image: tsavo3 },
  { image: tsavo4 },
  { image: tsavo5 },
  { image: tsavo6 },
  { image: tsavo7 },
];
const nairobiSlides = [
  { image: nairobi1 },
  { image: nairobi4 },
  { image: nairobi2 },
  { image: nairobi3 },
  { image: nairobi5 },
  { image: nairobi6 },
];
function TrialCarousel() {
  return (
    <div className="bg">
      <Title titleName="trips" />
      <div className="slidesContainer">
        <div className="Slidetitle">
          <h2>honeymoon trips</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            doloribus quos hic culpa exercitationem. Perspiciatis minus, porro
            qui eius commodi consectetur laborum possimus distinctio! Eum,
            asperiores! Debitis quasi recusandae voluptas.
          </p>
        </div>
        <div className="carouselSlide">
          <ImageSlider slides={mtKenyaslides} />
        </div>
      </div>
      <div className="slidesContainer row">
        <div className="Slidetitle ">
          <h2>cultural tours</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            doloribus quos hic culpa exercitationem. Perspiciatis minus, porro
            qui eius commodi consectetur laborum possimus distinctio! Eum,
            asperiores! Debitis quasi recusandae voluptas.
          </p>
        </div>
        <div className="carouselSlide">
          <ImageSlider slides={mtRuwenzoriSlides} />
        </div>
      </div>
      <div className="slidesContainer">
        <div className="Slidetitle">
          <h2>luxury vacations</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            doloribus quos hic culpa exercitationem. Perspiciatis minus, porro
            qui eius commodi consectetur laborum possimus distinctio! Eum,
            asperiores! Debitis quasi recusandae voluptas.
          </p>
        </div>
        <div className="carouselSlide">
          <ImageSlider slides={coastSlides} />
        </div>
      </div>
      <div className="slidesContainer row">
        <div className="Slidetitle">
          <h2>cullinry tours</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            doloribus quos hic culpa exercitationem. Perspiciatis minus, porro
            qui eius commodi consectetur laborum possimus distinctio! Eum,
            asperiores! Debitis quasi recusandae voluptas.
          </p>
        </div>
        <div className="carouselSlide">
          <ImageSlider slides={nakuruSlides} />
        </div>
      </div>
      <div className="slidesContainer ">
        <div className="Slidetitle">
          <h2>eco tours</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            doloribus quos hic culpa exercitationem. Perspiciatis minus, porro
            qui eius commodi consectetur laborum possimus distinctio! Eum,
            asperiores! Debitis quasi recusandae voluptas.
          </p>
        </div>
        <div className="carouselSlide">
          <ImageSlider slides={tsavoSlides} />
        </div>
      </div>
      <div className="slidesContainer row">
        <div className="Slidetitle">
          <h2>wildlife safaris</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            doloribus quos hic culpa exercitationem. Perspiciatis minus, porro
            qui eius commodi consectetur laborum possimus distinctio! Eum,
            asperiores! Debitis quasi recusandae voluptas.
          </p>
        </div>
        <div className="carouselSlide">
          <ImageSlider slides={nairobiSlides} />
        </div>
      </div>
    </div>
  );
}

export default TrialCarousel;
