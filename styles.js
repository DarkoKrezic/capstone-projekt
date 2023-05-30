import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* @font-face {
    font-family: "Amatic SC";
    src: url("./Fonts/AmaticSC-Regular.ttf") format("truetype");
  }; */
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",}
    `;

export const primaryColor = "#0C1726";
export const secondaryColor = "#F2CF63";
export const tertiaryColor = "#D9965B";
export const quaternaryColor = "#8C441B";
export const quintaryColor = "#D94141";
export const headerImage = "/images/überschriftrolle.png";
export const ListBackgroundImage = "/images/Schriftrolle.png";
