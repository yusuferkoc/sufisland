import { Container, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbContract from '../public/static/images/Contr`Act.png'
import Glas from '../public/static/images/glas.png'
import Layout from '../components/layouts/article'
import sufisland from '../public/static/images/sufisland.png'
import comp from '../public/static/images/dao.png'
import f1 from '../public/static/images/1.png'
import t1 from '../public/static/images/t1.png'
import pdf from '../public/static/images/p.gif'
import tn from '../public/static/images/tn.gif'




const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="swapper"
              title="Swapper"
              thumbnail={thumbContract}
            ></WorkGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              Crypto integrations at smart contract level.
            </Text>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="glas"
              title="Glas"
              thumbnail={Glas}
            ></WorkGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              A tool that creates a stylish code preview.
            </Text>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="blog"
              title="Blog"
              thumbnail={sufisland}
            ></WorkGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              A ready-made react template to create a personal website.
            </Text>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="FlashChat"
              title="FlashChat"
              thumbnail={f1}
            ></WorkGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              iOS chat app 
            </Text>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="TechNews"
              title="TechNews"
              thumbnail={tn}
            ></WorkGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
            Hacker News stream app
            </Text>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="PDFReader"
              title="PDFReader"
              thumbnail={pdf}
            ></WorkGridItem>
            <Text fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              Swift UI PDF Reader app
            </Text>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works


