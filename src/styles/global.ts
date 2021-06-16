import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFF;

    --gray-50: #f0f2f5;
    --gray-200: #E2E8F0;
    --gray-400: #A0AEC0;
    --gray-500: #718096;
    --gray-600: #333E47;

    --cyan-400: #7CE0D3;
    --green-400: #48BB78;
    --purple-400: #9F7AEA;
    --blue-400: #4299E1;
    --red-400: #F56565;
  }


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-50);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
