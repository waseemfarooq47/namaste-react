import React from "react";
import { CDN_URL } from "../utils/constants";

const Cards = (props) => {
  const { resDetails } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resDetails?.info;
  return (
    <div className="card">
      <div className="card-img">
        <img src={CDN_URL + cloudinaryImageId} alt="biryni" />
      </div>
      <div className="res-details">
        <h2 className="res-name">{name}</h2>
        <span className="cuisine">{cuisines.join(", ")}</span>
        <h4 className="res-rating">
          Rating : <span>{avgRating}</span>
        </h4>
        <h4 className="res-rating">
          Delivery Time : <span>{sla.slaString}</span>
        </h4>
        <h4 className="res-rating">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default Cards;
