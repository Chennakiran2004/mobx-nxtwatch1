import styled from "styled-components";

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsContainer2 = styled.div`
  display: flex;
`;

export const VideoDetailsText = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: Roboto;
  font-size: 13px;
  margin-top: 0;
  margin-right: 10px;
`;

export const VideoTitle = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin-top: 0;
`;

export const LikesAndViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  flex-wrap: wrap;
`;
