import React from "react";
import { Link } from "react-router-dom";

function CardDesty({
  destinationImage,
  DestinationName,
  briefDestination,
  priceDestinationPerson,
  priceDestinationGrp,
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
            <div className="destyPerson">
              <p>ksh.{priceDestinationPerson}</p>
            </div>
            <div className="destyGrp">
              <p>ksh.{priceDestinationGrp}</p>
            </div>
            <div className="arrow">
              <Link to="/Contacts" className="links">
                <p>More &rarr;</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDesty;
