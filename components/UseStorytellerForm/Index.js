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
  const router = useRouter();

  function handlePromptChange(event) {
    setPrompt(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const storyObjectPrompt = {
      prompt: `You are a storyteller. Tell a story for children. The response should be a Json object, with the following properties: title: "here comes the generated Title", textContent: "here you should write the short story text(max 200 words) using this prompt as brief description: ${prompt}", coverImagePrompt: "here comes the generated CoverImagePrompt with :children book style at the end "`,
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
      console.log(newGeneratedStory);
      setStories((draft) => {
        draft.push(newGeneratedStory); // Using the immer syntax to update the stories state
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
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}
