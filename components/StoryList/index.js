import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Header,
  StoryListContainer,
  StoryListCard,
  StoryTitle,
  StoryCoverImage,
  StoryCreationDate,
} from "./StyledStoryList";

import initialStories from "@/public/db";

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem("stories"));

    if (storedStories && storedStories.length > 0) {
      setStories(storedStories);
    } else {
      localStorage.setItem("stories", JSON.stringify(initialStories));
      setStories(initialStories);
    }
  }, []);

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
