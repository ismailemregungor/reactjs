import React, { createContext, useState, useContext } from "react";

const TitleContext = createContext();

export const useTitle = () => useContext(TitleContext);

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState({ role: "", name: "" });

  const updateTitle = (user) => {
    setTitle({
      role: user.roles.join(", "),
      name: `${user.firstname} ${user.lastname}`,
    });
  };

  return (
    <TitleContext.Provider value={{ title, updateTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContext;
