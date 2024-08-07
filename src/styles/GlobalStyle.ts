import { createGlobalStyle } from 'styled-components';
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font: 300 16px/1.5 "Open Sans", sans-serif;
    color: var(--white);
    font-family: var(--font);
    font-size: var(--fz-md);
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.04em;
    color: var(--dark-grey);
    margin: 10px;
    text-align: center;
  }

  p {
    margin: 0 0 10px;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  .app {
    min-height: 100vh;
  }
`;

export default GlobalStyle;