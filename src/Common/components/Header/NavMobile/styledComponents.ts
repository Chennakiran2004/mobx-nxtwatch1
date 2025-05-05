import styled from "styled-components";

export const NavMobileContainer = styled.nav<{ theme: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#212121" : "#f4f4f4"};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavMobileIcons = styled.div`
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
