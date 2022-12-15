import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './reset';
import { Colors } from './colors';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  html {
    font-size: 62.5%;
  }

  html, body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    font-size: 1.6rem;
    font-weight: 400;
    box-sizing: border-box;
    color: ${Colors.gray400};
  }
`;
