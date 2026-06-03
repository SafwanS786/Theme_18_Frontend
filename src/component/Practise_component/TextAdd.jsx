import React, { useState, useEffect, useRef } from "react";
import Refdemo from "./Refdemo";

export default function TextAdd() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1); // THIS RUNS ON MOUNT
    console.log("count when mounted");
  }, []);

  const buttonRef = useRef(null);

  useEffect(() => {
    setCount(count + 2);
    console.log("This is useEffect ");
  }, []);

  useEffect(() => {
    console.log("Tracking", count); // THIS LOGS WHEN count CHANGES
  }, [count]);
  const handle = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    console.log("click button and automatically call");

    console.log("What is this", buttonRef.current);

    buttonRef.current.innerText = "Clicked";
  };

  // useEffect(() => {
  //   const el = document.getElementById("clickbtn");
  //   el.innerHTML = "Safwan";
  //   console.log("Element", el);
  // }, []);
  return (
    <div>
      TextAdd
      <h1>Hello</h1>
      <button
        ref={buttonRef}
        onClick={handle}
        className="cursor-pointer bg-red-900"
      >
        Click
      </button>
      {/* <button id="clickbtn">Press</button> */}
      <Refdemo />
    </div>
  );
}
