import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StoryTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const StoryCoverImage = styled.img`
  width: 70%;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const TextContainer = styled.div`
  max-height: 400px;
  width: 90%;
  overflow: scroll;
`;
const StoryText = styled.p`
  font-size: 1.2rem;
`;
const BackButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const BackButton = styled.button`
  margin-bottom: 1rem;
`;

export default function StoryDetailCard({ story }) {
  const router = useRouter();
  const handleBackToMyStoriesClick = () => {
    router.push("/");
  };
  return (
    <CardContainer>
      <StoryTitle>{story.title}</StoryTitle>
      <StoryCoverImage src={story.coverImage} alt={story.title} />
      <TextContainer>
        <StoryText>{story.textContent}</StoryText>
      </TextContainer>
      <BackButtonContainer>
        <BackButton onClick={handleBackToMyStoriesClick}>
          Back to My Stories
        </BackButton>
      </BackButtonContainer>
    </CardContainer>
  );
}
