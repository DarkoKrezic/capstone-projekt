import NewStoryForm from "@/components/NewStoryForm";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { Header } from "@/components/StoryList/StyledStoryList";
import Link from "next/link";
import { headerImage } from "@/styles";
import PopupModal from "@/components/PopUpModal";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/NewStoryForm/StyledNewStoryForm";
const animateShadow = keyframes`
  0% {
    text-shadow: 1px 1px 10px rgba(0,0,0,0.5), 0 0 transparent;
  }
  50% {
    text-shadow: 1px 1px 10px rgba(10, 10, 10, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.3), 1px 1px rgba(0,0,0,0.1);
  }
  100% {
    text-shadow: 1px 1px 10px rgba(0,0,0,0.5), 0 0 transparent;   
  }
`;

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
  animation: ${animateShadow} 1s infinite;
`;
const LabelStoryteller = styled.label`
  display: block;
  margin-bottom: 1rem;
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
      {/* <PageContainer> */}
      <Header>Neue Geschichte</Header>
      <LabelStoryteller htmlFor="story-teller-link">
        ⬇️ Du kannst deine Geschichte erstellen lassen
      </LabelStoryteller>
      <UseStorytellerLink href="/StorytellerPage" id="story-teller-link">
        🪄 Storyteller 🪄
      </UseStorytellerLink>
      <p>Oder selbst Die Geschichte schreiben:</p>
      <NewStoryForm onSubmit={handleStorySubmit} />

      <PopupModal isOpen={isPopupOpen} onClose={handlePopupClose}>
        <p>
          Hier kannst du eine Geschichte schreiben oder eine Geschichte
          schreiben lassen von unserem Storyteller. Clicke dafür auf 🪄
          Storyteller.
        </p>
      </PopupModal>
      {/* </PageContainer> */}
    </>
  );
}
