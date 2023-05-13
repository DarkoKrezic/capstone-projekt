import StoryList from "@/components/StoryList";
import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
  margin-bottom: 1rem;
`;

export default function HomePage({ stories }) {
  return (
    <>
      <StoryList stories={stories} />
      <Link href="/CreateStory">
        <Button type="button">Add new story</Button>
      </Link>
    </>
  );
}
