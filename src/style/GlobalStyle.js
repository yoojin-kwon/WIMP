import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body{
    background: ${({ theme }) => theme.themeColor.white};
  }
`;

export default GlobalStyle;
