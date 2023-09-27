import styled from "styled-components";
import { headerImage } from "@/styles";
import Link from "next/link";

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  background-image: url(${headerImage});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  margin: 0 auto;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;

export const AddStoryLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: 100% 90%;
  box-shadow: rgba(0, 0, 0, 0.2) 1rem 2rem 2rem -1.5rem;
  cursor: pointer;
  font-size: 1.4rem;
  outline: none;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
`;
export const StoryListContainer = styled.ul`
  list-style: none;
  max-height: 75vh;
  overflow: scroll;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  padding: 0;
  width: 100%;
`;

export const StoryListCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
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
  word-wrap: break-word;
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
