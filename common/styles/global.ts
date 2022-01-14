import styled, { createGlobalStyle } from "styled-components";
import { Palette } from "./palette";
import { Reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${Palette},
  ${Reset},
`;
