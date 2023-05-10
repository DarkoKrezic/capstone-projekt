import React, { useState } from "react";
import styled from "styled-components";
//import stories from "@/public/db";
import Image from "next/image";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  width: 90%;
  height: 50vh;
  resize: none;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function NewStoryForm({ onSubmit, setStories }) {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [textContent, setTextContent] = useState("");
  //const router = useRouter();

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
    const updatedStories = [newStory, ...storiesFromLocalStorage];
    setStories(updatedStories);
    console.log(updatedStories);

    localStorage.setItem("stories", JSON.stringify(updatedStories));
    console.log(localStorage.getItem("stories"));

    // setTitle("");
    // setCoverImage(null);
    // setTextContent("");
    // router.push("/");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Story Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      {coverImage && (
        <Image
          src={URL.createObjectURL(coverImage)}
          alt={`Preview of ${title}`}
          width="200"
          height="200"
        />
      )}
      <TextArea
        placeholder="Write your story here"
        value={textContent}
        onChange={handleTextChange}
        required
      />

      <Button type="submit">Save</Button>
    </Form>
  );
}
