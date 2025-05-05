import styled, { keyframes } from "styled-components";

export const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const Dot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.4s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0;
  }
`;
