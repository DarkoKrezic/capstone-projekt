import NewStoryForm from "@/components/NewStoryForm";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Header } from "@/components/StoryList/StyledStoryList";
import Link from "next/link";
import { headerImage } from "@/styles";
import PopupModal from "@/components/PopUpModal";
import React, { useState, useEffect } from "react";
import { PageContainer } from "@/components/UseStorytellerForm/StyledUseStorytellerForm";

const UseStorytellerLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: 95% 100%;

  cursor: pointer;
  font-size: 1.7rem;
  padding: 1rem 2rem;
  text-decoration: none;
  text-align: center;
`;

export default function NewStoryPage({ addStory }) {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  useEffect(() => {
    const hasSeenModal = localStorage.getItem("hasSeenModal");
    if (hasSeenModal === "true") {
      setIsPopupOpen(false);
    }
  }, []);

  function handleStorySubmit(newStory) {
    addStory(newStory);
    router.push("/");
  }
  function handlePopupClose() {
    setIsPopupOpen(false);
    localStorage.setItem("hasSeenModal", "true");
  }

  return (
    <>
      <PageContainer>
        <Header>Create a new story</Header>
        <UseStorytellerLink href="/StorytellerPage">
          🪄 Use Storyteller🪄
        </UseStorytellerLink>
        <NewStoryForm onSubmit={handleStorySubmit} />

        <PopupModal isOpen={isPopupOpen} onClose={handlePopupClose}>
          <p>
            You can create your own story here, or just let the storyteller do
            it for you! To do so just click the 🪄 Use Storyteller button above.
          </p>
        </PopupModal>
      </PageContainer>
    </>
  );
}
