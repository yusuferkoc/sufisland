import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  ;<ColorModeScript initialColorMode={theme.config.initialColorMode} />
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.router} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website
