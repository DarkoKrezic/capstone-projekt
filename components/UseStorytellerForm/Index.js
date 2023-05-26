import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "../NewStoryForm/StyledNewStoryForm";
import {
  FormContainer,
  Description,
  TextArea,
  Button,
} from "./StyledUseStorytellerForm";
import { v4 as uuidv4 } from "uuid";

export default function UseStorytellerForm() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();

  function handlePromptChange(event) {
    setPrompt(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const storyObjectPrompt = {
      prompt: `You are a storyteller. Tell a story for children. The response should be a Json object, with the following properties: title: "here comes the generated Title", textContent: "here comes the generated Text", coverImagePrompt: "here comes the generated CoverImagePrompt" . Please use the following prompt: ${prompt}`,
    };
    try {
      const response = await fetch("/api/GeneratedStory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storyObjectPrompt),
      });
      if (!response.ok) {
        throw new Error("Failed to create story object");
      }
      // const { title, textContent, coverImagePrompt } = generatedStory;

      // const coverImage = await generateCoverImage(coverImagePrompt);

      const newStory = {
        id: uuidv4(),
        title: title,
        coverImage: coverImage,
        textContent: textContent,
        dateCreated: new Date().toLocaleDateString(),
      };

      router.push(`/stories/${newStory.id}/EditStory`);
    } catch (error) {
      console.error(error);
    }
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
