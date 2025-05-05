import styled from "styled-components";

export const GamingMainContainer = styled.div<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#0f0f0f" : "#f9f9f9"};
  min-height: 90vh;
  overflow-y: auto;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GamingContainer = styled.div`
  width: 100%;
`;

export const GamingMenuContainer = styled.div<{ theme: string }>`
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

export const LoaderContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
`;

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
`;

export const FailureImg = styled.img`
  width: 300px;
`;

export const FailureText = styled.h1<{ theme: string }>`
  color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#1e293b")};
  font-family: Roboto;
`;

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: Roboto;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-top: 18px;
`;

export const VideoCardContainer = styled.li`
  width: 30%;
  margin: 8px;
  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
`;

export const ThumbnailText = styled.div`
  display: flex;
  padding: 8px;
`;

export const VideoTitle = styled.p<{ theme: string }>`
  color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#1e293b")};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin-top: 0;
`;

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsText = styled.p`
  color: #64748b;
  font-family: Roboto;
  font-size: 13px;
  margin-top: 0;
  margin-right: 10px;
`;
