import { useRouter } from "next/router";
import StoryDetailCard from "@/components/Story";
import { useState, useEffect } from "react";

function StoryDetailPage() {
  const [stories, setStories] = useState([]);

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem("stories"));

    if (storedStories && Array.isArray(storedStories)) {
      setStories(storedStories);
    }
  }, []);

  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <p>Story not found</p>;
  }

  return <StoryDetailCard story={story} />;
}

export default StoryDetailPage;
