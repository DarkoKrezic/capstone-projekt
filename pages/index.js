import StoryList from "@/components/StoryList";
export default function HomePage({ stories }) {
  return (
    <>
      <StoryList stories={stories} />
    </>
  );
}
