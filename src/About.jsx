import { Outlet } from "react-router-dom";
import { ProfileFunc } from "./Profile";
import { ProfileC } from "./ProfileClass";
import "./Food.css";

export const About = () => {
  return (
    <div className="h-full  bg-green-300 my-4">
      <div className="pl-96 ml-12">
        <ProfileFunc  name={"Anwar Functional "}/>  {/*via this method r second one which is following below */}
        <br />
        <h2>This is About us Page</h2>
        <h5>This is a food delivery app to order food online 👍✌️ </h5>
        <br />
      </div>
      <ProfileC  name={"anwar class"}/>
    </div>
  );
};
