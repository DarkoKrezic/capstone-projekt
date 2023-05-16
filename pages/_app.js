import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import initialStories from "@/db.js";
import produce from "immer";

export default function App({ Component, pageProps }) {
  const [stories, setStories] = useImmerLocalStorageState("stories", {
    defaultValue: initialStories,
  });

  function addStory(newStory) {
    setStories([newStory, ...stories]);
  }
  function updateStory(updatedStory) {
    setStories((prevStories) =>
      produce(prevStories, (draft) => {
        const index = draft.findIndex((story) => story.id === updatedStory.id);
        if (index !== -1) {
          draft[index] = updatedStory;
        }
      })
    );
  }
  function deleteStory(id) {
    setStories((prevStories) => prevStories.filter((story) => story.id !== id));
  }
  // function deleteStory(storyId) {
  //   setStories((prevStories) =>
  //     produce(prevStories, (draft) => {
  //       const index = draft.findIndex((story) => story.id === storyId);
  //       if (index !== -1) {
  //         draft.splice(index, 1);
  //       }
  //     })
  //   );
  // }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        stories={stories}
        addStory={addStory}
        updateStory={updateStory}
        setStories={setStories}
        deleteStory={deleteStory}
        produce={produce}
      />
    </>
  );
}
