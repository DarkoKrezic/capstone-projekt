import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, TextArea, Button, Label } from "./StyledNewStoryForm";

export default function NewStoryForm({ onSubmit, setStories }) {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [textContent, setTextContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleImageChange(event) {
    setCoverImage(event.target.files[0]);
  }

  function handleTextChange(event) {
    setTextContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const storiesFromLocalStorage =
      JSON.parse(localStorage.getItem("stories")) || [];
    const newStory = {
      id: storiesFromLocalStorage.length + 1,
      title: title,
      coverImage: URL.createObjectURL(coverImage),
      textContent: textContent,
      dateCreated: new Date().toLocaleDateString(),
    };
    onSubmit(newStory);
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
      <Label htmlFor="text-input">Schreib Deine Geschichte:</Label>
      <TextArea
        id="text-input"
        placeholder="Write your story here"
        value={textContent}
        onChange={handleTextChange}
        required
        aria-label="Schreib hier Deine Geschichte"
      />

      <Button type="submit" aria-label="Save your story">
        Save
      </Button>
    </Form>
  );
}
