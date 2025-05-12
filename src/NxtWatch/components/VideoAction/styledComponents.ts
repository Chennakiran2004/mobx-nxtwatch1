import styled from "styled-components";

export const Button = styled.button<{ theme: string }>`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => (theme === "active" ? "#2563eb" : "#64748b")};
  font-weight: 500;
  font-size: 16px;
  margin-right: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color 0.2s;
  &:last-child {
    margin-right: 0;
  }
`;
