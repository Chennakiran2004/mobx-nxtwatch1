import styled from "styled-components";

export const SidebarContainer = styled.div<{ theme: string }>`
  width: 200px;
  background-color: ${(props) =>
    props.theme === "dark" ? "rgb(33, 33, 33)" : "#f4f4f4"};
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
