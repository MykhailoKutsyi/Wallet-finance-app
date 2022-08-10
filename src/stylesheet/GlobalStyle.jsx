import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: auto;
  font-family: 'Circe', sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  img {
  width: 100%;
  display: block;
  height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
  list-style: none;
}
a {
  text-decoration: none;
}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
  
`;
