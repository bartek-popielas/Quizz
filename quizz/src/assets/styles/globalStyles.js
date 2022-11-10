import { createGlobalStyle } from "styled-components"

import {normalize} from "./normalize"
import LatoWoff from "../fonts/Lato-Regular.woff"
import LatoWoff2 from "../fonts/Lato-Regular.woff2"

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-weight: 400;
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
  }
  
  a, button {
    font-weight: 600;
  }
  
  @font-face {
    font-family: 'Lato';
    src: url(${LatoWoff2}) format ('woff2'),
         url(${LatoWoff}) format ('woof')
  }
`;


