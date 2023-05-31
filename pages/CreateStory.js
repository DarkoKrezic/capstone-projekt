import NewStoryForm from "@/components/NewStoryForm";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Header } from "@/components/StoryList/StyledStoryList";
import Link from "next/link";
import { headerImage } from "@/styles";

const UseStorytellerLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-image: url(${headerImage});
  background-repeat: repeat no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 1rem 2rem 2rem -1.5rem;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;

export default function NewStoryPage({ addStory }) {
  const router = useRouter();
  function handleStorySubmit(newStory) {
    addStory(newStory);
    router.push("/");
  }

  return (
    <>
      <Header>Create a new story</Header>
      <UseStorytellerLink href="/StorytellerPage">
        🪄 Use Storyteller
      </UseStorytellerLink>
      <NewStoryForm onSubmit={handleStorySubmit} />
    </>
  );
}
