import React from "react";
import { AiFillFire } from "react-icons/ai";
import { TrendingMenuContainer, IconContainer, MenuHeading } from "../styles";
import { useTheme } from "../../../../Common/Context/ThemeContext";

const TrendingMenu: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <TrendingMenuContainer theme={theme}>
      <IconContainer theme={theme}>
        <AiFillFire size={40} color="#ff0b37" />
      </IconContainer>
      <MenuHeading theme={theme}>Trending</MenuHeading>
    </TrendingMenuContainer>
  );
};

export default TrendingMenu;
