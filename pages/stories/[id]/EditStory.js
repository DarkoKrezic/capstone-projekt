import { useRouter } from "next/router";
//import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import EditStoryForm from "@/components/EditStoryForm";
export default function EditStoryPage({ stories, setStories }) {
  const router = useRouter();
  const { id } = router.query;
  const storyToEdit = stories
    ? stories.find((story) => story.id === parseInt(id))
    : null;
  if (!storyToEdit) {
    console.log("No story to edit found");
    return null;
  }

  function handleStoryUpdate(updatedStory) {
    const updatedStories = stories.map((story) => {
      if (story.id === updatedStory.id) {
        return updatedStory;
      }
      return story;
    });
    setStories(updatedStories);
    router.push("/");
  }

  return <EditStoryForm story={storyToEdit} onUpdate={handleStoryUpdate} />;
}
