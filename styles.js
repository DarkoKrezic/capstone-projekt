import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
const primaryColor = "#0C1726";
const secondaryColor = "#F2CF63";
const tertiaryColor = "#D9965B";
const quaternaryColor = "#8C441B";
const quintaryColor = "#D94141";
