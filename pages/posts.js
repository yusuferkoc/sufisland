import { Container, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { PostGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import beg from '../public/static/images/beg.jpeg'
import cv from '../public/static/images/yecv.png'
import resume from '../public/static/images/erkoc_yusuf.pdf'

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <PostGridItem
              id="moi"
              title="münacaat"
              thumbnail={beg}
            ></PostGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              bir lorem ipsum şablonu olarak ismet özel
            </Text>
          </Section>
          <Section delay={0.3}>
            <PostGridItem id="cv" title="Resume" thumbnail={cv}></PostGridItem>
            <a href='resume' download={resume} fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              .şunlar bunlar
            </a>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts
