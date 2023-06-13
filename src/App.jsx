import React, { useState } from "react";
import Tweet from "./components/Tweet";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "hamza",
      message: "Hi im new here",
      like: 4,
    },
    {
      id: 2,
      name: "aya",
      message: "Hi hamza",
      like: 1,
    },
    {
      id: 3,
      name: "ziad",
      message: "welcome hamza",
      like: 42,
    },
  ]);
  return (
    <>
      <div className="tweet">
        {users.map((user) => (
          <Tweet
            key={user.id}
            name={user.name}
            message={user.message}
            like={user.like}
          />
        ))}
        <div className="count">
          <button onClick={decrease}>-</button>
          {count}
          <button onClick={increase}>+</button>
        </div>
      </div>
    </>
  );
};

export default App;
