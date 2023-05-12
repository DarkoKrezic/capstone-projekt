import NewStoryForm from "@/components/NewStoryForm";
import { useRouter } from "next/router";

export default function NewStoryPage({ addStory }) {
  const router = useRouter();
  function handleStorySubmit(newStory) {
    addStory(newStory);
    router.push("/");
  }

  return <NewStoryForm onSubmit={handleStorySubmit} />;
}
