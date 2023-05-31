import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CardContainer,
  Title,
  TextContainer,
  StoryText,
  BackButton,
  CreationDate,
  EditButton,
  DeleteButton,
  ButtonContainer,
} from "./StyledStory";

export default function StoryDetailCard({ story, deleteStory }) {
  function handleDeleteClick() {
    const confirmDelete = confirm(
      "Are you sure you want to delete this story?"
    );
    if (confirmDelete) {
      deleteStory(story.id);
    }
  }
  return (
    <CardContainer>
      <Title>{story.title}</Title>
      <ButtonContainer>
        <Link href="/">
          <BackButton type="button"> 🔙 Back to My Stories</BackButton>
        </Link>
        <Link href={`/stories/${story.id}/EditStory`}>
          <EditButton type="button">✂️ Edit story</EditButton>
        </Link>
        <Link href={"/"}>
          <DeleteButton type="button" onClick={handleDeleteClick}>
            🗑️ Delete story
          </DeleteButton>
        </Link>
      </ButtonContainer>
      <Image
        src={story.coverImage}
        alt={story.title}
        width={280}
        height={280}
      />
      <TextContainer>
        <StoryText>{story.textContent}</StoryText>
      </TextContainer>
      <CreationDate>Erstellt am :{story.dateCreated} </CreationDate>
    </CardContainer>
  );
}
