import styled from "styled-components";

import { NavMobileContainer } from "../NavMobile/styledComponents";

export const NavLargeContainer = styled(NavMobileContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
`;

export const NavLargeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
