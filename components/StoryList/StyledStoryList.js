import styled from "styled-components";
import { headerImage, ListBackgroundImage } from "@/styles";
import Link from "next/link";

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const StoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  background-image: url(${ListBackgroundImage});
  background-size: cover;
  background-position: center;
  background-size: 100% 115%;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const StoryListCard = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 70%;
  margin: 0 auto;

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
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const AddStoryButton = styled.button`
  background-image: url(${headerImage});
  background-repeat: repeat no-repeat;
  background-size: cover;
  border-radius: 2rem 15rem 15rem 2rem 2rem 15rem 15rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 1rem 2rem 2rem -1.5rem;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 2rem 15rem;
  border-bottom-right-radius: 15rem 2rem;
  border-top-left-radius: 15rem 2rem;
  border-top-right-radius: 2rem 15rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
