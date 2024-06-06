import React from 'react'
import CardTesty from './CardTesty'
import "./Testimonials.css"
import TestimonialData from '../../../Data/TestimonialData'
function Testimonials() {
  return (
    <div>
      <div className="ContainerCard">
       {
        TestimonialData.map((currectTestimonial ,i) =>
        (
            <CardTesty
              image={currectTestimonial.testimonyImg}
              name={currectTestimonial.testimonyName}
              brieftestimonial={currectTestimonial.testimonyBrief}
            />
        ))
       }
       

      </div>
    </div>
  )
}

export default Testimonials
