import React, { useState } from "react";
import Image from "next/image";
import {
  Form,
  Input,
  TextArea,
  Button,
  Label,
  ImageInput,
} from "./StyledNewStoryForm";
import { v4 as uuidv4 } from "uuid";

export default function NewStoryForm({ onSubmit, setStories }) {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [isUploading, setIsUploading] = useState(false);

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

  async function handleSubmit(event) {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", coverImage);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const json = await response.json();
      const newStory = {
        id: uuidv4(),
        title: title,
        coverImage: json.secure_url,
        textContent: textContent,
        dateCreated: new Date().toISOString(),
      };
      onSubmit(newStory);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setCoverImage(null);
      setTextContent("");
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="title-input">Titel: ⬇️</Label>
      <Input
        id="title-input"
        type="text"
        placeholder="Titel Deiner Geschichte"
        value={title}
        onChange={handleTitleChange}
        required
        aria-required="true"
        aria-label="Story Title"
        autoComplete="off"
      />
      <Label htmlFor="image-input">Cover Image:⬇️</Label>
      <ImageInput
        id="image-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
        aria-required="true"
        aria-label="Cover Image"
      />
      {coverImage && (
        <Image
          src={URL.createObjectURL(coverImage)}
          alt={`Preview of ${title}`}
          width="200"
          height="200"
        />
      )}
      <Label htmlFor="text-input">Schreib Deine Geschichte: ⬇️</Label>
      <TextArea
        id="text-input"
        placeholder="Schreibe hier Deine Geschichte oder lass sie vom Storyteller schreiben in dem Du auf Use Storyteller klickst. "
        value={textContent}
        onChange={handleTextChange}
        required
        aria-label="Write your story here"
      />

      <Button type="submit" aria-label="Save your story">
        {isUploading ? "💾 Speichert …" : "💾 Speichern"}
      </Button>
      <Button type="button" href="/">
        Nicht Speichern
      </Button>
    </Form>
  );
}
