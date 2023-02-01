import { ApolloProvider } from '@apollo/client'
import { Provider as AuthProvider } from 'next-auth/client'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { useApollo } from 'utils/apollo'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import ProgressBar from 'nextjs-progressbar'
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <CartProvider>
              <WishlistProvider>
                <Head>
                  <title>Won Games</title>
                  <link rel="shortcut icon" href="/img/icon-512.png" />
                  <link rel="apple-touch-icon" href="/img/icon-512.png" />
                  <link rel="manifest" href="/manifest.json" />
                  <meta
                    name="description"
                    content="A store made by gamers to gamers"
                  />
                </Head>
                <DefaultSeo {...SEO} />
                <GlobalStyles />
                <Component {...pageProps} />
              </WishlistProvider>
            </CartProvider>
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
      <ProgressBar
        color="#F231A5"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
      />
    </>
  )
}

export default App
