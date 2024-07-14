import React from "react";
import ReactDOM from "react-dom/client";

const text = ReactDOM.createRoot(document.getElementById("text"));
const Heading = <h1 id="h2" key="h2">This is heading element </h1>;

const FunctonalComponnetONE = () =>
(
    <div id="container">
        {Heading}
        <h1 id="h1">Namste React functionalONE</h1>
        <h2 id="rndm">This is h2  W/O retuRn and curly</h2>
    </div>
);
let Name = "Anwarul";

const FunctonalComponnet = () => {
    return (
        <div>
            <FunctonalComponnetONE />
            <p> Next way function using Curly</p>
            {FunctonalComponnetONE()}
            {Name} {5+5}
            {<FunctonalComponnetONE/>}
            <p> Break</p>
            <h1 id="h1">Namste React functionalTWO</h1>
            <h2 id="h2"> This is h2 TWO </h2>
        </div>
    );
};
// text.render(<FunctonalComponnet />)
text.render(FunctonalComponnet())