import StoryList from "@/components/StoryList";
import stories from "@/public/db";
import { useRouter } from "next/router";

export default function HomePage() {
  return <StoryList stories={stories} />;
}
