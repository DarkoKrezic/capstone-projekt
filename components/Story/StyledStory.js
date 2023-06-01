import styled from "styled-components";
import { headerImage } from "@/styles";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 2rem 3rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  /* margin-top: 1rem; */
`;

export const TextContainer = styled.div`
  max-height: 20vh;
  width: 90%;
  overflow: scroll;
`;
export const StoryText = styled.p`
  font-size: 1rem;
`;

export const BackButton = styled.button`
  margin-bottom: 1rem;
`;
export const CreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;
export const EditButton = styled.button`
  margin-bottom: 1rem;
`;
export const DeleteButton = styled.button`
  margin-bottom: 1rem;
`;
