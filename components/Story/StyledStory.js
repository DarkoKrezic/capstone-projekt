import styled from "styled-components";
import { headerImage } from "@/styles";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  flex-grow: 1;
  position: relative;
  background-color: transparent;
  z-index: 1;
`;
export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px); // Hier kannst du die gewünschte Blur-Stärke einstellen
`;
export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 2rem 3rem;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  background-color: transparent;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  border-radius: 30px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.554) 6px 6px 10px 5px;
  z-index: 1;
`;
export const TextContainer = styled.div`
  max-height: 35vh;
  width: 90%;
  overflow: scroll;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const StoryText = styled.p`
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.649);
  border-radius: 10px;
  padding: 1rem;
`;

export const BackButton = styled.button`
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
`;

export const EditButton = styled.button`
  margin-bottom: 1rem;
  font-family: inherit;
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
  font-size: 1rem;
`;
export const DeleteButton = styled.button`
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
`;
export const CreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;
