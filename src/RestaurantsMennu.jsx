import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantMenuLink } from "./Api";
import {useRestaurant}  from "./utilty.jsx/useRestaurant";

export const RestaurantsMennu = () => {
  const parammeter = useParams();
  const { id } = parammeter;
  console.log(" Host id is " + id);

  const [restaurantOpen] = useRestaurant(id);
  console.log(restaurantOpen);
  return !restaurantOpen ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h3>Restaurants Id : {id}</h3>
        <h3>{restaurantOpen?.name}</h3>
        <h3>{restaurantOpen?.areaName}</h3>
        <h3>{restaurantOpen?.amount}</h3>
        <h3>{restaurantOpen?.avgRating}</h3>
      </div>
      <div>
        {console.log(Object.values(restaurantOpen?.menu?.items))}
        <h1>menu</h1>
        <ul>
          {Object.values(restaurantOpen?.menu?.items)?.map((item) => (
            <li key={item.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
