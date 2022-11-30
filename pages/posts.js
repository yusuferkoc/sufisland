import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbGov from "../public/static/images/ac.jpg"
 
const Posts = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Last Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mb="50">
          <GridItem
            title="7 defa düşüp 8 defa kalkmak - Ahmet Çığşar"
            thumbnail={thumbGov}
            href="https://medium.com/@ahmetcigsar/yedi-defa-d%C3%BC%C5%9F%C3%BCp-sekiz-defa-kalkmak-e908f5560429"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts