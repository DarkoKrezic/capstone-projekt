import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
`;
const StoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
`;
const StoryListCard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 90%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StoryTitle = styled.h2`
  width: 100%;
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
`;
const StoryCoverImage = styled.img`
  width: 20%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const StoryCreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;

function StoryList() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const storedStories = localStorage.getItem("stories");
    if (storedStories) {
      setStories(JSON.parse(storedStories));
    }
  }, []);
  //console.log(localStorage.getItem("stories"));

  //console.log(stories);
  return (
    <StoryListContainer>
      <Header>My Stories</Header>
      {stories.map((story) => (
        <Link key={story.id} href={`/stories/${story.id}`}>
          <StoryListCard>
            <StoryCoverImage src={story.coverImage} alt={story.title} />
            <StoryTitle>{story.title}</StoryTitle>
            <StoryCreationDate>{story.dateCreated}</StoryCreationDate>
          </StoryListCard>
        </Link>
      ))}
    </StoryListContainer>
  );
}

export default StoryList;
