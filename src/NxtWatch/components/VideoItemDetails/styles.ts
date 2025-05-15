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
  background-color: ${({ theme }) => theme.backgroundColor};
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
  color: ${({ theme }) => theme.textColor};
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
