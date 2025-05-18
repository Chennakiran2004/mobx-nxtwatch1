import styled from "styled-components";

export const VideoTextMainContainer = styled.div`
  display: flex;
`;

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 12px;
`;

export const VideoTitle = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 6px 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

export const VideoDetailsContainer2 = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const VideoDetailsText = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: Roboto, sans-serif;
  font-size: 13px;
  margin: 0;
  white-space: nowrap;
  text-decoration: none;
`;

export const LikesAndViewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  flex-wrap: wrap;
`;
