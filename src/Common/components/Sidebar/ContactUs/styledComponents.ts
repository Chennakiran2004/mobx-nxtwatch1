import styled from "styled-components";

export const ContactUsContainer = styled.div`
  padding: 7px;
`;

export const Text = styled.p<{ theme: string }>`
  font-weight: 600;
  color: ${(props) => (props.theme === "dark" ? "#f4f4f4" : "rgb(33,33,33)")};
`;
