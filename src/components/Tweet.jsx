import React from "react";
export default function Tweet({ name, message, like }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Likes :{like}</h3>
    </div>
  );
}
