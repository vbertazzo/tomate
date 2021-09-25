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
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${theme.colors.white}
  }
`}`
