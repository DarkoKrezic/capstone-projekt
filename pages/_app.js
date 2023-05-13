import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";
import initialStories from "@/db.js";

export default function App({ Component, pageProps }) {
  const [stories, setStories] = useImmerLocalStorageState("stories", {
    defaultValue: initialStories,
  });

  function addStory(newStory) {
    setStories([newStory, ...stories]);
  }
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} stories={stories} addStory={addStory} />
    </>
  );
}
