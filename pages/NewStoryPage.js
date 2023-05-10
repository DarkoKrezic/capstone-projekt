import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
//import { v4 as uuidv4 } from "uuid";
import stories from "@/public/db";
import NewStory from "@/components/NewStoryForm";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const Header = styled.h1`
  text-align: center;
`;

const NewStoryPage = () => {
  const router = useRouter();

  const handleStorySubmit = (title, author, image, text) => {
    const newStory = {
      id: stories.length + 1,
      title,
      author,
      coverImage: URL.createObjectURL(image),
      text: textContent,
      dateCreated: new Date().toLocaleDateString(),
    };

    // Add new story to the beginning of the stories array
    const updatedStories = [newStory, ...stories];
    stories.splice(0, stories.length, ...updatedStories);

    // Navigate to the "My Stories" page
    router.push("/");
  };

  return (
    <Container>
      <Header>Add a New Story</Header>
      <NewStory onSubmit={handleStorySubmit} />
    </Container>
  );
};

export default NewStoryPage;
