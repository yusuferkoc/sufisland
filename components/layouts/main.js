import { Box, Container } from '@chakra-ui/react'
import { noSSR } from 'next/dynamic'
import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>sufisland </title>
      </Head>
      <NoSsr>
    <Navbar path={router.asPath}/>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      </NoSsr>
    </Box>

  )
}

export default Main