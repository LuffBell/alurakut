import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/components/lib/AlurakutCummons'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }

  body {
    background-image: url('https://github.com/LuffBell/alurakut/blob/main/src/img/background.jpg?raw=true');
  }

  img {
    display: block;

    max-width: 100%;
    height: auto;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
