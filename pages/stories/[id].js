import { useRouter } from "next/router";
import StoryDetailCard from "@/components/StoryDetailCard";
import stories from "@/public/db";

function StoryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  console.log("stories:", stories);
  console.log("id:", id);

  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  return <StoryDetailCard story={story} />;
}

export default StoryDetailPage;
