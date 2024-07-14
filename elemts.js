import { createElement as c } from "react";
import ReactDOM from "react-dom/client";


const headone = c("h1", { id: "h1", key: "h1" }, "Heading one new  ");
const headtwo = c("h2", { id: "h2", key: "h2", }, "Heading two ");
const container = c("div", { id: "container" }, [
    headone,
    headtwo,
]);
const text = ReactDOM.createRoot(document.getElementById("text"));
text.render(container);

//JSX ???
// JSX => React .createElement => Object => HTML DOM


const heading = <h1 id="head2" key="h2">This is heading using JSX</h1>;
// text.render(heading);
//Multiple line JSX  Code?? using Brackets 

const headingMulti = (
    <>
        <h1 id="h2" key="h2">This is heading using JSX in Multihead</h1>,
        <h3 id="head2" key="h3" className="blue">This is h3 section</h3>
    </>
);

text.render(headingMulti);