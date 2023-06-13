import React, { useEffect, useState } from "react";
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.err("404"));
  }, []);
  return (
    <>
      <div className="tweet">
        {users.map((user) => (
          <Tweet
            key={user.id}
            name={user.name}
            message={user.company.name}
            like={user.id}
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
