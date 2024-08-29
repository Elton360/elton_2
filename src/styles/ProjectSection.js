import styled from "styled-components";
import { Flex, grayText, secondaryColor } from "./Utilities.styled";

const Items = styled.div`
  max-width: 100%;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`;

const ItemImage = styled.div`
  height: auto;
  transform: translateZ(0);
  display: block;
  transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);

  &:before {
    content: "";
    display: block;
    padding-top: 75%;
    overflow: hidden;
  }

  img {
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    height: 100%;
    line-height: 0;
    object-fit: cover;
  }
`;

const ItemTagsWrap = styled(Flex)`
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  opacity: 0;
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 3rem;
`;

const Item = styled.div`
  width: 34.6rem;
  position: relative;
  overflow: hidden;
  margin: 0.8rem;
  border-radius: 0.8rem;

  background: ${secondaryColor};

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: inherit;
    opacity: 0.9;
    top: 0;
    left: 0;
    width: 100%;
    height: 18rem;
    transform: scale(2) translateX(-75%) translateY(-75%);
    transition: transform 1s cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:hover::after {
    transform: scale(2) translateX(0) translateY(0);
  }

  &:hover ${ItemImage} {
    transform: scale(0.9);
  }

  &:hover ${ItemTagsWrap} {
    opacity: 1;
    animation-name: moveInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  a .anticon {
    color: ${grayText};
    font-size: 2rem;
  }
`;

export { Items, ItemImage, ItemTagsWrap, Item };
