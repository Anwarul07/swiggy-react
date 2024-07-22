import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorPage } from "./ErrorPage";
import { Outlet } from "react-router-dom";
import { ContactUs } from "./ContactUs";
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantsMennu } from "./RestaurantsMennu";
import { ProfileFunc } from "./ProfileFunc";
import { Shimmer } from "./Shimmer";
import { About } from "./About";
import "./Food.css";
import { ProfileClass } from "./ProfileClass";
import { Provider } from "react-redux";
import { useState } from "react";
import UserContext from "./utilty.jsx/userContext";
import store from "./utilty.jsx/Store";

import { Instamart } from "./Instamart";

//Chunking
//Code Splitting
//Dynamic Imports
//lazy loading
//On demand load
//Dynamic Bundling

// const Instamart = lazy(() => import("./Instamart"));

//Upon on demand loading ->upon render->react will suspend the loading

const Layout = () => {
  // const [user, setUser] = useState({
  //   name: "Anwarul Haue",
  //   email: "support@namastereact.com",
  // });
  return (
    <>
       <Provider store={store}>
        {/* <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >  */}
      <Shimmer />
      <Header />
      <Outlet />
      <Footer />
      {/* </UserContext.Provider> */}
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body user={{
          name: "Anwarul Haue",
           email: "support@namastereact.com",
        }} />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //this  will also work but / assumes origin from after local host other wise children
            element: <ProfileFunc />,
          },
        ],
      },
      {
        path: "contactus", //this  will also work but / assumes origin from after local host
        element: <ContactUs />,
      },
      {
        path: "/body",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantsMennu />,
      },
      {
        path: "/profilefunc",
        element: <ProfileFunc />,
      },
      {
        path: "/profileclass",
        element: <ProfileClass />,
      },
      {
        path: "/instamart",
        element: <Instamart />
        // <Suspense fallback={<Shimmer/>}> <Instamart/></Suspense>
        
      
      },
    ],
  },
]);

const text = ReactDOM.createRoot(document.getElementById("text"));
text.render(<RouterProvider router={appRouter} />);
