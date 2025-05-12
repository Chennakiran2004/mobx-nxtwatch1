import styled from "styled-components";

export const HomeMainContainer = styled.div<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#181818" : "#f9f9f9"};
  min-height: 90vh;
  overflow-y: auto;
`;

export const HomeContainer = styled.div<{ theme: string }>`
  padding: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#0f0f0f" : "#f9f9f9"};
`;

export const VideoCardContainer = styled.div`
  margin: 15px;
  width: 300px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 10px 0;
  }
`;
