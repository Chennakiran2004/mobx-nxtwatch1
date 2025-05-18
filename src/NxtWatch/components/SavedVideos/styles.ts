import styled from "styled-components";

export const SavedVideosMainContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 90vh;
  width: 100%;
  overflow: scroll;
`;

export const SavedMenuContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 20px 30px;
`;

export const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  padding: 12px;
  margin-right: 18px;
`;

export const MenuHeading = styled.h1<{ theme: string }>`
  color: ${({ theme }) => theme.textColor};
  font-size: 28px;
  font-family: Roboto;
`;

export const SavedVideosContainer = styled.div`
  padding: 24px;
`;

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
`;

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const NoVideosImg = styled.img`
  width: 200px;
`;

export const FailureText = styled.h1<{ theme: string }>`
  color: ${({ theme }) => theme.textColor};
  font-family: Roboto;
`;
