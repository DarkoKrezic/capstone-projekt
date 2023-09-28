import { quaternaryColor, secondaryColor, tertiaryColor } from "@/styles";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  text-align: center;
  margin: 1rem auto;
`;
export const ImageInput = styled.input`
  font-family: inherit;
  padding: 0.5rem 0;
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 1.2rem;
  margin-bottom: 1.4rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 80vw;
  height: 26vh;
  resize: true;
`;

export const Button = styled.button`
  width: 40vw;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.5rem;
  background-color: ${quaternaryColor};
  color: #fff;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.499) 3px 3px 10px 3px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 0.2rem;
  font-size: 1.5rem;
  background-color: ${tertiaryColor};
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
`;
