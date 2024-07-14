import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantMenuLink } from "./Api";
import { FoodFire_Url } from "./Api";
import { useRestaurant } from "./utilty.jsx/useRestaurant";
import { Cloudimg } from "./Api";

export const RestaurantsMennu = () => {
  const [restaurants, setRestaurants] = useState([]);
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
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log(restaurants);

  const data = restaurants
    .map((food) => food.info)
    .find((food) => food.id === id);
  console.log("data is :", data);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="m-2 border-slate-600 border-2 w-60 bg-slate-300 h-[500px] justify-center  shadow-neutral-950 shadow-lg">
      <img src={Cloudimg + data?.cloudinaryImageId} />
      <h3 className="px-4 font-bold text-lg">{data?.name}</h3>

      <h3 className="px-4 font-semibold">{data?.costForTwo}</h3>
      <h3 className="px-4 font-medium">{data?.avgRating} Star</h3>
      <h3 className="px-4  font-normal">{data?.areaName}</h3>
      <h3 className="px-4  font-normal">{data?.locality}</h3>
      <h3 className="px-4  font-normal">{data?.sla?.slaString}</h3>
      
      <h3 className="px-4">Restaurants Id : {id}</h3>
    </div>
  );
};
