import React from "react";
import styled from "styled-components";
import { secondaryColor } from "./styles";

const LayoutContainer = styled.main`
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  background-color: ${secondaryColor};
`;

const ContentContainer = styled.div`
  padding: 0.3rem;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
