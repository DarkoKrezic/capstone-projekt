import styled from "styled-components";
import { ListBackgroundImage, quaternaryColor } from "@/styles";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  background-image: url(${ListBackgroundImage});
  background-position: center;
  background-size: 100% 115%;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 6rem;
  max-height: 70vh;
`;

export const Description = styled.p`
  margin: 0 1rem;
  padding: 0 3rem;
  font-size: 1.2rem;
`;

export const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  resize: vertical;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.2rem;
  background-color: ${quaternaryColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
