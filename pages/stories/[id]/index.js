import { useRouter } from "next/router";
import StoryDetailCard from "@/components/Story";

function StoryDetailPage({ stories }) {
  const router = useRouter();
  const { id } = router.query;

  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <p>Story not found</p>;
  }

  return <StoryDetailCard story={story} />;
}

export default StoryDetailPage;
