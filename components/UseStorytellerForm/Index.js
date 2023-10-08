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
      setErrorMessage("Bitte schreibe Deinen Wunschzettel.");
      return;
    }
    const storyObjectPrompt = {
      prompt: prompt,
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
        "Irgendwas ist schiefgelaufen. Bitte versuche es nochmal."
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
              placeholder="z.B erzähle eine Geschichte über das blaue Pferd welches lernen wollte Fahrrad zu fahren"
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
