import { quaternaryColor, secondaryColor, tertiaryColor } from "@/styles";
import styled from "styled-components";

export const StyledRegenerateModal = styled.div`
  background-color: ${tertiaryColor};
  border-radius: 10px;
  width: 80vw;
  height: 50vh;
  position: fixed;
  z-index: 2;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.558) 0px 0px 20px 10px;
  border-radius: 20px;
`;
export const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 1.4rem;
  margin-bottom: 1.4rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  width: 80vw;
  height: 26vh;
  resize: true;
  overflow-wrap: break-word;
`;
