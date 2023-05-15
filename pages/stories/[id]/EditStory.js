import { useRouter } from "next/router";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import EditStoryForm from "@/components/EditStoryForm";
import { useState } from "react";
export default function EditStoryPage({}) {
  const router = useRouter();
  const { id } = router.query;

  const [stories, setStories] = useImmerLocalStorageState("stories", []);

  const storyToEdit = stories.find((story) => story.id === parseInt(id));
  if (!storyToEdit) {
    console.error("No story to edit found");
  }

  function handleStoryUpdate(updatedStory) {
    const updatedStories = stories.map((story) => {
      if (story.id === updatedStory.id) {
        return updatedStory;
      }
      return story;
    });
    setStories(updatedStories);
    setStoryToEdit(updatedStory);
    router.push("/");
  }

  return <EditStoryForm story={storyToEdit} onUpdate={handleStoryUpdate} />;
}
