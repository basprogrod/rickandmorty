import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  .container {
    width: 100%;
    max-width: 1120px;
    background: ${({ theme }) => (theme.backgrounds.headerBg)};
    margin: 0 auto;
  }

`
export default GlobalStyles
