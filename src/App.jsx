import React from "react";
import Tweet from "./components/Tweet";
import "./App.css";

const App = () => {
  return (
    <div className="tweet">
      <Tweet name="Hamza" message="Hi im new here" like="4" />
      <Tweet name="Aya" message="Welcome Hamza" like="1" />
      <Tweet name="Ziad" message="Hi Hamza" like="70" />
    </div>
  );
};

export default App;
