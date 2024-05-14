import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [mylist, setMyList] = useState(resList);
  return (
    <div className="app-body">
      <div className="search-panel">
        <h1 className="order-text-top">Order Food Online</h1>
        <h5 className="order-text-bottom">Search the nearby restaurant</h5>
        <form>
          <input
            type="text"
            className="search"
            placeholder="Search by restaurant name ..."
          ></input>
        </form>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resList.filter((res) => res.data.rating > 4);
            setMyList(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="cards-panel">
        {mylist.map((restaurant) => (
          <Cards key={restaurant.data.id} resDetails={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
