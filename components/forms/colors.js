import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";

export default function colors() {
  const { colors, setColors } = useContext(AppContext);
  const [color, setColor] = colors;

  const handleColor = (value) => {
    setColor(value);
  };

  return (
    <div className="colors">
      <button
        className="btn__color black"
        onClick={() => handleColor("#000000")}
      ></button>
      <button
        className="btn__color red"
        onClick={() => handleColor("#eb5844")}
      ></button>
      
      <button
        className="btn__color blue"
        onClick={() => handleColor("#3ad1f4")}
      ></button>
      <button
        className="btn__color gold"
        onClick={() => handleColor("#fed78c")}
      ></button>
      <button
        className="btn__color gray"
        onClick={() => handleColor("#737373")}
      ></button>
    </div>
  );
}
