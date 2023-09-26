import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "../NewStoryForm/StyledNewStoryForm";
import {
  FormContainer,
  Description,
  TextArea,
  Button,
  Label,
  PageContainer,
} from "./StyledUseStorytellerForm";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import LoadingAnimation from "../LoadingAnimation";

export default function UseStorytellerForm() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useImmerLocalStorageState("stories", []);
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  function handlePromptChange(event) {
    setPrompt(event.target.value);
    setErrorMessage(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!prompt) {
      setErrorMessage("Please enter a prompt for the story.");
      return;
    }
    const storyObjectPrompt = {
      prompt: `You enact AESOP the great greek Storyteller. Tell a story for children in the style of AESOP in German language. It should contain a moral message. The response should be a JSON object, with the following properties: title: write here the title of the story, textContent: write the story text (max 600 words) using this following prompt as brief description: ${prompt}, coverImagePrompt: write the CoverImagePrompt (max-length 900 characters) that describes the story and add children book style at the end so we use that style to generate our image. Also do not use characters or  symbols that could cause syntax errors when parsing.`,
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
      setErrorMessage(
        "Failed to create your story for some reason. Please try again."
      );
    }
  }

  return (
    <>
      <PageContainer>
        <Description>
          Schreibe auf was Du Dir in der Geschichte wünschst. Welche Charaktere
          sind dabei, welches Thema oder was die Moral der Geschichte sein soll.
        </Description>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="text-input">
              📝 Schreibe Deinen Wunschzettel in dieses Feld :
            </Label>
            <TextArea
              id="text-input"
              value={prompt}
              onChange={handlePromptChange}
              placeholder="e.g. a story about 12 little sharks who wanted to learn JavaScript..."
              required
              aria-label="Write what your story should be about here"
            />
            {errorMessage && <p>{errorMessage}</p>}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <LoadingAnimation /> : "Senden"}
            </Button>
          </Form>
        </FormContainer>
      </PageContainer>
    </>
  );
}
