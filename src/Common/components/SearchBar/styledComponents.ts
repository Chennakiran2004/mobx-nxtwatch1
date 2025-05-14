// import styled from "styled-components";

// export const SearchContainer = styled.div`
//   display: flex;
//   border: 1px solid #64748b;
//   border-radius: 3px;
//   margin-top: 20px;
//   width: 50%;
//   @media screen and (max-width: 576px) {
//     width: 100%;
//   }
// `;

// export const SearchInput = styled.input<{ theme: string }>`
//   background-color: transparent;
//   width: 100%;
//   outline: none;
//   padding: 8px;
//   border: none;
//   color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#0f0f0f")};
// `;

// export const SearchButton = styled.button<{ theme: string }>`
//   background-color: ${(props) =>
//     props.theme === "dark" ? "#424242" : "#f9f9f9"};
//   width: 80px;
//   height: 35px;
//   border: none;
// `;

import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
  padding: 8px;
  background-color: #f1f1f1;
  border-radius: 8px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1d4ed8;
  }
`;
