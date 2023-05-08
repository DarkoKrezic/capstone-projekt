import StoryList from "@/components/StoryList";
import stories from "@/public/db";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  function handleStorySelect(story) {
    router.push(`/stories/${story.id}`);
  }
  return (
    <div>
      <StoryList stories={stories} onStorySelect={handleStorySelect} />
    </div>
  );
}
