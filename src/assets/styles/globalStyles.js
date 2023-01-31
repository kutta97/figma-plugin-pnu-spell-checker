import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray90};
    font-family: 'Pretendard';
  }
  #root {
    width: 100%;
    height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
