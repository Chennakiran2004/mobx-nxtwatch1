import React from "react";
import { IconType } from "react-icons";
import {
  PageMenuContainer,
  IconContainer,
  MenuHeading,
} from "./styledComponents";
import { useTheme } from "../../Context/ThemeContext";

interface PageMenuProps {
  title: string;
  icon: IconType;
  iconSize?: number;
}

const PageMenu: React.FC<PageMenuProps> = ({
  title,
  icon: Icon,
  iconSize = 40,
}) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <PageMenuContainer theme={theme}>
      <IconContainer theme={theme}>
        <Icon size={iconSize} color="#ff0b37" />
      </IconContainer>
      <MenuHeading theme={theme}>{title}</MenuHeading>
    </PageMenuContainer>
  );
};

export default PageMenu;
