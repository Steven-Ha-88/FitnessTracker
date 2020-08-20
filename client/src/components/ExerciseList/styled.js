import styled, { createGlobalStyle } from "styled-components";

export const Table = styled.table`
  @media (max-width: 480px) {
    padding: 10px !important;
  }
`;

export const Header = styled.th`
  @media (max-width: 480px) {
    padding: 10px !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    @media (max-width: 480px) {
      font-size: 11px !important;
    }
  }
`;
