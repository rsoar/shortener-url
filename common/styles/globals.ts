import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { 
    --blue-primary: #5390d9;
    --blue-secondary: #4EA8DE;
    --blue-terciary: #285495;
    
    --primary: #F7F8FC;
    --secondary: #E6E8F1;

    --text-black: #0F1A20;
    --text-black-secondary: #191923;
    --text-black-terciary: #252323;
    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  background-color: var(--primary);

  }
  
  input, button {
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;
