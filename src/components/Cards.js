import React from "react";

const Cards = (props) => {
  const { resDetails } = props;
  const { image, cuisine, rating, phone, name } = resDetails?.data;
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="biryni" />
      </div>
      <div className="res-details">
        <h2 className="res-name">{name}</h2>
        <span className="cuisine">{cuisine}</span>
        <h4 className="res-rating">
          Rating : <span>{rating}</span>
        </h4>
        <h4 className="res-rating">
          Phone : <span>{phone}</span>
        </h4>
      </div>
    </div>
  );
};

export default Cards;
