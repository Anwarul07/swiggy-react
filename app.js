/*
* Creates a server for us 
* HMR Hot Module Realoading 
*File Watcher ASlgorith in --C+
*Building 
*Minifiying
*Cleaning our Code
* Dev and Production Build
*Superfast
* Image Optimization
* Caching while Devlopment
*Compressing
* [Comatible in old version of Brpwser aslo]
* Port Number
*https on Dev
*consistant hshing algorithm
* Zero Config
* Transitive Dependancy

 */

import React from "react";
import ReactDOM from "react-dom/client";


//React .createElement => Object => HTML DOM

const headone = React.createElement("h1", { id: "h1", key: "h1" }, "Heading one new  ");
const headtwo = React.createElement("h2", { id: "h2", key: "h2", }, "Heading two ");
const container = React.createElement("div", { id: "container" }, [
  headone,
  headtwo,
]);
const text = ReactDOM.createRoot(document.getElementById("text"));
text.render(container);
