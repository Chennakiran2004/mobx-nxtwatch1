import styled from "styled-components";

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ViewsText = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  margin-right: 8px;
`;
