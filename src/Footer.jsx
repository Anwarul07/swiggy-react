import React from "react";
import ReactDOM from "react-dom/client";
import { useContext } from "react";
import UserContext from "./utilty.jsx/userContext";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="foot-div bg-slate-600 text-white h-24 text-center py-4">
      <h2 className="footer">&copy; Copyright swiggy.com || All Right Reserved</h2>
    <h4>Visit our Partners </h4>
    {/* <h4>Know more about collabs </h4> */}
    {/* <h3>This site is developed by {user.name} - {user.email}</h3> */}
    </div>
  );
};
