// import React from "react";
// import { NavMobileContainer, NavMobileIcons } from "./styledComponents";

// import ThemeToggleButton from "../ThemeToggleButton";
// import LogoutPopup from "../../../Profile/components/Logout";
// import { NavMobileProps } from "./navMobile.types";

// const NavMobile: React.FC<NavMobileProps> = ({
//   logoURL,
//   isDarkTheme,
//   toggleTheme,
//   onClickLogout,
//   theme,
//   onLogoClick,
// }) => (
//   <NavMobileContainer data-testid="nav-mobile" theme={theme}>
//     <Logo logoURL={logoURL} onClick={onLogoClick} />
//     <NavMobileIcons>
//       <ThemeToggleButton
//         isDarkTheme={isDarkTheme}
//         onToggle={toggleTheme}
//         testId="mobile-theme"
//         size={22}
//       />
//       <LogoutPopup onClickLogout={onClickLogout} theme={theme} />
//     </NavMobileIcons>
//   </NavMobileContainer>
// );

// export default NavMobile;

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { BsMoon, BsSun } from "react-icons/bs";

import {
  NavMobileContainer,
  LogoStyle,
  IconGroup,
  IconButton,
  DrawerOverlay,
  DrawerPanel,
  DrawerCloseButton,
} from "./styledComponents";
import MenuItemsList from "../MenuItemsList";
import Logo from "../Logo";

const NavMobile: React.FC<{
  logoURL: string;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  onClickLogout: () => void;
  onLogoClick: () => void;
  theme: string;
}> = ({ logoURL, isDarkTheme, toggleTheme, onClickLogout, onLogoClick }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <NavMobileContainer>
        {/* <Logo src={logoURL} alt="logo" onClick={onLogoClick} /> */}
        <Logo logoURL={logoURL} onClick={onLogoClick} />
        <IconGroup>
          <IconButton onClick={toggleTheme}>
            {isDarkTheme ? <BsSun size={20} /> : <BsMoon size={20} />}
          </IconButton>
          <IconButton onClick={onClickLogout}>
            <MdLogout size={20} />
          </IconButton>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <FiMenu size={20} />
          </IconButton>
        </IconGroup>
      </NavMobileContainer>

      {isDrawerOpen && (
        <>
          <DrawerOverlay onClick={() => setDrawerOpen(false)} />
          <DrawerPanel>
            <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
              ×
            </DrawerCloseButton>
            <MenuItemsList />
          </DrawerPanel>
        </>
      )}
    </>
  );
};

export default NavMobile;
