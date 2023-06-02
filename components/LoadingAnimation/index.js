import { tertiaryColor } from "@/styles";
import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingAnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3; /* Light color */
  border-top: 4px solid ${tertiaryColor};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingAnimation = () => {
  return (
    <LoadingAnimationWrapper>
      <Spinner />
    </LoadingAnimationWrapper>
  );
};

export default LoadingAnimation;
