import styled from "styled-components";

export const HomeMainContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 90vh;
  overflow-y: auto;
`;

export const HomeContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const VideoCardContainer = styled.div`
  margin: 15px;
  width: 300px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 10px 0;
  }
`;
