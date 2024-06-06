import React from "react";
import CardTesty from "./CardTesty";
import "./Testimonials.css";
import Title from "../../../components/Title/Title";
import TestimonialData from "../../../Data/TestimonialData";
function Testimonials() {
  return (
    <div>
      <div className="ContainerCard">
        <Title titleName="testimonials" />
        <div className="containerActual">
          {TestimonialData.map((currectTestimonial, i) => (
            <CardTesty
              image={currectTestimonial.testimonyImg}
              name={currectTestimonial.testimonyName}
              brieftestimonial={currectTestimonial.testimonyBrief}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
