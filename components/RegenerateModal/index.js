import React, { useState } from "react";
import { Button, Label } from "../NewStoryForm/StyledNewStoryForm";
import { StyledRegenerateModal, TextArea } from "./StyledRegenerateModal";
import LoadingAnimation from "../LoadingAnimation";
// const [prompt, setPrompt] = useState("");
export default function RegenerateModal({
  isVisible,
  prompt,
  onChangePrompt,
  onRegenerate,
  onClose,
  isRegenerating,
}) {
  if (!isVisible) {
    return null;
  }

  return (
    <StyledRegenerateModal>
      <Label>schreib was geändert werden soll ⬇️:</Label>
      <TextArea value={prompt} onChange={onChangePrompt} />
      <Button type="button" onClick={onRegenerate}>
        Neugenerieren
      </Button>
      <Button type="button" onClick={onClose}>
        Schließen
      </Button>
      {isRegenerating && <LoadingAnimation />}
    </StyledRegenerateModal>
  );
}
