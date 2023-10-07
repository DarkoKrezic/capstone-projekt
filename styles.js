import { createGlobalStyle } from "styled-components";
import { keyframes } from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"; */
  }
    `;

export const primaryColor = "#0C1726";
export const secondaryColor = "#F2CF63";
export const tertiaryColor = "#D9965B";
export const quaternaryColor = "#8C441B";
export const quintaryColor = "#D94141";
export const headerImage = "/images/überschriftrolle.png";
export const ListBackgroundImage = "/images/Schriftrolle.png";
export const animateShadow = keyframes`
  0% {
    text-shadow: 1px 1px 10px rgba(0,0,0,0.5), 0 0 transparent;
  }
  50% {
    text-shadow: 1px 1px 10px rgba(10, 10, 10, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.3), 1px 1px rgba(0,0,0,0.1);
  }
  100% {
    text-shadow: 1px 1px 10px rgba(0,0,0,0.5), 0 0 transparent;   
  }
`;
