import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
