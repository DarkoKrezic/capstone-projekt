import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
// const CoverImage = styled.img`
//   width: 60%;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;
const TextContainer = styled.div`
  max-height: 300px;
  width: 90%;
  overflow: scroll;
`;
const StoryText = styled.p`
  font-size: 1.2rem;
`;

const BackButton = styled.button`
  margin-bottom: 1rem;
`;
const CreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;

export default function StoryDetailCard({ story }) {
  return (
    <CardContainer>
      <Title>{story.title}</Title>
      <Image
        src={story.coverImage}
        alt={story.title}
        width={400}
        height={400}
      />
      <TextContainer>
        <StoryText>{story.textContent}</StoryText>
      </TextContainer>
      <CreationDate>Erstellt am :{story.dateCreated} </CreationDate>
      <Link href="/">
        <BackButton type="button">Back to My Stories</BackButton>
      </Link>
    </CardContainer>
  );
}
