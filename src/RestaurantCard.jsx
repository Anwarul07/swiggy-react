import React from "react";
import { Cloudimg } from "./Api";
import { restaurantList } from "./Api";
import { useContext } from "react";
import UserContext from "./utilty.jsx/userContext";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  costForTwo,
  avgRating,
  areaName,
}) => {

  // const { user } = useContext(UserContext);

  return (
    <div className="cart m-2 border-slate-600 border-2 w-60 bg-slate-300 h-[440px] justify-center  shadow-neutral-950 shadow-lg">
      <>
        <img src={Cloudimg + cloudinaryImageId} className="mb-6 p-1"></img>
        <h3 className="px-2 font-semibold text-lg">{name}</h3>
        <h4 className="px-2  font-normal">{costForTwo}</h4>
        <h4 className="px-2 font-bold">{avgRating} Star</h4>
        <h4 className=" px-2 mb-2 ">{areaName}</h4>

        {/* <h5 className="font-bold">
          {user.name} - {user.email}
        </h5> */}
      </>
    </div>
  );
};
