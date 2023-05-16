import Link from "next/link";
import {
  Header,
  StoryListContainer,
  StoryListCard,
  StoryTitle,
  StoryCoverImage,
  StoryCreationDate,
} from "./StyledStoryList";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

function StoryList() {
  const [stories, setStories] = useImmerLocalStorageState("stories", []);
  if (!stories || stories.length === 0) {
    return <p>Loading stories...</p>;
  }

  return (
    <StoryListContainer>
      <Header>My Stories</Header>

      {stories.map((story) => (
        <Link key={story.id} href={`/stories/${story.id}`}>
          <StoryListCard>
            <StoryCoverImage src={story.coverImage} alt={story.title} />
            <StoryTitle>{story.title}</StoryTitle>
            <StoryCreationDate>{story.dateCreated}</StoryCreationDate>
          </StoryListCard>
        </Link>
      ))}
    </StoryListContainer>
  );
}

export default StoryList;
