import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// components
import Shimmer from "./Shimmer";
import MenuIcon from "../../logo/menu-icon.png";
import { MENU_URL } from "../utils/constants";
import missingImage from "../../logo/no-image.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  // custom hook
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, city, totalRatingsString, locality } =
    resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;

  return (
    <>
      <div className="menu-container">
        <div className="res-title">
          <h1 className="restaurant-name">{name}</h1>
          <h3 className="city">
            {city} - {locality}
          </h3>
          <h5>Total Ratings: &nbsp;&nbsp;&nbsp; {totalRatingsString}</h5>
        </div>
      </div>
      <div className="menu--list-container">
        <div className="res-menu--container">
          <div className="res-menu">
            <h1 className="menu-heading">
              Explore the Menu
              <img src={MenuIcon} className="menu-icon" alt="menu-icon" />
            </h1>
            <div className="recomended-dishes-wrapper">
              {/* <i class="fa-solid fa-chevron-up"></i> */}
              <div className="menu-type">
                <h2 className="menu-type-title">
                  Recomended {itemCards.length}
                </h2>{" "}
                <i className="fa-solid fa-chevron-down"></i>
              </div>

              <div className="recomended-dishes-list">
                <ul>
                  {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                      <div className="menu-view-container">
                        <div className="menu-left">
                          <h4 className="menu-item-name">
                            {item.card.info.name}
                          </h4>

                          <p className="menu-category">
                            {item.card.info.category}
                          </p>

                          <h5 className="menu-item-price">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            {item.card.info.price / 100 ||
                              item.card.info.defaultPrice / 100}
                          </h5>
                          <h5 className="menu-item-rating">
                            <i className="fa-regular fa-star-half-stroke"></i>{" "}
                            {item.card.info.ratings.aggregatedRating.rating}{" "}
                          </h5>
                          <p className="menu-desc">
                            {item.card.info.description}
                          </p>

                          <div className="menu-kind">
                            {item.card.info.itemAttribute.vegClassifier}
                          </div>
                        </div>
                        <div className="menu-right">
                          {item.card.info.imageId ? (
                            <img
                              src={MENU_URL + item.card.info.imageId}
                              alt="menu-img"
                            />
                          ) : (
                            <img src={missingImage} alt="menu-img" />
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
