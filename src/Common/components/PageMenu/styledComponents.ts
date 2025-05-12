import styled from "styled-components";

export const PageMenuContainer = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "dark" ? "#181818" : "#f1f1f1"};
  padding: 20px 30px;
`;

export const IconContainer = styled.div<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#0f0f0f" : "#e2e8f0"};
  border-radius: 50%;
  padding: 12px;
  margin-right: 18px;
`;

export const MenuHeading = styled.h1<{ theme: string }>`
  color: ${(props) => (props.theme === "dark" ? "#ffffff" : "#181818")};
  font-size: 28px;
  font-family: Roboto;
`;
