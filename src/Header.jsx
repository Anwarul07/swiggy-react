import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Logo from "./assets/logg.png";
import { Link } from "react-router-dom";
import "./Food.css";
import UserContext from "./utilty.jsx/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import store from "./utilty.jsx/Store";


const logggedin = () => {
  //API  Call;
  return false;
};

 const Title = () => (
  <a href="/">
    <img className="logo h-14 my-2 rounded-full" id="logo" src={Logo} />
  </a>
);

 const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  

  return (
    <div className="header flex justify-around bg-indigo-600 h-20 text-zinc-50 shadow-md shadow-neutral-900">
      <Title />
      <div className="nav-items">
        <ul className="flex py-7 space-x-8 bg-in">
          <Link to="/Body">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About </li>
          </Link>
          <Link to="/contactus">
            <li>Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          
            <li>cart {cartItems.length} items</li>
        
        </ul>
      </div>
      {/* <span className="p-10 font-bold text-red-900">{user.name}- {user.email}</span> */}
      {isLogin ? (
        <button className="bg-slate-600 h-9 w-24 my-6 pr-4" onClick={() => setIsLogin(false)}> Log out</button>
      ) : (
        <button  className="bg-slate-600 h-9 w-24 my-6 pr-4" onClick={() => setIsLogin(true)}>Log in</button>
      )}
    </div>
  );
};
export default Header;
