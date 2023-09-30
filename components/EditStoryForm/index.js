import React, { useState } from "react";
import Image from "next/image";
import {
  Form,
  Input,
  TextArea,
  Button,
  Label,
  ImageInput,
} from "../NewStoryForm/StyledNewStoryForm";
import { StyledRegenerateModal } from "../RegenerateModal/StyledRegenerateModal";
import RegenerateModal from "../RegenerateModal";
import { ImageContainer } from "../Story/StyledStory";
import LoadingAnimation from "../LoadingAnimation";
import Link from "next/link";

export default function EditStoryForm({ story, onUpdate }) {
  const [title, setTitle] = useState(story.title);
  const [coverImage, setCoverImage] = useState(null);
  const [textContent, setTextContent] = useState(story.textContent);
  const [isUploading, setIsUploading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const [prompt, setPrompt] = useState(story.prompt);
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setCoverImage(file);
  }

  function handleTextChange(event) {
    setTextContent(event.target.value);
  }
  function handlePromptChange(event) {
    console.log(event.target.value);
    setPrompt(event.target.value);
  }
  async function handleSubmitEdit(event) {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    if (coverImage) {
      formData.append("file", coverImage);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    }
    try {
      let coverImageUrl = story.coverImage;
      if (coverImage) {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const json = await response.json();
        coverImageUrl = json.secure_url;
      }

      const updatedStory = {
        ...story,
        title,
        coverImage: coverImageUrl,
        textContent,
        dateModified: new Date().toLocaleDateString(),
      };
      onUpdate(updatedStory);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setCoverImage(null);
    }
  }
  async function handleRegenerateStory() {
    console.log(prompt);
    const changeStoryPrompt = {
      prompt: ` ${story.textContent} + ${prompt}  `,
    };
    try {
      setIsRegenerating(true);
      setIsLoading(true);
      const response = await fetch("/api/RegenerateText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changeStoryPrompt),
      });
      if (!response.ok) {
        throw new Error("Failed to regenerate story");
      }
      const regeneratedStoryText = await response.json();
      console.log(regeneratedStoryText);
      setTextContent(regeneratedStoryText.newTextContent);
      setIsRegenerating(false);
    } catch (error) {
      setIsLoading(false);
      setIsRegenerating(false);
      console.error("Failed to regenerate story:", error);
    } finally {
      setModalVisible(false);
    }
  }

  return (
    <Form onSubmit={handleSubmitEdit}>
      <Label htmlFor="title-input">Name der Geschichte ⬇️:</Label>
      <Input
        id="title-input"
        type="text"
        placeholder="Name deiner Geschichte..."
        value={title}
        onChange={handleTitleChange}
        required
        aria-required="true"
        aria-label="Story Title"
      />
      <Label htmlFor="image-input">Cover Image ändern ⬇️:</Label>
      <ImageInput
        id="image-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        aria-label="Cover Image"
      />
      <ImageContainer>
        {coverImage && (
          <Image
            src={URL.createObjectURL(coverImage)}
            alt={`Preview of ${title}`}
            width="250"
            height="250"
          />
        )}
        {!coverImage && story.coverImage && (
          <Image
            src={story.coverImage}
            alt={`Preview of ${title}`}
            width="330"
            height="330"
          />
        )}
      </ImageContainer>
      <Button type="button" onClick={() => setModalVisible(true)}>
        Geschichte vom Storyteller verändern lassen
      </Button>
      <Label htmlFor="text-input">Geschichte selbst bearbeiten ⬇️:</Label>
      <RegenerateModal
        isVisible={modalVisible}
        existingStory={story.textContent}
        onChangePrompt={handlePromptChange}
        onRegenerate={handleRegenerateStory}
        onClose={() => setModalVisible(false)}
      ></RegenerateModal>
      <TextArea
        id="text-input"
        placeholder="Write your story here"
        value={textContent}
        onChange={handleTextChange}
        required
        aria-label="Edit Your Story"
      />

      <Button type="submit" aria-label="Save your story">
        {isUploading ? "💾 Speichert …" : "💾 Speichern"}
      </Button>
      <Link href="/">
        <Button type="button">Zurück ohne zu Speichern</Button>
      </Link>
    </Form>
  );
}
