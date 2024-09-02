import styled from "styled-components";
import {
  Flex,
  grayText,
  primaryColorDark,
  secondaryColor,
} from "./Utilities.styled";

const Items = styled.div`
  padding-left: 6rem;
  position: relative;
  max-width: 100vw;
  margin: auto;
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
  z-index: auto;

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-track {
    background: transparent !important;
    box-shadow: none;
    border-radius: 0;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }
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
  z-index: 3;
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
  flex-shrink: 0;
  background: ${secondaryColor};
  z-index: 0;

  &:hover {
    z-index: 1;
    transform: scale(1.025);
    transition: transform 0.5s;
  }

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

const ScrollButton = styled.button`
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  position: absolute;
  top: 8px;
  font-size: 5rem;
  color: #fff;
  height: 448px;

  &: hover {
    color: ${primaryColorDark};
  }

  @media (min-width: 2273px) {
    display: none;
  }
  @media (max-width: 568px) {
    display: none;
  }
`;
const LeftScrollButton = styled(ScrollButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: ${({ $scrollAmount }) => `${$scrollAmount || 0}px`};
`;

const RightScrollButton = styled(ScrollButton)`
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  right: ${({ $scrollAmount }) => `${-$scrollAmount + 68 || 68}px`};
`;

export {
  Items,
  ItemImage,
  ItemTagsWrap,
  Item,
  LeftScrollButton,
  RightScrollButton,
};
