import React from "react";
import styled from "styled-components";
import { secondaryColor } from "./styles";
import localFont from "next/font/local";

const amaticFont = localFont({ src: "./fonts/AmaticSC-Bold.ttf" });

const LayoutContainer = styled.main`
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  background-color: ${secondaryColor};
`;

const ContentContainer = styled.div`
  padding: 0.3rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer className={amaticFont.className}>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
