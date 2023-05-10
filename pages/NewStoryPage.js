import NewStoryForm from "@/components/NewStoryForm";
import { useRouter } from "next/router";
import { useState } from "react";
export default function NewStoryPage() {
  const [stories, setStories] = useState([]);
  const router = useRouter();
  function handleStorySubmit(newStory) {
    const storiesFromLocalStorage =
      JSON.parse(localStorage.getItem("stories")) || [];

    const updatedStories = [newStory, ...storiesFromLocalStorage];

    localStorage.setItem("stories", JSON.stringify(updatedStories));

    router.push("/");
  }

  return <NewStoryForm onSubmit={handleStorySubmit} setStories={setStories} />;
}
