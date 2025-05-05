// import React from "react";
// import {
//   ActiveMenu,
//   activeMenuConstants,
// } from "../Context/activeMenuConstants";

// interface ActiveMenuContextType {
//   activeMenu: ActiveMenu | string;
//   changeActiveMenu: (menu: ActiveMenu) => void;
// }

// const ActiveMenuContext = React.createContext<ActiveMenuContextType>({
//   activeMenu: activeMenuConstants.initial,
//   changeActiveMenu: () => {},
// });

// export default ActiveMenuContext;

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ActiveMenu } from "./activeMenuConstants";

type ActiveMenuContextType = {
  activeMenu: ActiveMenu;
  changeActiveMenu: (value: ActiveMenu) => void;
};

const ActiveMenuContext = createContext<ActiveMenuContextType | undefined>(
  undefined
);

export const ActiveMenuProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>("home");

  const changeActiveMenu = (value: ActiveMenu) => setActiveMenu(value);

  return (
    <ActiveMenuContext.Provider value={{ activeMenu, changeActiveMenu }}>
      {children}
    </ActiveMenuContext.Provider>
  );
};

export const useActiveMenu = () => {
  const context = useContext(ActiveMenuContext);
  if (!context)
    throw new Error("useActiveMenu must be used within ActiveMenuProvider");
  return context;
};

export default ActiveMenuContext;
