import Link from "next/link";
//import { useState, useEffect } from "react";
import {
  Header,
  StoryListContainer,
  StoryListCard,
  StoryTitle,
  StoryCoverImage,
  StoryCreationDate,
} from "./StyledStoryList";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

import initialStories from "@/public/db.js";

function StoryList() {
  const [stories, setStories] = useImmerLocalStorageState("stories", {
    defaultValue: [],
  });
  if (typeof window !== "undefined") {
    const storedStories = JSON.parse(localStorage.getItem("stories"));
    if (!storedStories || storedStories.length === 0) {
      localStorage.setItem("stories", JSON.stringify(initialStories));
      setStories(initialStories);
    }
  }

  console.log("stories:", stories);

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
