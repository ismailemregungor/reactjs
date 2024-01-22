import React, { createContext, useState } from "react";

export const PermissionContext = createContext();

export const PermissionProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);

  const updatePermissions = (newPermissions) => {
    setPermissions(newPermissions);
  };

  return (
    <PermissionContext.Provider value={{ permissions, updatePermissions }}>
      {children}
    </PermissionContext.Provider>
  );
};
