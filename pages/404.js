import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Box mt={150}>
        <Heading
          as="h1"
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          not found :(
        </Heading>
        <Text fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}>
          the page youre looking for was not found
        </Text>
      </Box>

      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button
            colorScheme="teal"
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Anasayfaya Dön
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
