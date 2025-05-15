import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
`;

export const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
`;
