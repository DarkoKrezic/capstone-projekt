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
  ImageContainer,
  BackgroundImage,
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
      <BackgroundImage
        style={{ backgroundImage: `url(${story.coverImage})` }}
      />
      <Title>{story.title}</Title>
      <ButtonContainer>
        <Link href="/">
          <BackButton type="button"> 🔙 zurück</BackButton>
        </Link>
        <Link href={`/stories/${story.id}/EditStory`}>
          <EditButton type="button">✂️ Bearbeiten</EditButton>
        </Link>
        <Link href={"/"}>
          <DeleteButton type="button" onClick={handleDeleteClick}>
            🗑️ Löschen
          </DeleteButton>
        </Link>
      </ButtonContainer>
      <ImageContainer>
        <Image
          src={story.coverImage}
          alt={story.title}
          width={330}
          height={330}
        />
      </ImageContainer>
      <TextContainer>
        <StoryText>{story.textContent}</StoryText>
      </TextContainer>
      <CreationDate>Created on:{story.dateCreated} </CreationDate>
    </CardContainer>
  );
}
