import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    font-family: 'Roboto', sans-serif;
    transition: background 0.3s ease;
  }
`;

export default GlobalStyle;
