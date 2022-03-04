import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
