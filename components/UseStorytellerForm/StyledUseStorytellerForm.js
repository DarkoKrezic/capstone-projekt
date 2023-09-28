import styled from "styled-components";
import { ListBackgroundImage, quaternaryColor } from "@/styles";
import { tertiaryColor } from "@/styles";
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
  flex-grow: 1;
`;

export const Description = styled.p`
  margin: 1rem 1rem;
  padding: 1rem 2.4rem;
  font-size: 1.2rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 40vh;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1.8rem;
  background-color: ${quaternaryColor};
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.355) 3px 3px 10px 3px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 0.2rem;
  font-size: 1.2rem;
  background-color: ${tertiaryColor};
  box-shadow: rgba(0, 0, 0, 0.702) 3px 3px 10px 3px;
`;
