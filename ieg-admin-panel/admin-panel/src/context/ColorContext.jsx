import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#1890ff");

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
