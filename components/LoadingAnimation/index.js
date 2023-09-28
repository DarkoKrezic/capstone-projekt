import { tertiaryColor } from "@/styles";
import React from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import animationData from "schreibAnimation.json";

const LoadingAnimationWrapper = styled.div`
  position: fixed;
  top: 50vh;
  left: 20vw;
  width: 60%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
  color: black;
`;

const LoadingAnimation = () => {
  return (
    <LoadingAnimationWrapper>
      <p>Deine Geschichte wird Geschrieben...</p>
      <Lottie
        animationData={animationData}
        autoplay
        loop
        style={{ width: 100, height: 100 }}
      />
    </LoadingAnimationWrapper>
  );
};

export default LoadingAnimation;
