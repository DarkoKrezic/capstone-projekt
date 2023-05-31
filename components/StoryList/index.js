import {
  Header,
  StoryListContainer,
  StoryListCard,
  StoryTitle,
  StoryCoverImage,
  StoryCreationDate,
  StyledLink,
  AddStoryLink,
  StyledListItem,
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
      <AddStoryLink href="/CreateStory">🖋️ Write a new Story</AddStoryLink>
      <StoryListContainer>
        {stories.map((story) => (
          <StyledListItem key={story.id}>
            <StyledLink href={`/stories/${story.id}`}>
              <StoryListCard>
                <StoryCoverImage src={story.coverImage} alt={story.title} />
                <StoryTitle>{story.title}</StoryTitle>
                <StoryCreationDate>{story.dateCreated}</StoryCreationDate>
              </StoryListCard>
            </StyledLink>
          </StyledListItem>
        ))}
      </StoryListContainer>
    </>
  );
}

export default StoryList;
