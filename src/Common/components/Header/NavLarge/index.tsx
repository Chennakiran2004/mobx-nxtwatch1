import React from "react";
import { NavLargeContainer, NavLargeIcons } from "./styledComponents";
import Logo from "../Logo";
import ThemeToggleButton from "../ThemeToggleButton";
import ProfileAvatar from "../ProfileAvatar";
import LogoutPopup from "../../../../Profile/components/Logout";
import { NavLargeProps } from "./NavLarge.types";

const NavLarge: React.FC<NavLargeProps> = ({
  logoURL,
  isDarkTheme,
  toggleTheme,
  onClickLogout,
  theme,
  onLogoClick,
}) => (
  <NavLargeContainer data-testid="nav-desktop" theme={theme}>
    <Logo logoURL={logoURL} onClick={onLogoClick} />
    <NavLargeIcons>
      <ThemeToggleButton
        isDarkTheme={isDarkTheme}
        onToggle={toggleTheme}
        testId="desktop-theme"
        size={23}
      />
      <ProfileAvatar />
      <LogoutPopup onClickLogout={onClickLogout} theme={theme} />
    </NavLargeIcons>
  </NavLargeContainer>
);

export default NavLarge;
