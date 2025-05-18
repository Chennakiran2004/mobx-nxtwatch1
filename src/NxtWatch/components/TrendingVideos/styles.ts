import styled from "styled-components";

export const TrendingMainContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 90vh;
  overflow-y: auto;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: scroll;
  height: 100vh;
`;

export const TrendingContainer = styled.div`
  width: 100%;
`;

export const TrendingMenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 24px 32px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  padding: 12px;
  margin-right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuHeading = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 26px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

export const VideosList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style-type: none;
  gap: 24px;
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 20px;
  text-align: center;
`;

export const FailureImg = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;

export const FailureText = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
`;

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  width: 120px;
  height: 38px;
  border: none;
  border-radius: 5px;
  margin-top: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4338ca;
  }
`;

export const VideoCardContainer = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.2s;
  padding: 16px;

  &:hover {
    transform: translateY(-4px);
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 12px;
  }
`;

export const Thumbnail = styled.img`
  width: 300px;
  border-radius: 6px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const ThumbnailText = styled.div`
  display: flex;
  padding: 10px;
`;

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const VideoTitle = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px 0;
`;

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  justify-content: center;
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const VideoDetailsText = styled.p`
  color: #64748b;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  margin: 4px 10px 0 0;
`;
