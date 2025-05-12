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
  color: #64748b;
  font-family: Roboto;
  font-size: 13px;
  margin-top: 0;
  margin-right: 10px;
`;

export const VideoTitle = styled.p<{ theme: string }>`
  color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#1e293b")};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin-top: 0;
`;
