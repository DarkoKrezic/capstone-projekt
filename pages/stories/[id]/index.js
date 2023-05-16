import { useRouter } from "next/router";
import StoryDetailCard from "@/components/Story";

function StoryDetailPage({ stories, deleteStory }) {
  const router = useRouter();
  const { id } = router.query;

  const story = stories.find((story) => story.id === id);

  if (!story) {
    return <p>Story not found</p>;
  }

  return <StoryDetailCard story={story} deleteStory={deleteStory} />;
}

export default StoryDetailPage;
