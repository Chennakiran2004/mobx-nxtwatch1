import React from "react";
import { useNavigate } from "react-router-dom";
import { useActiveMenu } from "../../Context/ActiveMenuContext";
import { useTheme } from "../../Context/ThemeContext";
import { removeCookie } from "../../constants/utils/storageUtilities";
import { WEBSITE_LOGOS } from "../../constants/Images/WebsiteLogos";

import NavMobile from "./NavMobile";
import NavLarge from "./NavLarge";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkTheme, toggleTheme } = useTheme();
  const { changeActiveMenu } = useActiveMenu();
  const logoURL = isDarkTheme ? WEBSITE_LOGOS.dark : WEBSITE_LOGOS.light;
  const theme = isDarkTheme ? "dark" : "light";

  const onClickLogout = () => {
    removeCookie();
    navigate("/login");
  };

  const onLogoClick = () => changeActiveMenu("home");

  return (
    <div data-testid="header">
      <NavMobile
        logoURL={logoURL}
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        onClickLogout={onClickLogout}
        theme={theme}
        onLogoClick={onLogoClick}
      />
      <NavLarge
        logoURL={logoURL}
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        onClickLogout={onClickLogout}
        theme={theme}
        onLogoClick={onLogoClick}
      />
    </div>
  );
};

export default Header;
