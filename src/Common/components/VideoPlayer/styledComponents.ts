import styled from "styled-components";

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
