import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "../NewStoryForm/StyledNewStoryForm";
import {
  FormContainer,
  Description,
  TextArea,
  Button,
} from "./StyledUseStorytellerForm";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

export default function UseStorytellerForm() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useImmerLocalStorageState("stories", []);
  const [error, setError] = useState(null);
  const router = useRouter();

  function handlePromptChange(event) {
    setPrompt(event.target.value);
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!prompt) {
      setError("Please enter a prompt for the story.");
      return;
    }
    const storyObjectPrompt = {
      prompt: `Tell a story for children. The response should be a JSON object, with the following properties: title: write here the title of the story, textContent: write the story text (max 400 words) using this following prompt as brief description: ${prompt}, coverImagePrompt: write the CoverImagePrompt that describes the story and add children book style at the end so we use that style to generate our image `,
    };
    try {
      setIsLoading(true);
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
      const newGeneratedStory = await response.json();
      setStories((draft) => {
        draft.push(newGeneratedStory);
      });
      setIsLoading(false);

      router.push(`/stories/${newGeneratedStory.id}/EditStory`);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Writing your story..." : "Write the story"}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}
