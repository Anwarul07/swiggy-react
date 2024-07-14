import React, { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "./Api";
import { Cloudimg } from "./Api";
import { Shimmer } from "./Shimmer";
import { useEffect } from "react";
import { About } from "./About";
import { Link } from "react-router-dom";
import { filerData } from "./utilty.jsx/helper";
import { FoodFire_Url } from "./Api";
import { useOnline } from "./utilty.jsx/useOnline";

//Use satate is used to create  local varible
export const Body = () => {
  
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    gettingApi();
  }, []);

  async function gettingApi() {
    const data = await fetch(FoodFire_Url);
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("render console");

  // if (!allRestaurants) return null;
  // if(filteredRestaurants?.length ===0 ) return <h3>No Items matched</h3>

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Sorry please check internet </h1>;
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-section mt-12 bg-slate-500 h-12 outline-none">
        <input
          className="search-input w-3/5 h-8 placeholder-slate-600 font-semibold p-4 mx-36 px-2 my-2 outline-none"
          type="text"
          placeholder=" Search here dishes !"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn text-white mx-2 text-lg bg-indigo-600 h-8 w-24  pr-4 pb-2 outline-none"
          onClick={() => {
            const data = filerData(searchText, allRestaurants);
            setFilteredRestaurants(data);
            console.log(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="cart flex flex-wrap justify-center my-8">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
