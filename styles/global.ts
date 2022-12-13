import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  html {
    font-size: 62.5%;
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
    font-size: 1.6rem;
  }
`;
