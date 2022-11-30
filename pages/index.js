import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  Link,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import {IoLogoTwitter , IoLogoGithub} from "react-icons/io5"
import { GridItem } from '../components/grid-item'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          p={2}
          mt={6}
          borderRadius={'lg'}
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          align="center"
        >
          hi im sufi developer from vibez
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant="page-title">
                 yusuf erkoc
            </Heading>
            <p>verbal terrorist ( thinker / developer / designer )</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box>
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/sufi.jpeg"
                alt="pfp"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            sufi
          </Heading>
          <Paragraph>
            yusuf `sufi` erkoc digital crafter based in Konya for everywhere
            sufi work as frontend and smart contract developer
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Konya.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Completedo lycee
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Vilaxe works
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            fidelio corvo
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            i Love
          </Heading>
          <Paragraph>art,music,3D models,photo, fuji, sony</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            i train
          </Heading>
          <Paragraph>art,music,3D models,photo, fuji, sony</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            i will
          </Heading>
          <Paragraph>art,music,3D models,photo, fuji, sony</Paragraph>
          <Paragraph>art,music,3D models,photo, fuji, sony</Paragraph>
          <Paragraph>art,music,3D models,photo, fuji, sony</Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant={"section-title"}>
            On The Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/yusuferkoc" target="_blank">
                <Button variant="ghost" colorScheme={"purple"} leftIcon={<Icon as={IoLogoGithub}/>}>@yusuferkoc</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/yusuferkoc" target="_blank">
                <Button variant="ghost" colorScheme={"purple"} leftIcon={<Icon as={IoLogoTwitter}/>}>@yusuferkoc</Button>
              </Link>
            </ListItem>
            
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
