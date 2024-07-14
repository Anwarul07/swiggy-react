import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorPage } from "./ErrorPage";
import { Outlet } from "react-router-dom";
import { ContactUs } from "./ContactUs";
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantsMennu } from "./RestaurantsMennu";
import { ProfileFunc} from "./ProfileFunc";
import { Shimmer } from "./Shimmer";
import { About } from "./About";
import "./Food.css";
// import { Instamart } from "./Instamart";

//Chunking
//Code Splitting
//Dynamic Imports
//lazy loading
//On demand load
//Dynamic Bundling

const Instamart = lazy(() => import('./Instamart'));


//Upon on demand loading ->upon render->react will suspend the loading

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", //this  will also work but / assumes origin from after local host other wise children
            element:<Body/>
            
          },
        ],
      },
      {
        path: "contactus", //this  will also work but / assumes origin from after local host
        element: <ContactUs />,
      },
      {
        path: "/Body",
        element: <Body />,
      },
      {
        path: "/Cartt",
        element: <RestaurantCard />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantsMennu />,
      },
     {
          path:"instamart",
          element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      },
    ],
  },
]);

const text = ReactDOM.createRoot(document.getElementById("text"));
text.render(<RouterProvider router={appRouter} />);
