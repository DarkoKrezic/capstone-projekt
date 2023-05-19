import styled from "styled-components";
import { headerImage } from "@/styles";
export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  /* height: 70px; */
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const TextContainer = styled.div`
  max-height: 300px;
  width: 90%;
  overflow: scroll;
`;
export const StoryText = styled.p`
  font-size: 1.2rem;
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
