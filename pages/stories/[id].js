import { useRouter } from "next/router";
import StoryDetailCard from "@/components/Story";
import stories from "@/public/db";

function StoryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <p>Story not found</p>;
  }

  return <StoryDetailCard story={story} />;
}

export default StoryDetailPage;
