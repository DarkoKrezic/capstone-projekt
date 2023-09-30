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
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 4rem; */
  color: black;
  z-index: 4;
  background-color: ${tertiaryColor};
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 6px;
`;

const LoadingAnimation = () => {
  return (
    <LoadingAnimationWrapper>
      <Lottie
        animationData={animationData}
        autoplay
        loop
        style={{ width: 100, height: 100 }}
      />
      <p style={{ fontSize: "1.5rem" }}>Deine Geschichte wird Geschrieben...</p>
    </LoadingAnimationWrapper>
  );
};

export default LoadingAnimation;
