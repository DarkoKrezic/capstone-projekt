import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import initialStories from "@/db.js";
import Layout from "@/Layout";
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
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          stories={stories}
          addStory={addStory}
          updateStory={updateStory}
          setStories={setStories}
          deleteStory={deleteStory}
        />
      </Layout>
    </>
  );
}
