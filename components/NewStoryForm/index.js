import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, TextArea, Button, Label } from "./StyledNewStoryForm";
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
        dateCreated: new Date().toLocaleDateString(),
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
      <Label htmlFor="title-input">Story Title:</Label>
      <Input
        id="title-input"
        type="text"
        placeholder="Name of your Story"
        value={title}
        onChange={handleTitleChange}
        required
        aria-required="true"
        aria-label="Story Title"
        autoComplete="off"
      />
      <Label htmlFor="image-input">Cover Image:</Label>
      <Input
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
      <Label htmlFor="text-input">Write your story:</Label>
      <TextArea
        id="text-input"
        placeholder="Write your story here"
        value={textContent}
        onChange={handleTextChange}
        required
        aria-label="Schreib hier Deine Geschichte"
      />

      <Button type="submit" aria-label="Save your story">
        {isUploading ? "Saving …" : "Save"}
      </Button>
    </Form>
  );
}
