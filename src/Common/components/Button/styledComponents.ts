import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string; size: string }>`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) =>
    size === "small" ? "4px" : size === "large" ? "12px" : "8px"};
  border-radius: 4px;
  ${({ variant }) =>
    variant === "icon" &&
    `
    background: transparent;
    padding: 0;
    border-radius: 50%;
    min-width: 32px;
    min-height: 32px;
  `}
`;
