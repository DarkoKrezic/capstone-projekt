import Link from "next/link";
import {
  Header,
  StoryListContainer,
  StoryListCard,
  StoryTitle,
  StoryCoverImage,
  StoryCreationDate,
  StyledLink,
  AddStoryButton,
} from "./StyledStoryList";
import { useImmerLocalStorageState } from "@/lib/hook/useImmerLocalStorageState";

function StoryList() {
  const [stories, setStories] = useImmerLocalStorageState("stories", []);
  if (!stories || stories.length === 0) {
    return <p>Loading stories...</p>;
  }

  return (
    <>
      <Header>My Stories</Header>
      <Link href="/CreateStory">
        <AddStoryButton type="button">Write a new Story</AddStoryButton>
      </Link>
      <StoryListContainer>
        {stories.map((story) => (
          <StyledLink key={story.id} href={`/stories/${story.id}`}>
            <StoryListCard>
              <StoryCoverImage src={story.coverImage} alt={story.title} />
              <StoryTitle>{story.title}</StoryTitle>
              <StoryCreationDate>{story.dateCreated}</StoryCreationDate>
            </StoryListCard>
          </StyledLink>
        ))}
      </StoryListContainer>
    </>
  );
}

export default StoryList;
