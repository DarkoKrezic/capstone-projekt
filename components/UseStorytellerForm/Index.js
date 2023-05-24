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
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-KWKX4sUxoLRs3G6H2PQOR6oN",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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

    // console.log("storyObjectPrompt:", storyObjectPrompt);
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storyObjectPrompt),
      });
      if (!response.ok) {
        throw new Error("Failed to create story object");
      }
      const generatedStory = await response.json();
      //console.log("Generated Story:", generatedStory);

      const { title, textContent, coverImagePrompt } = generatedStory;

      // Generate the cover image using DALL·E API
      const coverImage = await generateCoverImage(coverImagePrompt);

      // Update the generatedStory with the cover image URL
      generatedStory.coverImage = coverImage;

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
  // async function generateCoverImage(coverImagePrompt) {
  //   try {
  //     const response = await fetch(
  //       "https://api.openai.com/v1/images/generations",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ prompt: coverImagePrompt, n: 1, size: "512" }),
  //         headers: {
  //           Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to generate the cover image");
  //     }

  //     const { image_url } = await response.json();
  //     return image_url;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }

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
