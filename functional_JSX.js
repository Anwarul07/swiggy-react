import React from "react";
import ReactDOM from "react-dom/client";

//JSX ???
// JSX => React .createElement => Object => HTML DOM

const text = ReactDOM.createRoot(document.getElementById("text"));
const heading = <h1 id="h2" key="h2">This is heading   two using JSX </h1>;
// text.render(heading);
//Multiple line JSX  Code?? using Brackets 

const headingMulti = (
    <React.Fragment>
        <h1 id="h22" key="h22">This is heading using JSX </h1>,
        <h3 id="h3" key="h3">This is h3 </h3>,
        <p className="blue">Para to check</p>
    </React.Fragment>
)
// text.render(headingMulti);

// Functional JSX 
// W/O Return and curly using

const FunctonalComponnetONE = () =>
(
    <div id="container">
        <h1 id="h2">Namste React functional</h1>
        <h2 id="h11">This is h2  W/O return and curly</h2>
    </div>
);
text.render(<FunctonalComponnetONE />)


const FunctonalComponnet = () => {
    return (
        <div id="container">
            <h1 id="h1">Namste React functional</h1>
            <h2 id="h2">This is h2 </h2>
        </div>
    );
};
// text.render(<FunctonalComponnet />)


