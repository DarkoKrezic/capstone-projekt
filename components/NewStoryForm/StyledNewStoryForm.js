import { quaternaryColor } from "@/styles";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 70%;
  font-size: 1.2rem;
  font-family: inherit;
`;
export const ImageInput = styled.input`
  font-family: inherit;
  padding: 0.5rem 0;
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  height: 26vh;
  resize: true;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.2rem;
  background-color: ${quaternaryColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 0.2rem;
  font-size: 1.3rem;
`;
