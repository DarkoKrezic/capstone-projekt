import styled from "styled-components";
import { headerImage } from "@/styles";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  flex-grow: 1;
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
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  border-radius: 30px;
  overflow: hidden;
`;
export const TextContainer = styled.div`
  max-height: 40vh;
  width: 90%;
  overflow: scroll;
`;
export const StoryText = styled.p`
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1rem;
`;

export const BackButton = styled.button`
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
`;
export const CreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;
export const EditButton = styled.button`
  margin-bottom: 1rem;
  font-family: inherit;

  font-size: 1rem;
`;
export const DeleteButton = styled.button`
  margin-bottom: 1rem;
  font-family: inherit;
  font-size: 1rem;
`;
