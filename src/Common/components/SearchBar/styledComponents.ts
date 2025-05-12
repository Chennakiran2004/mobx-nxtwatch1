import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #64748b;
  border-radius: 3px;
  margin-top: 20px;
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input<{ theme: string }>`
  background-color: transparent;
  width: 100%;
  outline: none;
  padding: 8px;
  border: none;
  color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#0f0f0f")};
`;

export const SearchButton = styled.button<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#424242" : "#f9f9f9"};
  width: 80px;
  height: 35px;
  border: none;
`;
