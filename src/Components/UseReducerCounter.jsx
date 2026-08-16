import React, { useReducer } from "react";

const initialState = {
  count: 0,
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "INC1":
      if (state.count < 10) {
        return {
          count: state.count + 1,
          message: "",
        };
      }
      return {
        ...state,
        message: "You can't increase value above 10",
      };

    case "DEC1":
      if (state.count > 0) {
        return {
          count: state.count - 1,
          message: "",
        };
      }
      return {
        ...state,
        message: "You can't decrease value below 0 (zero)",
      };

    case "INC2":
      if (state.count <= 8) {
        return {
          count: state.count + 2,
          message: "",
        };
      }
      return {
        ...state,
        message: "You can't increase value above 10",
      };

    case "DEC2":
      if (state.count >= 2) {
        return {
          count: state.count - 2,
          message: "",
        };
      }
      return {
        ...state,
        message: "You can't decrease value below 0 (zero)",
      };

    case "RESET":
      return {
        count: 0,
        message: "",
      };

    default:
      return state;
  }
}

function UseReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">
        Counter (useReducer Hook) = {state.count}
      </h2>

      <button
        className="btn btn-outline-danger m-2"
        onClick={() => dispatch({ type: "INC1" })}
      >
        Increment By 1
      </button>

      <button
        className="btn btn-outline-danger m-2"
        onClick={() => dispatch({ type: "DEC1" })}
      >
        Decrement By 1
      </button>

      <button
        className="btn btn-outline-danger m-2"
        onClick={() => dispatch({ type: "INC2" })}
      >
        Increment By 2
      </button>

      <button
        className="btn btn-outline-danger m-2"
        onClick={() => dispatch({ type: "DEC2" })}
      >
        Decrement By 2
      </button>

      <button
        className="btn btn-outline-danger m-2"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>

      {state.message && (
        <h5 className="text-danger mt-3">
          {state.message}
        </h5>
      )}
    </div>
  );
}

export default UseReducerCounter;