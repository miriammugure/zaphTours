import React from "react";

function CardDesty({
  destinationImage,
  DestinationName,
  briefDestination,
  priceDestination,
}) {
  return (
    <div>
      <div className="CardDesty">
        <div className="imageDesty">
          <img src={destinationImage} alt={`image of ${DestinationName}`} />
        </div>
        <div className="Destydescription">
          <div className="Destyname">
            <h2>{DestinationName}</h2>
          </div>
          <div className="briefDesty">
            <p>{briefDestination}</p>
          </div>
          <div className="Destyname">
            <p>ksh.{priceDestination}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDesty;
