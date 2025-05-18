import React from "react";
import MenuItemsList from "../MenuItemsList";
import { SidebarContainer } from "./styledComponents";
import ContactUs from "../ContactUs";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer data-testid="sidebar">
      <MenuItemsList />
      <ContactUs />
    </SidebarContainer>
  );
};

export default Sidebar;
