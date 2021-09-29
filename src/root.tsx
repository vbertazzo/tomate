import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import { App } from './app'
import { theme } from 'resources/theme'

import 'normalize.css'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`${({ theme }) => css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    color: ${theme.colors.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    height: 100%;
  }

  [data-js="app"] {
    height: 100%;
  }
`}`
