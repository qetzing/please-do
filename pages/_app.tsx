import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'


function MyApp({Component, pageProps}: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Do things... Please 🙏"/>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
        <title>Please do 🙏</title>
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
