import styled from "styled-components";

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
`;
