import React, { useRef, useState, useCallback, useEffect } from "react";

export default function Refdemo() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => console.log('Tick'), 1000);
    return () => {
      console.log("Clearing interval")
      clearInterval(timer)
    }
      ; // cleanup
  }, []);
  const handleFocus = () => {
    inputRef.current.value = "Hello";
    inputRef.current.focus();
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 1);


    console.log("joto count", count)
  }
  const [data, setData] = useState(() => heavyCaluculation())

  function heavyCaluculation() {
    console.log("Heavy Work")
    for (let i = 0; i < 100000; i++) { }
    return 100
  }
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" placeholder="Enter Name" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>

      <button onClick={() => handleClick()}>Count</button>
      <p>{count}</p>
      <Parent />
      <Parent1 />

    </div>
  );
}
function Parent() {
  const [count, setCount] = useState(0);

  // Ye function har render pe naya banega
  const handleClick = () => {
    console.log("Clicked");
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Parent: {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child render hua");
  return <button onClick={onClick}>Child</button>;
});


function Parent1() {
  const [count1, setCount1] = useState(0);
  const [name, setName] = useState("Safwan");

  // Ab ye function tabhi naya banega jab dependency [] change ho
  const handleClickk = useCallback(() => {
    console.log("Clicked");
  }, []); // Khali array = kabhi naya nahi banega

  console.log("Parent render hua");

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>Count: {count1}</button>
      <button onClick={() => setName("Ali")}>Name: {name}</button>
      <Child1 onClick={handleClickk} />
    </>
  );
}

const Child1 = React.memo(({ onClick }) => {
  console.log("Child render hua");
  return <button onClick={onClick}>Child Button</button>;
});