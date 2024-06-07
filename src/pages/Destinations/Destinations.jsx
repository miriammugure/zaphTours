import React from "react";
import "./Destinations.css";
import Title from "../../components/Title/Title";
import RealDestinations from "../../Data/Destinations";
import CardDesty from "./CardDesty";
function Destinations() {
  return (
    <div>
      <div className="ContainerHomeDestination">
        <Title titleName="featured destinations" />
        <div className="ContainerFeaturedActual">
          {RealDestinations.map((currentdesty, i) => (
            <CardDesty
              destinationImage={currentdesty.destImage}
              DestinationName={currentdesty.destName}
              briefDestination={currentdesty.destBrief}
              priceDestination={currentdesty.destPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
