import React from 'react'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";

function CardTesty({image,name,brieftestimonial}) {
  return (
    <div>

      <div className="Card">
      <div className="image">
        <img src={image} alt={`image of ${name}`} />
      </div>
      <div className="description">
        <div className="nameTesty">
           
            <p><RiDoubleQuotesL />{brieftestimonial}<RiDoubleQuotesR /></p>
            <h2>{name}</h2>   
        </div>
      </div>
      </div>
    </div>
  )
}

export default CardTesty
