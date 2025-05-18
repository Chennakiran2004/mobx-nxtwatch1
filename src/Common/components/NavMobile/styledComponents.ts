// import styled from "styled-components";

// export const NavMobileContainer = styled.nav<{ theme: string }>`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: ${(props) =>
//     props.theme === "dark" ? "#212121" : "#f4f4f4"};
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;

// export const NavMobileIcons = styled.div`
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

import styled from "styled-components";

export const NavMobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.backgroundColor || "#fff"};
  }
`;

export const LogoStyle = styled.img`
  height: 28px;
  cursor: pointer;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const DrawerPanel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: ${({ theme }) => theme.backgroundColor || "#fff"};
  z-index: 100;
  padding: 20px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const DrawerCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  margin-bottom: 16px;
  cursor: pointer;
  color: inherit;
`;
