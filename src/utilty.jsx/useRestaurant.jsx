import { RestaurantMenuLink } from "../Api";
import { useState } from "react";
import { useEffect } from "react";

export const useRestaurant = (id) => {
  const [restaurantOpen, setRestaurantOpen] = useState(null)

  console.log("id check:"+ id);

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const data = await fetch(RestaurantMenuLink + id);
    const json = await data.json();
    setRestaurantOpen(json?.data);
  }
  

  return restaurantOpen;
};
