import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const ProfileFunc = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    //Best palace top call the api
    //first render than update

    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP ");
    }, 1000);
    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  });
  return (
    <div className="pt-8">
      <h4>This is profile section component based </h4>
      <h4>welcome to the profile ✌️✌️👍👍</h4>
      <br />
      <h4>Profile Functional propes is : {props.name}</h4> 
      <h4> count is : {count}</h4>
      <h4> count2 is : {count2}</h4>

      <button className="count-btn text-white mt-2 text-lg bg-indigo-600 h-8 w-16   pb-2 outline-none"
        onClick={() => {
          setCount(1), setCount2(2);
        }}
      >
        count
      </button>
    </div>
  );
};
