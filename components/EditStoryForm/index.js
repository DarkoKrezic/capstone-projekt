import React, { useState } from "react";
import Image from "next/image";
import {
  Form,
  Input,
  TextArea,
  Button,
  Label,
} from "../NewStoryForm/StyledNewStoryForm";
import { produce } from "use-immer";

export default function EditStoryForm({ story, onUpdate }) {
  const [title, setTitle] = useState(story.title);
  const [coverImage, setCoverImage] = useState(story.coverImage);
  const [textContent, setTextContent] = useState(story.textContent);
  const [isUploading, setIsUploading] = useState(false);
  const [isNewImageSelected, setIsNewImageSelected] = useState(false);

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

  async function handleSubmitEdit(event) {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    if (isNewImageSelected) {
      formData.append("file", updatedImage);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    }
    try {
      let updatedImageUrl = story.coverImage;
      if (isNewImageSelected) {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const json = await response.json();
        updatedImageUrl = json.secure_url;
      }

      const updatedStory = produce(story, (draft) => {
        draft.title = title;
        draft.coverImage = updatedImageUrl;
        draft.textContent = textContent;
        draft.dateModified = new Date().toLocaleDateString();
      });
      console.log(updatedStory);
      onUpdate(updatedStory);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setCoverImage(null);
    }
  }

  return (
    <Form onSubmit={handleSubmitEdit}>
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
      {!coverImage && story.coverImage && (
        <Image
          src={story.coverImage}
          alt={`Preview of ${title}`}
          width="200"
          height="200"
        />
      )}
      <Label htmlFor="text-input">Edit Your Story:</Label>
      <TextArea
        id="text-input"
        placeholder="Write your story here"
        value={textContent}
        onChange={handleTextChange}
        required
        aria-label="Edit Your Story"
      />

      <Button type="submit" aria-label="Save your story">
        {isUploading ? "Saving …" : "Save"}
      </Button>
    </Form>
  );
}
