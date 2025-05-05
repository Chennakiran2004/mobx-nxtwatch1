import styled from "styled-components";

// Main layout containers
export const MainBody = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 90vh;
`;

export const SidebarContainer = styled.div`
  width: 18vw;
  min-width: 200px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const VideoItemDetailsContainer = styled.div<{ theme: string }>`
  flex: 1;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#0f0f0f" : "#f9f9f9"};
  min-height: 90vh;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

// Video player
export const PlayerContainer = styled.div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  margin-bottom: 24px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

// Video details
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

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ViewsText = styled.span`
  color: #64748b;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  margin-right: 8px;
`;

// Like/Dislike/Save Button
export const Button = styled.button<{ theme: string }>`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => (theme === "active" ? "#2563eb" : "#64748b")};
  font-weight: 500;
  font-size: 16px;
  margin-right: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s;
  &:last-child {
    margin-right: 0;
  }
`;

// Channel details
export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 18px 0 0 0;
`;

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const ChannelDetailsText = styled.p<{ theme: string }>`
  color: ${({ theme }) => (theme === "dark" ? "#f9f9f9" : "#181818")};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const ChannelDetailsText2 = styled.p`
  color: #64748b;
  font-size: 14px;
  margin: 4px 0 0 0;
`;

// Video description
export const VideoDescriptionText = styled.p<{ theme: string }>`
  color: ${({ theme }) => (theme === "dark" ? "#f9f9f9" : "#181818")};
  font-size: 16px;
  margin: 16px 0 0 0;
  line-height: 1.6;
  font-family: "Roboto", sans-serif;
`;

// Loader, failure, and retry
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const FailureImg = styled.img`
  width: 320px;
  margin-bottom: 18px;
`;

export const FailureText = styled.h1<{ theme: string }>`
  color: ${({ theme }) => (theme === "dark" ? "#f9f9f9" : "#181818")};
  font-size: 22px;
  margin-bottom: 8px;
  font-family: "Roboto", sans-serif;
`;

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-top: 18px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
`;
