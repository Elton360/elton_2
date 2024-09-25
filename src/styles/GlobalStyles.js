import { createGlobalStyle } from "styled-components";
import { lightText, primaryColor, primaryColorDark } from "./Utilities.styled";

const GlobalStyle = createGlobalStyle`
 

  /* Global Reset and Font Styles */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif !important;
    z-index: 1;
  }

  html {
    font-size: 10px;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    color: ${lightText};
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 0.8rem;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.5rem ${lightText};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${primaryColor};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${primaryColorDark};
  }

  /* Animations */
  @-webkit-keyframes moveInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-10rem);
      transform: translateX(-10rem);
    }

    80% {
      -webkit-transform: translateX(1rem);
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-10rem);
      transform: translateX(-10rem);
    }

    80% {
      -webkit-transform: translateX(1rem);
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @-webkit-keyframes moveInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(10rem);
      transform: translateX(10rem);
    }

    80% {
      -webkit-transform: translateX(-1rem);
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(10rem);
      transform: translateX(10rem);
    }

    80% {
      -webkit-transform: translateX(-1rem);
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  @-webkit-keyframes moveInBottom {
    0% {
      opacity: 0;
      -webkit-transform: translateY(3rem);
      transform: translateY(3rem);
    }

    100% {
      opacity: 1;
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }
`;

export default GlobalStyle;
