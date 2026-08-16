import React, { useReducer, useState } from "react";

const initialState = [
  { id: 1, text: "Learn HTML CSS and JavaScript", completed: true },
  { id: 2, text: "Learn React", completed: false },
  { id: 3, text: "Create Projects", completed: false },
  { id: 4, text: "Upload on Github", completed: false },
  { id: 5, text: "Create Portfolio Website", completed: false },
  { id: 6, text: "Create Resume", completed: false },
  { id: 7, text: "Apply for Job", completed: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (action.payload.trim() === "") return state;

      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    dispatch({
      type: "ADD",
      payload: input,
    });

    setInput("");
  };

  return (
    <div className="card shadow p-3" style={{ maxWidth: "600px", margin: "10px auto" }}>

      <h3 className="mb-4 text-start">Todo List</h3>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter list item name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="btn btn-outline-secondary"
          onClick={addTodo}
        >
          Add Todo Item
        </button>
      </div>

      <ul className="list-group">

        {todos.map((todo) => (

          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >

            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                dispatch({
                  type: "TOGGLE",
                  payload: todo.id,
                })
              }
            >

              <img
                src={
                  todo.completed
                    ? "https://img.icons8.com/color/48/checked--v1.png"
                    : "https://img.icons8.com/ios/50/circled.png"
                }
                alt=""
                width="22"
                className="me-2"
              />

              <span
                style={{
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {todo.text}
              </span>

            </div>

            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: todo.id,
                })
              }
            >
              Remove
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default TodoList;