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
    font-family: 'Nanum Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0; 
    padding: 0;
    overflow: hidden; 
  }

  a{
    text-decoration: none;
    color: black
  }

  input{
    padding: 0 1em;
    border: none;
    height: 2.5em;
    border-radius: 10px;
  }

  input:focus {outline: 2px solid ${({ theme }) => theme.themeColor.orange};} 
`;

export default GlobalStyle;
