import React from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { SavedMenuContainer, IconContainer, MenuHeading } from "../styles";
import { useTheme } from "../../../../Common/Context/ThemeContext";

const SavedMenu: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";
  return (
    <SavedMenuContainer>
      <IconContainer>
        <RiMenuAddLine size={20} style={{ paddingTop: "6px" }} />
      </IconContainer>
      <MenuHeading theme={theme}>Saved Videos</MenuHeading>
    </SavedMenuContainer>
  );
};

export default SavedMenu;
