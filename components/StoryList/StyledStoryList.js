import styled from "styled-components";

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const StoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
`;

export const StoryListCard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 90%;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const StoryTitle = styled.h2`
  width: 100%;
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
`;

export const StoryCoverImage = styled.img`
  width: 20%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const StoryCreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`;
