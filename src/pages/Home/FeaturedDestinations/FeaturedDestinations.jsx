import React from "react";
import "./FeaturedDestinations.css";
import Title from "../../../components/Title/Title";
import HomeDestination from "../../../Data/HomeDestination";
import CardDesty from "./CardDesty";
function FeaturedDestinations() {
  return (
    <div>
      <div className="ContainerHomeDestination">
        <Title titleName="featured destinations" />
        <div className="ContainerFeaturedActual">
          {HomeDestination.map((currentHomedesty, i) => (
            <CardDesty
              destinationImage={currentHomedesty.destImage}
              DestinationName={currentHomedesty.destName}
              briefDestination={currentHomedesty.destBrief}
              priceDestination={currentHomedesty.destPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedDestinations;
