import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoCardContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 8px;
  margin: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const StyledVideoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;
