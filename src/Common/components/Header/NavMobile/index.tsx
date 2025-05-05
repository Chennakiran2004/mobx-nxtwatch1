import React from "react";
import { NavMobileContainer, NavMobileIcons } from "./styledComponents";
import Logo from "../Logo";
import ThemeToggleButton from "../ThemeToggleButton";
import LogoutPopup from "../../../../Profile/components/Logout";
import { NavMobileProps } from "./navMobile.types";

const NavMobile: React.FC<NavMobileProps> = ({
  logoURL,
  isDarkTheme,
  toggleTheme,
  onClickLogout,
  theme,
  onLogoClick,
}) => (
  <NavMobileContainer data-testid="nav-mobile" theme={theme}>
    <Logo logoURL={logoURL} onClick={onLogoClick} />
    <NavMobileIcons>
      <ThemeToggleButton
        isDarkTheme={isDarkTheme}
        onToggle={toggleTheme}
        testId="mobile-theme"
        size={22}
      />
      <LogoutPopup onClickLogout={onClickLogout} theme={theme} />
    </NavMobileIcons>
  </NavMobileContainer>
);

export default NavMobile;
