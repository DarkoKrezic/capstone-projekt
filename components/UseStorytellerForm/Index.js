import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Form } from "../NewStoryForm/StyledNewStoryForm";
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

const Description = styled.p`
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function UseStorytellerForm() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  function handlePromptChange(event) {
    setPrompt(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // her we are going to send the prompt to the GPT API and create a new story using the response
    router.push("/"); // for now we are going to redirect to the home page
  }

  return (
    <>
      <FormContainer>
        <Description>
          Enter a brief description of what you want the story to be about:
        </Description>
        <Form onSubmit={handleSubmit}>
          <TextArea
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Write your story prompt here..."
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </>
  );
}
