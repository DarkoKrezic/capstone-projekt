import StoryList from "@/components/StoryList";
import stories from "@/public/db";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
const Button = styled.button`
  margin-bottom: 1rem;
`;

export default function HomePage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const storiesFromLocalStorage = JSON.parse(localStorage.getItem("stories"));
    if (storiesFromLocalStorage) {
      setStories(storiesFromLocalStorage);
    } else {
      setStories(stories);
      localStorage.setItem("stories", JSON.stringify(stories));
    }
    console.log(storiesFromLocalStorage);
  }, []);

  return (
    <>
      <StoryList stories={stories} />
      <Link href="/NewStoryPage">
        <Button type="button">Add new story</Button>
      </Link>
    </>
  );
}
