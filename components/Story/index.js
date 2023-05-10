import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  CardContainer,
  Title,
  TextContainer,
  StoryText,
  BackButton,
  CreationDate,
} from "./StyledStory";

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
