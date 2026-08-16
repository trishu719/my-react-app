import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const incrementByOne = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("You can't increase value above 10");
    }
  };

  const decrementByOne = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    } else {
      setMessage("You can't decrease value below 0 (zero)");
    }
  };

  const incrementByTwo = () => {
    if (count <= 8) {
      setCount(count + 2);
      setMessage("");
    } else {
      setMessage("You can't increase value above 10");
    }
  };

  const decrementByTwo = () => {
    if (count >= 2) {
      setCount(count - 2);
      setMessage("");
    } else {
      setMessage("You can't decrease value below 0 (zero)");
    }
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="text-primary">
        Counter (useState Hook) = {count}
      </h2>

      <button
        className="btn btn-outline-primary m-2"
        onClick={incrementByOne}
      >
        Increment By 1
      </button>

      <button
        className="btn btn-outline-primary m-2"
        onClick={decrementByOne}
      >
        Decrement By 1
      </button>

      <button
        className="btn btn-outline-primary m-2"
        onClick={incrementByTwo}
      >
        Increment By 2
      </button>

      <button
        className="btn btn-outline-primary m-2"
        onClick={decrementByTwo}
      >
        Decrement By 2
      </button>

      <button
        className="btn btn-outline-primary m-2"
        onClick={reset}
      >
        Reset
      </button>

      {message && (
        <h5 className="text-danger mt-3">
          {message}
        </h5>
      )}
    </div>
  );
}

export default UseStateCounter;