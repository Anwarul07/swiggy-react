import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantMenuLink } from "./Api";
import { FoodFire_Url } from "./Api";
import {useRestaurant}  from "./utilty.jsx/useRestaurant";

export const RestaurantsMennu = () => {

  const [restaurant, setRestaurant]= useState([])
  const parammeter = useParams();
  const { id } = parammeter;
  console.log(" Host id is " + id);

  // const [restaurantOpen] = useRestaurant(id);
  // console.log(restaurantOpen);




  useEffect(() => {
    gettingApi();
  }, []);


  async function gettingApi() {
    const data = await fetch(FoodFire_Url);
    const json = await data.json();
    console.log(json);
    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h3>Restaurants Id : {id}</h3>
        <h3>{restaurant?.name}</h3>
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.amount}</h3>
        <h3>{restaurant?.avgRating}</h3>
      </div>
      <div>
        {console.log(Object.values(restaurant?.menu?.items))}
        <h1>menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items)?.map((item) => (
            <li key={item.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
