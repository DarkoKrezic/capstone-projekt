import styled from "styled-components";
import { ListBackgroundImage } from "@/styles";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  background-image: url(${ListBackgroundImage});
  background-size: cover;
  background-position: center;
  background-size: 100% 115%;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  padding: 1rem 3rem;
`;

export const TextArea = styled.textarea`
  width: 90%;
  height: 200px;
  resize: vertical;
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
