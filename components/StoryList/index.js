import Link from "next/link";
import {
  Header,
  StoryListContainer,
  StoryListCard,
  StoryTitle,
  StoryCoverImage,
  StoryCreationDate,
} from "./StyledStoryList";

function StoryList({ stories }) {
  //console.log("stories:", stories);
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
