import styled from "styled-components";

export const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const VideoTitle = styled.h1<{ theme: string }>`
  color: ${({ theme }) => (theme === "dark" ? "#f9f9f9" : "#181818")};
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 8px 0;
  font-family: "Roboto", sans-serif;
`;

export const LikesAndViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  flex-wrap: wrap;
`;
