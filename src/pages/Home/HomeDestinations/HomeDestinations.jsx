import React from "react";
import Title from "../../../components/Title/Title";
import FeaturedDestinations from "../../../Data/FeaturedDestinations";
import HomeCardDestinations from "./HomeCardDestinations";
import "./HomeDestinations.css";
function HomeDestinations() {
  return (
    <div>
      <div className="HomeFdContainer">
        <div className="HomeFdActualContainer">
          <Title titleName="Featured Destinations" />
          {FeaturedDestinations.map((CurrentFDestinations, i) => (
            <HomeCardDestinations
              homeDestyImage={CurrentFDestinations.homeDestImg}
              homeDestyName={CurrentFDestinations.homeDestName}
              homeDestyPrice={CurrentFDestinations.homeDestPrice}
              homeDestPriceGrp={CurrentFDestinations.homeDestPriceGrp}
              homeDestyBrief={CurrentFDestinations.homeDestBrief}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeDestinations;
