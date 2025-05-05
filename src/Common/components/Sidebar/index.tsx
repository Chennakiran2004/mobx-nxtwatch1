import React from "react";
import MenuItemsList from "../MenuItemsList";
import { useTheme } from "../../Context/ThemeContext";
import { SidebarContainer } from "./styledComponents";
import ContactUs from "./ContactUs";

const Sidebar: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <SidebarContainer data-testid="sidebar" theme={theme}>
      <MenuItemsList />
      <ContactUs theme={theme} />
    </SidebarContainer>
  );
};

export default Sidebar;
