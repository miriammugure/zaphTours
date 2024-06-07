import React from "react";
import FeaturedDestinations from "../../../Data/FeaturedDestinations";
function HomeCardDestinations({
  homeDestyImage,
  homeDestyName,
  homeDestyBrief,
  homeDestyPrice,
  homeDestPriceGrp,
}) {
  return (
    <div>
      <div className="homeCard">
        <div className="fdImage">
          <img src={homeDestyImage} alt={`image of ${homeDestyName}`} />
        </div>
        <div className="fdDescription">
          <div className="namePrice">
            <div className="fdname">{homeDestyName}</div>
            <div className="fdPrice">
              <div className="perPerson">kshs.{homeDestyPrice}</div>
              <div className="perGrp">kshs.{homeDestPriceGrp}</div>
            </div>
          </div>
          <div className="descriptionText">{homeDestyBrief}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardDestinations;
