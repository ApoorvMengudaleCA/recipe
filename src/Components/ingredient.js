import React from "react";

export default function ingredient({ name, quantity }) {
  return (
    <>
      <span>{name}</span>
      <span>{quantity}</span>
    </>
  );
}
