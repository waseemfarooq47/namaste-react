import React, { useEffect } from "react";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  const [mylist, setMyList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setMyList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (mylist.length === 0) {
  //   return ;
  // }

  return mylist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <div className="search-panel">
        <h1 className="order-text-top">Order Food Online</h1>
        <h5 className="order-text-bottom">Search the nearby restaurant</h5>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search by restaurant name ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="sr-btn"
            onClick={() => {
              const searchedData = mylist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredData(searchedData);
            }}
          >
            Search
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = mylist.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredData(filteredList);
              console.log("btn");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="cards-panel">
        {filteredData.map((restaurant) => (
          <Cards key={restaurant.info.id} resDetails={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
