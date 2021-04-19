import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background: #252525;
    --background-secondary: #6930C3;
    --color: #DCDDE0;
    --color-input: #949494;
    --background-input: #2D2D2D;
    --background-icon-input: #323232;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body  {
    width: 100%;
    height: 100%;
  }

  #root {
    height: 100vh;
  }

  body {
    background: #F2F3F5;
    font-family: 'Roboto', sans-serif;
    color: var(--color)
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
  }

  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`
