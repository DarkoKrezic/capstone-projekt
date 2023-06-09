import styled from "styled-components";
import { headerImage } from "@/styles";
import Link from "next/link";

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  background-image: url(${headerImage});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const AddStoryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: 100% 90%;
  box-shadow: rgba(0, 0, 0, 0.2) 1rem 2rem 2rem -1.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  outline: none;
  padding: 1rem 2rem;

  text-decoration: none;
  transition: all 235ms ease-in-out;
`;
export const StoryListContainer = styled.ul`
  list-style: none;
  max-height: 73vh;
  overflow: scroll;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;
  padding: 0;
`;

export const StoryListCard = styled.div`
  display: flex;
  padding: 0.5rem;
  width: 100%;
  margin: auto;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 1rem 2.8rem;
`;

export const StoryTitle = styled.p`
  width: 50%;
  font-size: 1.1rem;
  margin: 0.5rem 0.5rem 0.5rem;
`;

export const StoryCoverImage = styled.img`
  width: 20%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const StoryCreationDate = styled.p`
  align-self: self-end;
  font-size: 0.8rem;
  color: #fff;
  margin: 0;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const StyledListItem = styled.li`
  list-style: none;
`;
