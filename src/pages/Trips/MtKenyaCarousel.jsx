import React from "react";
import ImageSlider from "./ImageSlider";
import "./Trips.css";
import Title from "../../components/Title/Title";
import mtkenya1 from "../../assets/mtkenya1.jpg";
import mtkenya2 from "../../assets/mtkenya2.jpg";
import mtkenya3 from "../../assets/mtkenya3.jpg";
import mtkenya4 from "../../assets/mtkenya3.jpg";
import mtkenya5 from "../../assets/camping.jpeg";
import mtkenya6 from "../../assets/mtkenya6.jpg";
import mtkenya7 from "../../assets/mtkenya7.jpg";

import mtruwe1 from "../../assets/mtruwe4.jpg";
import mtruwe2 from "../../assets/mtruwe4.jpg";
import mtruwe3 from "../../assets/mtruwe4.jpg";
import mtruwe4 from "../../assets/mtruwe4.jpg";
import mtruwe5 from "../../assets/mtruwe4.jpg";
import mtruwe6 from "../../assets/mtruwe4.jpg";
import mtruwe7 from "../../assets/peak.jpeg";
import coast1 from "../../assets/coast2.jpg";
import coast2 from "../../assets/coast2.jpg";
import coast3 from "../../assets/coast2.jpg";
import coast4 from "../../assets/coast2.jpg";
import coast5 from "../../assets/coast2.jpg";
import coast6 from "../../assets/coast2.jpg";
import coast7 from "../../assets/coast2.jpg";
import nakuru1 from "../../assets/LakeNakuru1.jpeg";
import nakuru2 from "../../assets/LakeNakuru2.jpeg";
import nakuru3 from "../../assets/LakeNakuru1.jpeg";
import nakuru4 from "../../assets/LakeNakuru2.jpeg";
import nakuru5 from "../../assets/LakeNakuru1.jpeg";
import nakuru6 from "../../assets/LakeNakuru2.jpeg";
import nakuru7 from "../../assets/LakeNakuru1.jpeg";
import tsavo1 from "../../assets/tsavo.jpg";
import tsavo2 from "../../assets/tsavopost.jpeg";
import tsavo3 from "../../assets/tsavo2.jpeg";
import tsavo4 from "../../assets/tsavo3.jpeg";
import tsavo5 from "../../assets/tsavo4.jpeg";
import tsavo6 from "../../assets/tsavo7.jpeg";
import tsavo7 from "../../assets/tsavo6.jpeg";
import nairobi1 from "../../assets/nairobipark.jpg";
import nairobi2 from "../../assets/nairobipost.jpeg";

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
const nairobiSlides = [{ image: nairobi1 }, { image: nairobi2 }];
function TrialCarousel() {
  return (
    <div className="bg">
      <Title titleName="trips" />
      <div className="slidesContainer">
        <div className="Slidetitle">
          <h2>mt kenya</h2>
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
          <h2>mt ruwenzori</h2>
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
          <h2>coast</h2>
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
          <h2>lake nakuru</h2>
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
          <h2>tsavo national park</h2>
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
          <h2>nairobi national park</h2>
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
