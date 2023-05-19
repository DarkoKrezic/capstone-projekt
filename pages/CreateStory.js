import NewStoryForm from "@/components/NewStoryForm";
import { Label } from "@/components/NewStoryForm/StyledNewStoryForm";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Header } from "@/components/StoryList/StyledStoryList";
const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
      <Label htmlFor="Click-to-use-Storyteller">
        Click here to use the Storyteller to create a new Story
      </Label>
      <Button
        id="Click-to-use-Storyteller"
        onClick={() => router.push("/StorytellerPage")}
      >
        Use Storyteller
      </Button>
      <NewStoryForm onSubmit={handleStorySubmit} />
    </>
  );
}
