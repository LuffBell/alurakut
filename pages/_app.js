import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCummons'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%23829add' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='5' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg transform='rotate(0 0 0)' %3E%3Ccircle fill='%23829add' r='10'/%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
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
