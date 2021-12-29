// React Hooks let you use state and other React features such as life cycle methods without writing a class.
// There are 3 rules for hooks:
// - Hooks can only be called inside React function components.
// - Hooks can only be called at the top level of a component.
// - Hooks cannot be conditional

// useState accepts an initial state and returns two values: The current state and A function that updates the state

import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// useEffect Hook allows you to perform side effects (fetching data, directly updating the DOM, and timers) in your components.
// useEffect accepts two arguments: useEffect(<function>, <dependency>)

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here and runs any time any dependency value changes

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
