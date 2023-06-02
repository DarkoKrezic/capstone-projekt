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
import LoadingAnimation from "../LoadingAnimation";

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
      prompt: `You enact AESOP the great Greek Storyteller. Tell a story for children. The response should be a JSON object, with the following properties: title: write here the title of the story, textContent: write the story text (max 400 words) using this following prompt as brief description: ${prompt}, coverImagePrompt: write the CoverImagePrompt that describes the story and add children book style at the end so we use that style to generate our image. Also do not use characters that could cause syntax errors when parsing.`,
      // prompt: `Du nimmst die Rolle von AESOP ein, dem griechischen Geschichtenerzähler. Schreib eine Geschichte für Kinder in seinem Stil. Deine Antwort soll ein JSON Objekt sein und folgende Eigenschaften haben :" titel: schreib hier den Titel der Geschichte, textContent: hier schreibst du die Geschichte basierend auf folgendem prompt: ${prompt}, coverImagePrompt: hier schreibst du den Prompt für das CoverImage unserer Geschichte und fügst Kinderbuchstyle am Ende des Prompts hinzu so dass wir ein Image in diesem Style generiert bekommen." Benutze keine Zeichen die Syntaxfehler verursachen können.`,
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
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <LoadingAnimation /> : "Write the story"}
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}
