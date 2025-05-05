import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { GamingMenuContainer, IconContainer, MenuHeading } from "../styles";
import { useTheme } from "../../../../Common/Context/ThemeContext";

const GamingMenu: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <GamingMenuContainer theme={theme}>
      <IconContainer theme={theme}>
        <IoLogoGameControllerB size={40} color="#ff0b37" />
      </IconContainer>
      <MenuHeading theme={theme}>Gaming</MenuHeading>
    </GamingMenuContainer>
  );
};

export default GamingMenu;
