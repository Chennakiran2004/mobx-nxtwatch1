import React from "react";
import { AiFillHome, AiFillFire } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiMenuAddLine } from "react-icons/ri";
import { useActiveMenu } from "../../Context/ActiveMenuContext";
import { useTheme } from "../../Context/ThemeContext";
import { MenuList } from "./styledComponents";
import activeMenuConstants, {
  ActiveMenu,
} from "../../Context/activeMenuConstants";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  {
    key: activeMenuConstants.home,
    to: "/",
    label: "Home",
    Icon: AiFillHome,
    testId: "homeIcon",
  },
  {
    key: activeMenuConstants.trending,
    to: "/trending",
    label: "Trending",
    Icon: AiFillFire,
    testId: "trendingIcon",
  },
  {
    key: activeMenuConstants.gaming,
    to: "/gaming",
    label: "Gaming",
    Icon: IoLogoGameControllerB,
    testId: "gamingIcon",
  },
  {
    key: activeMenuConstants.savedVideos,
    to: "/saved-videos",
    label: "Saved videos",
    Icon: RiMenuAddLine,
    testId: "savedVideosIcon",
  },
];

const MenuItemsList: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const { activeMenu, changeActiveMenu } = useActiveMenu();
  const theme = isDarkTheme ? "dark" : "light";
  const iconColor = isDarkTheme ? "#424242" : "#7e858e";
  const iconActive = "#ff0b37";

  return (
    <MenuList data-testid="menu-items-list">
      {MENU_ITEMS.map(({ key, to, label, Icon, testId }) => (
        <MenuItem
          key={key}
          to={to}
          label={label}
          isActive={activeMenu === key}
          onClick={() => changeActiveMenu(key as ActiveMenu)}
          theme={theme}
          icon={
            <Icon
              size={25}
              data-testid={testId}
              color={activeMenu === key ? iconActive : iconColor}
            />
          }
        />
      ))}
    </MenuList>
  );
};

export default MenuItemsList;
