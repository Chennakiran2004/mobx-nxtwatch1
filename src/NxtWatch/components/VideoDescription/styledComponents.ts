import styled from "styled-components";

export const VideoDescriptionText = styled.p<{ theme: string }>`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  margin: 16px 0 0 0;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
`;
