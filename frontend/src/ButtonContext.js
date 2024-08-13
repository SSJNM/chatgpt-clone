import React, { createContext, useState } from 'react';

const SidebarButtonContext = createContext();

const SidebarButtonProvider = ({ children }) => {
  const [SidebarbuttonEnabled, setSidebarButtonEnabled] = useState(false);

  const toggleSidebarButton = () => {
    setSidebarButtonEnabled(prevState => !prevState);
  };

  return (
    <SidebarButtonContext.Provider value={{ SidebarbuttonEnabled, toggleSidebarButton }}>
      {children}
    </SidebarButtonContext.Provider>
  );
};


export { SidebarButtonContext, SidebarButtonProvider };
