import styled from "styled-components";

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
